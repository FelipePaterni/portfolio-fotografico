import React from "react";

interface Props{
   text:string;
}


export default function Template({text="texto"}:Props){
    return(
        <>
        <h1>{text}</h1>
        </>
    )
}