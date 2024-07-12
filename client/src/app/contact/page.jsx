"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = async (event) => {
    console.log("Form Data:", formData);

    try {
      const response = await axios.post(
        "http://localhost:5000/contactus",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Success:", response.data);
      
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  return (
    <>
      <main className="container">
        <div className="flex justify-center text-center mt-10 mb-10">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19.9201L8.48003 13.4001C7.71003 12.6301 7.71003 11.3701 8.48003 10.6001L15 4.08008"
                stroke="#018FD7"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="grow justify-self-end text-2xl font-semibold">
            Contact Us
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H21"
                stroke="#018FD7"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 12H21"
                stroke="#018FD7"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 17H21"
                stroke="#018FD7"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div></div>
        </div>
        <p className="mb-5">
          Contact us at a convenient time for you and we will answer all your
          questions.
        </p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex gap-3">
                <Image
                  src="/sms-edit.png"
                  width={24}
                  height={24}
                  alt="Write to us"
                />
                <div className="text-black">Write to us</div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <form method="POST" onSubmit={submitHandler}>
                  <div className="flex flex-col gap-5 mt-5 ">
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your Email"
                        className="lblue_border w-full p-5 focus:outline-none"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Write Message"
                        className="lblue_border focus:outline-none w-full h-40 p-5"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="text-white lblue_button font-medium rounded-lg text-sm px-6 py-2.5 me-2 mb-2 focus:outline-none"
                  >
                    Send
                  </button>
                </form>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </>
  );
};

export default Contact;
