// import React from "react";
// import { IoIosMail, IoMdCreate } from "react-icons/io";
// import { motion } from "framer-motion";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useTranslation } from "react-i18next";
// import toast, { Toaster } from "react-hot-toast"; // Importowanie hot-toast
// import emailjs from "emailjs-com"; // Importowanie emailjs

// const GetStarted = () => {
//   const { t } = useTranslation();

//   // Validation schema
//   const validationSchema = Yup.object().shape({
//     email: Yup.string().email(t("invalid_email")).required(t("required_email")),
//     message: Yup.string().required(t("required_message")),
//   });

//   // Function to send email
//   // const sendEmail = (values, { setSubmitting, resetForm }) => {
//   //   console.log("Sending email with values:", values); // Logowanie wartości
//   //   console.log("Service ID:", process.env.REACT_APP_SERVICE_ID);
//   //   console.log("Template ID:", process.env.REACT_APP_TEMPLATE_ID);
//   //   console.log("User ID:", process.env.REACT_APP_USER_ID);

//   const sendEmail = (values, { setSubmitting, resetForm }) => {
//     console.log("Sending email with values:", values);

//     emailjs
//       .send(
//         process.env.REACT_APP_SERVICE_ID,
//         process.env.REACT_APP_TEMPLATE_ID,
//         {
//           email: values.email,
//           message: values.message,
//         },
//         process.env.REACT_APP_USER_ID
//       )
//       .then((response) => {
//         console.log("Email sent successfully", response);
//         toast.success(t("email_sent_success"));
//         setSubmitting(false);
//         resetForm();
//       })
//       .catch((error) => {
//         console.error("Failed to send email:", error); // Detailed error logging
//         if (error.response) {
//           // If the error has a response, log that
//           console.error("EmailJS response error:", error.response);
//           toast.error(t("email_sent_error") + ": " + error.response.text); // More specific error message
//         } else {
//           // Otherwise log the error message
//           console.error("EmailJS error message:", error.message);
//           toast.error(t("email_sent_error") + ": " + error.message); // General error message
//         }
//         setSubmitting(false);
//       });
//   };

//   return (
//     <div
//       className="flex justify-center items-center h-screen image"
//       id="GetStarted"
//     >
//       {/* Dodanie kontenera powiadomień */}
//       <Toaster position="top-center" reverseOrder={false} />

//       <Formik
//         initialValues={{ email: "", message: "" }}
//         validationSchema={validationSchema}
//         onSubmit={sendEmail}
//       >
//         {({ isSubmitting }) => (
//           <Form className="w-full flex flex-col sm:w-[50%] gap-y-[50px] justify-center items-center content">
//             <h1 className="text-5xl font-bold text-light">{t("getStarted")}</h1>

//             <div className="flex flex-col gap-2 sm:w-[50%] justify-center items-center relative">
//               <div className="w-full relative">
//                 <IoIosMail className="w-10 h-10 text-light absolute top-1 left-[-60px]" />
//                 <Field
//                   name="email"
//                   type="email"
//                   placeholder={t("your_email")}
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
//                   placeholder={t("type_your_message")}
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
//               {isSubmitting ? t("sending") : t("submit")}
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default GetStarted;

import React from "react";
import { IoIosMail, IoMdCreate } from "react-icons/io";
import { motion } from "framer-motion";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";

const GetStarted = () => {
  const { t } = useTranslation();
  const contactEmail =
    process.env.REACT_APP_CONTACT_EMAIL || "michalszczepanski07@gmail.com";

  const validationSchema = Yup.object().shape({
    from_name: Yup.string().required(t("required_name")),
    email: Yup.string().email(t("invalid_email")).required(t("required_email")),
    message: Yup.string().required(t("required_message")),
  });

  const fallbackToMailto = (values) => {
    const subject = encodeURIComponent(`Portfolio contact from ${values.from_name}`);
    const body = encodeURIComponent(
      `Name: ${values.from_name}\nEmail: ${values.email}\n\n${values.message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  const sendEmail = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Contact API unavailable");
      }

      toast.success(t("email_sent_success"));
      resetForm();
    } catch (error) {
      fallbackToMailto(values);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen image"
      id="GetStarted"
    >
      <Toaster position="top-center" reverseOrder={false} />

      <Formik
        initialValues={{ from_name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={sendEmail}
      >
        {({ isSubmitting }) => (
          <Form className="w-full flex flex-col sm:w-[50%] gap-y-[50px] justify-center items-center content">
            <h1 className="text-5xl font-bold text-light">{t("getStarted")}</h1>

            <div className="w-[90%] sm:w-[70%] rounded-2xl bg-light/90 px-5 py-4 text-center text-secondary shadow-lg">
              <p className="font-semibold">{t("contact_mailto_title")}</p>
              <p className="mt-2 text-sm">{t("contact_mailto_hint")}</p>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-3 inline-block font-semibold underline underline-offset-4"
              >
                {contactEmail}
              </a>
            </div>

            <div className="flex flex-col gap-2 sm:w-[50%] justify-center items-center relative">
              <div className="w-full relative">
                <Field
                  name="from_name"
                  type="text"
                  placeholder={t("your_name")}
                  className="w-full border-2 border-secondary p-2 rounded-xl bg-white button-shadow focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition duration-150"
                  as={motion.input}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                />
              </div>
              <div className="h-6">
                <ErrorMessage
                  name="from_name"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>
            </div>

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
              <div className="h-6">
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-sm mt-1"
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
              <p className="w-full text-xs sm:text-sm text-light/90 text-left">
                {t("contact_mailto_textarea_hint")}
              </p>
              <div className="h-6">
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-600 text-sm mt-1"
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
