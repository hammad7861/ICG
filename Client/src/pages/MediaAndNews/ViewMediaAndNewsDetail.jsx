import Heading from "../../components/ui/Heading";
import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import InputUpload from "../../components/ui/InputUpload";
import AntdSelect from "../../components/ui/AntdSelect";
import { Form, message } from "antd";
import FormInput from "../../components/ui/FormInput";
import useGetDataForAddMediaAndNews from "../../Hooks/MediaAndNewsDetails/useGetDataForAddMediaAndNews";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteMediaAndNews,
  editMediaAndNews,
  viewMediaAndNews,
} from "../../services/api/mediaAndNews";
import CustomDragger from "../../components/ui/CustomDragger";
import FormInputs from "../../components/ui/FormInputs";
import FormTextArea from "../../components/ui/FormTextArea";
const ViewMediaAndNewsDetail = () => {
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { formItems, formItems2, validationRule } =
    useGetDataForAddMediaAndNews();
  const type = Form.useWatch("type", form);
  const { id: mediaAndNewsId } = useParams();
  const { data, isPending } = useQuery({
    queryKey: ["view-mediaAndNews-detail"],
    queryFn: () => viewMediaAndNews(mediaAndNewsId),
  });

  const { mutate, isPending: editPending } = useMutation({
    mutationKey: ["add-mediaAndNews"],
    mutationFn: (Data) => editMediaAndNews(Data, mediaAndNewsId),
    onSuccess: (Data) => {
      message.success(Data.message);
      setIsEdit(false);
      navigate(`/mediaAndNews-details`);
    },
  });
  const { mutate: deleteItem, isPending: deletePending } = useMutation({
    mutationKey: ["add-mediaAndNews"],
    mutationFn: () => deleteMediaAndNews(mediaAndNewsId),
    onSuccess: (Data) => {
      message.success(Data.message);
      navigate(`/mediaAndNews-details`);
    },
  });
  useEffect(() => {
    if (!isPending && data) {
      form.setFieldsValue({
        title: data?.title,
        description: data?.description,
        publishDate: data?.publish_date,
        type: data?.type,
        name: data?.name,
        email: data?.email,
        contact: data?.contact,
        content: data?.content,
        bannerImage: data?.banner,
      });
    }
  }, [data, form, isEdit, isPending, mediaAndNewsId]);

  if (isPending) {
    return "...Loading";
  }

  return (
    <div className="child-container !mb-[34px] pb-[34px]">
      <Heading className="">Media And News</Heading>

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
            <div key={index} className="w-full flex" id="add-mediaAndNews">
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
                        label: "Press Release",
                        value: "Press Release",
                      },
                      {
                        label: "News Announcement",
                        value: "News Announcement",
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
        {type && (
          <div className="bg-[#EBFFFF] py-[20px]  px-[20px] w-full rounded-[20px]">
            <h1 className="text-[24px] font-medium  flex items-center w-[400px] col-span-1 text-[#023B3B] h-[46px]">
              {type === "Press Release" ? "Media Contact" : "Add your Content"}
            </h1>
            {type === "Press Release" ? (
              formItems2.map((item, index) => {
                return (
                  <div key={index} className="w-full flex" id="add-job">
                    <h1 className="text-[24px] font-medium  flex items-center w-[400px] col-span-1 text-[#023B3B] h-[46px]">
                      {item.label}:
                    </h1>
                    <FormInputs item={item} disabled={!isEdit} />
                  </div>
                );
              })
            ) : (
              <FormTextArea
                name="content"
                rules={validationRule}
                disabled={!isEdit}
                className="text-[14px] text-[#6D7D93] placeholder:text-[#6D7D93] urbanist-regular"
              />
            )}
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

export default ViewMediaAndNewsDetail;
