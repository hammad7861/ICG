import { useState } from 'react';
import { Form, Upload } from 'antd';
import PDFUpload from '../../assets/svgs/PDFUpload';

const InputUpload = ({ rules, name, isEdit = false, defaultValue }) => {
  const [fileName, setFileName] = useState('');

  const props = {
    name: 'file',
    onChange(info) {
      setFileName(info?.file?.name);
    },
  };

  return (
    <Form.Item
      name={name}
      rules={rules}
      className='w-full'
    >
      <Upload
        className='!w-full !mb-[20px]'
        {...props}
        id='file-upload'
        name={name}
      >
        <div
          style={{
            border: isEdit && '1px dashed #062C42',
          }}
          className='h-[46px] gap-x-[9px] flex items-center pl-[15px] rounded-[12px]'
        >
          <PDFUpload />
          <span className='text-[14px] text-[#6D7D93] urbanist-regular'>
            {fileName ? fileName : isEdit ? defaultValue : 'PDF Upload'}
          </span>
        </div>
      </Upload>
    </Form.Item>
  );
};

export default InputUpload;
