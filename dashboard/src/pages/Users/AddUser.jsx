import { Form, message } from "antd";
import Heading from "../../components/ui/Heading";
import CustomDragger from "../../components/ui/CustomDragger";
import FormInput from "../../components/ui/FormInput";
import useGetDataForAddUser from "../../Hooks/UserDetails/useGetDataForAddUser";
import AntdSelect from "../../components/ui/AntdSelect";
import InputUpload from "../../components/ui/InputUpload";
import FormTextArea from "../../components/ui/FormTextArea";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { addUser } from "../../services/api/user";
import Button from "../../components/ui/Button";

const AddUser = () => {
	const [form] = Form.useForm();
	const image = Form.useWatch("image", form);
	const { formItems } = useGetDataForAddUser();
	const navigate = useNavigate();
	const { mutate, isPending } = useMutation({
		mutationKey: ["add-product"],
		mutationFn: (Data) => addUser(Data),
		onSuccess: (Data) => {
			message.success(Data.message);
			navigate(`/product-details`);
		},
	});

	return (
		<div className="child-container">
			<Heading>Users</Heading>
			<Form
				form={form}
				className="pt-[40px] !w-full"
				onFinish={(values) => {
					mutate(values);
				}}>
				<Form.Item
					name="profileImage"
					valuePropName="fileList">
					<CustomDragger
						form={form}
						image={image}
					/>
				</Form.Item>

				{formItems.map((item, index) => {
					return (
						<div
							key={index}
							className="w-full flex"
							id="add-job">
							<h1 className="text-[24px] font-medium  flex items-center w-[400px] col-span-1 text-[#023B3B] h-[46px]">
								{item.label}:
							</h1>
							{item.type === "input" ? (
								<FormInput
									name={item.id}
									rules={item.rule}
									placeholder={item.placeholder}
									className={
										"text-[14px] text-[#6D7D93] placeholder:text-[#6D7D93] urbanist-regular"
									}
								/>
							) : item.type === "select" ? (
								<AntdSelect
									background={"#FFF"}
									options={[{}]}
									className={
										"!bg-transparent  urbanist-regular !border !border-black !mb-[20px] !h-[46px]"
									}
									placeholder={item.placeholder}
								/>
							) : item.type === "textarea" ? (
								<FormTextArea
									name={item.id}
									rules={item.rule}
									placeholder={item.placeholder}
									className="text-[14px] text-[#6D7D93] placeholder:text-[#6D7D93] urbanist-regular"
								/>
							) : (
								<InputUpload
									rules={item.rule}
									name={item.id}
								/>
							)}
						</div>
					);
				})}
				<div className="w-full flex mt-[30px] justify-end gap-x-[9px]">
					<Button
						htmlType="submit"
						isLoading={isPending}
						className="btn-green !h-[46px] w-[150px] flex justify-center">
						Add
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default AddUser;
