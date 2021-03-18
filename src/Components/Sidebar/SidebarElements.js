import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background: rgba(0, 147, 135, 0.9);
    align-items:center;
    top:0;
    left:0;
    transition:0.3s ease-in-out;
    opacity:${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;


export const CloseIcon = styled(FaTimes)`
    color:#fff;

`;

export const NavLogo = styled(LinkR)`
color:#fff;
justify-content:center;
cursor:pointer;
font-size: 3rem;
display:flex;
align-items:center;
margin-left:24px;
font-weight:bold;
text-decoration:none;
margin-bottom:20px;
`;


export const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2rem;
    cursor: pointer;
    outline:none;


`;

export const SidebarWrapper = styled.div`
    color:#fff;
    padding:10px;

`;


export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(6, 80px);
    text-align:center;


    @media screen and ( max-width:480px ){
        grid-template-rows:repeat(6, 60px);
    }

`;

export const SidebarLink = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size: 1.5rem;
    text-decoration:none;
    list-style: none;
    transition:0.2s ease-in-out;
    text-decoration:none;
    color:#fff;

    &:hover{
        
        transition:0.2s ease-in-out;
        background-color:rgba(0, 147, 135);
    }


`;

export const SideBtnWrap = styled.div`
    display:flex;
    justify-content:center;

`


export const SidebarRoute = styled(LinkR)`
    border-radius:50px;
    background:transparent;
    white-space:nowrap;
    padding:16px 64px;
    color:#ffff;
    outline:none;
    border:none;
    cursor: pointer;
    font-size:20px;
    transition:all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition:all 0.2s ease-in-out;
        background:#ffff;
        color:#010606;

    }
`
