const useGetDataForAddJob = () => {
  const validationRule = [
    {
      // required: true,
      // message: "Field is required",
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
      id: "department",
      label: "Department",
      rule: validationRule,
      placeholder: "Department",
      type: "input",
    },
    {
      id: "location",
      label: "Location",
      rule: validationRule,
      placeholder: "Where?",
      type: "input",
    },
    {
      id: "type",
      label: "Employment Type",
      rule: validationRule,
      placeholder: "Select Type",
      type: "select",
    },
    {
      id: "description",
      label: "Job Description",
      rule: validationRule,
      placeholder: "Write Description",
      type: "textarea",
    },
  ];
  return {
    formItems,
  };
};

export default useGetDataForAddJob;
