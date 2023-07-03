"use client";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import WalletContextProvider from "../components/WalletContextProvider";
import { extendTheme } from "@chakra-ui/react";
//const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Buildoors",
  description: "The NFT Collection for Buildoors",
};
const colors = {
  background: "#1F1F1F",
  accent: "#833BBE",
  bodyText: "rgba(255, 255, 255, 0.75)",
};

const theme = extendTheme({ colors });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={""}>
        <ChakraProvider theme={theme}>
          <WalletContextProvider>{children}</WalletContextProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
