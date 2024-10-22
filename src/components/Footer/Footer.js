
import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="p-5 bg-grey text-white flex flex-col ">
        {/* Content */}
        <div className="mb-3 flex justify-around m-2">
            {/* Quick Links */}
            <div className="flex flex-col">
                <p className="text-lg truncate font-bold">Quick Links</p>
                <div className="p-2 flex flex-col">
                    <a href="">About Us</a>
                    <a href="">Membership</a>
                    <a href="">Join as member</a>
                    <a href="">Conference/Event</a>
                </div>
            </div>
            {/* Other Services */}
            <div className="flex flex-col">
                <p className="text-lg truncate font-bold">Services</p>
                <div className="p-2 flex flex-col">
                    <a>Researchpedia</a>
                    <a>Researchers Gallery</a>
                    <a>Academics Research Library</a>
                    <a>Visa</a>
                </div>
            </div>
            {/* Contact */}
            <div className="flex flex-col">
                <p className="text-lg truncate font-bold">Contact us</p>
                <div className="p-2  flex flex-col">
                    <p>+91 90XXXXXXXX</p>
                    <p>mail@mail.com</p>
                </div>
            </div>
        </div>
        {/* Rights */}
        <div className="flex justify-evenly">
            <p className="" >ISER © 2024 All rights reserved</p>
        </div>
    </div>
  );
};

export default Footer;
