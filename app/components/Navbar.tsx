import React from 'react'
import { Link } from 'react-router'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='flex text-white bg-gray-950 p-4 items-center justify-between'>
       <div>
        {/* replace with logo */}
            <p className='font-bold text-lg'>Cryptos</p>
        </div>
        <div className='flex items-center w-1/3'>
            <Search className='inline mr-2 text-white'/>
            <input 
            type="text" 
            placeholder='Search Cryptos'
            className='px-2 py-1 rounded-lg w-full text-white ring'
            />
        </div>
        <div className='flex gap-2'>
            <Link to='/'><Button className='cursor-pointer'>Home</Button></Link>
            <Link to='/'><Button className='cursor-pointer'>Search Model</Button></Link>
            <Link to='/'><Button className='cursor-pointer'>All Cryptos</Button></Link>
        </div>
    </nav>
  )
}

export default Navbar