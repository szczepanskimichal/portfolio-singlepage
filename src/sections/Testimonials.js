import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <div
      className="flex justify-center items-center sm:h-screen py-10"
      id="Testimonials"
    >
      <div className="flex flex-col gap-y-[80px] justify-center items-center mt-10">
        <h1 className="text-5xl font-bold mt-10">{t("my_testimonials")}</h1>
        <div className="flex flex-col sm:flex-row justify-between gap-y-[70px] gap-x-10">
          <TestimonialCard index={4} />
          <TestimonialCard index={3} />
          <TestimonialCard index={2} />
          <TestimonialCard index={1} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
