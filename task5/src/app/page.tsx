import Header from "@/components/header";
import React from "react";
import Image from "next/image";

export default function Home(){
  return(
    <div>
      <Header/>
      <div className="h-screen mt-32 flex flex-col lg:flex-row items-center lg:items-start">
           <div className="w-full lg:w-1/2 flex flex-col lg:items-start px-4 items-center lg:px-20">
              <div className="text-3xl md:text-4xl mt-10 font-bold lg:mt-20 text-center lg:text-left">
                <h1>IMPECCABLE</h1>
                <h1>CRAFTSMANSHIP</h1>
                <h1>FINESSE</h1>
              </div>
              <p className="text-[#A29875]  text-center lg:w-[550px] mt-4 lg:text-left text-sm  w-full font-semibold ">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
              <button className="bg-[#A29875] text-white mt-8 lg:mt-10 w-[200px] md:w-[250px] lg:w-[288px] h-[58px] top-[730px] left-176 rounded-lg">
                Explore Now
              </button>
            </div>
            <div className="h-auto w-[380.1px] md:w-[400px] mt-10 lg:mt-0 lg:w-[462px] lg:ml-16">
                <Image src={"/image .jpg"}
                  alt='image'
                  width={380.1}
                  height={525.43}/>
            </div>
       </div>
    </div>
  )
}
