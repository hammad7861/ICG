const useGetDataForAddArticle = () => {
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
      id: "articleCategory",
      label: "Category",
      rule: validationRule,
      placeholder: "Select Category",
      type: "select",
    },
    {
      id: "attachment",
      label: "Attachment (Optional)",
      placeholder: "Upload Attachment",
      type: "upload",
    },
  ];
  const formItems2 = [
    {
      id: "category",
      label: "Category",
      rule: validationRule,
      placeholder: "Name",
      type: "input",
    },
    {
      id: "tags",
      label: "Tags / Keywords",
      rule: validationRule,
      placeholder: "tags",
      type: "input",
    },
    {
      id: "summary",
      label: "Summary",
      rule: validationRule,
      placeholder: "Summary",
      type: "input",
    },
    {
      id: "description",
      label: "Description",
      rule: validationRule,
      placeholder: "Write here",
      type: "textarea",
    },
  ];
  return {
    formItems,
    formItems2,
    validationRule,
  };
};

export default useGetDataForAddArticle;
