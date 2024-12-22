import { useState } from "react";
import { Table, Alert, message } from "antd";
import { useCSVReader } from "react-papaparse";
import bulkAddProductValidationSchema from "../../utils/validation";
import Button from "../../components/ui/Button";
import { bulkAddProduct } from "../../services/api/product";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Switch from "../../components/ui/Switch";

const BulkAddProduct = () => {
  const { CSVReader } = useCSVReader();
  const [tableColumns, setTableColumns] = useState([]);
  const [validRows, setValidRows] = useState([]);
  const [invalidRows, setInvalidRows] = useState([]);
  const [isPublish, setIsPublish] = useState(false);

  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["add-products"],
    mutationFn: (products) => bulkAddProduct(products, isPublish),
    onSuccess: () => {
      message.success("Products uploaded successfully!");
      navigate("/product-details");
    },
    onError: (err) => {
      message.error(err?.message || "An error occurred while uploading.");
    },
  });

  const validateRows = async (rows) => {
    const valid = [];
    const invalid = [];

    for (const row of rows) {
      try {
        await bulkAddProductValidationSchema.validate(row, {
          abortEarly: false,
        });
        valid.push(row);
      } catch (err) {
        invalid.push({ ...row, errors: err.errors });
      }
    }

    return { valid, invalid };
  };

  const handleResults = async (results) => {
    if (!results || results.data.length === 0) {
      message.error("The file is empty or invalid.");
      return;
    }

    // Extract headers and map data
    const headers = results.data[0].map((header) => header.trim());
    const rows = results.data.slice(1).map((row, index) => {
      return headers.reduce(
        (acc, key, colIndex) => {
          acc[key] = row[colIndex];
          return acc;
        },
        { key: index + 1 }
      );
    });

    const { valid, invalid } = await validateRows(rows);

    // Update state with valid and invalid rows
    const columns = headers.map((key) => ({
      key,
      dataIndex: key,
      title: key.charAt(0).toUpperCase() + key.slice(1),
    }));

    setTableColumns(columns);
    setValidRows(valid);
    setInvalidRows(invalid);

    if (invalid.length > 0) {
      message.error("Some rows are invalid. Please review and fix them.");
    } else {
      message.success("All rows are valid. Ready to upload.");
    }
  };

  const handleSave = () => {
    if (invalidRows.length > 0) {
      message.error("Please fix all invalid rows before proceeding.");
      return;
    }
    mutate(validRows);
  };

  return (
    <div className="child-container !pb-[34px] mb-[34px]">
      <h1 className="text-[24px] font-medium mb-[20px]">Upload Products</h1>

      <CSVReader onUploadAccepted={handleResults}>
        {({ getRootProps }) => (
          <div className="h-[200px] flex items-center justify-center border border-dashed">
            <button
              {...getRootProps()}
              className="h-40 w-full max-w-xs mx-auto text-sm flex flex-col items-center justify-center gap-2"
            >
              <span className="font-semibold">Drag and drop a .csv file</span>
              <Button>Browse File</Button>
            </button>
          </div>
        )}
      </CSVReader>

      {validRows.length || invalidRows.length ? (
        <div className="space-y-6 mt-6">
          <Alert
            type={!invalidRows.length ? "success" : "error"}
            message={
              !invalidRows.length
                ? "All rows are valid. You can proceed to upload."
                : "Some rows are invalid. Please review them."
            }
            showIcon
          />

          <Table
            columns={tableColumns}
            dataSource={!invalidRows.length ? validRows : invalidRows}
            scroll={{ x: true }}
            pagination={{ pageSize: 10 }}
          />

          {!invalidRows.length && (
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-3">
                <label className="text-sm font-medium">
                  Publish after upload?
                </label>
                <Switch
                  checked={isPublish}
                  onChange={(checked) => setIsPublish(checked)}
                  disabled={isLoading}
                />
              </div>
              <Button
                onClick={handleSave}
                className="btn-green !h-[46px] w-[150px]"
                loading={isLoading}
              >
                Save Products
              </Button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default BulkAddProduct;
