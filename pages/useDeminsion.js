"use client";
import { useEffect, useState } from "react";

export default function useDeminsion(){
    const [dimension , setDimension] = useState({width:0,
    height: 0});

    function updateDimension(){
       const {innerWidth , setInnerWidth} = window;

       setDimension({
        width:innerWidth,
        height: innerHeight
       })
    }


    useEffect(
        ()=>{
            updateDimension();
            window.addEventListener('resize',updateDimension);

            return ()=>{window.removeEventListener('resize', updateDimension)}
        },
        []
    )
    return dimension;
}