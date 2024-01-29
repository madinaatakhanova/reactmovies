//images
import Sub2 from "../images/Sub2.png";
import img from "../images/img.png";
//icons
import { LiaFlagUsaSolid } from "react-icons/lia";
export default function Support() {
  return (
    <div className="bg-tree text-white">
      <main className="mt-[138px]">
        <div className="ml-[162px] flex">
          <div className="">
            <h2 className="text-[48px]">
              Welcome to our <br /> support page!
            </h2>
            <p className="text-[18px] mt-[14px]">
              We're here to help you with any problems you may be having with{" "}
              <br /> our product.
            </p>
            <img className="mt-[50px] w-[533px] h-[477px]" src={Sub2} alt="" />
          </div>
          <div className="w-[976px] h-[739px] border ml-[80px] rounded-[12px] border-br">
            <div className="flex mt-[50px]">
              <div className="ml-[50px]">
                <h2 className="text-[18px]">First Name</h2>
                <input
                  className="w-[413px]  bg-nav  h-[67px] text-[18px] mt-[16px] rounded-[8px] px-5"
                  type="text"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="ml-[50px]">
                <h2 className="text-[18px]">Last Name</h2>
                <input
                  className="w-[413px]  bg-nav  h-[67px] mt-[16px] text-[18px] rounded-[8px] px-5"
                  type="text"
                  placeholder=" Enter Last Name"
                />
              </div>
            </div>
            <div className="ml-[50px] mt-[50px] flex">
              <div className="">
                <h2 className="text-[18px]">Email</h2>
                <input
                  className="w-[413px] bg-nav h-[67px] mt-[16px] text-[18px] rounded-[8px] px-5"
                  type="text"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="ml-[50px] mt-[px]">
                <h2 className="text-[18px]">Phone Number</h2>
                <select className="w-[70px] text-nav h-[67px] mt-[16px] bg-nav  rounded-[8px]  ">
                  <LiaFlagUsaSolid className="w-[40px] h-[40px]" />
                </select>
                <input
                  className="bg-nav h-[67px]  rounded-[8px] ml-[16px] px-5 w-[303px]"
                  type="text"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
            <div className="ml-[50px] mt-[50px]">
              <h2 className="text-18px">Message</h2>
              <input
                type="text"
                placeholder="Enter your Message"
                className="w-[876px] h-[163px] px-5 text-18px bg-nav rounded-[8px] mt-[16px]"
              />
            </div>
            <div className="ml-[50px] mt-[50px] flex items-center justify-between">
              <div className="flex">
                <input type="checkbox" />
                <p className="ml-[10px] text-[18px] text-gray-400">
                  I agree with Terms of Use and Privacy Policy
                </p>
              </div>
              <button className="bg-btn  w-[173px] h-[63px] rounded-[8px] mr-[50px]">
                Send Message
              </button>
            </div>
          </div>
        </div>
        <div className="  mt-[150px]   ml-[162px]">
          <div className="flex justify-between items-end">
            <div className="">
              <h2 className="text-[38px]">Frequently Asked Questions</h2>
              <p className="mt-[14px] text-[18px]">
                Got questions? We've got answers! Check out our FAQ section to
                find answers to the most common questions about StreamVibe.
              </p>
            </div>
            <button className=" bg-btn rounded-[8px] w-[176px] h-[63px] text-[18px] mr-[212px]">
              Ask a Question
            </button>
          </div>
          <img className="mt-[80px]" src={img} alt="" />
        </div>
      </main>
    </div>
  );
}
