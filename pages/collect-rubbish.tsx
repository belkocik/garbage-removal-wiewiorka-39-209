import type { NextPage } from "next";
import PageLayout from "@/components/page-layout";
import { Box, Grid, Flex, Heading } from "@chakra-ui/react";
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
  console.log(mixedRubbish);
  return (
    <PageLayout
      title="Wiewiórka 39-209 | Wywóz śmieci"
      description="System Śmieciowy - Wiewiórka/Gmina Żyraków"
    >
      <Heading as="h1" mb={4}>
        Wiewiórka 39-209 - Wywóz śmieci
      </Heading>

      <Heading as="h2" fontSize="xl" p={2}>
        Legenda kalendarza
      </Heading>
      <Flex align="center">
        <Box p="4" m={2} bg="teal.300" color="black" fontWeight={500}>
          Dzień odbioru
        </Box>
      </Flex>
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
