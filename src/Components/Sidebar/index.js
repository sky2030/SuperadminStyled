import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap,
    NavLogo

} from './SidebarElements';

import { AiFillHome } from "react-icons/ai";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { FaHospitalAlt, FaUserMd, FaBed } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';



const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <NavLogo href='/' to='/Dashboard'>
                    <span style={{
                        fontSize: '65px'
                    }}>+</span>VRCure
               </NavLogo>
                <SidebarMenu>
                    <SidebarLink to="/Dashboard" onClick={toggle}>
                        < AiFillHome style={{
                            marginBottom: '3px',
                            fontSize: '30px',
                            marginRight: '4px'
                        }} />
                        Dashboard
                    </SidebarLink>
                    <SidebarLink to="/Allhospitals" onClick={toggle}>
                        < FaHospitalAlt style={{
                            marginBottom: '3px',
                            fontSize: '30px',
                            marginRight: '4px'
                        }} />
                        Hospitals
                    </SidebarLink>
                    <SidebarLink to="/Alldoctors" onClick={toggle}>
                        < FaUserMd style={{
                            marginBottom: '3px',
                            fontSize: '30px',
                            marginRight: '4px'
                        }} />
                        Doctors
                    </SidebarLink>
                    <SidebarLink to="/AllPatients" onClick={toggle}>
                        < FaBed style={{
                            marginBottom: '3px',
                            fontSize: '30px',
                            marginRight: '4px'
                        }} />
                        Patients
                    </SidebarLink>
                    <SidebarLink to="/Contact" onClick={toggle}>
                        < MdCall style={{
                            marginBottom: '3px',
                            fontSize: '30px',
                            marginRight: '4px'
                        }} />
                        Contacts
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/splash'>
                        < BiLogOut
                        // style={{
                        //     marginBottom: '3px',
                        //     fontSize: '17px',
                        //     marginRight: '4px'
                        // }}
                        /> Logout
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
