"use client";
import React, { useState } from "react";
import MeetingCard from "./MeetingCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

const MeetingLists = () => {
  const [meetingState, setMeetingState] = useState<
    "isSchedulingMeeting" | "isJoiningMeeting" | "isinstantMeeting" | undefined
  >(undefined);
  const router = useRouter();

  const createMeeting = ()=>{
    
  }

  return (
    <div className="flex justify-center items-center mt-4">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      <MeetingCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Setup a new Meeting"
        className="bg-orange-1"
        handleClick={() => setMeetingState("isSchedulingMeeting")}
      />
      <MeetingCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="Via invitation link"
        className="bg-blue-1"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />
      <MeetingCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        className="bg-purple-1"
        handleClick={() => setMeetingState("isinstantMeeting")}
      />
      <MeetingCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Meeting Recordings"
        className="bg-yellow-1"
        handleClick={() => router.push("/recordings")}
      />
      <MeetingModal
        isOpen={meetingState === "isSchedulingMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start a new Meeting"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
      <MeetingModal
        isOpen={meetingState === "isJoiningMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Type Link here"
        buttonText="Join Meeting"
      />
    </div>
    </div>
  );
};

export default MeetingLists;
