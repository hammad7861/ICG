import { Table } from "antd";
import "../../styles/table.css";

import CustomPagination from "./CustomPagination";
const AntdTable = ({
  dataSource,
  columns,
  setPage,
  page,
  limit,
  setLimit,
  totalPages,
  isLoading,
}) => {
  return (
    <div className="relative">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        loading={isLoading}
      />
      <CustomPagination
        setPage={setPage}
        page={page}
        limit={limit}
        setLimit={setLimit}
        totalPages={totalPages}
      />
    </div>
  );
};

export default AntdTable;
