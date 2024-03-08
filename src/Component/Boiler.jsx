import React from "react";
import Kp from "./Kp"
import Border from './Border'
import Bottom from './Bottom'
function Boiler() {
    return(
<>

<div className=" w-screen h-screen  bg-black align-middle flex items-center pl-16 gap-20     ">
    <Border/>

 <div className="w-[950px] h-[550px]  border-slate-400 rounded-3xl relative ">

<Kp/>
    <div className=" ml-52 mt-16 absolute bottom-0">
    <Bottom/>
    </div>

</div>
</div>
{/* last div */}




</>
    );
}
export default Boiler;