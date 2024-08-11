import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">Contact Us</h1>
          <p>If you want to contact us you can just email us.</p>
          <a href="mailto:grandlineadventurer@gmail.com" className="text-teal-500 hover:underline">Click here to contact</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
