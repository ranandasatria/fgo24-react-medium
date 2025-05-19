import React from 'react'
import { Search } from 'lucide-react';
import { User } from 'lucide-react';

function Navbar(){
  return(
     <>
    <nav className='px-40 py-4 max-w gap-24 flex justify-between items-center'>
      
        <div><img className="h-5 w- 10" src="/assets/Medium_logo.png"/></div>
         <div className="flex w-sm items-center gap-2.5 border rounded-2xl px-2">
          <Search color="black" size={12} />
          <input
            type="search"
            id=''
            placeholder='Search'
            className="outline-none flex-1"
          />
       
      </div>
      <User color="black" size={24}/> 
    </nav>
    </>
  )
}

export default Navbar