const useGetDataForAddContent = () => {
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
      id: "type",
      label: "type",
      rule: validationRule,
      placeholder: "Select Content Type",
      type: "select",
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
      id: "summary",
      label: "Summary",
      rule: validationRule,
      placeholder: "Summary",
      type: "input",
    },
    {
      id: "content",
      label: "Article Content",
      rule: validationRule,
      type: "richtext",
    },
  ];
  return {
    formItems,
    formItems2,
    validationRule,
  };
};

export default useGetDataForAddContent;
