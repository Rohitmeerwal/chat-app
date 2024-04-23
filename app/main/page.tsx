'use client'
import Main from '@/components/main/main'
import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

const page = () => {
  return (
    <Provider store={store}>    
    <div className=" h-screen flex justify-center items-center bg-blue-400 bg-backgroundImage"> 
      <Main/>
    </div>
    </Provider>
  )
}

export default page
