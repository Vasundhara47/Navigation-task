"use client"
import "./globals.css";
import Header from "./Components/Header/header";
import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./Components/Styled/theme";
import { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Work Sans', sans-serif;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.terniry};
    background-color: #000;
  }
  
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body >
          <GlobalStyle />
          <Header />
          <Main >
            {children}
          </Main>

        </body>
      </ThemeProvider>
    </html >
  );
}
