export default function Subscriptions() {
  return (
    <div className="">
      <div className="w-[1596px]    mt-[100px] ml-[162px] h-[618px] text-white">
        <div className=" flex justify-between items-end ">
          <div className="">
            <h1 className="text-[48px]">
              Choose the plan that's right for you
            </h1>
            <p className="mt-[14px]">
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </p>
          </div>
          <div className="flex border border-nav w-[237px] h-[75px] items-center rounded-[10px] bg-black">
            <button className=" ml-[10px] w-[118px] h-[55px] bg-nav  rounded-[10px] ">
              Monthly
            </button>
            <button className="w-[99px] h-[55px]  ">Yearly</button>
          </div>
        </div>
        <div className="mt-[80px] flex">
          <div className="w-[512px] h-[425px] rounded-[12px] bg-nav">
            <h2 className="text-[24px]  ml-[50px]  mt-[50px] ">Basic Plan</h2>
            <p className="mt-[16px]  ml-[50px] ">
              Enjoy an extensive library of movies and shows, <br /> featuring a
              range of content, including recently <br /> released titles.
            </p>
            <div className="flex items-center  ml-[50px]  mt-[50px] ">
              <h3 className="text-[40px]">$9.99</h3>
              <span>/month</span>
            </div>
            <div className=" ml-[50px]  mt-[50px] ">
              <button className="bg-black w-[196px] h-[63px] rounded-[8px]">
                Start Free Trial
              </button>
              <button className="bg-btn w-[196px] h-[63px] ml-[20px] rounded-[8px]">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="w-[512px] ml-[30px] h-[425px] rounded-[12px] bg-nav ">
            <h2 className="text-[24px]  ml-[50px]  mt-[50px] ">
              Standard Plan
            </h2>
            <p className="mt-[16px]  ml-[50px] ">
              Enjoy an extensive library of movies and shows, <br /> featuring a
              range of content, including recently <br /> released titles.
            </p>
            <div className="flex items-center  ml-[50px]  mt-[50px] ">
              <h3 className="text-[40px]">$12.99</h3>
              <span>/month</span>
            </div>
            <div className=" ml-[50px]  mt-[50px] ">
              <button className="bg-black w-[196px] h-[63px] rounded-[8px]">
                Start Free Trial
              </button>
              <button className="bg-btn w-[196px] h-[63px] ml-[20px] rounded-[8px]">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="w-[512px] h-[425px] rounded-[12px] ml-[30px] bg-nav ">
            <h2 className="text-[24px]  ml-[50px]  mt-[50px] ">Premium Plan</h2>
            <p className="mt-[16px]  ml-[50px] ">
              Enjoy an extensive library of movies and shows, <br /> featuring a
              range of content, including recently <br /> released titles.
            </p>
            <div className="flex items-center  ml-[50px]  mt-[50px] ">
              <h3 className="text-[40px]">$14.99</h3>
              <span>/month</span>
            </div>
            <div className=" ml-[50px]  mt-[50px] ">
              <button className="bg-black w-[196px] h-[63px] rounded-[8px]">
                Start Free Trial
              </button>
              <button className="bg-btn w-[196px] h-[63px] ml-[20px] rounded-[8px]">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white  w-[1597px] h-[1234px] ml-[162px] mt-[150px]">
        <h2 className="text-[48px]">
          Compare our plans and find the right one for you
        </h2>
        <p className="mt-[14px]">
          StreamVibe offers three different plans to fit your needs: Basic,
          Standard, and Premium. Compare the features of each plan and choose
          the one that's right for <br /> you.
        </p>
        <div className="mt-[80px]  border-nav flex border">
          <button className="w-[400px] h-[90px] border  border-nav bg-black">
            Features
          </button>
          <button className="w-[400px] h-[90px]  bg-black  border-nav border">
            Basic
          </button>
          <div className="w-[400px] h-[90px]  bg-black border  border-nav text-center items-center">
            <button className=" mt-[30px]">Standard</button>
            <button className="bg-btn w-[71px] h-[22px] ml-[8px] rounded-[2px]">
              Popular
            </button>
          </div>
          <button className="w-[400px]  bg-black h-[90px]  border-nav border">
            Premium
          </button>
        </div>
        <div className="flex text-gray-400 text-[18px] items-center text-center">
          <div className="w-[400px] h-[87px]  border-nav border items-center ">
            <p className="mt-[30px]">Price</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav border">
            <p className="mt-[30px]">$9.99/Month</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav border">
            <p className="mt-[30px]">$12.99/Month</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav  border">
            <p className="mt-[30px]">$14.99/Month</p>
          </div>
        </div>
        <div className="flex text-gray-400 text-[18px] items-center text-center">
          <div className="w-[400px] h-[141px]  border-nav border items-center ">
            <p className="mt-[50px]">Content</p>
          </div>
          <div className="w-[400px] h-[141px]  border-nav border">
            <p className="mt-[30px]">
              Access to a wide selection of movies <br /> and shows, including
              some new <br /> releases.
            </p>
          </div>
          <div className="w-[400px] h-[141px]  border-nav border">
            <p className="mt-[30px]">
              Access to a wider selection of movies <br /> and shows, including
              most new releases <br /> and exclusive content
            </p>
          </div>
          <div className="w-[400px] h-[141px]  border-nav  border">
            <p className="mt-[30px]">
              Access to a widest selection of movies <br /> and shows, including
              all new releases <br /> and Offline Viewing
            </p>
          </div>
        </div>

        <div className="flex text-gray-400 text-[18px] items-center text-center">
          <div className="w-[400px] h-[87px]  border-nav border items-center ">
            <p className="mt-[30px]">Free Trail</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav border">
            <p className="mt-[30px]">7 Days</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav border">
            <p className="mt-[30px]">7 Days</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav  border">
            <p className="mt-[30px]">7 Days</p>
          </div>
        </div>

        <div className="flex text-gray-400 text-[18px] items-center text-center">
          <div className="w-[400px] h-[87px]  border-nav border items-center ">
            <p className="mt-[30px]">Cancel Anytime</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav border">
            <p className="mt-[30px]">Yes</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav border">
            <p className="mt-[30px]">Yes</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav border">
            <p className="mt-[30px]">Yes</p>
          </div>
        </div>

        <div className="flex text-gray-400 text-[18px] items-center text-center">
          <div className="w-[400px] h-[87px]  border-nav border items-center ">
            <p className="mt-[30px]">HDR</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav border">
            <p className="mt-[30px]">No</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav border">
            <p className="mt-[30px]">Yes</p>
          </div>
          <div className="w-[400px] h-[87px]   border-nav  border">
            <p className="mt-[30px]">Yes</p>
          </div>
        </div>

        <div className="flex text-gray-400 text-[18px] items-center text-center">
          <div className="w-[400px] h-[87px]  border-nav border items-center ">
            <p className="mt-[30px]">Dolby Atmos</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav border">
            <p className="mt-[30px]">No</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav border">
            <p className="mt-[30px]">Yes</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav  border">
            <p className="mt-[30px]">Yes</p>
          </div>
        </div>

        <div className="flex text-gray-400 text-[18px] items-center text-center">
          <div className="w-[400px] h-[87px]  border-nav border items-center ">
            <p className="mt-[30px]">Ad - Free</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav border">
            <p className="mt-[30px]">No</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav border">
            <p className="mt-[30px]">Yes</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav  border">
            <p className="mt-[30px]">Yes</p>
          </div>
        </div>

        <div className="flex text-gray-400 text-[18px] items-center text-center">
          <div className="w-[400px] h-[87px]  border-nav border items-center ">
            <p className="mt-[30px]">Offline Viewing</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav border">
            <p className="mt-[30px]">No</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav border">
            <p className="mt-[30px]">Yes, for select titles.</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav  border">
            <p className="mt-[30px]">Yes, for all titles.</p>
          </div>
        </div>

        <div className="flex text-gray-400 text-[18px] items-center text-center">
          <div className="w-[400px] h-[87px] border  border-nav items-center ">
            <p className="mt-[30px]">Family Sharing</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav border">
            <p className="mt-[30px]">No</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav border">
            <p className="mt-[30px]">Yes, up to 5 family members.</p>
          </div>
          <div className="w-[400px] h-[87px]  border-nav  border">
            <p className="mt-[30px]">Yes, up to 6 family members.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
