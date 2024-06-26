import React from "react";
import { IoIosMail, IoMdCreate } from "react-icons/io";
import { motion } from "framer-motion";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const GetStarted = () => {
  const { t } = useTranslation();

  // Validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string().email(t("invalid_email")).required(t("required_email")),
    message: Yup.string().required(t("required_message")),
  });

  // Function to send email
  const sendEmail = (values, { setSubmitting, resetForm }) => {
    emailjs
      .send(
        "service_your_service_id",
        "template_your_template_id",
        {
          to_email: "michalszczepanski07@gmail.com",
          from_email: values.email,
          message: values.message,
        },
        "your_user_id"
      )
      .then(
        (result) => {
          console.log("Email sent successfully", result.text);
          setSubmitting(false);
          resetForm(); // Reset the form using Formik's resetForm function
        },
        (error) => {
          console.error("Failed to send email", error.text);
          setSubmitting(false);
        }
      );
  };

  return (
    <div
      className="flex justify-center items-center h-screen image"
      id="GetStarted"
    >
      <Formik
        initialValues={{ email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={sendEmail}
      >
        {({ isSubmitting }) => (
          <Form className="w-full flex flex-col sm:w-[50%] gap-y-[50px] justify-center items-center content">
            <h1 className="text-5xl font-bold text-light">{t("getStarted")}</h1>

            <div className="flex flex-col gap-2 sm:w-[50%] justify-center items-center relative">
              <div className="w-full relative">
                <IoIosMail className="w-10 h-10 text-light absolute top-1 left-[-60px]" />
                <Field
                  name="email"
                  type="email"
                  placeholder={t("your_email")}
                  className="w-full border-2 border-secondary p-2 rounded-xl bg-white button-shadow focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition duration-150"
                  as={motion.input}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                />
              </div>
              {/* Fixed-height div to reserve space for error message */}
              <div className="h-6">
                <ErrorMessage
                  name="email"
                  component="div"
                  className={`text-red-600 text-sm mt-1`}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:w-[50%] justify-center items-center relative">
              <div className="w-full relative">
                <IoMdCreate className="w-10 h-10 text-light absolute top-1 left-[-60px]" />
                <Field
                  name="message"
                  placeholder={t("type_your_message")}
                  className="w-full h-[200px] p-2 rounded-xl bg-white border-2 border-secondary button-shadow focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition duration-150"
                  as={motion.textarea}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                />
              </div>
              {/* Fixed-height div to reserve space for error message */}
              <div className="h-6">
                <ErrorMessage
                  name="message"
                  component="div"
                  className={`text-red-600 text-sm mt-1`}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-[50%] bg-secondary px-3 py-2 rounded-xl text-white transition duration-300 delay-150 hover:scale-105 hover:bg-primary hover:text-white button-shadow"
            >
              {isSubmitting ? t("sending") : t("submit")}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default GetStarted;

// import React from "react";
// import { IoIosMail, IoMdCreate } from "react-icons/io";
// import { motion } from "framer-motion";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import emailjs from "emailjs-com";
// import { useTranslation } from "react-i18next";

// const GetStarted = () => {
//   // Validation schema
//   const validationSchema = Yup.object().shape({
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Please enter your email address"),
//     message: Yup.string().required("Please enter your message"),
//   });

//   // Function to send email
//   const sendEmail = (values, { setSubmitting, resetForm }) => {
//     emailjs
//       .send(
//         "service_your_service_id",
//         "template_your_template_id",
//         {
//           to_email: "michalszczepanski07@gmail.com",
//           from_email: values.email,
//           message: values.message,
//         },
//         "your_user_id"
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully", result.text);
//           setSubmitting(false);
//           resetForm(); // Reset the form using Formik's resetForm function
//         },
//         (error) => {
//           console.error("Failed to send email", error.text);
//           setSubmitting(false);
//         }
//       );
//   };

//   const { t } = useTranslation();

//   return (
//     <div
//       className="flex justify-center items-center h-screen image"
//       id="GetStarted"
//     >
//       <Formik
//         initialValues={{ email: "", message: "" }}
//         validationSchema={validationSchema}
//         onSubmit={sendEmail}
//       >
//         {({ isSubmitting, errors, touched }) => (
//           <Form className="w-full flex flex-col sm:w-[50%] gap-y-[50px] justify-center items-center content">
//             <h1 className="text-5xl font-bold text-light">
//               {t("my_getStarted")}
//             </h1>

//             <div className="flex flex-col gap-2 sm:w-[50%] justify-center items-center relative">
//               <div className="w-full relative">
//                 <IoIosMail className="w-10 h-10 text-light absolute top-1 left-[-60px]" />
//                 <Field
//                   name="email"
//                   type="email"
//                   placeholder="Your E-mail"
//                   className="w-full border-2 border-secondary p-2 rounded-xl bg-white button-shadow focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition duration-150"
//                   as={motion.input}
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                 />
//               </div>
//               <div className="h-6">
//                 <ErrorMessage
//                   name="email"
//                   component="div"
//                   className={`text-red-600 text-sm mt-1`}
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col gap-2 sm:w-[50%] justify-center items-center relative">
//               <div className="w-full relative">
//                 <IoMdCreate className="w-10 h-10 text-light absolute top-1 left-[-60px]" />
//                 <Field
//                   name="message"
//                   placeholder="Type your message ..."
//                   className="w-full h-[200px] p-2 rounded-xl bg-white border-2 border-secondary button-shadow focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition duration-150"
//                   as={motion.textarea}
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                 />
//               </div>
//               <div className="h-6">
//                 <ErrorMessage
//                   name="message"
//                   component="div"
//                   className={`text-red-600 text-sm mt-1`}
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-[50%] bg-secondary px-3 py-2 rounded-xl text-white transition duration-300 delay-150 hover:scale-105 hover:bg-primary hover:text-white button-shadow"
//             >
//               {isSubmitting ? "Sending..." : "Submit"}
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default GetStarted;
