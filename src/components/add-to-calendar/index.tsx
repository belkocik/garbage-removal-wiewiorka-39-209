import "add-to-calendar-button/assets/css/atcb.css";
import { atcb_action } from "add-to-calendar-button";
import { IoCalendarOutline, IoTrash, IoTrashOutline } from "react-icons/io5";
import {
  Box,
  Button,
  Text,
  useColorModeValue,
  VStack,
  Stack,
  Flex,
  Center,
} from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AddToCalendar = ({
  collectRubishDate,
  name,
  description,
  startDate,
  endDate,
}) => {
  let date = collectRubishDate; // e.g. 2022-07-21
  const [year, month, day] = date.split("-");
  const formattedDate = [day, month, year].join("/"); // output: 21/07/2022
  const iconColor = useColorModeValue("white", "black");
  return (
    <Box bg="gray.50" p={4} rounded="lg" h="100%">
      <Box p={2} color="black" fontWeight={500} fontSize="xl">
        {description === "Odpady segregowane" ? (
          <Box>
            <Flex
              direction="column"
              color="#9CAD60"
              align="center"
              textAlign="center"
            >
              {description} <IoTrash size="32px" />
            </Flex>
          </Box>
        ) : (
          <Box>
            <Flex
              direction="column"
              color="black"
              align="center"
              textAlign="center"
            >
              {description} <IoTrashOutline size="32px" />
            </Flex>
          </Box>
        )}
      </Box>

      <Calendar
        value={
          typeof collectRubishDate === "string"
            ? new Date(collectRubishDate)
            : collectRubishDate
        }
        maxDate={
          typeof collectRubishDate === "string"
            ? new Date(collectRubishDate)
            : collectRubishDate
        }
        minDate={
          typeof collectRubishDate === "string"
            ? new Date(collectRubishDate)
            : collectRubishDate
        }
      />
      <Text p={2} color="black" fontWeight={500}>
        Data odbioru: {formattedDate}
      </Text>
      <Box>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            atcb_action({
              name: `${name} | ${description} | Odbiór: ${formattedDate} `,
              startDate: startDate,
              endDate: endDate,
              options: [
                "Apple",
                "Google",
                "Microsoft365",
                "Outlook.com",
                "Yahoo",
                "iCal",
              ],
              timeZone: "Europe/Warsaw",
              iCalFileName: "Reminder-Event",
            });
          }}
        >
          <Button
            type="submit"
            value="save"
            leftIcon={<IoCalendarOutline size="22px" color={iconColor} />}
            colorScheme="teal"
            variant="solid"
          >
            Dodaj do kalendarza
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AddToCalendar;
