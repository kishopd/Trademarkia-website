import image1 from "../assets/image1.svg";
import image2 from "../assets/mutli.svg";
import image3 from "../assets/star.svg";
import image4 from "../assets/Rectangle.svg";
import image5 from "../assets/squareai.svg";
import frame from "../assets/frame.png";
import charging from "../assets/charging.svg";
import row1 from "../assets/row1.png";
import row2 from "../assets/row2.png";
import rows1 from "../assets/rows1.png";

import price1 from "../assets/price1.png";
import price2 from "../assets/price2.png";
import price3 from "../assets/price3.png";
import price4 from "../assets/price4.png";


export default function Header() {
  // Your component logic goes here

  return (
    // JSX for your header component
    <>    <div>
    <div className="bgcolor py-10 flex  ">
     <h1 className="text-white pl-10 text-2xl gil " >Trademarkia <span className="a-color font-bold">a</span><span className="two-color-i font-bold">i</span></h1>
    <div className="text-white flex pl-5 justify-evenly gil header-hover ">
      
    <h1 className="pl-60 text-xl ">Home</h1>
    <h1 className="pl-12 text-xl ">Explore AI Tools</h1>
    <h1 className="pl-12 text-xl ">Trademarkia Global</h1>
    
    <img className="pl-40"
        src={image1}
        alt="sign up page"
    />
   </div>
    </div>
    </div>
    
 <div className="flex justify-center py-10">
 <img src={image3} alt="" className="" />
 <img src={image2} alt="sign up page" />
 <p className="gradient text-2xl sk" >Using Artifical Intelligence</p>
 </div>
        
    <h1 className="text-5xl text-white flex justify-center leading-normal sk font-semibold">
    Experience The Power <br /> Of Legal Automation
    </h1>
  <img src={image3} alt="" />

    <p className="text-white flex justify-center gil">
    The new standard for trademark protection and hassle free trademark management
    </p>
    <img src={image5} alt="" />
   <div className="relative">
  <img className="max-w-screen-md mx-auto" src={image4} alt="" />
  <p className="gil absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
  Try Trademarkia AI
  </p>
</div>
<div className="flex items-center justify-center">
  <img className="block" src={frame} alt="" />
</div>
{/* next partt */}
 <p className="text-white text-center py-16 gil" >
  Trademarkia.ai is a division of Trademarkia focused on artificial intelligence.
  </p>

<div className="flex justify-center py-12">
<img src={charging} alt="" className="" />
<h1 className="text-white text-4xl leading-normal sk font-bold">
Powerful platform to <br />manage your Trademark assets
</h1>

</div>

<p className="text-center text-white py-12 gil">
Trademark Search, Watch and Brand Protection made easy with Trademarkia.ai
</p>

<div className="flex justify-evenly py-16">
<img src={row1} alt="" />
<img src={row2} alt="" />
<img src={row3} alt="" />

</div>

  <h1 className="text-white text-center text-4xl sk font-bold py-8">
  Automate Trademark Comparison responses in real time
  </h1>

    <p className="text-white text-center gil py-6">
      Generate legal responses in a whole new way</p>

    <div className="flex justify-center py-8">
    <img className="pr-2" src={rows1} alt="" />
    <img className=" pl-4" src={rows2} alt="" />
    </div>

<h1 className="text-white text-4xl text-center py-12 sk font-bold ">
Simple Transparent Pricing
</h1>
<p className="text-white text-center pb-8">
Choose a plan tailored to your needs
</p>

<div className="flex justify-evenly mx-60 py-10">
<img src={price1} alt="" />
<img src={price2} alt="" />
<img src={price3} alt="" />
<img src={price4} alt="" />

</div>

    </>

  );
}
