const useGetDataForAddMediaAndNews = () => {
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
      placeholder: "Title",
      type: "input",
    },
    {
      id: "description",
      label: "Description",
      rule: validationRule,
      placeholder: "",
      type: "input",
    },
    {
      id: "publishDate",
      label: "Publish Date",
      rule: validationRule,
      placeholder: "",
      type: "input",
    },
    {
      id: "type",
      label: "Type",
      rule: validationRule,
      placeholder: "",
      type: "select",
      options: [
        {
          label: "Press Release",
          value: "Press Release",
        },
        {
          label: "News Announcement",
          value: "News Announcement",
        },
      ],
    },
  ];
  const formItems2 = [
    {
      id: "name",
      label: "Name",
      rule: validationRule,
      placeholder: "",
      type: "input",
    },
    {
      id: "email",
      label: "Email",
      rule: validationRule,
      placeholder: "",
      type: "input",
    },
    {
      id: "contact",
      label: "Contact",
      rule: validationRule,
      placeholder: "",
      type: "input",
    },
  ];
  return {
    formItems,
    formItems2,
    validationRule,
  };
};

export default useGetDataForAddMediaAndNews;
