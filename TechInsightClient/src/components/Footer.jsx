import React from 'react';
import { FaBars, FaFacebook, FaXmark } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="bg-gray-100">
            <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
                <div className="p-5 sm:w-2/12 border-r">
                    <div className="text-sm uppercase text-indigo-600 font-bold">Menu</div>
                    <ul>
                        <li className="my-2">
                            <a className="hover:text-indigo-600" href="#">Home</a>
                        </li>
                        <li className="my-2">
                            <a className="hover:text-indigo-600" href="#">About</a>
                        </li>
                        <li className="my-2">
                            <a className="hover:text-indigo-600" href="#">Posts</a>
                        </li>
                        <li className="my-2">
                            <a className="hover:text-indigo-600" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="p-5 sm:w-7/12 border-r text-center">
                    <h3 className="font-bold text-xl text-indigo-600 mb-4">Componentity</h3>
                    <p className="text-gray-500 text-sm mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className="p-5 sm:w-3/12">
                    <div className="text-sm uppercase text-indigo-600 font-bold">Contact Us</div>
                    <ul>
                        <li className="my-2">
                            <a className="hover:text-indigo-600" href="#">XXX XXXX, Floor 4 Prishtine, KS</a>
                        </li>
                        <li className="my-2">
                            <a className="hover:text-indigo-600" href="#">contact@company.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex py-5 m-auto text-gray-800 text-lg flex-col items-center border-t max-w-screen-xl">
                <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                    <a href="#" className="w-6 mx-1">
                    <a href="/" className="hover:text-indigo-600"> <FaTwitter/> </a>
                    </a>
                    <a href="#" className="w-6 mx-1">
                    <a href="/" className="hover:text-indigo-600"> <FaFacebook/> </a>
                    </a>
                    <a href="#" className="w-6 mx-1">
                    <a href="/" className="hover:text-indigo-600"> <FaLinkedin/> </a>
                    </a>
                    <a href="#" className="w-6 mx-1">
                    <a href="/" className="hover:text-indigo-600"> <FaInstagram/> </a>
                    </a>
                </div>
                <div className="my-5">© Copyright 2023. All Rights Reserved.</div>
            </div>
        </div>
    );
};

export default Footer;
