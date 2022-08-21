import type { NextPage } from "next";
import PageLayout from "@/components/page-layout";
import { Box, Grid, Flex, Heading, Text, Spacer } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import AddToCalendar from "@/components/add-to-calendar";
import { MixedRubbish } from "@/types/mixed-rubbish";
import supabaseAdmin from "@/utils/supabase";

let todayDate = new Date().toISOString().slice(0, 10);

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await supabaseAdmin
    .from<MixedRubbish>("WiewiorkaMixedRubbish")
    .select("*")
    .order("collectRubishDate");
  return {
    props: {
      mixedRubbish: data,
    },
  };
};

const CollectRubish: NextPage = ({
  mixedRubbish,
}: {
  mixedRubbish: MixedRubbish[];
}) => {
  return (
    <PageLayout
      title="Wiewiórka 39-209 | Harmonogram wywozu odpadów komunalnych w roku 2022 gmina Żyraków"
      description="System Śmieciowy | Wywóz śmieci - Wiewiórka, Góra Motyczna, Mokre, Straszęcin, Wola Wielka i Zasów - Gmina Żyraków"
    >
      <Box textAlign="center">
        <Heading as="h1" mb={4}>
          Harmonogram wywozu odpadów komunalnych w roku 2022 gmina Żyraków
        </Heading>
        <Heading as="h2" mb={4} fontSize="2xl">
          Wiewiórka, Góra Motyczna, Mokre, Straszęcin, Wola Wielka i Zasów
        </Heading>
      </Box>

      <Box textAlign="center" bg="#F7FAFC" p={6} rounded="xl">
        <Heading as="h3" fontSize="xl" p={2} color="black">
          Legenda kalendarza
        </Heading>

        <Flex minWidth="max-content" alignItems="center" direction="column">
          <Text p="4" m={2} bg="teal.300" color="black" fontWeight={500}>
            Dzień odbioru
          </Text>
          <Spacer />
          <Box width="400px">
            <Heading as="h3" fontSize="xl" p={2} color="black">
              Informacje
            </Heading>
            <Text fontSize="xl" bg="red.400" p={2} rounded="lg" color="black">
              Popiół zbierany będzie w miesiącach - styczeń, luty, marzec,
              kwiecień, październik, listopad, grudzień
            </Text>
          </Box>
        </Flex>
      </Box>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",

          xl: "repeat(3, 1fr)",
        }}
        gap={4}
        mt="16px"
      >
        {mixedRubbish
          .filter((date) => date.collectRubishDate >= todayDate)
          .map((item) => (
            <Box key={item.id}>
              <AddToCalendar
                name={item.name}
                description={item.description}
                startDate={item.startDate}
                endDate={item.endDate}
                collectRubishDate={item.collectRubishDate}
              />
            </Box>
          ))}
      </Grid>
    </PageLayout>
  );
};

export default CollectRubish;
