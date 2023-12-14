"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { fetchApi } from "@/app/action";


let page = 1

function LoadMore() {
  const [data,setData] = useState<JSX.Element[]>([])
  const {ref, inView} = useInView()
  useEffect(()=>{
    if(inView){
      fetchApi(page).then((res)=>{
        setData([...data,...res])
        page++
      })
    }
    
  },[inView,data])
  return (
    <>
    <section>
      <div className="container max-w-[1240px] grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
        {data}
      </div>
    </section>
      <section ref={ref} className="flex justify-center items-center w-full">
        <div>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
