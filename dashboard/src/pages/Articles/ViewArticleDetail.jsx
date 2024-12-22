import Heading from "../../components/ui/Heading";
import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import InputUpload from "../../components/ui/InputUpload";
import AntdSelect from "../../components/ui/AntdSelect";
import { Form, message } from "antd";
import FormInput from "../../components/ui/FormInput";
import useGetDataForAddArticle from "../../Hooks/ArticleDetails/useGetDataForAddArticle";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteArticle,
  editArticle,
  viewArticle,
} from "../../services/api/article";
import CustomDragger from "../../components/ui/CustomDragger";
import FormInputs from "../../components/ui/FormInputs";
const ViewArticleDetail = () => {
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { formItems, formItems2 } = useGetDataForAddArticle();
  const { id: articleId } = useParams();
  const { data, isPending } = useQuery({
    queryKey: ["view-article-detail"],
    queryFn: () => viewArticle(articleId),
  });
  const { mutate, isPending: editPending } = useMutation({
    mutationKey: ["add-article"],
    mutationFn: (Data) => editArticle(Data, articleId),
    onSuccess: (Data) => {
      message.success(Data.message);
      setIsEdit(false);
    },
  });
  const { mutate: deleteItem, isPending: deletePending } = useMutation({
    mutationKey: ["add-article"],
    mutationFn: () => deleteArticle(articleId),
    onSuccess: (Data) => {
      message.success(Data.message);
      navigate(`/article-details`);
    },
  });
  useEffect(() => {
    if (!isPending && data) {
      form.setFieldsValue({
        title: data?.title,
        author: data?.author,
        publishDate: data?.publish_date,
        articleCategory: data?.article_category,
        category: data?.content_category,
        tags: data?.tags,
        summary: data?.summary,
        description: data?.description,
        ...(isEdit
          ? {
              attachment: data?.attachment,
            }
          : {
              attachment: data?.attachment?.split("/")?.at(-1),
            }),
      });
    }
  }, [data, form, isEdit, isPending]);

  if (isPending) {
    return "...Loading";
  }

  return (
    <div className="child-container !mb-[34px] pb-[34px]">
      <Heading className="">Article Information</Heading>

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
            <div key={index} className="w-full flex" id="add-article">
              <h1 className="text-[24px] font-medium  flex items-center w-[400px] col-span-1 text-[#023B3B] h-[46px]">
                {item.label}:
              </h1>
              {item.type === "upload" && isEdit ? (
                <InputUpload
                  rules={item.rule}
                  name={item.id}
                  disable={!isEdit}
                  placeholder={item.placeholder}
                  form={form}
                  defaultValue={item.id === "attachment" && data?.attachment}
                />
              ) : item.type === "select" && isEdit ? (
                <Form.Item name={item.id} rules={item.rule} className="w-full">
                  <AntdSelect
                    background={"#FFF"}
                    options={[{ label: "Option 1", value: "Option" }]}
                    className={
                      "!bg-transparent  urbanist-regular !border !border-black  !h-[46px]"
                    }
                    disable={!isEdit}
                    placeholder={item.placeholder}
                    form={form}
                    defaultValue={data?.article_category}
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
                  form={form}
                />
              )}
            </div>
          );
        })}
        <Heading className="pb-4">Content & Details</Heading>
        {formItems2.map((item, index) => {
          return (
            <div key={index} className="w-full flex" id="add-job">
              <h1 className="text-[24px] font-medium  flex items-center w-[400px] col-span-1 text-[#023B3B] h-[46px]">
                {item.label}:
              </h1>
              <FormInputs item={item} disabled={!isEdit} />
            </div>
          );
        })}
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

export default ViewArticleDetail;
