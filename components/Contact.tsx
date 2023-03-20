import React, { useRef, useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import db from "../db";
import { Button } from "@mui/material";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

type LoadingState = {
  loading: boolean;
  success: boolean;
  error: boolean;
  completed: boolean;
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loadState, setLoadState] = useState<LoadingState>({
    loading: false,
    success: false,
    error: false,
    completed: false,
  });

  const changeLoadState = (
    loading: boolean,
    success: boolean,
    error: boolean,
    completed: boolean
  ) => {
    setLoadState({ loading, success, error, completed });

    // after 5 seconds, if completed, reset to initial state
    if (completed) {
      setTimeout(() => {
        setLoadState({
          loading: false,
          success: false,
          error: false,
          completed: false,
        });
      }, 5000);
    }
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    changeLoadState(true, false, false, false);

    // send email
    emailjs
      .sendForm(
        "service_hx0j4fl",
        "template_xmt4z0s",
        // @ts-ignore
        formRef.current,
        "2V3W905CrGH39PLBX"
      )
      .then(
        (result) => {
          changeLoadState(false, true, false, true);
          // @ts-ignore
          formRef.current.reset();
        },
        (error) => {
          changeLoadState(false, false, true, true);
          toast.error("Something went wrong. Check connection");
        }
      );
  }

  // format phone number
  function formatPhoneNumber(phoneNumberString: string) {
    // use regex to get in format +(xxx) xxx-xxxx
    const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{1,3})(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `+(${match[1]}) ${match[2]}-${match[3]}-${match[4]}`;
    }
    return null;
  }

  return (
    <section className="universal_x universal_y second_bg" id="contact">
      <h2 className="text-center title">Let's talk</h2>

      <div className="md:mt-20 grid lg:grid-cols-2 gap-10">
        <ul className="contact_info lg:order-2">
          <li data-aos="fade-left">
            <h3>{db!.address}</h3>
            <div>
              <div>
                <LanguageOutlinedIcon fontSize="large" />
              </div>

              <p>Official Address</p>
            </div>
          </li>

          <li data-aos="fade-left">
            <h3>{db!.email}</h3>
            <div>
              <div>
                <EmailOutlinedIcon fontSize="large" />
              </div>

              <p>Official email</p>
            </div>
          </li>

          <li data-aos="fade-left">
            <h3 className="group whitespace-nowrap hover:underline">
              <a href={`tel:${db!.phone}`}>
                {formatPhoneNumber(db!.phone)}
                <span className="hidden group-hover:inline-block">
                  <PhoneEnabledOutlinedIcon fontSize="small" className="ml-1" />
                </span>
              </a>
            </h3>
            <div>
              <div>
                <HeadsetMicOutlinedIcon fontSize="large" />
              </div>

              <p>Official Phone</p>
            </div>
          </li>
        </ul>

        <form
          className="bg-[var(--purple-quaternary)] border border-[var(--gray-secondary)] px-5 md:px-10 py-8 md:py-16"
          data-aos="fade-right"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <h3 className="text-3xl font-medium capitalize mb-16 text-center">
            Get in touch
          </h3>

          <div className="grid grid-cols-2 gap-x-5 gap-y-10">
            <input
              type="text"
              name="firstName"
              id="name"
              placeholder="First name"
              className="col-span-2 md:col-span-1"
              required
            />

            <input
              type="text"
              name="lastName"
              id="name"
              placeholder="Last name"
              className="col-span-2 md:col-span-1"
              required
            />

            <input
              type="email"
              name="email"
              id="email"
              className="col-span-2"
              placeholder="email address"
              required
            />

            <input
              type="text"
              name="subject"
              id="subject"
              className="col-span-2"
              placeholder="subject"
              required
            />

            <textarea
              name="message"
              id="message"
              className="col-span-2"
              cols={30}
              rows={5}
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <center className="mt-10">
            <Button
              className="main_btn !w-56 gap-2"
              type="submit"
              disabled={loadState.loading || loadState.completed}
            >
              {/* loader */}
              {loadState.loading && (
                <span className="animate-spin border-[3px] border-[var(--gray-primary)] w-5 h-5 border-t-[var(--orange-primary)] rounded-full"></span>
              )}

              {/* success */}
              {loadState.success && (
                <span className="text-green-400">
                  <CheckCircleOutlinedIcon />
                </span>
              )}

              {/* error */}
              {loadState.error && (
                <span className="text-red-400">
                  <ErrorOutlineOutlinedIcon />
                </span>
              )}

              <div>
                {loadState.loading
                  ? "Sending..."
                  : loadState.success
                  ? "Sent"
                  : loadState.error
                  ? "Error"
                  : "Send Message"}
              </div>
            </Button>
          </center>
        </form>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
        transition={Slide}
      />
    </section>
  );
};

export default Contact;
