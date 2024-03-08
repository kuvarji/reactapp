import React from "react";
import { Link } from "react-router-dom";
import img5 from './image/home (2).png'
import img6 from './image/menu.png'
import img7 from './image/document.png'
import img8 from './image/user.png'


function Bottom(){
   
    return(
        <>
        
        <div className="w-[280px] h-[50px] border-2 flex justify-center  p-6 rounded-xl border-slate-400 gap-8 items-center">
   <Link to="/">
   <img className="w-[30px] h-[30px]" src={img5} alt="" />
   </Link>
     
<Link to="/menu">
<img className="w-[30px] h-[30px]" src={img6} alt="" />
</Link> 
<Link to="/education">
<img className="w-[30px] h-[30px]" src={img7} alt="" />
</Link>
<Link to="/cont">
<img className="w-[30px] h-[30px]" src={img8} alt="" />
</Link>
</div>




        </>


    )
    

}
export default Bottom;