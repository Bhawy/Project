import type { NextPage } from "next";
import SubPageV from "../components/sub-page-v";

const LevelConfiguration: NextPage = () => {
  return (
    <div className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 rounded-[25px] bg-white overflow-hidden flex flex-col items-end justify-start py-0 pl-0 pr-px box-border relative gap-[29.7px] max-w-full">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/mask-group@2x.png"
        />
        <SubPageV />
        <section className="self-stretch flex flex-row items-start justify-end py-0 pl-[21px] pr-5 box-border max-w-full text-left text-sm text-gray-200 font-montserrat">
          <div className="h-[795px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[89px] box-border gap-[22px] max-w-full mq271:h-auto mq400:pb-[38px] mq400:box-border">
            <div className="flex flex-row items-start justify-start py-0 px-2 text-mini text-gray-100">
              <div className="relative leading-[100%] font-semibold inline-block min-w-[101px] z-[1]">
                Information
              </div>
            </div>
            <div className="self-stretch h-px relative border-gray-300 border-t-[1px] border-solid box-border shrink-0 z-[1]" />
            <div className="w-[355px] flex flex-row items-start justify-start py-0 px-2 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5">
                <div className="relative leading-[100%] font-medium inline-block min-w-[71px] z-[1]">
                  Youtube
                </div>
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-5 h-2.5 relative object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-dimgray">
              <div className="self-stretch h-px relative border-gray-300 border-t-[1px] border-solid box-border z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-[18px] box-border max-w-full">
                <div className="flex-1 max-w-full gap-5 mq271:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="flex flex-row items-start justify-start gap-2">
                      <div className="relative leading-[100%] font-medium inline-block min-w-[100px] z-[1]">
                        Youtube ZNP
                      </div>
                      <img
                        className="h-[13.3px] w-[13.3px] relative z-[1]"
                        alt=""
                        src="/group.svg"
                      />
                    </div>
                  </div>
                  <div className="rounded-sm [background:linear-gradient(90deg,_#2f4363_26.5%,_#6088c9)] flex flex-row items-start justify-start py-1.5 px-[7px] gap-[5.1px] z-[1] text-5xs text-white">
                    <img
                      className="h-2.5 w-[11.1px] relative min-h-[10px]"
                      alt=""
                      src="/group-1.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <div className="relative leading-[100%] font-medium inline-block min-w-[31px]">
                        Level 2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative border-gray-300 border-t-[1px] border-solid box-border z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[9px] pr-[18px] box-border max-w-full">
                <div className="flex-1 max-w-full gap-5 mq330:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="flex flex-row items-start justify-start gap-[7px]">
                      <div className="relative leading-[100%] font-medium z-[1]">
                        Youtube Suggestions
                      </div>
                      <img
                        className="h-[13.3px] w-[13.3px] relative z-[1]"
                        alt=""
                        src="/group.svg"
                      />
                    </div>
                  </div>
                  <div className="rounded-sm [background:linear-gradient(90deg,_#583d75,_#a572db)] flex flex-row items-start justify-start py-1.5 px-[7px] gap-[5.1px] z-[1] text-5xs text-white">
                    <img
                      className="h-2.5 w-[11.1px] relative min-h-[10px]"
                      alt=""
                      src="/group-1.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <div className="relative leading-[100%] font-medium inline-block min-w-[31px]">
                        Level 4
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative border-gray-300 border-t-[1px] border-solid box-border z-[1]" />
            </div>
            <div className="w-[355px] flex flex-row items-start justify-start pt-0 px-2 pb-[3px] box-border max-w-full text-mini">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5">
                <div className="w-[115px] relative leading-[100%] font-medium inline-block shrink-0 z-[1]">
                  Books
                </div>
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <img
                    className="w-5 h-2.5 relative object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full text-mini text-dimgray">
              <div className="self-stretch h-px relative border-gray-300 border-t-[1px] border-solid box-border z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-[18px] box-border max-w-full">
                <div className="flex-1 max-w-full gap-5 mq265:flex-wrap">
                  <div className="w-[115px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-1">
                      <div className="flex-1 relative leading-[100%] font-medium z-[1]">
                        Books ZNP
                      </div>
                      <img
                        className="h-[13.3px] w-[13.3px] relative z-[2] ml-[-18px]"
                        alt=""
                        src="/group.svg"
                      />
                    </div>
                  </div>
                  <div className="rounded-sm [background:linear-gradient(90deg,_#345937,_#70bf76)] flex flex-row items-start justify-start py-1.5 px-[9px] gap-[5.1px] z-[1] text-5xs text-white">
                    <img
                      className="h-2.5 w-[11.1px] relative min-h-[10px]"
                      alt=""
                      src="/group-1.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <div className="relative leading-[100%] font-medium inline-block min-w-[27px]">
                        Level 1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border gap-4 max-w-full text-sm">
                <div className="self-stretch h-px relative border-gray-300 border-t-[1px] border-solid box-border z-[1]" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-[18px] box-border max-w-full">
                  <div className="flex-1 max-w-full gap-5 mq313:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <div className="flex flex-row items-start justify-start gap-3">
                        <div className="relative leading-[100%] font-medium z-[1]">
                          Books Suggestions
                        </div>
                        <img
                          className="h-[13.3px] w-[13.3px] relative z-[1]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="w-[62px] rounded-sm [background:linear-gradient(90deg,_#5e395f,_#c476c5)] flex flex-row items-start justify-start py-1.5 px-[7px] box-border gap-[5.1px] z-[1] text-5xs text-white">
                      <img
                        className="h-2.5 w-[11.1px] relative min-h-[10px]"
                        alt=""
                        src="/group-7.svg"
                      />
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                        <div className="relative leading-[100%] font-medium inline-block min-w-[30px]">
                          Level 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative border-gray-300 border-t-[1px] border-solid box-border z-[1]" />
            </div>
            <div className="w-[355px] flex flex-row items-start justify-start pt-0 px-2 pb-[3px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5">
                <div className="relative leading-[100%] font-medium inline-block min-w-[69px] z-[1]">
                  Linkedin
                </div>
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-5 h-2.5 relative object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20.6px] max-w-full text-dimgray">
              <div className="self-stretch h-px relative border-gray-300 border-t-[1px] border-solid box-border z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-[18px] box-border max-w-full">
                <div className="flex-1 max-w-full gap-5 mq310:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="flex flex-row items-start justify-start gap-[9px]">
                      <div className="relative leading-[100%] font-medium z-[1]">
                        Linkedin Connects
                      </div>
                      <img
                        className="h-[13.3px] w-[13.3px] relative z-[1]"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="rounded-sm [background:linear-gradient(90deg,_#2f4363_26.5%,_#6088c9)] flex flex-row items-start justify-start py-1.5 px-[7px] gap-[5.1px] z-[1] text-5xs text-white">
                    <img
                      className="h-2.5 w-[11.1px] relative min-h-[10px]"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <div className="relative leading-[100%] font-medium inline-block min-w-[31px]">
                        Level 2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full">
                <div className="self-stretch h-px relative border-gray-300 border-t-[1px] border-solid box-border z-[1]" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-[18px] box-border max-w-full">
                  <div className="flex-1 max-w-full gap-5 mq272:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <div className="flex flex-row items-start justify-start gap-2.5">
                        <div className="relative leading-[100%] font-medium inline-block min-w-[99px] z-[1]">
                          Linkedin ZNP
                        </div>
                        <img
                          className="h-[13.3px] w-[13.3px] relative z-[1]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="rounded-sm [background:linear-gradient(90deg,_#345937,_#70bf76)] flex flex-row items-start justify-start py-1.5 px-[9px] gap-[5.1px] z-[1] text-5xs text-white">
                      <img
                        className="h-2.5 w-[11.1px] relative min-h-[10px]"
                        alt=""
                      />
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                        <div className="relative leading-[100%] font-medium inline-block min-w-[27px]">
                          Level 1
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative border-gray-300 border-t-[1px] border-solid box-border z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-[18px] box-border max-w-full">
                <div className="flex-1 max-w-full gap-5 mq288:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="flex flex-row items-start justify-start gap-1.5">
                      <div className="relative leading-[100%] font-medium inline-block min-w-[119px] z-[1]">
                        Linkedin Profile
                      </div>
                      <img
                        className="h-[13.3px] w-[13.3px] relative z-[1]"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-[62px] rounded-sm [background:linear-gradient(90deg,_#5e395f,_#c476c5)] flex flex-row items-start justify-start py-1.5 px-[7px] box-border gap-[5.1px] z-[1] text-5xs text-white">
                    <img
                      className="h-2.5 w-[11.1px] relative min-h-[10px]"
                      alt=""
                      src="/group-7.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <div className="relative leading-[100%] font-medium inline-block min-w-[30px]">
                        Level 3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative border-gray-300 border-t-[1px] border-solid box-border z-[1]" />
            </div>
            <div className="w-[355px] flex flex-row items-start justify-start pt-0 px-2 pb-[3px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5">
                <div className="w-[115px] relative leading-[100%] font-medium inline-block shrink-0 z-[1]">
                  Psycometric
                </div>
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-5 h-2.5 relative object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </div>
            <footer className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-left text-sm text-dimgray font-montserrat">
              <div className="self-stretch h-px relative border-gray-300 border-t-[1px] border-solid box-border z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-[18px] box-border max-w-full">
                <div className="flex-1 max-w-full gap-5 mq321:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="flex flex-row items-start justify-start gap-[11px]">
                      <div className="relative leading-[100%] font-medium z-[1]">
                        Psycometric Results
                      </div>
                      <img
                        className="h-[13.3px] w-[13.3px] relative z-[1]"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="rounded-sm [background:linear-gradient(90deg,_#345937,_#70bf76)] flex flex-row items-start justify-start py-1.5 px-[9px] gap-[5.1px] z-[1] text-5xs text-white">
                    <img
                      className="h-2.5 w-[11.1px] relative min-h-[10px]"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <div className="relative leading-[100%] font-medium inline-block min-w-[27px]">
                        Level 1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative border-gray-300 border-t-[1px] border-solid box-border z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-[18px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq299:flex-wrap">
                  <div className="h-[18px] w-[149.3px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                      <div className="self-stretch flex-1 relative leading-[100%] font-medium">
                        Psycometric ZNP
                      </div>
                      <img
                        className="h-[13.3px] w-[13.3px] relative z-[1] ml-[-11px]"
                        alt=""
                        src="/group.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[62px] rounded-sm [background:linear-gradient(90deg,_#345937,_#70bf76)] flex flex-row items-start justify-start py-1.5 px-[9px] box-border gap-[5.1px] text-5xs text-white">
                    <img
                      className="h-2.5 w-[11.1px] relative min-h-[10px]"
                      alt=""
                      src="/group-1.svg"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <div className="self-stretch h-1.5 relative leading-[100%] font-medium flex items-center shrink-0">
                        Level 1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative border-gray-300 border-t-[1px] border-solid box-border" />
            </footer>
            <div className="w-[355px] h-[17px] flex flex-row items-start justify-start pt-0 px-2 pb-[3px] box-border max-w-full shrink-0">
              <div className="self-stretch flex-1 flex flex-row items-start justify-between max-w-full gap-5">
                <div className="self-stretch w-[115px] relative leading-[100%] font-medium inline-block shrink-0">
                  Default
                </div>
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-5 h-2.5 relative"
                    alt=""
                    src="/vector-4.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative border-gray-300 border-t-[1px] border-solid box-border shrink-0" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default LevelConfiguration;
