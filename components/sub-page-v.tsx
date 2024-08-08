import type { NextPage } from "next";

export type SubPageVType = {
  className?: string;
};

const SubPageV: NextPage<SubPageVType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch rounded-xl flex flex-col items-start justify-start py-0 px-0 z-[1] text-left text-3xl text-darkslategray font-montserrat ${className}`}
    >
      <header className="self-stretch flex flex-row items-center justify-center py-0 px-0 gap-44 text-center text-mini text-black-white-900 font-montserrat">
        <div className="w-[154px] flex flex-row items-center justify-center py-4 px-[57px] box-border shrink-0">
          <a className="[text-decoration:none] flex-1 relative leading-[22px] font-semibold text-[inherit]">
            9:41
          </a>
        </div>
        <div className="flex flex-row items-center justify-center py-[20.5px] px-9 gap-2">
          <img
            className="h-3 w-[19px] relative"
            loading="lazy"
            alt=""
            src="/cellular-connection.svg"
          />
          <img
            className="h-3 w-[17px] relative"
            loading="lazy"
            alt=""
            src="/wifi.svg"
          />
          <div className="h-[13px] w-[27px] relative">
            <div className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_13.5px)] rounded-8xs-3 border-black-white-900 border-[1px] border-solid box-border w-[24.7px] opacity-[0.35] mix-blend-normal" />
            <img
              className="absolute h-[31.54%] top-[36.92%] bottom-[31.54%] left-[calc(50%_+_12.2px)] max-h-full w-[1.3px] mix-blend-normal"
              loading="lazy"
              alt=""
              src="/cap.svg"
            />
            <div className="absolute h-[69.23%] top-[15.38%] bottom-[15.38%] left-[calc(50%_-_11.5px)] rounded-10xs-5 bg-black-white-900 w-[20.7px] z-[1]" />
          </div>
        </div>
      </header>
      <div className="self-stretch flex flex-row items-center justify-between py-0 pl-[26px] pr-[25px] gap-5">
        <div className="h-[42px] w-[42px] rounded-31xl bg-aliceblue border-aliceblue border-[1px] border-solid box-border flex flex-row items-center justify-start py-3 px-[11px]">
          <img
            className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/arrow-left.svg"
          />
        </div>
        <div className="rounded-31xl flex flex-row items-center justify-start py-2.5 px-3">
          <a className="[text-decoration:none] relative leading-[28px] font-semibold text-[inherit] whitespace-nowrap">
            Configuration
          </a>
        </div>
        <div className="h-11 w-11 rounded-31xl bg-aliceblue flex flex-row items-center justify-start p-3 box-border">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/solarbelllinear.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default SubPageV;
