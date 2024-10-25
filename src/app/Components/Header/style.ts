
import Link from "next/link";
import styled from "styled-components";

interface NavbarContainerProps {
     openNavbar: boolean;
}

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NavbarContainer = styled.nav<NavbarContainerProps>`
     display: flex;
     width: 80%;
     height: ${(props) => (props.openNavbar ? "100vh" : "80px")}; 
     flex-direction: column;
     background-color:#0A1828;
     position: fixed;
     top: 30px;
     border-radius: 70px;
     z-index: 1;
     box-shadow: 0px 0px 8px ${({ theme }) => theme.colors.secondary};  
     padding: 10px 20px;
   

     @media (max-width:700px){
          width: 100%;
          border-radius: 0px;
          top: 0px;
     }
`

export const LeftContainer = styled.div`
     display: flex;
     /* flex: 33%; */
     margin-left: 10px;
     align-items: center;

`

export const CenterContainer = styled.div`
     display: flex;
     /* flex: 33%; */
     margin-left: 10px;
     align-items: center;
`
export const RightContainer = styled.div`
     display: flex;
     /* flex: 33%; */
     font-size: 2rem;
     gap:15px;

`
export const NavbarInnerContainer = styled.div`
     display: flex;
     height: 80px; 
     justify-content: space-evenly;
     align-items: center;
`
export const NavbarExtendedContainer = styled.div`
     color: #fff;

     @media (min-width: 700px){
          display: none;
     }
     
`
export const NavLinks = styled.div`
     display: flex;
     gap: 25px;

     @media (max-width:700px){
          display: none;
     }
`
export const NavLinksExtended = styled.div`
     display: flex;
     flex-direction: column;
     gap: 25px;
     justify-content: flex-start;

`

export const LinkItem = styled(Link) <{ isActive: boolean }> `
     color: ${(props) => props.isActive ? "#BFA181" : "#fff"};

     font-weight: 500;
     font-size: 1.1rem;

     &:hover{
          color:  #BFA181;
          text-decoration: underline;
          text-underline-offset: 6px;
     }
     
`

export const OpenMenuButton = styled.button`
     height: 70px;
     width: 60px;
     color: #fff;
     font-size:40px;

     @media (min-width:700px) {
          display: none;
     }

`