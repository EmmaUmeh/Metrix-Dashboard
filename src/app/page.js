"use client";

import { useState, useEffect } from "react";
import DoughnutChart from "@/components/DoughnutChart";
import Image from "next/image";
import { BiChevronDown, BiFolder } from "react-icons/bi";

export default function Home() {

  const [dummydata, setDummyData] = useState([])


 function Fetchdata() {
  let items = [
    {
      id: 0,
      image: "/goldeniphone.svg",
      phonedetails: "Iphone 13",
      date: "12 Sept 2022",
      price: "₦730,000.00 x 1",
      status: "Pending",
      numberOfitems: "32",
    },
    {
      id: 1,
      image: "/blackiphone.svg",
      phonedetails: "Iphone 13",
      date: "12 Sept 2022",
      price: "₦730,000.00 x 1",
      status: "Completed",
      numberOfitems: "32",
    },
  ];

    let repeatitems = [];
  for(var i = 0; i < 5; i++){
    console.log("all items", items)
    repeatitems = repeatitems.concat(items)
  }

setDummyData(repeatitems)
 }

useEffect(() => {
Fetchdata();
}, [])


  return (
    <div className="pl-[20px] pr-[20px]  mt-[20px] sm:ml-[0px] md:ml-[0px] sm:pl-7 md:pl-7">

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-1 md:grid-cols-1 items-center">
        <div className="bg-white rounded-md py-5 px-5  sm:w-full md:w-full">
          <div className="flex justify-between mb-10 px-[15px] py-[15px]">
            <div className="bg-[#F4F5FA] rounded-[8px] py-2 px-2">
              <Image
                src="/Graph.svg"
                width={25}
                height={25}
                alt="graph_image"
              />
            </div>

            <div className="flex">
              <span className="text-[#BEC0CA]">This Week</span>
              <span>
                <BiChevronDown size={20} color="#BEC0CA" />
              </span>
            </div>
          </div>

          <div className="flex justify-between mb-3">
            <span className="text-[#8B8D97]">Sales</span>
            <span className="text-[#8B8D97]">Volume</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#45464E]">₦4,000,000.00</span>
            <div>
              <span className="text-[#45464E]">450</span>
              <span className="ml-2 text-xs text-[#519C66]">+20.00%</span>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="bg-white rounded-md  py-5 px-5 sm:w-[100%] md:w-[100%]">
          <div className="flex justify-between mb-10 px-[15px] py-[15px]">
            <div className="bg-[#FFCC91] rounded-[8px] py-2 px-2">
              <Image src="/User.svg" width={25} height={25} alt="graph_image" />
            </div>

            <div className="flex">
              <span className="text-[#BEC0CA]">This Week</span>
              <span>
                <BiChevronDown size={20} color="#BEC0CA" />
              </span>
            </div>
          </div>

          <div className="flex justify-between mb-3">
            <span className="text-[#8B8D97]">Customers</span>
            <span className="text-[#8B8D97]">Active</span>
          </div>

          <div className="flex justify-between">
            <div>
              <span className="text-[#45464E]">1,250</span>
              <span className="ml-2 text-xs text-[#519C66]">+15.80%</span>
            </div>

            <div>
              <span className="text-[#45464E]">1,180</span>
              <span className="ml-2 text-xs text-[#519C66]">85%</span>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="bg-white rounded-md py-5 px-5 sm:w-[100%] md:w-[100%] sm:pl-7 md:pl-7">
          <div className="flex justify-between mb-10 px-[15px] py-[15px]">
            <div className="bg-[#FFCC91] rounded-[8px] px-2 py-2">
              <Image src="/Bag.svg" width={25} height={25} alt="graph_image" />
            </div>

            <div className="flex">
              <span className="text-[#BEC0CA]">This Week</span>
              <span>
                <BiChevronDown size={20} />
              </span>
            </div>
          </div>

          <div className="flex justify-between mb-3">
            <span className="text-[#8B8D97]">All Orders</span>
            <span className="text-[#8B8D97]">Pending</span>
            <span className="text-[#8B8D97]">Completed</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#8B8D97]">450</span>
            <span className="text-[#8B8D97]">5</span>
            <span className="text-[#8B8D97]">445</span>
          </div>
        </div>
      </div>

      {/* second */}
      <div className="grid grid-cols-3 gap-3 mt-5 mb-5  sm:flex-col md:flex-col sm:flex md:flex">
      <div className="bg-white rounded-md py-5 h-[70vh] px-5 sm:w-[100%] md:w-[100%]">
          <div className="flex justify-between flex-wrap align-center mb-10 px-[15px] py-[15px]">
            <div className="">
            <span className="text-[#45464E]">Marketing</span>
            </div>

            <div className="flex">
              <span className="text-[#BEC0CA]">This Week</span>
              <span>
                <BiChevronDown size={20} color="#BEC0CA" />
              </span>
            </div>
          </div>

          <div className="flex justify-around flex-wrap align-center mb-5">
            <div className="flex"><span className="bg-[#5570F1] w-[10%] h-[10px]"></span> Acquisition</div>
            <div className="flex"><span className="bg-[#5570F1]"></span> Rentention</div>
            <div className="flex"><span className="bg-[#5570F1]"></span> Purchase</div>
        </div>
          

          <DoughnutChart />
        </div>

          <div className="">
                <div className="mb-5 bg-[#5570F1] rounded-md py-5 px-5 sm:w-[100%] md:w-[100%]">
                <div className="flex justify-between mb-10 px-[15px] py-[15px]">
                  <div className="bg-[#F4F5FA] rounded-[8px] py-2 px-2">
                    <Image src="/folder.svg" width={25} height={25} alt="graph_image" />
                  </div>

                </div>

                <div className="flex justify-between mb-3">
                  <span className="text-[#FFFFFF]">All Products</span>
                  <span className="text-[#FFFFFF]">Active</span>
                </div>

                <div className="flex justify-between">
                  <div>
                    <span className="text-[#FFFFFF]">45</span>
                   
                  </div>

                  <div>
                    <span className="text-[#FFFFFF]">32</span>
                    <span className="ml-2 text-xs text-[#DBDEEE]">+24%</span>
                  </div>
                </div>
              </div>  

              <div className="bg-white rounded-md py-5 px-5 sm:w-[100%] md:w-[100%]">
                <div className="flex justify-between mb-10 px-[15px] py-[15px]">
                  <div className="bg-[#FFCC91] rounded-[8px] py-2 px-2">
                    <Image src="/User.svg" width={25} height={25} alt="graph_image" />
                  </div>

                  <div className="flex">
                    <span className="text-[#BEC0CA]">This Week</span>
                    <span>
                      <BiChevronDown size={20} color="#BEC0CA" />
                    </span>
                  </div>
                </div>

                <div className="flex justify-between mb-3">
                  <span className="text-[#8B8D97]">Customers</span>
                  <span className="text-[#8B8D97]">Active</span>
                </div>

                <div className="flex justify-between">
                  <div>
                    <span className="text-[#45464E]">1,250</span>
                    <span className="ml-2 text-xs text-[#519C66]">+15.80%</span>
                  </div>

                  <div>
                    <span className="text-[#45464E]">1,180</span>
                    <span className="ml-2 text-xs text-[#519C66]">85%</span>
                  </div>
                </div>
              </div> 
          </div>        

          {/* Phone category */}
          <div className="">
                <div className="mb-5 bg-[#FFFFFF] rounded-md py-5 pl-[10px] pr-[10px] sm:w-[100%] md:w-[100%]">
                <div className="mb-10 px-[15px] py-[15px]">
                  <div className="px-2">
                  <span className="text-[#000000]">Recents Order</span>
                  </div>

                </div>

                <div>
                <div>
                {dummydata.length > 0 &&
                  dummydata.map((item, index) => {
                    return (
                      <div key={index} className="flex items-center mb-2">
                      <Image
                        src={item.image}
                        width={50}
                        height={50}
                        alt="graph_image"
                      />
                      <div className="flex flex-col flex-grow">
                      <div className="flex flex-grow justify-between">
                        <span className="text-[#00000]">
                          {item.phonedetails}
                        </span>
                        <span className="text-[#A6A8B1]">
                          {item.date}
                        </span>
                      </div>
                      <div className="flex flex-grow justify-between">
                        <span className="text-[#00000]">
                          {item.price}
                        </span>
                        <span className="text-[#A6A8B1] rounded-[8px]">
                          {item.status}
                        </span>
                      </div>
                      </div>
                    </div>
                    
                    );
                  })}
              </div>
                </div>
                {/* <div className="">
                  <div className="flex items-center mb-2">
                    <Image src="/goldeniphone.svg" width={50} height={50} alt="graph_image" />
                    <div className="flex justify-between">
                      <span className="text-[#00000]"></span>
                      <span className="text-[#A6A8B1] flex justify-end">12 Sept 2022</span>
                    </div>
                  </div>  
                   <div className="">
                   

                    <div className="flex justify-between">
                  <div>
                  <span className="text-[#00000]">₦730,000.00 x 1</span>
                  </div>

                  <div>
                    <span className="text-[#00000]">32</span>
                  </div>
                </div>
                   </div>
                </div> */}



                </div>
            


              </div>
      </div>
      
    </div>
  );
}
