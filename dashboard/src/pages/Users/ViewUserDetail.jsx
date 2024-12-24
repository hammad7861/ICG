import Heading from "../../components/ui/Heading";
import { useEffect } from "react";
import Button from "../../components/ui/Button";
import InputUpload from "../../components/ui/InputUpload";
import AntdSelect from "../../components/ui/AntdSelect";
import { Form, message } from "antd";
import FormInput from "../../components/ui/FormInput";
import useGetDataForAddUser from "../../Hooks/UserDetails/useGetDataForAddUser";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { deleteUser, viewUser } from "../../services/api/user";
import CustomDragger from "../../components/ui/CustomDragger";
const ViewUserDetail = () => {
	const navigate = useNavigate();
	const [form] = Form.useForm();
	const { formItems } = useGetDataForAddUser(true);
	const { id: userId } = useParams();
	const { data, isPending } = useQuery({
		queryKey: ["view-user-detail"],
		queryFn: () => viewUser(userId),
	});

	const { mutate: deleteItem, isPending: deletePending } = useMutation({
		mutationKey: ["add-user"],
		mutationFn: () => deleteUser(userId),
		onSuccess: (Data) => {
			message.success(Data.message);
			navigate(`/user-details`);
		},
	});
	useEffect(() => {
		if (!isPending && data) {
			form.setFieldsValue({
				name: data?.name,
				email: data?.email,
				profileImage: data?.profileImage,
			});
		}
	}, [data, form, isPending, userId]);

	if (isPending) {
		return "...Loading";
	}

	return (
		<div className="child-container !mb-[34px] pb-[34px]">
			<Heading className="">User Information</Heading>

			<Form
				form={form}
				className="pt-[40px] !w-full"
				key={data}>
				<Form.Item
					name="profileImage"
					valuePropName="fileList">
					<CustomDragger
						image={data?.profileImage}
						form={form}
						isEdit={false}
					/>
				</Form.Item>
				{formItems.map((item, index) => {
					return (
						<div
							key={index}
							className="w-full flex"
							id="add-user">
							<h1 className="text-[24px] font-medium  flex items-center w-[400px]  text-[#023B3B] h-[46px]">
								{item.label}:
							</h1>
							{item.type === "upload" ? (
								<InputUpload
									rules={item.rule}
									name={item.id}
									isEdit={false}
									placeholder={item.placeholder}
									form={form}
									defaultValue={item.id === "MSDS" ? data?.MSDS : data?.TDS}
								/>
							) : item.type === "select" ? (
								<Form.Item
									name={item.id}
									rules={item.rule}
									className="w-full">
									<AntdSelect
										background={"#FFF"}
										options={[]}
										defaultValue={data?.industry_name}
										className={
											"!bg-transparent  urbanist-regular !border !border-black  !h-[46px]"
										}
										disable={true}
										placeholder={item.placeholder}
										form={form}
									/>
								</Form.Item>
							) : (
								<FormInput
									name={item.id}
									rules={item.rule}
									placeholder={item.placeholder}
									disable={true}
									className={
										"text-[14px] text-[#6D7D93]  placeholder:text-[#6D7D93] urbanist-regular"
									}
								/>
							)}
						</div>
					);
				})}
				<div className="w-full flex mt-[30px] justify-end gap-x-[9px]">
					<Button
						onClick={() => {
							deleteItem();
						}}
						isLoading={deletePending}
						className="btn-red !h-[46px] w-[150px] flex justify-center">
						Delete
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default ViewUserDetail;
