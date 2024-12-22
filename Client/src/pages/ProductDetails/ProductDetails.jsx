import { useNavigate } from "react-router-dom";
import Plus from "../../assets/svgs/Plus";
import AntdSelect from "../../components/ui/AntdSelect";
import AntdTable from "../../components/ui/AntdTable";
import Button from "../../components/ui/Button";
import Heading from "../../components/ui/Heading";
import SearchInput from "../../components/ui/SearchInput";
import Switch from "../../components/ui/Switch";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProducts, publishProduct } from "../../services/api/product";
import { useState } from "react";
import { message } from "antd";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: ["publish-product"],
    mutationFn: (Data) => publishProduct(Data),
    onSuccess: ({ data }) => {
      message.success(data?.message);
    },
  });

  const columns = [
    {
      title: "CAS No",
      dataIndex: "cas_no",
      key: "cas_no",
    },
    {
      title: "Chemical Name",
      dataIndex: "chemical_name",
      key: "chemical_name",
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Industry Name",
      dataIndex: "industry_name",
      key: "industry_name",
    },
    {
      title: <div className="text-center">Details</div>,
      render: ({ _id }) => {
        return (
          <div
            onClick={() => {
              navigate(`/product-details/${_id}`);
            }}
            className="underline cursor-pointer text-center"
          >
            View Details
          </div>
        );
      },
    },
    {
      title: "Stocks Availability",
      render: ({ published, _id }) => {
        return (
          <Switch
            checked={published}
            onChange={(e) => {
              mutate({
                id: _id,
                published: e,
              });
            }}
          />
        );
      },
    },
  ];

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const { data, isPending, isFetching } = useQuery({
    queryKey: ["get-products", page, limit],
    queryFn: () => getProducts(page, limit),
  });

  return (
    <div className="child-container !mb-[34px]">
      <Heading className="">Product Details</Heading>
      <div className="mt-[25px] flex items-center justify-between">
        <div className="flex items-center gap-x-[17px]">
          <div className="flex flex-col">
            <span className="invisible">Date</span>
            <SearchInput className={"w-[502.683px]"} onClickSearch={() => {}} />
          </div>
          <div className="flex flex-col">
            <span className="">Date</span>
            <AntdSelect
              className={"!text-[#727272] poppins-regular "}
              options={[
                {
                  label: "In Past 30 days",
                  key: "30Days",
                },
                {
                  label: "In Past 60 days",
                  key: "60Days",
                },
              ]}
            />
          </div>
        </div>
        <div className="flex items-center gap-x-[17px]">
          <span className=" invisible">Date</span>
          <Button
            className="btn-green"
            onClick={() => {
              navigate("/product-details/bulk-add-product");
            }}
          >
            <Plus /> Bulk Add Product
          </Button>
          <Button
            className="btn-green"
            onClick={() => {
              navigate("/product-details/add-product");
            }}
          >
            <Plus /> Add Product
          </Button>
        </div>
      </div>
      <div className="w-full mt-[25px]">
        <AntdTable
          dataSource={data?.products ?? []}
          columns={columns}
          setPage={setPage}
          page={page}
          limit={limit}
          setLimit={setLimit}
          totalPages={data?.totalPages}
          isLoading={isPending || isFetching}
        />
      </div>
      <div className="w-full flex mt-[80px]  justify-end gap-x-[9px]">
        <Button className="btn-red !h-[46px] w-[150px] flex justify-center">
          Delete
        </Button>
        <Button className="btn-green !h-[46px] w-[150px] flex justify-center">
          Add
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
