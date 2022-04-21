/*eslint-disable*/
import React from "react";
import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  const textColor = useColorModeValue("gray.400", "white");
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
      zIndex='3'
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "flex-end",
        xl: "flex-end"
      }}
      justifyContent='flex-end'
      px={{ base: "30px", md: "50px" }}
      pb='30px'>
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}>
        {" "}
        <Text as='span' fontWeight='500' ms='4px'>
          Made with ❤️ by
          <Link
            mx='3px'
            color={textColor}
            href='https://www.simmmple.com'
            target='_blank'
            textDecoration='underline'
            fontWeight='700'>
            Elrond Moon Mission Team
          </Link>
        </Text>
      </Text>     
    </Flex>
  );
}
