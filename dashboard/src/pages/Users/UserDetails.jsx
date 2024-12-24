import { useNavigate } from "react-router-dom";
import Plus from "../../assets/svgs/Plus";
import AntdSelect from "../../components/ui/AntdSelect";
import AntdTable from "../../components/ui/AntdTable";
import Button from "../../components/ui/Button";
import Heading from "../../components/ui/Heading";
import SearchInput from "../../components/ui/SearchInput";
import { getUsers } from "../../services/api/user";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const UsersDetails = () => {
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(5);
	const { data, isPending, isFetching } = useQuery({
		queryKey: ["get-users", page, limit],
		queryFn: () => getUsers(page, limit),
	});

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
		},
		{
			title: <div className="text-center">Details</div>,
			render: ({ _id }) => {
				return (
					<div
						onClick={() => {
							navigate(`/user-details/${_id}`);
						}}
						className="underline cursor-pointer text-center">
						View Details
					</div>
				);
			},
		},
	];
	const navigate = useNavigate();
	return (
		<div className="child-container">
			<Heading className="">Users</Heading>
			<div className="mt-[25px] flex items-center justify-between">
				<div className="flex items-center gap-x-[17px]">
					<div className="flex flex-col">
						<span className="invisible">Date</span>
						<SearchInput
							className={"w-[502.683px]"}
							onClickSearch={() => {}}
						/>
					</div>
					<div className="flex flex-col">
						<span className="">Date</span>
						<AntdSelect
							className={"!text-[#727272] poppins-regular "}
							options={[
								{
									label: "In Past 30 days",
									key: "30Days",
								},
								{
									label: "In Past 60 days",
									key: "60Days",
								},
							]}
						/>
					</div>
				</div>
				<div className="">
					<span className=" invisible">Date</span>

					<Button
						className="btn-green"
						onClick={() => {
							navigate("/user-details/add-user");
						}}>
						<Plus /> Add User
					</Button>
				</div>
			</div>
			<div className="w-full mt-[25px]">
				<AntdTable
					dataSource={data?.users ?? []}
					columns={columns}
					setPage={setPage}
					page={page}
					limit={limit}
					setLimit={setLimit}
					totalPages={data?.totalPages}
					isLoading={isPending || isFetching}
				/>
			</div>
			<div className="w-full flex mt-[80px] justify-end gap-x-[9px]">
				<Button className="btn-red h-[40px] w-[150px] flex justify-center">
					Delete
				</Button>
				<Button className="btn-green h-[40px] w-[150px] flex justify-center">
					Add
				</Button>
			</div>
		</div>
	);
};

export default UsersDetails;
