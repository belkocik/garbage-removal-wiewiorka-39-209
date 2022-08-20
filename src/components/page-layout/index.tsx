import { Container, ContainerProps } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import { NextSeo } from "next-seo";

import { ReactNode } from "react";

const variants: Variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: -40,
    transition: { duration: 0.4, type: "easeOut" },
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, type: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: -0,
    y: 40,
    transition: { duration: 0.4, type: "easeOut" },
  },
};

type PageProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

const MotionContainer = motion<ContainerProps>(Container);

const PageLayout = ({ children, title, description }: PageProps) => {
  return (
    <>
      <NextSeo title={title} description={description} />
      <MotionContainer
        display="flex"
        maxW={{ base: "container.lg", xl: "container.xl" }}
        minH={{ base: "auto", md: "100vh" }}
        px={{ base: 4, lg: 0 }}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        centerContent
        py={36}
      >
        {children}
      </MotionContainer>
    </>
  );
};

export default PageLayout;
