const useGetDataForAddBrochure = () => {
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
      label: "Author/Creator",
      rule: validationRule,
      placeholder: "Auhtor Name",
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
      id: "category",
      label: "Category",
      rule: validationRule,
      placeholder: "Select Category",
      type: "select",
    },
    {
      id: "brochureAttachment",
      label: "Upload Brochure",
      rule: validationRule,
      placeholder: "Upload Attachment",
      type: "",
    },
  ];
  return {
    formItems,
  };
};

export default useGetDataForAddBrochure;
