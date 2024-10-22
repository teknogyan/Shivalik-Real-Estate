import React from "react";

const Header = () => {
    return (
        <div className="flex justify-between my-4 mx-12 ">
            <div className="font-bold">Shivalik Real Estate</div>
            <ul className="flex items-center justify-between gap-x-6">
                <li>
                    <a className="bg-gray-500 p-2 rounded-lg">Home</a>
                </li>
                <li>
                    <a className="bg-gray-500 p-2 rounded-lg">About Us</a>
                </li>
                <li>
                    <a className="bg-gray-500 p-2 rounded-lg">Products</a>
                </li>
                <li>
                    <a className="bg-gray-500 p-2 rounded-lg">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
