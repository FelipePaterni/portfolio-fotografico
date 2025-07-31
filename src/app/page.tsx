'use client'

import Button from "@/components/button/button";
import Navbar from "@/components/navbar/navbar";
import RedesButton from "@/components/RedesButton/RedesButton";

export default function Home() {
  
  if(true){
  return(
<div className="bg-black/90 p-10 flex w-250 h-[75dvh]">
  <RedesButton></RedesButton>
</div>
  )
}
  
else {
  return (
    <div className=" h-dvh z-0">
      <Navbar />
       
      <object className="fixed h-dvh object-fill z-[-1]"  data="customShadow.svg" type="image/svg+xml"></object>
    

      <p className="font-primary text-white text-2xl font-bold">aaaa</p>
      <Button>testee</Button>
    </div>
  );
}
}

//<img  className="fixe  h-dvh w-[72dvw] z-[-1] object-fill" src="customShadow.png" alt="" />