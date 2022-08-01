import React from 'react'

const Header = () => {
    return (
        <>
        


            <nav className="relative container mx-auto p-6">

                <div className="flex items-center justify-between">

                    <img src="./assets/img/logo.svg" alt="logo" />


                    <div className="hidden md:flex space-x-6">
                        <a href="" className="hover:text-darkGrayishBlue">Pricing</a>
                        <a href="" className="hover:text-darkGrayishBlue">Product</a>
                        <a href="" className="hover:text-darkGrayishBlue">About Us</a>
                        <a href="" className="hover:text-darkGrayishBlue">Careers</a>
                        <a href="" className="hover:text-darkGrayishBlue">Community</a>
                    </div>
                    <a href="" className="hidden md:block p-3 px-6 pt2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                        Get Started
                    </a>
                </div>

            </nav>
           
        </>
    )
}

export default Header