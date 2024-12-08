
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface meetingListProps {
    img : string
    title : string
    description : string
    handleClick : () => void
    className : string
}


const MeetingCard = ({img,title,description,handleClick,className} : meetingListProps) => {
  return (
    <div className={cn("flex flex-col $ w-[215px] h-[215px] rounded-lg cursor-pointer justify-between",className)}
    onClick={handleClick}>
      <Image
        className="glassmorphism rounded-lg p-2 m-2 w-[36px] h-[36px] cursor-pointer hover:scale-125"
        src= {img}
        alt="Add meeting"
        width={40}
        height={40}
      />
      <div className="flex flex-col m-2 p-2 ">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default MeetingCard;
