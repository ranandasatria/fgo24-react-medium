import React from 'react'
import { Search } from 'lucide-react';
import { User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Navbar(){

const navigate = useNavigate()
const handleOnClik = () =>{
  navigate('/')
}


  return(
     <>
    <nav className='px-40 py-4 max-w gap-24 flex justify-between items-center'>
        <img className="h-5 w- 10 cursor-pointer" src="/assets/Medium_logo.png" onClick={handleOnClik} />
      <User color="black" size={24}/> 
    </nav>
    </>
  )
}

export default Navbar