import * as React from "react";

export function HeroSection() {
  return (
    <div className="flex relative flex-col items-start pt-48 pr-20 mt-20 w-full max-w-[1238px] min-h-[429px] max-md:pt-24 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/2ffc09a5eadd94baa7bdbf315f06a8172f184fe5c2cd39683eb3e890a5c0ab30?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&"
        alt="Automotive industry background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative ml-48 text-6xl font-bold leading-none text-white max-md:ml-2.5 max-md:text-4xl">
        Automotive
      </div>
      <div className="flex relative flex-col items-start pt-10 mt-14 max-w-full rounded-xl border border-white border-solid w-[210px] max-md:pr-5 max-md:mt-10">
        <div className="flex shrink-0 rounded-3xl border border-solid border-white border-opacity-20 h-[93px] w-[167px]" />
      </div>
    </div>
  );
}
