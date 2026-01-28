import { Box, VStack, Image, Text, Spacer, SimpleGrid } from "@chakra-ui/react";
import { anybody, sequelSans } from "@/lib/fonts";
import OutlinedHeading from "./OutlinedHeading";

const Section9Card = ({
  bgColor,
  image,
  titleTop,
  titleBottom,
  description,
  textColor,
  subtextColor,
  imgbgGrainEffect,
}) => {
  return (
    <VStack
      bg={bgColor}
      borderRadius="32px"
      align="center"
      w="100%"
      minH={{ base: "400px", md: "420px", xl: "500px" }}
      py={{ base: "32px", lg: "40px" }}
      px={{ base: "16px", md: "24px", xl: "26px", "2xl": "32px" }}
      spacing={0}
      position="relative"
      textAlign="center"
    >
      {/* TEXT CONTENT */}
      <VStack spacing={0} w="100%" mb={6}>
        <Text
          color={textColor}
          fontSize={{ base: "24px", md: "28px", lg: "32px", xl: "40px" }}
          fontFamily={anybody.style.fontFamily}
          fontWeight="700"
          lineHeight="1"
        >
          {titleTop}
        </Text>
        <Text
          color={subtextColor}
          fontSize={{ base: "24px", md: "28px", lg: "32px", xl: "40px" }}
          fontFamily={sequelSans.style.fontFamily}
          fontWeight="500"
          lineHeight="1"
        >
          {titleBottom}
        </Text>

        <Text
          color={subtextColor}
          fontSize={{ base: "16px", md: "18px", lg: "20px", xl: "24px" }}
          fontFamily={sequelSans.style.fontFamily}
          fontWeight="400"
          lineHeight="1.4"
          maxW={{ base: "300px", lg: "400px", xl: "600px" }}
          mt={6}
          opacity={0.9}
        >
          {description}
        </Text>
      </VStack>

      <Spacer />

      {/* IMAGE CONTAINER AT BOTTOM */}
      <Box
        position="relative"
        w="100%"
        h={{ base: "160px", md: "200px" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={imgbgGrainEffect}
          alt=""
          position="absolute"
          w="100%"
          maxW="280px"
          h="auto"
          zIndex={0}
          opacity={0.8}
          pointerEvents="none"
          userSelect="none"
        />

        <Image
          // Applying the Section 3 animation class
          className="giving-card-image"
          // Randomizing delay so they don't bounce in unison
          style={{ animationDelay: `${Math.random() * 1.5}s` }}
          src={image}
          alt={titleTop}
          h={{ base: "130%", lg: "110%" }} // Adjusted to feel slightly larger like Sec 3
          objectFit="contain"
          zIndex={1}
        />
      </Box>
    </VStack>
  );
};

const Section9 = () => {
  const section9Cards = [
    {
      bgColor: "#4F227C",
      textColor: "#FB580D", // Orange accent
      subtextColor: "#FFFFFF",
      image: "/section9/card1_asset.png",
      imgbgGrainEffect: "/section3/card1_noise.png",
      titleTop: "Your Things,",
      titleBottom: "not thrown away",
      description:
        "Give unused items a second life instead of sending them to the bin.",
    },
    {
      bgColor: "#D2E796",
      textColor: "#481F72", // Purple accent
      subtextColor: "#000000", // Dark text to match second card's vibe
      image: "/section9/card2_asset.png",
      imgbgGrainEffect: "/section3/card2_noise.png",
      titleTop: "Your Neighborhood",
      titleBottom: "more connected",
      description: "Turn everyday giving into meaningful local connections.",
    },
    {
      bgColor: "#FB580D",
      textColor: "#D2E93D", // Lime accent
      subtextColor: "#FFFFFF",
      image: "/section9/card3_asset.png",
      imgbgGrainEffect: "/section3/card3_noise.png",
      titleTop: "sharing,",
      titleBottom: "as a way of life",
      description:
        "Build a simple habit that makes giving feel natural and repeatable.",
    },
  ];

  return (
    <Box py="80px" px={{ base: "20px", md: "40px", lg: "80px", xl: "120px" }}>
      <Text
        fontSize={{ base: "16px", lg: "24px" }}
        textAlign={"center"}
        color={"black"}
        fontFamily={sequelSans.style.fontFamily}
      >
        A simple vision
      </Text>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        maxW={"750px"}
        m={"auto"}
      >
        <OutlinedHeading
          text="SHARING,"
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
          text="BUILT FOR"
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
          text="EVERY CITY"
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

      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, xl: 3 }}
        spacing={{ base: 6, lg: 8 }}
        mt={{ base: "40px", md: "60px" }}
        alignItems="stretch"
        gap={"16px"}
      >
        {section9Cards.map((card, index) => (
          <Section9Card key={index} {...card} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Section9;
