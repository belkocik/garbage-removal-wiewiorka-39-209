import type { NextPage } from "next";
import PageLayout from "@/components/page-layout";
import { Flex, Heading } from "@chakra-ui/react";
import Hero from "@/components/hero";

const Home: NextPage = () => {
  return (
    <PageLayout
      title="Wiewiórka 39-209 | Aktualności | Wywóz śmieci"
      description="Wiewiórka – wieś w Polsce, położona w województwie podkarpackim, w powiecie dębickim, w gminie Żyraków"
    >
      <Hero />
      <Flex mt={40}>
        <Heading as="h2">Już wkrótce coś tu powstanie...</Heading>
      </Flex>
    </PageLayout>
  );
};

export default Home;
