import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const FooterComp = () => {
  return (
    <Footer container className="botder border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5 mb-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
                ANI
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm: mt-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <Footer.Title title="FOLLOW" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.facebook.com/profile.php?id=61552721692137&mibextid=kFxxJD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Footer.Link>
                <Footer.Link
                  href="https://www.instagram.com/grandlineadventurer?igsh=MTE0MHNiMGJtZXUyYw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="legal" />
              <Footer.LinkGroup col>
                <Footer.Link>
                  <Link to="privacy-policy">Privacy Policy</Link>
                </Footer.Link>
                <Footer.Link>
                  <Link to="dmca">DMCA</Link>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="ANIBLOG" year={new Date().getFullYear()} />

          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/profile.php?id=61552721692137&mibextid=kFxxJD"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/grandlineadventurer?igsh=MTE0MHNiMGJtZXUyYw=="
              icon={BsInstagram}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
