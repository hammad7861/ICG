const useGetDataForAddEvent = () => {
  const validationRule = [
    {
      required: true,
      message: "Field is required",
    },
  ];
  const formItems = [
    {
      id: "eventName",
      label: "Event Name",
      rule: validationRule,
      placeholder: "Enter Event Name",
      type: "input",
    },
    {
      id: "eventDescription",
      label: "Event Description",
      rule: validationRule,
      placeholder: "Description",
      type: "textarea",
    },
  ];
  const formItems2 = [
    {
      id: 'eventStatus',
      label: 'Event Status',
      rule: validationRule,
      placeholder: 'Select Status',
      type: 'select',
    },
    {
      id: 'comments',
      label: 'Comments',
      rule: validationRule,
      placeholder: '',
      type: 'input',
    },
  ];
  return {
    formItems,
    formItems2,
    validationRule,
  };
};

export default useGetDataForAddEvent;
