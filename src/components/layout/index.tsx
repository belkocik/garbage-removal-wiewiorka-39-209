import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Box as="main">{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
