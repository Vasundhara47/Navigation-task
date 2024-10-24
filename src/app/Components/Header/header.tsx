"use client";
import Button from "../Common/Button/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    NavbarContainer,
    NavLinks,
    LeftContainer,
    RightContainer,
    LinkItem,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    OpenMenuButton,
    NavLinksExtended,
    CenterContainer,
    HeaderContainer
} from "./style";
import { useState } from "react";

export default function Header() {
    const [openNavbar, setOpenNavbar] = useState(false);
    const navLinks = [
        { name: "Home", slug: "/" },
        { name: "About Us", slug: "/about" },
        { name: "Blog", slug: "/Blog" },
        { name: "Contact Us", slug: "/ContactUs" },
    ];
    const pathname = usePathname();

    return (
        <HeaderContainer>
            <NavbarContainer openNavbar={openNavbar}>
                <NavbarInnerContainer>
                    <LeftContainer>
                        <OpenMenuButton onClick={() => setOpenNavbar((prev) => !prev)}>
                            {openNavbar ? <>&#10005;</> : <>&#8801;</>}
                        </OpenMenuButton>
                        <h2 color="#fff" />
                    </LeftContainer>
                    <CenterContainer>
                        <NavLinks>
                            {navLinks.map((item) => {
                                const isActive = item.slug === "/" ? pathname === item.slug : pathname.startsWith(item.slug);
                                return (
                                    < LinkItem
                                        key={item.slug}
                                        href={item.slug}
                                        isActive={isActive}
                                    >
                                        {item.name}
                                    </LinkItem>
                                )
                            }
                            )}
                        </NavLinks>
                    </CenterContainer>
                    <RightContainer>
                        <Link href={"/login"}><Button title="Log In"></Button></Link>
                        <Link href={"/register"}><Button title="Register"></Button></Link>
                    </RightContainer>
                </NavbarInnerContainer>
                {openNavbar && (
                    <NavbarExtendedContainer>
                        <NavLinksExtended>
                            {navLinks.map((item) => {
                                const isActive = item.slug === "/" ? pathname === item.slug : pathname.startsWith(item.slug);
                                return (
                                    < LinkItem
                                        key={item.slug}
                                        href={item.slug}
                                        isActive={isActive}
                                    >
                                        {item.name}
                                    </LinkItem>
                                )
                            }
                            )}
                        </NavLinksExtended>
                    </NavbarExtendedContainer>
                )}
            </NavbarContainer>
        </HeaderContainer >
    );
}
