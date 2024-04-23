import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <form className='flex items-center gap-2'>
      <Input placeholder='Search....' className='input input-bordered rounded-full'/>
      <Button type='submit' className='btn btn-circle bg-sky-500 rounded-full  text-white'>
        <Search className='w-6 h-6 outline-none'/>
      </Button>
    </form>
  )
}

export default SearchBar
