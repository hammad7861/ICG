const useGetDataForAddUser = (isViewMode = false) => {
	const validationRule = [
		{
			required: true,
			message: "Field is required",
		},
	];
	const formItems = [
		{
			id: "name",
			label: "Name",
			rule: validationRule,
			placeholder: "John Doe",
			type: "input",
		},
		{
			id: "email",
			label: "Email",
			rule: validationRule,
			placeholder: "email@email.com",
			type: "input",
		},
		...(!isViewMode
			? [
					{
						id: "password",
						label: "Password",
						rule: validationRule,
						placeholder: "********",
						type: "input",
					},
			  ]
			: []),
	];
	return {
		formItems,
	};
};

export default useGetDataForAddUser;
