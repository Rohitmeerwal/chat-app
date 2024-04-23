/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-async-client-component */
'use client'
import React, { useEffect } from 'react'
import SideBar from '../sidebar/sideBar'
import MessageContainer from '../messages/messageContainer'
import axiosinstance from '@/axiosinstance';
import {setProfile } from '@/redux/reducers/slice';
import {  useDispatch } from "react-redux";


const Main = async () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosinstance.get("/users/fetch");
        const user = res.data;
       const userProfile=  dispatch(setProfile(user));
          console.log(userProfile,"redux m data")
        } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchData(); 
  }, [dispatch]);

  return (
     
    <div className='flex  sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <SideBar/>
      <MessageContainer/>
    </div>
    
  )
}

export default Main

