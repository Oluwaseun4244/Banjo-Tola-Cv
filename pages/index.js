import {
  Box,
  HStack,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";
import { MdOutlineEmail } from "react-icons/md";
import { BiLocationPlus, BiWorld } from "react-icons/bi";
import { AiFillGithub, AiOutlinePhone } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import skillsData from "../data/skills.json";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Banjo Tola CV</title>
        <meta name="Banjo Tola" content="Banjo Tola Oluwaseun CV" />
        <link rel="icon" href="/BT.ico" />
      </Head>
      <Box border={"1px solid gray"} mb={{ base: "40px", md: "40px" }}>
        <Box bg="#000080" textAlign={"center"}>
          <Text
            color="white"
            fontWeight={"500"}
            lineHeight="80px"
            letterSpacing="15px"
            fontSize={{ base: "3xl", md: "5xl" }}
          >
            BANJO TOLA
          </Text>
          <Text
            pb="20px"
            color="white"
            fontWeight={"400"}
            letterSpacing="4px"
            fontSize={{ base: "sm", md: "2xl" }}
          >
            SOFTWARE DEVELOPER
          </Text>
        </Box>

        <Stack w={"100%"} direction={{ base: "column", md: "row" }}>
          <Box w={{ base: "100%", md: "35%" }} pt="50px" bg={"#f7f7f7"}>
            <HStack textAlign={{ base: "left", md: "right" }} mb="30px">
              <Text
                pl={{ base: "20px" }}
                w="100%"
                pr="20px"
                letterSpacing="2px"
                color={"black"}
                fontSize="2xl"
                fontWeight="bold"
              >
                CONTACT
              </Text>
            </HStack>

            <HStack
              textAlign={{ base: "left", md: "right" }}
              pb="6px"
              pr="20px"
            >
              <Link
                _hover={{ textDecoration: "none" }}
                href="mailto:banjotola12@gmail.com"
                pl={{ base: "20px" }}
                w="100%"
                color={"#007bff"}
              >
                banjotola12@gmail.com
              </Link>{" "}
              <MdOutlineEmail />
            </HStack>
            <HStack
              textAlign={{ base: "left", md: "right" }}
              pb="6px"
              pr="20px"
            >
              <Link
                href="tel:+23480-3094-7177"
                pl={{ base: "20px" }}
                w="100%"
                color={"#007bff"}
              >
                +23480-3094-7177
              </Link>{" "}
              <AiOutlinePhone />
            </HStack>
            <HStack
              textAlign={{ base: "left", md: "right" }}
              pb="6px"
              pr="20px"
            >
              {/* <Spacer /> */}
              <Text pl={{ base: "20px" }} w="100%" color={"black"}>
                Ikorodu, Lagos, Nigeria
              </Text>{" "}
              <BiLocationPlus />
            </HStack>
            <HStack
              textAlign={{ base: "left", md: "right" }}
              pb="6px"
              pr="20px"
            >
              <Link
                w="100%"
                _hover={{ textDecoration: "none" }}
                cursor={"pointer"}
                as={Link}
                href="https://twitter.com/daddytoyosi"
              >
                <Text pl={{ base: "20px" }} w="100%" color={"#007bff"}>
                  Twitter
                </Text>{" "}
              </Link>
              <FiTwitter />
            </HStack>
            <HStack
              textAlign={{ base: "left", md: "right" }}
              pb="6px"
              pr="20px"
            >
              <Link
                w="100%"
                _hover={{ textDecoration: "none" }}
                cursor={"pointer"}
                as={Link}
                href="https://github.com/Oluwaseun4244"
              >
                <Text pl={{ base: "20px" }} w="100%" color={"#007bff"}>
                  Github
                </Text>{" "}
              </Link>
              <AiFillGithub />
            </HStack>
            <HStack
              textAlign={{ base: "left", md: "right" }}
              mb="30px"
              pb="6px"
              pr="20px"
            >
              <Link
                w="100%"
                _hover={{ textDecoration: "none" }}
                cursor={"pointer"}
                as={Link}
                href="https://banjo-tola-folio.netlify.app/"
              >
                <Text pl={{ base: "20px" }} w="100%" color={"#007bff"}>
                  Portfolio
                </Text>{" "}
              </Link>
              <BiWorld />
            </HStack>

            <HStack
              textAlign={{ base: "left", md: "right" }}
              mb="25px"
              w="100%"
            >
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="2xl"
                fontWeight="bold"
              >
                EDUCATION
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
                fontWeight="bold"
              >
                Higher National Diploma
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
                // fontWeight="bold"
              >
                Computer Engineering
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
                // fontWeight="bold"
              >
                Yaba College of Technology
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
                // fontWeight="bold"
              >
                Class of 2017
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                Yaba, Lagos
              </Text>
            </HStack>

            {/* <HStack
              textAlign={{ base: "left", md: "right" }}
              mt="30px"
              mb="8px"
              w="100%"
            >
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
                fontWeight="bold"
              >
                National Diploma
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
                // fontWeight="bold"
              >
                Computer Engineering
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                Grace Polytechnic
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                2012 - 2014
              </Text>
            </HStack> */}
            {/* <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                Omu Ijebu
              </Text>
            </HStack> */}

            <HStack
              textAlign={{ base: "left", md: "right" }}
              mt="40px"
              mb="8px"
              w="100%"
            >
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="2xl"
                fontWeight="bold"
              >
                SKILLS
              </Text>
            </HStack>
            {skillsData.map((item, i) => (
              <Skills key={i} item={item} />
            ))}

            <HStack
              textAlign={{ base: "left", md: "right" }}
              mt="40px"
              mb="8px"
              w="100%"
            >
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="2xl"
                fontWeight="bold"
              >
                FREECODECAMP
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                Javascript Algorithm and
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                Data Structure
              </Text>
            </HStack>
          </Box>
          <Box w={{ base: "100%", md: "65%" }} pt="50px" bg="white">
            <Text
              mb="30px"
              pl="20px"
              letterSpacing="2px"
              color={"black"}
              fontSize="2xl"
              fontWeight="bold"
            >
              SUMMARY
            </Text>

            <Text
              pr={{ base: "20px", md: "150px" }}
              pl={{ base: "20px", md: "20px" }}
            >
              Banjo Tola is a focused software professional with great
              communication skills and expertise in various technical platforms
              who understands and meets both client and employer needs and
              develops highly functional, robust and yet, easy-to-use
              applications. Excels as hands-on developer and oversees work of
              junior software colleague(s).
            </Text>

            <Text
              mt="30px"
              mb="10px"
              pl="20px"
              letterSpacing="2px"
              color={"black"}
              fontSize="2xl"
              fontWeight="bold"
            >
              WORK EXPERIENCE
            </Text>

            <Text fontSize={"2xl"} fontWeight="500" pl="20px">
              Fullstack developer
            </Text>
            <Text fontSize={"xl"} fontWeight="400" pl="20px">
              ITskillsCenter
            </Text>
            <Text mb="15px" fontSize={"xl"} fontWeight="400" pl="20px">
              Oct 2021 - present
            </Text>

            <UnorderedList mb="25px" pr="20px" pl="40px">
              <ListItem>
                Review codes and ensure quality of designs and implementations,
                and advocate clarity within the team.
              </ListItem>
              <ListItem>
                Implement new features and maintenance of existing ones to
                improve the performance of web applications.
              </ListItem>
              <ListItem>
                Contribute ideas and suggestions in team meetings and delivered
                updates on deadlines, designs, and enhancements.
              </ListItem>
              <ListItem>
                Building both desktop and mobile friendly interface web apps
              </ListItem>
              <ListItem>
                Developed functional databases, applications, and servers to
                support websites on the backend.
              </ListItem>
              <ListItem>
              Analyze existing software implementations to identify areas requiring improvement and divide features into epics and tasks to ease the implementation of new features.
              </ListItem>

              <ListItem>Consumption of API’s</ListItem>
            </UnorderedList>

            <Text fontSize={"2xl"} fontWeight="500" pl="20px">
              IT Support Officer
            </Text>
            <Text fontSize={"xl"} fontWeight="400" pr="150px" pl="20px">
              Lucky Fibres Limited
            </Text>
            <Text fontSize={"xl"} fontWeight="400" pl="20px">
              Mar 2020 - Oct 2021
            </Text>
            <Text mb="15px" fontSize={"xl"} fontWeight="400" pl="20px">
              Ikorodu, Lagos, Nigeria
            </Text>

            <UnorderedList mb="25px" pr="20px" pl="40px">
              <ListItem>Offered new customer training to reduce frustration and improve customer satisfaction.</ListItem>
              <ListItem>Created help desk tickets, troubleshot, and resolved desktop issues.</ListItem>
              <ListItem>Determined hardware and network system issues using proactive troubleshooting techniques.</ListItem>
              <ListItem>Prepared new computers and mobile devices according to internal policies on standardized software and security deployments.</ListItem>
              <ListItem>Answered questions and provided information to customers about new software or hardware.</ListItem>
              <ListItem>Updated software to safeguard against security flaws.</ListItem>
              <ListItem>Provided Tier 1 IT support to non-technical internal users through deskside support services.</ListItem>
              <ListItem>Configured hardware and granted system permissions to new employees.</ListItem>
             
        
            </UnorderedList>

            {/* <Text
              mt="50px"
              fontSize={"2xl"}
              fontWeight="500"
              pr="150px"
              pl="20px"
            >
              IT Support Officer
            </Text>
            <Text fontSize={"xl"} fontWeight="400" pr="150px" pl="20px">
            
            </Text>
            <Text
              mb="15px"
              fontSize={"xl"}
              fontWeight="400"
              pr="150px"
              pl="20px"
            >
               / 
            </Text> */}

            <Text fontSize={"2xl"} fontWeight="500" pl="20px">
              IT Support Officer
            </Text>
            <Text fontSize={"xl"} fontWeight="400" pr="150px" pl="20px">
              Fidson Healthcare PLC
            </Text>
            <Text fontSize={"xl"} fontWeight="400" pl="20px">
              June 2017 - Dec 2017
            </Text>
            <Text mb="15px" fontSize={"xl"} fontWeight="400" pl="20px">
              268, Ikorodu Road, Obanikoro
            </Text>

            <UnorderedList mb="40px" pr="20px" pl="40px">
              <ListItem>Network, software and hardware maintenance</ListItem>
              <ListItem>
                Configuring and supporting company’s computers in LAN/WAN
                environment
              </ListItem>
              <ListItem>
                Installation and configuration of Routers, Switches and cabling
              </ListItem>

              <ListItem>Network troubleshooting</ListItem>
            </UnorderedList>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
