import Heading from "../../components/ui/Heading";
import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import InputUpload from "../../components/ui/InputUpload";
import AntdSelect from "../../components/ui/AntdSelect";
import { Form, message } from "antd";
import FormInput from "../../components/ui/FormInput";
import useGetDataForAddBlog from "../../Hooks/BlogDetails/useGetDataForAddBlog";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBlog, editBlog, viewBlog } from "../../services/api/blog";
import CustomDragger from "../../components/ui/CustomDragger";
import Switch from "../../components/ui/Switch";
import FormInputs from "../../components/ui/FormInputs";
const ViewBlogDetail = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [form] = Form.useForm();
  const { formItems, formItems2 } = useGetDataForAddBlog();
  const { id: blogId } = useParams();
  const navigate = useNavigate();
  const [publish, setPublish] = useState(false);
  const { data, isPending } = useQuery({
    queryKey: ["view-blog-detail"],
    queryFn: () => viewBlog(blogId),
  });
  const { mutate, isPending: editPending } = useMutation({
    mutationKey: ["add-blog"],
    mutationFn: (Data) => editBlog(Data, publish, blogId),
    onSuccess: (Data) => {
      message.success(Data.message);
      setIsEdit(false);
    },
  });
  const { mutate: deleteItem, isPending: deletePending } = useMutation({
    mutationKey: ["add-blog"],
    mutationFn: () => deleteBlog(blogId),
    onSuccess: (Data) => {
      message.success(Data.message);
      navigate(`/product-details`);
    },
  });
  useEffect(() => {
    if (!isPending && data) {
      form.setFieldsValue({
        title: data?.title,
        author: data?.author,
        publishDate: data?.publish_date,
        blogCategory: data?.blog_category,
        blogContent: data?.contents,
        tags: data?.tags,
        sharing: data?.sharing,
        comments: data?.comments,
        featuredImage: data?.featured_image,
        bannerImage: data?.banner,
        ...(isEdit
          ? {
              featuredImage: data?.featured_image,
            }
          : {
              featuredImage: data?.featured_image?.split("/")?.at(-1),
            }),
      });
      setPublish(data?.published);
    }
  }, [data, form, isEdit, isPending]);

  if (isPending) {
    return "...Loading";
  }

  return (
    <div className="child-container !mb-[34px] pb-[34px]">
      <Heading className="">Blog Information</Heading>

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
            <div key={index} className="w-full flex" id="add-blog">
              <h1 className="text-[24px] font-medium  flex items-center w-[400px] col-span-1 text-[#023B3B] h-[46px]">
                {item.label}:
              </h1>
              {item.type === "upload" ? (
                <InputUpload
                  rules={item.rule}
                  name={item.id}
                  disable={!isEdit}
                  placeholder={item.placeholder}
                  form={form}
                />
              ) : item.type === "select" && isEdit ? (
                <Form.Item name={item.id} rules={item.rule} className="w-full">
                  <AntdSelect
                    background={"#FFF"}
                    options={[{}]}
                    className={
                      "!bg-transparent  urbanist-regular !border !border-black  !h-[46px]"
                    }
                    disable={!isEdit}
                    placeholder={item.placeholder}
                    form={form}
                  />
                </Form.Item>
              ) : item.type === "switch" ? (
                <Form.Item
                  name={item.id}
                  rules={item.rule}
                  valuePropName="checked"
                  className="w-full"
                >
                  <Switch />
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

export default ViewBlogDetail;
