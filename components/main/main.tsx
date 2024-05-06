"use client"
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-async-client-component */
import React, { useEffect } from 'react'
import SideBar from '../sidebar/sideBar'
import MessageContainer from '../messages/messageContainer'
import axiosinstance from '@/axiosinstance';
import {setProfile } from '@/redux/reducers/slice';
import {  useDispatch } from "react-redux";


const Main =  () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosinstance.get("/users/fetch");
        const user = res.data;
       const userProfile=  dispatch(setProfile(user));
          } catch (error) {
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

