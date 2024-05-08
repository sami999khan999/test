import Image from "next/image";
import React from "react";

type cardProp = {
  image?: string | undefined;
  title: string;
  description: string;
  height: number;
  width: number;
};

const Card = ({ image, title, description, height, width }: cardProp) => {
  return (
    // <div className=" bg-black p-[2px] rounded-3xl bg-gradient-to-b from-pink-500 via-purple-500 to-vaiolet">
    //   <div className="flex flex-col gap-20 p-10 rounded-[calc(1.5rem-1px)] items-center bg-gradient-to-r from-slate-800 to-slate-700">
    //     <Image
    //       src={image || "/assets/img/temp.svg"}
    //       height={height}
    //       width={width}
    //       alt={title}
    //     />
    //     <div className=" text-white/70 text-left flex flex-col gap-3">
    //       <h3 className="text-2xl text-white md:text-xl">{title}</h3>
    //       <p className="text-lg md:text-sm">{description}</p>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-gradient-to-r from-slate-600 to-slate-500 rounded-2xl shadow-[0px_0px_200px_rgba(0,0,0,0.50)] hover:shadow-[4px_8px_40px_rgba(0,0,1,1.1)] duration-300">
      <div className="flex flex-col gap-20 p-10 rounded-[calc(.8rem-1px)] items-center bg-gradient-to-r from-slate-900/80 to-slate-800/80">
        <Image
          src={image || "/assets/img/temp.svg"}
          height={height}
          width={width}
          alt={title}
        />
        <div className=" text-white/70 text-left flex flex-col gap-3">
          <h3 className="text-2xl text-white md:text-xl">{title}</h3>
          <p className="text-lg md:text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
