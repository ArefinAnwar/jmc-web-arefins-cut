"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactUs() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-10% 0px" });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleInputChange = (event) => {
    const { id, value } = event.target; // Get input field's id and value
    setFormData((prevData) => ({
      ...prevData, // Spread previous data to retain other fields
      [id]: value, // Update the specific field
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // const { name, phone, message, email } = formData;

    // // Gather form data
    // const formData = new FormData(event.target);

    // // Send email using EmailJS
    // const serviceID = "service_tbaaxnp";
    // const templateID = "template_xa1eqfp";
    // const publicKey = "7x6YrslQW2FNEUn-O";
    // // Simulate sending email (Replace this with your actual backend/email API)
    // console.log(formData);
    // try {
    //   emailjs.send(serviceID, templateID, formData, publicKey).then(
    //     (result) => {
    //       alert(
    //         "Your order has been received. We will contact you within 24 hours."
    //       );
    //     },
    //     (error) => {
    //       console.log("EmailJS Error:", error);
    //       alert(
    //         "An error occurred while submitting your order. Please try again later."
    //       );
    //     }
    //   );
    //   console.log(formData);
    //   alert(
    //     "Your order has been received, and we will contact you within 24 hours."
    //   );
    //   setTimeout(() => {
    //     setFormData({
    //       name: "",
    //       phone: "",
    //       email: "",
    //       message: "",
    //     });
    //   }, 100);
    // } catch (err) {
    //   alert("Failed to send the order. Please try again.");
    // }
  };
  return (
    <div ref={sectionRef} className="w-full min-h-screen flex flex-col">
      <div className=" text-blue-400 min-h-screen flex items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="w-11/12 max-w-lg bg-blue-950/30 rounded-lg p-4 py-10  shadow-md drop-shadow-lg shadow-sky-600"
        >
          {/* <h2 className="text-5xl font-bold text-center mb-4">
            
          </h2> */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-2xl px-5 mb-4 uppercase md:text-5xl font-bold text-center text-blue-500 z-40"
            style={{
              textShadow: "3px 0px 1px #fff",
              willChange: "transform, opacity",
            }}
          >
            Get in Contact
          </motion.h1>
          {/* Name Field */}
          <div className="mb-4">
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-3 mt-1 text-white bg-slate-600/50 rounded-md"
              placeholder="Name"
              required
            />
          </div>

          {/* Address Field */}
          {/* <div className="mb-4">
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-3 py-3 mt-1 text-white bg-slate-600/50 rounded-md"
              placeholder="Address"
              required
            />
          </div> */}

          {/* Phone Field */}
          <div className="mb-4">
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-3 mt-1 text-white bg-slate-600/50 rounded-md"
              placeholder="Phone number"
              required
            />
          </div>

          {/* Country Field */}

          {/* Email Field */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-3 mt-1 text-white bg-slate-600/50 rounded-md"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              type="text"
              id="message"
              rows="3"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-3 py-3 mt-1 text-white bg-slate-600/50 rounded-md"
              placeholder="Your message..."
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-4 text-white bg-blue-500/80 rounded-lg font-semibold hover:bg-blue-500/30 uppercase ease-in-out duration-300 hover:-translate-y-1"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
