"use client"
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import React, { useState } from 'react'
import MeetingRoom from '@/components/meetingRoom';
import MeetingSetup from '@/components/meetingSetup';
import { useGetCallById } from '@/hooks/useGetCallByID';
import Loader from '@/components/loader'

const meeting = ({ params: {id} }: { params: { id: string } }) => {

    const {user, isLoaded} = useUser();

    const {call, isCallLoading } = useGetCallById(id);

    const [isSetupComplete, setIsSetupComplete] = useState(false);

    if(!isLoaded || isCallLoading) return <Loader />
    return (
        <main className="h-screen w-full">
            <StreamCall call={call}>
                <StreamTheme>
                    {!isSetupComplete ? (
                        <MeetingSetup setIsSetupComplete={setIsSetupComplete}/>
                    ) : (
                        <MeetingRoom />
                    )}
                </StreamTheme>
            </StreamCall>
        </main>
    )
}

export default meeting
