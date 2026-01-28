import { PressableButton } from "@/components/CustomAnimatedButton";
import Footer from "@/components/Footer";
import OutlinedHeading from "@/components/OutlinedHeading";
import RotatingText from "@/components/RotatingText";
import GivingCard from "@/components/Section3Card";
import StepCard from "@/components/Section5Card";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import Section9 from "@/components/Section9";
import { sequelSans, anybody } from "@/lib/fonts";
import {
  Box,
  Heading,
  Image,
  Container,
  Flex,
  Button,
  HStack,
  VStack,
  Text,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isHover, setIsHover] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const lineRefs = useRef([]);

  const lines = [
    "We throw away too much",
    "Every day, perfectly usable things are thrown away.",
    "Not because they’re broken…",
    "But because they’re unused.",
    "What if passing them on was as easy as throwing them out?",
  ];

  const cards = [
    {
      bgColor: "#4F227C",
      textColor: "#FB580D",
      subtextColor: "#FFFFFF",
      image: "/section3/sec3crdimg1.webp",
      imgbgGrainEffect: "/section3/card1_noise.png",
      title: "Unclear Recipients",
      description: "You don’t know who might need what you have.",
    },
    {
      bgColor: "#D2E796",
      textColor: "#481F72",
      subtextColor: "#000000",
      image: "/section3/sec3crdimg2.webp",
      imgbgGrainEffect: "/section3/card2_noise.png",
      title: "Hard to Connect",
      description: "Finding the right person—or being found—isn’t simple.",
    },
    {
      bgColor: "#FB580D",
      textColor: "#D2E796",
      subtextColor: "#FFFFFF",
      image: "/section3/sec3crdimg3.webp",
      imgbgGrainEffect: "/section3/card3_noise.png",
      title: "Lack of trust",
      description: "It’s hard to know who to share with safely.",
    },
  ];

  const howItWorksSteps = [
    {
      title: "List any item",
      buttonText: "List an item",
      description: "Take a photo. Add a short description. Done.",
      bgColor: "#4F227C", // Deep Purple
      textColor: "#FFAAF1",
      mockupImage: "/section5/sec5largemob1.webp",
      imgbgGrainEffect: "/section3/card1_noise.png",
      onClick: () => console.log("List an item clicked"),
    },
    {
      title: "Discover nearby items",
      buttonText: "Browse items",
      description: "See what people around you are sharing.",
      bgColor: "#D2E796", // Light Green
      textColor: "#004409", // Dark Green text
      mockupImage: "/section5/sec5largemob2.webp",
      imgbgGrainEffect: "/section3/card2_noise.png",
      onClick: () => console.log("Browse items clicked"),
    },
    {
      title: "Reach out & pass it on",
      buttonText: "Pass it on",
      description: "Connect, coordinate & give it a second life.",
      bgColor: "#FB580D", // Bright Orange
      textColor: "#C8DC8F",
      mockupImage: "/section5/sec5largemob3.webp",
      imgbgGrainEffect: "/section3/card3_noise.png",
      onClick: () => console.log("Pass it on clicked"),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      lineRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const lineCenter = rect.top + rect.height / 2;
        const distance = Math.abs(lineCenter - centerY);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to render text with specific color for the last line
  const renderText = (text, index) => {
    if (index === 4) {
      const parts = text.split("passing them on");
      return (
        <>
          {parts[0]}
          <Box as="span" color="#317039">
            passing them on
          </Box>
          {parts[1]}
        </>
      );
    }
    return text;
  };

  return (
    <>
      {/* PAGE WRAPPER - RESTORED ORIGINAL OVERLAYS */}
      <Box
        position="relative"
        bg="rgba(254, 255, 232, 1)"
        bgImage={`linear-gradient(rgba(254, 255, 232, 0.97), rgba(254, 255, 232, 0.97)), url('/paper_texture.jpg')`}
        bgRepeat="no-repeat"
        bgPosition="center top"
        bgSize="cover"
        color="white"
      >
        {/* NAVBAR - RESTORED ORIGINAL LOGIC */}
        <Box
          as="nav"
          position="sticky"
          top="0"
          zIndex="10"
          bgImage="url('/section1/green_noise.jpg')"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
        >
          <Box
            py={{ base: 3, md: 3, lg: 4, xl: 5 }}
            px={{ base: "16px", md: "40px", lg: "80px", xl: "180px" }}
          >
            <Flex align="center" justify="space-between">
              <Flex
                align="center"
                gap={2}
                cursor="pointer"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                <Box position="relative" w="36px" h="38px">
                  <Image
                    src="/nav/logo-default.svg"
                    alt="Passiton"
                    position="absolute"
                    inset={0}
                    h="38px"
                    opacity={isHover ? 0 : 1}
                    transition="opacity 0.25s ease"
                  />
                  <Image
                    src="/nav/logo-hover.svg"
                    alt="Passiton Hover"
                    position="absolute"
                    inset={0}
                    h="38px"
                    opacity={isHover ? 1 : 0}
                    transition="opacity 0.25s ease"
                  />
                </Box>
                <Box
                  fontWeight="500"
                  fontSize={{
                    base: "20px",
                    md: "24px",
                    lg: "28px",
                    xl: "32px",
                  }}
                  lineHeight="1"
                  fontFamily={anybody.style.fontFamily}
                >
                  Passiton
                </Box>
              </Flex>

              <Button
                bg="white"
                color="black"
                borderRadius="full"
                size={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
                px={{ base: "12px", md: "12px", lg: "14px", xl: "16px" }}
                py={{ base: "6px", md: "8px", lg: "12px", xl: "16px" }}
                _hover={{ bg: "gray.100" }}
              >
                <HStack spacing={2}>
                  <Image
                    src="/nav/apple.svg"
                    alt="Apple"
                    h={{ base: "12px", md: "16px", lg: "20px", xl: "24px" }}
                  />
                  <Image
                    src="/nav/indus.svg"
                    alt="Indus"
                    h={{ base: "12px", md: "16px", lg: "20px", xl: "24px" }}
                  />
                  <Image
                    src="/nav/android.svg"
                    alt="Android"
                    h={{ base: "12px", md: "16px", lg: "20px", xl: "24px" }}
                  />
                  <Box
                    as="span"
                    fontSize={{
                      base: "14px",
                      md: "16px",
                      lg: "20px",
                      xl: "24px",
                    }}
                    fontFamily={sequelSans.style.fontFamily}
                    fontWeight="500"
                  >
                    Get the App
                  </Box>
                </HStack>
              </Button>
            </Flex>
          </Box>
        </Box>
        {/* HERO SECTION Start */}
        <Box
          bgImage="url('/section1/green_noise.jpg')"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
          pt={{ base: 6, md: 10 }}
          // pb={10}
          position="relative"
        >
          <Box
            position="absolute"
            inset={0}
            overflow="hidden"
            pointerEvents="none"
            zIndex={0}
          >
            <Box
              position="absolute"
              inset={0}
              bgImage="url('/section1/bg_element.svg')"
              bgRepeat="no-repeat"
              bgPosition="center top"
              bgSize="cover"
              transform="scale(1.1)"
              opacity={0.03}
            />
          </Box>

          <Box position="relative" zIndex={1}>
            <Box px={{ base: "16px", md: "40px", lg: "80px", xl: "100px" }}>
              <Flex direction="column" align="center" textAlign="center">
                <Box
                  border="1px solid rgba(255,255,255,0.6)"
                  px={{ base: 4, md: 6 }}
                  py={1}
                  borderRadius="full"
                  fontSize={{
                    base: "12px",
                    md: "14px",
                    lg: "16px",
                    xl: "20px",
                  }}
                  mb={{ base: 5, md: 6 }}
                  textTransform="uppercase"
                  letterSpacing="wide"
                  fontFamily={sequelSans.style.fontFamily}
                  fontWeight="400"
                >
                  Help someone by passing it on
                </Box>
                <OutlinedHeading
                  text="Experience the joy of giving"
                  as="h1"
                  color="#ffffff"
                  // mb={{ base: 6, md: 10 }}
                  className={anybody.className}
                  fontWeight={800}
                />
              </Flex>
            </Box>

            <Box
              w="100%"
              overflow="hidden"
              position="relative"
              // top={{ base: "-40px", md: "-100px", lg: "-120px", xl: "-180px" }}
              // mb={{ base: "-80px", md: "-160px", lg: "-200px", xl: "-280px" }}
            >
              <Box
                as="video"
                src="/section1/hero_section_animation.webm"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                w={{ base: "80%", md: "70%", lg: "60%", xl: "50%" }}
                h="auto"
                objectFit="cover"
                display="block"
                m="auto"
              />
            </Box>
          </Box>
        </Box>
        {/* Hero Section end */}

        {/* seciton 2 start */}
        <Box
          pt="10vh"
          pb="10vh"
          px={{
            base: "16px",
            md: "40px",
            lg: "76px",
            xl: "100px",
            "2xl": "180px",
          }}
        >
          <Container maxW="container.lg">
            <VStack align="stretch" spacing={0}>
              {lines.map((text, i) => {
                const isActive = activeIndex === i;
                return (
                  <Heading
                    key={i}
                    ref={(el) => (lineRefs.current[i] = el)}
                    fontSize={{
                      base: "24px",
                      md: "40px",
                      lg: "54px",
                      xl: "64px",
                    }}
                    fontFamily={sequelSans.style.fontFamily}
                    fontWeight="600"
                    textAlign="center"
                    lineHeight="1.3"
                    py={{ base: "48px", md: "68px", lg: "100px", xl: "120px" }}
                    transition="all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)"
                    style={{
                      color: isActive ? "#1a1a1a" : "#cbd5e0",
                      opacity: isActive ? 1 : 0.25,
                      transform: isActive ? "scale(1.03)" : "scale(0.97)",
                    }}
                  >
                    {renderText(text, i)}
                  </Heading>
                );
              })}
            </VStack>
          </Container>
        </Box>
        {/* Section 2 End */}

        {/* Section 3 Start */}
        <Box
          px={{
            base: "16px",
            md: "40px",
            lg: "76px",
            xl: "100px",
            "2xl": "180px",
          }}
          pt={{
            base: "16px",
            md: "32px",
            lg: "60px",
            xl: "80px",
            "2xl": "140px",
          }}
          pb={{
            base: "16px",
            md: "40px",
            lg: "80px",
            xl: "100px",
            "2xl": "180px",
          }}
        >
          <Flex justifyContent={"center"} position={"relative"}>
            <Image
              src="/section3/sec3svg1.svg"
              w={"100px"}
              alt="arrow"
              position={"absolute"}
              left={"10%"}
              top={"90%"}
              display={{ base: "none", "2xl": "flex" }}
            />
            <VStack>
              <HStack
                justify="center"
                alignItems={"flex-start"}
                position={"relative"}
                gap={{ lg: "8px", xl: "16px" }}
                display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
              >
                <OutlinedHeading
                  text="PEOPLE WANT TO"
                  as="h1"
                  color="#ffffff"
                  fontSize={{
                    base: "36px",
                    sm: "48px",
                    md: "60px",
                    lg: "64px",
                  }}
                  className={anybody.className}
                  fontWeight={800}
                />
                <Image
                  src="/section3/sec3img1.png"
                  w={"124px"}
                  alt="give"
                  position={"relative"}
                  bottom={"20px"}
                />
                <OutlinedHeading
                  text="GIVE"
                  as="h1"
                  color="#ffffff"
                  fontSize={{
                    base: "36px",
                    sm: "48px",
                    md: "60px",
                    lg: "64px",
                  }}
                  className={anybody.className}
                  fontWeight={800}
                />
              </HStack>
              <OutlinedHeading
                text="PEOPLE WANT TO GIVE"
                as="h1"
                color="#ffffff"
                fontSize={{
                  base: "36px",
                  sm: "48px",
                  md: "60px",
                  lg: "64px",
                }}
                className={anybody.className}
                fontWeight={800}
                display={{ base: "block", md: "block", lg: "none", xl: "none" }}
              />
              <OutlinedHeading
                text="BUT IT ISN’T EASY"
                as="h1"
                color="#BDE93D"
                fontSize={{
                  base: "36px",
                  sm: "48px",
                  md: "60px",
                  lg: "64px",
                }}
                className={anybody.className}
                fontWeight={800}
              />
            </VStack>
          </Flex>
          <Flex
            direction={{ base: "column", "2xl": "row" }}
            gap="20px"
            align="stretch"
            w="100%"
            mt={{ base: "20px", md: "28px", lg: "40px", xl: "40px" }}
          >
            <Box
              w={{ base: "100%", "2xl": "18%" }}
              display="flex"
              alignItems="center"
              justifyContent={{
                base: "center",
                lg: "center",
                "2xl": "flex-start",
              }}
              textAlign={{ base: "center", lg: "center", "2xl": "left" }}
              color={"black"}
              pb={{ base: 4, "2xl": 0 }}
            >
              <Text
                fontSize={{ base: "24px", lg: "32px", "2xl": "36px" }}
                fontFamily={sequelSans.style.fontFamily}
                lineHeight="1.2"
              >
                <span
                  className={anybody.className}
                  style={{
                    color: "#1a1a1a",
                    fontStyle: "italic",
                    fontWeight: "700",
                  }}
                >
                  Giving
                </span>{" "}
                often breaks down because it's —
              </Text>
            </Box>

            <SimpleGrid
              flex={{ xl: "3" }}
              w="100%"
              columns={{ base: 1, md: 1, lg: 3 }}
              spacing="16px"
              gap={"16px"}
            >
              {cards.map((card, index) => (
                <GivingCard
                  key={index}
                  bgColor={card.bgColor}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  textColor={card.textColor}
                  subtextColor={card.subtextColor}
                  imgbgGrainEffect={card.imgbgGrainEffect}
                />
              ))}
            </SimpleGrid>
          </Flex>
        </Box>
        {/* Section 3 End */}

        {/* Section 4 Start */}
        <Box
          bgImage="url('/section1/green_noise.jpg')"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
          pt={{ base: "60px", md: "100px", lg: "120px" }}
          pb={{ base: "0px" }}
          px={{ base: "16px", md: "40px", lg: "80px", xl: "100px" }}
          color="white"
          overflow="hidden"
          position="relative"
        >
          <VStack spacing={{ base: 8, lg: 16 }} align="center" w="100%">
            {/* Header Part */}
            <VStack
              spacing={4}
              textAlign="center"
              mb={{ base: "0px", xl: "-80px" }}
            >
              <Flex
                gap={{ base: "0px", md: "0px", lg: "16px" }}
                direction={{ base: "column", md: "column", lg: "row" }}
              >
                <OutlinedHeading
                  text="PASSITON"
                  as="h1"
                  color="#BDE93D"
                  fontSize={{
                    base: "36px",
                    sm: "48px",
                    md: "60px",
                    lg: "64px",
                  }}
                  className={anybody.className}
                  fontWeight={800}
                />
                <OutlinedHeading
                  text="CHANGES THAT"
                  as="h1"
                  color="#FFFFFF"
                  fontSize={{
                    base: "36px",
                    sm: "48px",
                    md: "60px",
                    lg: "64px",
                  }}
                  className={anybody.className}
                  fontWeight={800}
                />
              </Flex>
              <Text
                fontSize={{ base: "18px", md: "20px", lg: "22px", xl: "24px" }}
                fontFamily={sequelSans.style.fontFamily}
                opacity={0.9}
              >
                Passiton is a simple app that helps you give away things you
                don't need — for free!
              </Text>
            </VStack>

            {/* Main Content: Phone + Looping Text */}
            <Flex
              direction={{ base: "column", lg: "row" }}
              align="center"
              justify="space-evenly"
              // gap={{ base: "40px", lg: "80px" }}
              w="100%"
            >
              {/* Phone Image */}
              <Center w={{ base: "260px", md: "320px", lg: "380px" }}>
                <Image
                  src="/section4/phone_mockup.webp" // Replace with your phone asset path
                  alt="Passiton App Mockup"
                  w={{ base: "90%", md: "90%", lg: "90%", "2xl": "100%" }}
                  h="auto"
                  position={"relative"}
                  top={{ base: 0, md: 0, lg: "100px", xl: "120px" }}
                  py={{ base: "28px", md: "28px", lg: "0px" }}
                />
              </Center>

              {/* Looping Text Side */}
              <VStack spacing={2}>
                <Flex gap={4}>
                  <Text
                    fontSize={{
                      base: "40px",
                      md: "56px",
                      lg: "70px",
                      xl: "100px",
                    }}
                    fontFamily={sequelSans.style.fontFamily}
                    fontWeight="800"
                    // mt={{ base: "2px", xl: "6px" }}
                  >
                    NO
                  </Text>

                  {/* Scrolling Box */}

                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={{ base: "16px" }}
                  >
                    <RotatingText
                      texts={["Buying", "Selling", "Pressure"]}
                      mainClassName="px-2 sm:px-2 md:px-3 text-black overflow-hidden py-0 rounded-lg w-[9ch]"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                      }}
                      rotationInterval={2000}
                    />
                    <Text
                      fontSize={{
                        base: "18px",
                        md: "20px",
                        lg: "22px",
                        xl: "24px",
                      }}
                      fontFamily={sequelSans.style.fontFamily}
                      opacity={0.8}
                      mb={{ base: "24px", xl: 0 }}
                    >
                      Just Passing it on...
                    </Text>
                  </Box>
                </Flex>
              </VStack>
            </Flex>
          </VStack>
        </Box>
        {/* Section 4 End */}

        {/* section 5 start */}
        <Box
          px={{
            base: "16px",
            md: "40px",
            lg: "80px",
            xl: "120px",
            "2xl": "160px",
          }}
          py={{ base: "40px", md: "80px", lg: "120px", xl: "140px" }}
          color={"#0A0C02"}
          // border={"1px solid black"}
          display={"flex"}
          flexDirection={"column"}
          gap={{ base: 0, lg: "100px", xl: "120px" }}
        >
          {/* HOW IT WORKS */}
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            position={"relative"}
          >
            <Flex
              gap={{ base: "0px", md: "0px", lg: "16px" }}
              direction={{ base: "column", md: "column", lg: "row" }}
              justify="center"
            >
              <OutlinedHeading
                text="HOW IT"
                as="h1"
                color="#FFFFFF"
                fontSize={{
                  base: "36px",
                  sm: "48px",
                  md: "60px",
                  lg: "64px",
                }}
                className={anybody.className}
                fontWeight={800}
              />
              <OutlinedHeading
                text="WORKS"
                as="h1"
                color="#BDE93D"
                fontSize={{
                  base: "36px",
                  sm: "48px",
                  md: "60px",
                  lg: "64px",
                }}
                className={anybody.className}
                fontWeight={800}
              />
            </Flex>
            <Image
              src="/section5/sec5svg1.svg"
              alt="how it works"
              w={"90px"}
              position={"relative"}
              bottom={"50px"}
              right={"10px"}
              display={{ base: "none", md: "none", lg: "block", xl: "block" }}
            />
          </Box>
          {/* CARDS for Large screen */}
          <Box
            display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
            flexDirection={"column"}
            gap={{ base: 0, lg: "100px", xl: "120px" }}
          >
            {/* 1st card */}
            <Flex
              // border={"1px solid black"}
              justifyContent={"space-around"}
              className="card-container"
              gap={{ base: 0, lg: "40px" }}
            >
              <Flex
                direction="column"
                // border={"1px solid black"}
                position={"relative"}
                gap={{ lg: "12px", xl: "16px" }}
              >
                <Image
                  src="/section5/sec5arrow1.svg"
                  alt="arrow1"
                  w="100px"
                  position={"relative"}
                  left={{ base: "0%", md: "0%", lg: "60%", xl: "64%" }}
                  top={{ base: "0%", md: "0%", lg: "8%", xl: "10%" }}
                />
                <Heading
                  fontSize={{ lg: "52px", xl: "64px" }}
                  fontFamily={sequelSans.style.fontFamily}
                  fontWeight={"500"}
                  lineHeight={{ lg: 1 }}
                >
                  List any item
                </Heading>
                <Text
                  fontSize={{ lg: "28px", xl: "32px" }}
                  fontFamily={sequelSans.style.fontFamily}
                  fontWeight={"300"}
                >
                  Take a photo. Add a short description. Done.
                </Text>
                <PressableButton
                  label="List an item"
                  shadowColor="#4A1D70"
                  bg="#feffe8"
                  onClick={() => console.log("clicked")}
                  fontSize={{ lg: "20px", xl: "24px" }}
                  fontWeight={"500"}
                />
              </Flex>
              <Box
                // border={"2px solid black"}
                position={"relative"}
                borderTopLeftRadius="24px"
                borderTopRightRadius="24px"
                borderBottomRightRadius="150px"
                borderBottomLeftRadius="24px"
                overflow="hidden"
                w={{ base: "100%", lg: "500px", xl: "565px" }}
                h={{ base: "400px", lg: "500px", xl: "565px" }}
                bg="#4F227C"
                className="card-box"
              >
                <Image
                  src="/section3/card1_noise.png"
                  alt="noise"
                  w={{ base: "80%", lg: "500px", xl: "565px" }}
                  position={"absolute"}
                  bottom={"-60px"}
                  right={"-60px"}
                />
                <Image
                  src="/section5/sec5largemob1.webp"
                  alt="list item"
                  w={{ base: "50%", lg: "300px", xl: "320px" }}
                  position={"absolute"}
                  bottom={"-180px"}
                  right={0}
                  zIndex={1}
                  transform="rotate(-10deg)"
                  className="mob-img-anim mob-img-br"
                />
              </Box>
            </Flex>
            {/* 2nd card */}
            <Flex
              justifyContent={"space-around"}
              className="card-container"
              gap={{ base: 0, lg: "40px" }}
            >
              <Box
                position={"relative"}
                borderTopLeftRadius="24px"
                borderTopRightRadius="24px"
                borderBottomRightRadius="24px"
                borderBottomLeftRadius="150px"
                overflow="hidden"
                w={{ base: "100%", lg: "500px", xl: "565px" }}
                h={{ base: "400px", lg: "500px", xl: "565px" }}
                bg="#D2E796"
                className="card-box"
              >
                <Image
                  src="/section3/card2_noise.png"
                  alt="noise"
                  w={{ base: "80%", lg: "500px", xl: "565px" }}
                  position={"absolute"}
                  bottom={"-60px"}
                  right={"50%"}
                  transform="translateX(50%)"
                />
                <Image
                  src="/section5/sec5largemob2.webp"
                  alt="list item"
                  w={{ base: "50%", lg: "300px", xl: "320px" }}
                  position={"absolute"}
                  bottom={"-180px"}
                  right={"50%"}
                  transform="translateX(50%)"
                  zIndex={1}
                  className="mob-img-anim mob-img-bc"
                />
              </Box>
              <Flex
                direction="column"
                position={"relative"}
                gap={{ lg: "12px", xl: "16px" }}
              >
                <Image
                  src="/section5/sec5arrow2.svg"
                  alt="arrow1"
                  w="100px"
                  position={"relative"}
                  left={{ base: "0%", md: "0%", lg: "0%", xl: "0%" }}
                  top={{ base: "0%", md: "0%", lg: "8%", xl: "10%" }}
                />
                <Heading
                  fontSize={{ lg: "52px", xl: "64px" }}
                  fontFamily={sequelSans.style.fontFamily}
                  fontWeight={"500"}
                  lineHeight={{ lg: 1 }}
                >
                  Discover nearby items
                </Heading>
                <Text
                  fontSize={{ lg: "28px", xl: "32px" }}
                  fontFamily={sequelSans.style.fontFamily}
                  fontWeight={"300"}
                >
                  See what people around you are sharing.
                </Text>
                <PressableButton
                  label="Browse nearby items"
                  shadowColor="#317039"
                  bg="#feffe8"
                  onClick={() => console.log("clicked")}
                  fontSize={{ lg: "20px", xl: "24px" }}
                  fontWeight={"500"}
                />
              </Flex>
            </Flex>
            {/* 3rd card */}
            <Flex
              justifyContent={"space-around"}
              className="card-container"
              gap={{ base: 0, lg: "40px" }}
            >
              <Flex
                direction="column"
                position={"relative"}
                gap={{ lg: "12px", xl: "16px" }}
              >
                <Image
                  src="/section5/sec5arrow3.svg"
                  alt="arrow1"
                  w="100px"
                  position={"relative"}
                  left={{ base: "0%", md: "0%", lg: "60%", xl: "64%" }}
                  top={{ base: "0%", md: "0%", lg: "8%", xl: "10%" }}
                />
                <Heading
                  fontSize={{ lg: "52px", xl: "64px" }}
                  fontFamily={sequelSans.style.fontFamily}
                  fontWeight={"500"}
                  lineHeight={{ lg: 1 }}
                >
                  Reach out and pass it on
                </Heading>
                <Text
                  fontSize={{ lg: "28px", xl: "32px" }}
                  fontFamily={sequelSans.style.fontFamily}
                  fontWeight={"300"}
                >
                  Connect, coordinate and give it a second life.
                </Text>
                <PressableButton
                  label="Start passing it on"
                  shadowColor="#FB580D"
                  bg="#feffe8"
                  onClick={() => console.log("clicked")}
                  fontSize={{ lg: "20px", xl: "24px" }}
                  fontWeight={"500"}
                />
              </Flex>
              <Box
                position={"relative"}
                borderTopLeftRadius="24px"
                borderTopRightRadius="24px"
                borderBottomRightRadius="150px"
                borderBottomLeftRadius="24px"
                overflow="hidden"
                w={{ base: "100%", lg: "500px", xl: "565px" }}
                h={{ base: "400px", lg: "500px", xl: "565px" }}
                bg="#FB580D"
                className="card-box"
              >
                <Image
                  src="/section3/card3_noise.png"
                  alt="noise"
                  w={{ base: "80%", lg: "500px", xl: "565px" }}
                  position={"absolute"}
                  top={"-60px"}
                  left={"-60px"}
                />
                <Image
                  src="/section5/sec5largemob3.webp"
                  alt="list item"
                  w={{ base: "50%", lg: "300px", xl: "320px" }}
                  position={"absolute"}
                  top={"-240px"}
                  left={0}
                  zIndex={1}
                  transform="rotate(-10deg)"
                  className="mob-img-anim mob-img-tl"
                />
              </Box>
            </Flex>
          </Box>
          {/* Mobile View */}
          <Box
            w="100%"
            display={{ base: "flex", lg: "none" }}
            flexDirection={"column"}
            gap={{ base: "32px", md: "60px" }}
            py={{ base: "24px", md: "40px" }}
          >
            {howItWorksSteps.map((step, index) => (
              <StepCard
                key={index}
                title={step.title}
                buttonText={step.buttonText}
                btnShadowColor={step.textColor}
                btnBg={"#feffe8"}
                btnOnClick={step.onClick}
                description={step.description}
                bgColor={step.bgColor}
                textColor={step.textColor}
                mockupImage={step.mockupImage}
                mockupBgImage={step.imgbgGrainEffect}
              />
            ))}
          </Box>
        </Box>
        {/* Section 5 end */}

        {/* Section 6 start */}
        <Box
          bgImage="url('/section1/green_noise.jpg')"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
          py={{ base: "60px", md: "100px", lg: "120px" }}
          px={{ base: "16px", md: "40px", lg: "80px", xl: "100px" }}
          color="white"
          overflow="hidden"
          position="relative"
        >
          <VStack spacing={{ base: 8, lg: 16 }} align="center" w="100%">
            {/* Header Part */}
            <VStack
              spacing={4}
              textAlign="center"
              mb={{ base: "0px", xl: "-80px" }}
            >
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"center"}
                position={"relative"}
              >
                <Flex
                  gap={{ base: "0px", md: "0px", lg: "16px" }}
                  direction={{ base: "column", md: "column", lg: "row" }}
                  justify="center"
                >
                  <OutlinedHeading
                    text="SIMPLE"
                    as="h1"
                    color="#BDE93D"
                    fontSize={{
                      base: "36px",
                      sm: "48px",
                      md: "60px",
                      lg: "64px",
                    }}
                    className={anybody.className}
                    fontWeight={800}
                  />
                  <OutlinedHeading
                    text="BY DESIGN"
                    as="h1"
                    color="#FFFFFF"
                    fontSize={{
                      base: "36px",
                      sm: "48px",
                      md: "60px",
                      lg: "64px",
                    }}
                    className={anybody.className}
                    fontWeight={800}
                  />
                </Flex>
                <Image
                  src="/section6/sec6svg1.svg"
                  alt="how it works"
                  w={"60px"}
                  position={"absolute"}
                  bottom={"50px"}
                  right={"-13%"}
                  display={{
                    base: "none",
                    md: "none",
                    lg: "block",
                    xl: "block",
                  }}
                />
              </Box>
              <Text
                fontSize={{ base: "18px", md: "20px", lg: "22px", xl: "24px" }}
                fontFamily={sequelSans.style.fontFamily}
                opacity={0.9}
              >
                We removed everything that didn't matter
              </Text>
            </VStack>
          </VStack>
        </Box>
        <Section6 />
        {/* Section 6 end */}
        {/* Section 7 start */}
        <Box>
          <Section7 />
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            flexWrap={"wrap"}
            maxW={"800px"}
            m={"auto"}
            px={{ base: "16px", md: "40px", lg: "0px" }}
          >
            <OutlinedHeading
              text="IMPACT"
              as="h1"
              color="#BDE93D"
              fontSize={{
                base: "36px",
                sm: "48px",
                md: "60px",
                lg: "64px",
              }}
              className={anybody.className}
              fontWeight={800}
              pr={{ base: "10px", md: "20px" }}
            />
            <OutlinedHeading
              text="DOESN'T NEED"
              as="h1"
              color="#FFFFFF"
              fontSize={{
                base: "36px",
                sm: "48px",
                md: "60px",
                lg: "64px",
              }}
              className={anybody.className}
              fontWeight={800}
              pr={{ base: "10px", md: "20px" }}
            />
            <OutlinedHeading
              text="TO BE LOUD"
              as="h1"
              color="#FFFFFF"
              fontSize={{
                base: "36px",
                sm: "48px",
                md: "60px",
                lg: "64px",
              }}
              className={anybody.className}
              fontWeight={800}
              pr={{ base: "10px", md: "20px" }}
            />
          </Box>
          <Text
            fontSize={{ base: "16px", lg: "24px" }}
            textAlign={"center"}
            color={"black"}
            fontFamily={sequelSans.style.fontFamily}
            px={{ base: "16px", md: "40px", lg: "80px", xl: "100px" }}
          >
            It needs to be consistent.
          </Text>
        </Box>
        {/* Section 7 end */}
        {/* Section 8 start */}
        <Section8 />
        {/* Section 8 end */}
        {/* Section 9 start */}
        <Section9 />
        {/* Section 9 end */}
        <Footer />
      </Box>
    </>
  );
}
