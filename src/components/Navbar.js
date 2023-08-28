import {
  Container,
  Box,
  Avatar,
  Button,
  HStack,
  VStack,
  Heading,
  useBreakpointValue,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Spacer,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";

import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import { HiHome } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin, FaFileAlt } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";

import Profile from "../Media/Profile.jpg";

const buttons = [
  {
    fig: <FaLinkedin />,
    href: "https://www.linkedin.com/in/blake-hokanson/",
    text: "Linkedin",
  },
  {
    fig: <FiGithub />,
    href: "https://github.com/blake-hokanson",
    text: "GitHub",
  },
  {
    fig: <FaFileAlt />,
    href: "/Resume.pdf",
    text: "Resume",
  },
];

export default function Navbar() {
  return (
    <Container maxW="4xl" h="130px" bg="gray.500">
      <HStack align="center">
        <Box my="15px">
          <Avatar size="xl" name="Blake Hokanson" src={Profile} border="2px solid Black" />
        </Box>
        <Diff />
      </HStack>
    </Container>
  );
}

function Diff() {
  if (useBreakpointValue({ base: false, md: true })) {
    return (
      <>
        <VStack>
          <Heading>Blake Hokanson</Heading>
          <HStack>
            {buttons.map((data, index) => (
              <ButtonObject key={index} isIcon={false} {...data} />
            ))}
          </HStack>
        </VStack>
        <Spacer />

        <Routes>
          <Route path="/" element={<MenuObject isDesktop={true} />}></Route>
          <Route path="/*" element={<HomeButton isDesktop={true} />} />
        </Routes>
      </>
    );
  } else {
    return (
      <>
        <VStack>
          <Heading>Blake</Heading>
          <Heading>Hokanson</Heading>
        </VStack>
        <Spacer />
        <SimpleGrid columns={2} spacing="5px">
          {buttons.map((data, index) => (
            <ButtonObject key={index} isIcon={true} {...data} />
          ))}
          <Routes>
            <Route path="/" element={<MenuObject isDesktop={false} />}></Route>
            <Route path="/*" element={<HomeButton isDesktop={false} />} />
          </Routes>
        </SimpleGrid>
      </>
    );
  }
}

function ButtonObject({ fig, href, text, isIcon }) {
  if (isIcon) {
    return (
      <IconButton as="a" icon={fig} href={href} target="_blank">
        {text}
      </IconButton>
    );
  } else {
    return (
      <Button as="a" leftIcon={fig} href={href} target="_blank">
        {text}
      </Button>
    );
  }
}

function HomeButton({ isDesktop }) {
  if (isDesktop)
    return (
      <Button as={Link} to="/" rightIcon={<HiHome />}>
        Home
      </Button>
    );
  else return <IconButton as={Link} to="/" icon={<HiHome />}></IconButton>;
}

function MenuObject({ isDesktop }) {
  return (
    <Menu>
      <MenuButton
        as={isDesktop ? Button : IconButton}
        icon={<HamburgerIcon />}
        rightIcon={isDesktop ? <HamburgerIcon /> : null}
      >
        Navigation
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => scroll("Projects")}>Projects</MenuItem>
        <MenuItem onClick={() => scroll("Experience")}>Experience</MenuItem>
        <MenuItem onClick={() => scroll("Education")}>Education</MenuItem>
      </MenuList>
    </Menu>
  );
}

function scroll(sectionID) {
  const aboutSection = document.getElementById(sectionID);
  if (aboutSection) {
    window.scrollTo({
      top: aboutSection.offsetTop,
      behavior: "smooth", // use smooth scrolling animation
    });
  }
}
