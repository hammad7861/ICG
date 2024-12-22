import { Input } from 'antd';
import SearchIcon from '../../assets/svgs/SearchIcon';

const SearchInput = ({ className, onClickSearch,placeholder }) => {
  return (
    <div
      id='search-input'
    >
      <Input
        onChange={() => {}}
        suffix={
          <button onClick={onClickSearch}>
            {' '}
            <SearchIcon />
          </button>
        }
        placeholder={placeholder}
        className={`${className} !h-[30px] bg-[#F2FAFF] !rounded-[4px] !border-none  !focus:none `}
      />
    </div>
  );
};

export default SearchInput;
