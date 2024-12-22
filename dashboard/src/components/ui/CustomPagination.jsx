import { Select } from 'antd';
import LeftOutlined from '../../assets/svgs/LeftOutlined';
import RightOutlined from '../../assets/svgs/RightOutlined';

const CustomPagination = ({ totalPages, setPage, page, limit, setLimit }) => {
  const handleRowsPerPageChange = (value) => {
    setPage(1);
    setLimit(value);
  };

  const handlePageChange = (direction) => {
    const newPage = direction === 'prev' ? page - 1 : page + 1;
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div
      id='table-pagination'
      className='text-[#737373] text-[10px] w-full flex justify-end mt-[22px]'
    >
      <div className='flex items-center gap-x-[4px]'>
        <div className='flex items-center'>
          <p>Rows per page:</p>
          <Select
            options={[
              { label: '5', value: 5 },
              { label: '10', value: 10 },
              { label: '15', value: 15 },
              { label: '20', value: 20 },
            ]}
            defaultValue={limit}
            onChange={handleRowsPerPageChange} // Handle dropdown selection
            suffixIcon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='7'
                height='6'
                viewBox='0 0 7 6'
                fill='none'
              >
                <path
                  d='M3.28769 5.02246L0.531326 0.248304L6.04405 0.248304L3.28769 5.02246Z'
                  fill='#504E4E'
                />
              </svg>
            }
            className='!outline-none !focus-within:none !hover:border-none !border:none'
          />
        </div>
        <div className='flex items-center  gap-x-[26px]'>
          <p>
            {page} - {totalPages ?? 1}
          </p>
          <div className='flex gap-x-[25px]'>
            <button
              onClick={() => handlePageChange('prev')}
              disabled={page === 1}
            >
              <LeftOutlined />
            </button>
            <button
              onClick={() => handlePageChange('next')}
              disabled={page === totalPages}
            >
              <RightOutlined />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPagination;
