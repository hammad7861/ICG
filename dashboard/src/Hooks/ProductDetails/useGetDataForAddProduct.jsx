const useGetDataForAddProduct = () => {
  const validationRule = [
    // {
    //   required: true,
    //   message: 'Field is required',
    // },
  ];
  const formItems = [
    {
      id: "casNo",
      label: "CAS No",
      // rule: validationRule,
      placeholder: "Enter CAS NO (Optional)",
      type: "input",
    },
    {
      id: "chemicalName",
      label: "Chemical Name",
      // rule: validationRule,
      placeholder: "Enter Chemical Name",
      type: "input",
    },
    {
      id: "name",
      label: "Product Name",
      // rule: validationRule,
      placeholder: "Enter Product Name",
      type: "input",
    },
    {
      id: "categoryName",
      label: "Category Name",
      // rule: validationRule,
      placeholder: "Enter Category Name",
      type: "input",
    },
    {
      id: "industryName",
      label: "Industry Name",
      rule: validationRule,
      placeholder: "Select Industry",
      type: "select",
    },
    {
      id: "molecularFormula",
      label: "Molecular Formula",
      rule: validationRule,
      placeholder: "Enter Molecular Formula",
      type: "input",
    },
    {
      id: "molecularWeight",
      label: "Molecular Weight",
      rule: validationRule,
      placeholder: "Enter Molecular Weight",
      type: "input",
    },
    {
      id: "form",
      label: "Product Form",
      rule: validationRule,
      placeholder: "Enter Product Form",
      type: "input",
    },
    {
      id: "details",
      label: "Details",
      rule: validationRule,
      placeholder: "Enter Form",
      type: "input",
    },
    {
      id: "MSDS",
      label: "MSDS",
      rule: validationRule,
      placeholder: 'Enter MSDS',
      type: 'upload',
    },
    {
      id: "TDS",
      label: "TDS",
      rule: validationRule,
      placeholder: 'Enter TDS',
      type: 'upload',
    },
  ];
  return {
    formItems,
  };
};

export default useGetDataForAddProduct;
