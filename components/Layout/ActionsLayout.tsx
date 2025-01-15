import React, { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import styles from "./actionsLayout.styles";
import { TopBar } from "../UI";
import Footer from "../UI/Footer";

interface Props {
  title: string;
  pageDescription: string;
  imageForShare?: string;
}

export const ActionsLayout: FC<PropsWithChildren<Props>> = ({
  title,
  pageDescription,
  imageForShare,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageForShare && <meta name="og:image" content={imageForShare} />}
      </Head>
      <Box bgcolor={"#0995B8"}>
        <TopBar />
      </Box>
      <Box component="main" sx={styles.mainContainer}>
        {children}
      </Box>
      <Box component={"footer"}>
        <Footer />
      </Box>
    </>
  );
};
