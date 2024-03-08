import React from "react";
import img1 from "./image/me.jpg"
import img2 from "./image/instagram (2).png"
import img3 from"./image/email.png"

function Border() {
    return(
        <>
        
<div>

 <div className="w-[350px] h-[550px] border-2 border-slate-700 rounded-3xl justify-center ">

<h1 className=" font-rale ml-12 text-2xl text-slate-200 font-bold mt-6">
Kuvarji Gupta
</h1>
<h4 className="font-rale  text-base ml-20 mt-1   text-slate-200 font-bold ">
    Web Developer
</h4>

<div className="pl-8 mt-5 flex gap-6">
<img className="w-[200px] h-[200px] rounded-2xl object-cover" src={img1} alt="" />


{/* image */}
<div className="flex gap-6">
<div className="w-[40px] h-[200px]   flex-col">
    <center>
<img className="w-[30px] bg-black rounded-full border-2 border-green-800 p-1" src={img2} alt="" />
<br />
<img className="w-[30px] bg-black rounded-full border-2 border-green-800  p-1" src={img2} alt="" />
<br />
<img className="w-[30px] bg-black rounded-full border-2 border-green-800  p-1" src={img2} alt="" />
<br />
<img className="w-[30px] bg-black rounded-full border-2 border-green-800  p-1" src={img2} alt="" />

</center>
</div>
<div className="border-2 border-spacing-y-2 border-green-500">
</div>

</div>

{/* iamge */}



{/* image div */}
</div>
<div className=" mt-5 pl-9">
<span className="font-rale text-slate-300 text-center font-semibold text-sm">
    kuvarjigupta2004@gmail.com
</span>
</div>

<div className=" mt-2 pl-14">
<span className="font-rale text-slate-300 font-semibold text-center text-base">
   Lucknow,U.P,India
</span>
</div>


<div className=" mt-5 pl-9">
<span className="font-rale text-slate-300 font-thin text-center text-xs">
© 2023 Shivam. All Right Reserved
</span>
</div>

<div className=" mt-10">
<center>
    <button className=" flex justify-center gap-4 bg-green-400 w-[200px] p-3 rounded-2xl font-rale font-semibold  ">
    <img className="w-[20px] h-[20px]" src={img3} alt="" />
Contact Me
    </button>
</center>
</div>

{/* boreder div */}
    </div>
    </div>

        
        </>
    );
}
export default Border;