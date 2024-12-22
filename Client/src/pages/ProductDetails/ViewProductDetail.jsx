import Heading from "../../components/ui/Heading";
import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import InputUpload from "../../components/ui/InputUpload";
import AntdSelect from "../../components/ui/AntdSelect";
import { Form, message } from "antd";
import FormInput from "../../components/ui/FormInput";
import useGetDataForAddProduct from "../../Hooks/ProductDetails/useGetDataForAddProduct";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteProduct,
  editProduct,
  viewProduct,
} from "../../services/api/product";
import CustomDragger from "../../components/ui/CustomDragger";
import Switch from "../../components/ui/Switch";
const ViewProductDetail = () => {
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [publish, setPublish] = useState(false);
  const { formItems } = useGetDataForAddProduct();
  const { id: productId } = useParams();
  const { data, isPending } = useQuery({
    queryKey: ["view-product-detail"],
    queryFn: () => viewProduct(productId),
  });

  const { mutate, isPending: editPending } = useMutation({
    mutationKey: ["add-product"],
    mutationFn: (Data) => editProduct(Data, publish, productId),
    onSuccess: (Data) => {
      message.success(Data.message);
      setIsEdit(false);
    },
  });
  const { mutate: deleteItem, isPending: deletePending } = useMutation({
    mutationKey: ["add-product"],
    mutationFn: () => deleteProduct(productId),
    onSuccess: (Data) => {
      message.success(Data.message);
      navigate(`/product-details`);
    },
  });
  useEffect(() => {
    if (!isPending && data) {
      form.setFieldsValue({
        casNo: data?.cas_no,
        chemicalName: data?.chemical_name,
        name: data?.name,
        categoryName: data?.category_name,
        industryName: data?.industry_name,
        molecularFormula: data?.molecular_formula,
        molecularWeight: data?.molecular_weight,
        form: data?.form,
        details: data?.details,
        bannerImage: data?.banner,
        ...(isEdit
          ? {
              MSDS: data?.MSDS,
              TDS: data?.TDS,
            }
          : {
              MSDS: data?.MSDS?.split("/")?.at(-1),
              TDS: data?.TDS.split("/")?.at(-1),
            }),
      });
    }
    setPublish(data?.published);
  }, [data, form, isEdit, isPending, productId]);

  if (isPending) {
    return "...Loading";
  }

  return (
    <div className="child-container !mb-[34px] pb-[34px]">
      <Heading className="">Product Information</Heading>

      <Form
        form={form}
        className="pt-[40px] !w-full"
        onFinish={(values) => {
          if (!isEdit) {
            return setIsEdit(true);
          }
          mutate(values);
        }}
        key={data}
      >
        <Form.Item name="bannerImage" valuePropName="fileList">
          <CustomDragger image={data?.banner} form={form} isEdit={isEdit} />
        </Form.Item>
        {formItems.map((item, index) => {
          return (
            <div key={index} className="w-full flex" id="add-product">
              <h1 className="text-[24px] font-medium  flex items-center w-[400px]  text-[#023B3B] h-[46px]">
                {item.label}:
              </h1>
              {item.type === "upload" && isEdit ? (
                <InputUpload
                  rules={item.rule}
                  name={item.id}
                  isEdit={isEdit}
                  placeholder={item.placeholder}
                  form={form}
                  defaultValue={item.id === "MSDS" ? data?.MSDS : data?.TDS}
                />
              ) : item.type === "select" && isEdit ? (
                <Form.Item name={item.id} rules={item.rule} className="w-full">
                  <AntdSelect
                    background={"#FFF"}
                    options={[
                      {
                        label: "Antioxidants",
                        value: "Antioxidants",
                      },
                      {
                        label: "HALS",
                        value: "HALS",
                      },
                      {
                        label: "UB Absorber",
                        value: "UB Absorber",
                      },
                      {
                        label: "Optical Brightener",
                        value: "Optical Brightener",
                      },
                      {
                        label: "Flame Retardants",
                        value: "Flame Retardants",
                      },
                      {
                        label: "Pigments and Dyes",
                        value: "Pigments and Dyes",
                      },
                      {
                        label: "Antiblocks",
                        value: "Antiblocks",
                      },
                      {
                        label: "Ploymers Processing",
                        value: "Ploymers Processing",
                      },
                      {
                        label: "Additives",
                        value: "Additives",
                      },
                      {
                        label: "Ploymers and Resins",
                        value: "Ploymers and Resins",
                      },
                      {
                        label: "Masterbatches",
                        value: "Masterbatches",
                      },
                      {
                        label: "Plasticizers",
                        value: "Plasticizers",
                      },
                    ]}
                    defaultValue={data?.industry_name}
                    className={
                      "!bg-transparent  urbanist-regular !border !border-black  !h-[46px]"
                    }
                    disable={!isEdit}
                    placeholder={item.placeholder}
                    form={form}
                  />
                </Form.Item>
              ) : (
                <FormInput
                  name={item.id}
                  rules={item.rule}
                  placeholder={item.placeholder}
                  disable={!isEdit}
                  className={
                    "text-[14px] text-[#6D7D93]  placeholder:text-[#6D7D93] urbanist-regular"
                  }
                />
              )}
            </div>
          );
        })}
        {isEdit && (
          <div className="flex items-center ">
            <h1 className="text-[24px] col-span-1 font-medium w-[400px]   text-[#023B3B] h-[46px]">
              Publish
            </h1>
            <div className="w-full">
              <Switch
                checked={publish}
                onChange={(checked) => {
                  setPublish(checked);
                }}
              />
            </div>
          </div>
        )}
        <div className="w-full flex mt-[30px] justify-end gap-x-[9px]">
          <Button
            onClick={() => {
              deleteItem();
            }}
            isLoading={deletePending}
            className="btn-red !h-[46px] w-[150px] flex justify-center"
          >
            Delete
          </Button>
          <Button
            htmlType="submit"
            isLoading={editPending}
            className="btn-green !h-[46px] w-[150px] flex justify-center"
          >
            Edit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ViewProductDetail;
