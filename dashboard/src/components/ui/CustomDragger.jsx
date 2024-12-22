import Dragger from 'antd/es/upload/Dragger';
import DraggerFIle from '../../assets/svgs/DraggerFIle';
import { useState } from 'react';

const CustomDragger = ({ form, image, isEdit = true }) => {
  const [imagePath, setImagePath] = useState(image ? image : null);
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const props = {
    name: 'image',
    multiple: false,
    onChange: async (info) => {
      const blob = await getBase64(info.file.originFileObj);
      setImagePath(blob);
      form.setFieldValue('bannerImage', info.file);
    },
  };

  return (
    <Dragger
      {...props}
      className=''
      id='dragger'
      disabled={!isEdit}
    >
      <div className='flex flex-col h-[200px] items-center justify-center'>
        {imagePath ? (
          <img
            src={imagePath}
            className='h-[200px] object-cover w-full'
            alt=''
          />
        ) : (
          <>
            <DraggerFIle />
            <h1 className='text-[22px] urbanist-semibold'>
              Drag & Drop to Upload
            </h1>
            <p className='text-[#A6CE38] text-[18px] inter-semibold '>
              Or Browse
            </p>
          </>
        )}
      </div>
    </Dragger>
  );
};

export default CustomDragger;
