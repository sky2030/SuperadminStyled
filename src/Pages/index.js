import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';


const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />


        </>
    )
}

export default Navigation
