"use client";
import { Box, Center, Spacer, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "@/components/NavBar";
import Disconnected from "@/components/Disconnected";
import { useWallet } from "@solana/wallet-adapter-react";
import Connected from "../components/Connected";
const Home: NextPage = () => {
  const { connected } = useWallet();
  return (
    <div className={styles.container}>
      <Box
        w="full"
        paddingBottom={"10"}
        minHeight={"100vh"}
        bgImage={"url(/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="" justify="center">
          <NavBar />

          <Spacer />
          <Center>
            {/* If connected, the second view, otherwise the first */}
            <Disconnected />
          </Center>
          <Spacer />

          <Center>{connected ? <Connected /> : <Disconnected />}</Center>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
