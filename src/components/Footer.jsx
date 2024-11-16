import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="mt-8 p-10 bg-purple-600 text-white">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-truck text-2xl"></i>
              <h2 className="text-lg font-bold">E cart</h2>
            </div>
            <p className="mt-4 text-sm">
              Designed and built with all the love in the world by the Luminar team with the help of our contributors. <br />
              Code licensed Luminar, docs CC BY 3.0.<br />
              Currently v5.3.2.
            </p>
          </div>

          <div className='ms-24'>
            <h2 className="text-lg font-bold">Links</h2>
            <ul className="mt-4  text-sm ">
             <Link to={'/wishlist'}> <li  className="hover:underline ">Wishlist Page</li></Link>
             <Link to={'/'}> <li  className="hover:underline">Home Page</li></Link>
             <Link to={'/cart'}> <li className="hover:underline">Cart Page</li></Link>
            </ul>
          </div>

          <div className='ms-12'>
            <h2 className="text-lg font-bold">Guides</h2>
            <ul className="mt-4  text-sm">
              <li><a href="https://react.dev/" className="hover:underline" target='_blank'>React</a></li>
              <li><a href="https://react-bootstrap.github.io/" className="hover:underline" target='_blank'> React Bootstrap</a></li>
              <li><a href="https://www.npmjs.com/package/react-router-dom" className="hover:underline" target='_blank'>React Router</a></li>
            </ul>
          </div>

          <div className=''>
            <h2 className="text-lg font-bold">Contact Us</h2>
            <div className="mt-4 flex " >
              <input type="text" placeholder="Enter your email here" className="w-full px-3 py-2 text-gray-800 rounded-md" />
              <button className='fa-solid fa-arrow-right fa-xl ms-2'></button>
            </div>
            <div className="mt-4 flex justify-between ">
              <a href="https://x.com/?mx=2" className="hover:text-gray-300" target='_blank'><i className="fab fa-twitter "></i></a>
              <a href="https://www.instagram.com/" className="hover:text-gray-300" target='_blank'><i className="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" className="hover:text-gray-300" target='_blank'><i className="fab fa-facebook"></i></a>
              <a href="https://in.linkedin.com/" className="hover:text-gray-300" target='_blank'><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/login" className="hover:text-gray-300" target='_blank'><i className="fab fa-github"></i></a>
              <a href="https://www.phone.com/mobile-apps/" className="hover:text-gray-300" target='_blank'><i className="fas fa-phone"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          Copyright © June 2024 Batch, E Cart. Built with React Redux.
        </div>
      </footer>
    </>
  );
};

export default Footer;
