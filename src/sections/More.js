import React from "react";
import { useTranslation } from "react-i18next";
import InfoDiv from "../components/InfoDiv";

const More = () => {
  const { t } = useTranslation();

  return (
    <div
      className="flex justify-center sm:h-[100vh] image pb-10"
      // className="h-screen py-10 flex justify-center items-center image mt-10"
      id="More"
    >
      <div className="p-5 sm:p-0 sm:w-[50%] flex flex-col gap-y-5 sm:gap-y-8 content">
        <h1 className="mt-10 text-5xl text-light text-center font-bold pb-5">
          {t("More about me")}
        </h1>
        <div className="flex flex-col gap-y-5 sm:gap-y-7">
          <InfoDiv index={1} text={t("infoDiv1")} />
          <InfoDiv index={2} text={t("infoDiv2")} />
          <InfoDiv index={3} text={t("infoDiv3")} />
          <InfoDiv index={4} text={t("infoDiv4")} />
        </div>
      </div>
    </div>
  );
};

export default More;
