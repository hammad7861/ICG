import * as React from "react";

export function ContentSection({ title, content, subtitle, subcontent }) {
  return (
    <div className="flex flex-col text-xl font-bold leading-7 text-cyan-950 max-md:mt-10 max-md:max-w-full">
      <div className="mr-14 text-5xl leading-[50px] max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-10">
        {title}
      </div>
      <div className="mt-12 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        {content}
      </div>
      {subtitle && (
        <div className="mt-5 text-3xl leading-loose max-md:max-w-full">
          {subtitle}
        </div>
      )}
      {subcontent && (
        <div className="mt-3 max-md:mr-2 max-md:max-w-full">{subcontent}</div>
      )}
    </div>
  );
}
