import React from 'react';
import { FaBars } from 'react-icons/fa';
import { AiFillHome } from "react-icons/ai";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { FaHospitalAlt, FaUserMd, FaBed } from 'react-icons/fa';
//import { IoCallSharp } from 'react-icons/io';
import { MdCall } from 'react-icons/md';

//import { BiLogOut } from 'react-icons/bi'


import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';


const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo href='/' to='/Dashboard'>
                        <span style={{
                            fontSize: '65px'
                        }}>+</span>VRCure
               </NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/Dashboard">

                                < AiFillHome
                                    style={{
                                        color: 'white',
                                        marginBottom: '3px',
                                        fontSize: '17px',
                                        marginRight: '4px',
                                        fontWeight: 'bold'
                                    }}
                                />
                                <p style={{
                                    color: 'white',
                                    fontWeight: 'normal',
                                    fontSize: '15px',
                                    marginBottom: '2px'
                                }}>Dashboard</p>
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/Allhospitals">
                                < FaHospitalAlt style={{
                                    color: 'white',
                                    marginBottom: '3px',
                                    fontSize: '15px',
                                    marginRight: '4px'
                                }} />
                                <p style={{
                                    color: 'white',
                                    fontWeight: 'normal',
                                    fontSize: '15px',
                                    marginBottom: '2px'
                                }}>Hospitals</p>
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/Alldoctors">
                                < FaUserMd style={{
                                    color: 'white',
                                    marginBottom: '3px',
                                    fontSize: '17px',
                                    marginRight: '4px'
                                }} />
                                <p style={{
                                    color: 'white',
                                    fontWeight: 'normal',
                                    fontSize: '15px',
                                    marginBottom: '2px'
                                }}>Doctors</p>
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/AllPatients">
                                < FaBed style={{
                                    color: 'white',
                                    marginBottom: '3px',
                                    fontSize: '17px',
                                    marginRight: '4px'
                                }} />
                                <p style={{
                                    color: 'white',
                                    fontWeight: 'normal',
                                    fontSize: '15px',
                                    marginBottom: '2px'
                                }}>Patients</p>
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/Contact">
                                < MdCall style={{
                                    color: 'white',
                                    marginBottom: '3px',
                                    fontSize: '17px',
                                    marginRight: '4px',
                                    color: 'white',
                                }} />

                                <p style={{
                                    color: 'white',
                                    fontWeight: 'normal',
                                    fontSize: '15px',
                                    marginBottom: '2px'
                                }}>Contact</p>
                            </NavLinks>

                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/splash">
                            < BiLogOut

                            /> Logout
                        </NavBtnLink>
                    </NavBtn>

                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
