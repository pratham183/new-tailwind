import React from 'react'

const Hero = () => {
  return (
    <>
        <section id="hero">
<div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">

<div className="md:w-1/2 mr-32">
        <img src="./assets/img/working.png" alt="illustration"/>
    </div>

    {/* <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better products
        </h1>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae,
             soluta dolorem! Optio molestias, fuga qui quidem laboriosam officia illum sunt.
        </p>
        <div className="flex justify-center md:justify-start">
            <a href="" className="p-3 px-6 pt2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                Get Started
            </a>
        </div>
    </div> */}

<div  className="flex flex-col  space-y-16 md:w-1/2">
<p className="text-bold items-center  text-5xl pl-16">How It Works</p>
<div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row ">

    <div className=" md:bg-transparent">
        <div className="flex items-center space-x-2">
            <div className="px-4 py-2 text-white md:py-1  w-40">
            <img src="./assets/img/rectangle35.png" alt="illustration"/>
            </div>
            <h3 className="text base font-bold md:mb-4 md:hidden mt-48">
                Shop/Visit Your Favourite Website.
            </h3>
        </div>
    </div>
    <div>
        <h3 className=" hidden mb-4 text-lg font-bold md:block pt-8">
          
                Shop/Visit Your Favourite Website.
        </h3>
        
    </div>
</div>  

<div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
    <div className=" md:bg-transparent">
        <div className="flex items-center space-x-2">
            <div className="px-4 py-2 text-white  md:py-1  w-40 ">
            <img src="./assets/img/paymentSuccessful.png" alt="illustration"/>
            </div>
            <h3 className="text base font-bold md:mb-4 md:hidden">
            Find Greattr under Pay Later and Pay with One Tap.
            </h3>
        </div>
    </div>
    <div>
        <h3 className=" hidden mb-4 text-lg font-bold md:block">
        Find Greattr under Pay Later and Pay with One Tap.
        </h3>
        
    </div>
</div>

<div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">

    <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
        <div className="flex items-center space-x-2 w-40">
            <div className="px-4 py-2 text-white  md:py-1 ">
            <img src="./assets/img/giftBox.png" alt="illustration"/>
            </div>
            <h3 className="text base font-bold md:mb-4 md:hidden">
                Repay through our APP and get Rewards.
            </h3>
        </div>
    </div>
    <div>
        <h3 className=" hidden mb-4 text-lg font-bold md:block">
        Repay through our APP and get Rewards.
        </h3>
      
    </div>
</div>

</div>

    
</div>
</section>
    </>
  )
}

export default Hero