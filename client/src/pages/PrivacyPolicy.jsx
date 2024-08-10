import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">
            Privacy Policy
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Introduction Welcome to Aniblog! This privacy policy outlines how
              we collect, use, and protect your personal information when you
              visit our website. By using our site, you agree to the terms
              described below.
            </p>

            <h2 className="text-2xl">Information We Collect</h2>
            <b>Log Data:</b>
            <p>
              When you visit our website, we automatically collect certain
              information from your device, including your IP address, browser
              type, and browser version. This information is used to help
              diagnose and fix technical issues, monitor traffic patterns, and
              improve our website.
            </p>
            <b>Cookies:</b>
            <p>
              Cookies are small text files that are stored on your device when
              you visit a website. They allow websites to remember and store
              information about your preferences and activity. Cookies help us
              provide a better and more personalized experience, tailor ads, and
              improve our website's performance.
            </p>
            <b>User Accounts:</b>
            <p>
              When you create an account, we collect your email address and
              username. This information is used for account management and
              communication purposes.
            </p>
            <b>Comments and Interactions:</b>
            <p>
              When you leave comments or interact with our content, we collect
              that information. This information may include your name, email
              address, and any comments or interactions you may have with our
              content. We may use this information to respond to your comments,
              communicate with you, or improve our website.
            </p>
            <h2 className="text-2xl">How We Use Your Information Personalization:</h2>
            <p>We use your data to personalize your experience on ANI Blog.</p>
            <b>Analytics:</b>
            <p>
              We analyze user behavior to improve our content and services. Data
              Security We take data security seriously. While no method is 100%
              secure, we implement industry-standard measures to protect your
              information. Third-Party Services We may use third-party services
              (e.g., Google Analytics) that collect data. Please review their
              privacy policies.
            </p>
            <h2 className="text-2xl">Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal
              information. Contact us at {" "}
              <b>
                <i>grandlineadventurer@gmail.com</i>{" "}
              </b>
              for assistance.
            </p>
            <h2 className="text-2xl">Changes to this Policy</h2>
            <p>
              We may update this privacy policy. Check back periodically for any
              changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
