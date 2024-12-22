import { Form, message } from "antd";
import Heading from "../../components/ui/Heading";
import CustomDragger from "../../components/ui/CustomDragger";
import FormInput from "../../components/ui/FormInput";
import useGetDataForAddProduct from "../../Hooks/ProductDetails/useGetDataForAddProduct";
import AntdSelect from "../../components/ui/AntdSelect";
import InputUpload from "../../components/ui/InputUpload";
import Button from "../../components/ui/Button";
import { useMutation } from "@tanstack/react-query";
import { addProduct } from "../../services/api/product";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [form] = Form.useForm();
  const [publish, setPublish] = useState(false);
  const image = Form.useWatch("image", form);
  const { formItems } = useGetDataForAddProduct();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationKey: ["add-product"],
    mutationFn: (Data) => addProduct(Data, publish),
    onSuccess: (Data) => {
      message.success(Data.message);
      navigate(`/product-details`);
    },
  });
  return (
    <div className="child-container !pb-[34px] mb-[34px]">
      <Heading>Product Upload</Heading>
      <Form
        form={form}
        className="pt-[40px] !w-full"
        onFinish={(values) => {
          mutate(values);
        }}
      >
        <Form.Item name="bannerImage" valuePropName="fileList">
          <CustomDragger form={form} image={image} />
        </Form.Item>

        {formItems.map((item, index) => {
          return (
            <div key={index} className="w-full flex" id="add-product">
              <h1 className="text-[24px] font-medium  flex items-center w-[400px] col-span-1 text-[#023B3B] h-[46px]">
                {item.label}:
              </h1>
              {item.type === "input" ? (
                <FormInput
                  name={item.id}
                  rules={item.rule}
                  placeholder={item.placeholder}
                  className={
                    "text-[14px] text-[#6D7D93] placeholder:text-[#6D7D93] urbanist-regular"
                  }
                />
              ) : item.type === "select" ? (
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
                    className={
                      "!bg-transparent  urbanist-regular !border !border-black  !h-[46px]"
                    }
                    placeholder={item.placeholder}
                  />
                </Form.Item>
              ) : (
                <InputUpload rules={item.rule} name={item.id} />
              )}
            </div>
          );
        })}
        <div className="w-full flex mt-[30px] justify-end gap-x-[9px]">
          <Button className="btn-red !h-[46px] w-[150px] flex justify-center">
            Delete
          </Button>
          <Button
            htmlType="submit"
            isLoading={isPending}
            onClick={() => {
              setPublish(true);
            }}
            className="btn-red !h-[46px] w-[150px] !bg-[#1272E5] flex justify-center"
          >
            Add & Publish
          </Button>
          <Button
            htmlType="submit"
            isLoading={isPending}
            className="btn-green !h-[46px] w-[150px] flex justify-center"
          >
            Add
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddProduct;
