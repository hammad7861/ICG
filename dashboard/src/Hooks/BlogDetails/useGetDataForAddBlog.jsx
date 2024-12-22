const useGetDataForAddBlog = () => {
  const validationRule = [
    {
      required: true,
      message: "Field is required",
    },
  ];
  const formItems = [
    {
      id: "title",
      label: "Title",
      rule: validationRule,
      placeholder: "Title Name",
      type: "input",
    },
    {
      id: "author",
      label: "Author",
      rule: validationRule,
      placeholder: "Author Name",
      type: "input",
    },
    {
      id: "publishDate",
      label: "Publish Date",
      rule: validationRule,
      placeholder: "DD/MM/YYYY",
      type: "input",
    },
    {
      id: "blogCategory",
      label: "Category",
      rule: validationRule,
      placeholder: "Select Category",
      type: "select",
    },
    {
      id: "featuredImage",
      label: "Featured Image",
      placeholder: "Upload Attachment",
      type: "",
    },
  ];

  const formItems2 = [
    {
      id: "tags",
      label: "Tags / Keywords",
      rule: validationRule,
      placeholder: "tags",
      type: "input",
    },
    {
      id: "blogContent",
      label: "Blog Content",
      rule: validationRule,
      placeholder: "Write here",
      type: "textarea",
    },
    {
      id: "sharing",
      label: "Allow Sharing",
      rule: validationRule,
      placeholder: "Write here",
      type: "switch",
    },
    {
      id: "comments",
      label: "Allow Comments",
      rule: validationRule,
      placeholder: "Write here",
      type: "switch",
    },
  ];
  return {
    formItems,
    formItems2,
  };
};

export default useGetDataForAddBlog;
