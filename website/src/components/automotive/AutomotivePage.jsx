import * as React from "react";
import { ContentSection } from "./ContentSection";
import { HeroSection } from "./HeroSection";
import { ImageSection } from "./ImageSection";
import { sections } from "./Content";

export function AutomotivePage() {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-white">
      <HeroSection />

      <div className="mt-16 w-full max-w-[1242px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <ContentSection {...sections[0]} />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <ImageSection
              src="https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/5980b000efdb2a48d43476a4186d0321833f053c42f7c48caaeb0bf5f8188435?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&"
              alt="Automotive thermal management system"
              className="w-full rounded-xl aspect-[1.14] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>

      <ImageSection
        src="https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/200d064108e7b8f40fd58603d943495ea545c5196998eca4ec6c30ff0140b114?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&"
        alt="Automotive solutions showcase"
        className="self-stretch mt-4 w-full rounded-xl aspect-[3.01] max-md:max-w-full"
      />

      <div className="flex flex-wrap gap-10 mt-5 w-full text-3xl font-bold leading-loose max-w-[1208px] text-cyan-950 max-md:max-w-full">
        <div className="grow max-md:max-w-full">{sections[1].title}</div>
        <div className="grow shrink w-[497px] max-md:max-w-full">
          {sections[2].title}
        </div>
      </div>

      <div className="mt-3.5 w-full max-w-[1238px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="text-xl leading-7 text-cyan-950 max-md:mt-10 max-md:max-w-full">
              {sections[1].content}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="text-xl leading-7 text-cyan-950 max-md:mt-10 max-md:max-w-full">
              {sections[2].content}
            </div>
          </div>
        </div>
      </div>

      <ImageSection
        src="https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/0498432289c951a0316d7e657acb2b0a209067b983bdf912891c14abbe9ea557?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&"
        alt="Automotive engineering solutions"
        className="self-stretch mt-5 w-full rounded-xl aspect-[2.68] max-md:max-w-full"
      />

      <div className="flex flex-col mt-9 w-full leading-7 max-w-[1242px] text-cyan-950 max-md:max-w-full">
        <div className="self-start text-3xl font-bold leading-loose max-md:max-w-full">
          {sections[3].title}
        </div>
        <div className="mt-2.5 text-xl max-md:max-w-full">
          {sections[3].content}
        </div>
        <ImageSection
          src="https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/77853cc9f3bbe2fd05714a81bcc7545d95278cc3140c5793aef5162664aad8ff?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&"
          alt="ICG Chemical automotive solutions"
          className="mt-9 max-w-full aspect-[166.67] w-[616px]"
        />
        <div className="mt-3.5 text-2xl font-medium max-md:max-w-full">
          At ICG Chemical, we're dedicated to driving sustainability and
          efficiency in the automotive industry with cutting-edge materials and
          solutions. Our portfolio enables our customers to meet the evolving
          demands of the market, ensuring a cleaner and more efficient future
          for mobility.
        </div>
      </div>
    </div>
  );
}
