import { useNavigate } from "react-router-dom";
import Plus from "../../assets/svgs/Plus";
import AntdSelect from "../../components/ui/AntdSelect";
import AntdTable from "../../components/ui/AntdTable";
import Button from "../../components/ui/Button";
import Heading from "../../components/ui/Heading";
import SearchInput from "../../components/ui/SearchInput";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getEvents } from "../../services/api/event";

const EventDetails = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      key: "end_date",
    },
    {
      title: <span style={{ color: "#7C848D" }}>Status</span>,
      dataIndex: "status",
      key: "status",
      align: "center",
      render: () => {
        return (
          <div className="w-full flex justify-center">
            <div
              style={{
                background: "rgba(101, 255, 66, 0.20)",
                padding: "3px 20px 3px 22px",
              }}
              className={`rounded-[30px] w-[75px] text-[#A6CE38] text-[10px] text-center`}
            >
              Active
            </div>
          </div>
        );
      },
    },
    {
      title: <div className="text-center">Details</div>,
      render: ({ _id }) => {
        return (
          <div
            onClick={() => {
              navigate(`/event-details/${_id}`);
            }}
            className="underline cursor-pointer text-center"
          >
            View Details
          </div>
        );
      },
    },
  ];
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const { data, isPending, isFetching } = useQuery({
    queryKey: ["get-events", page, limit],
    queryFn: () => getEvents(page, limit),
  });
  return (
    <div className="child-container">
      <Heading className="">Event Details</Heading>
      <div className="mt-[25px] flex items-center justify-between">
        <div className="flex items-center gap-x-[17px]">
          <div className="flex flex-col">
            <span className="invisible">Date</span>
            <SearchInput className={"w-[502.683px]"} onClickSearch={() => {}} />
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
              navigate("/event-details/add-event");
            }}
          >
            <Plus /> Add Event
          </Button>
        </div>
      </div>
      <div className="w-full mt-[25px]">
        <AntdTable
          dataSource={data?.events ?? []}
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

export default EventDetails;
