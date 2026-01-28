import { Box, VStack, Image, Text, Spacer } from "@chakra-ui/react";
import { anybody, sequelSans } from "@/lib/fonts";

const GivingCard = ({
  bgColor,
  image,
  title,
  description,
  textColor,
  subtextColor,
  imgbgGrainEffect,
}) => {
  return (
    <VStack
      className="giving-card"
      bg={bgColor}
      borderRadius="24px"
      // Padding matches the visual "breathing room" in your UI
      align="center"
      spacing={8}
      w="100%"
      // Ensures uniform height across the grid row
      minH={{ base: "380px", md: "440px", lg: "440px", xl: "500px" }}
      justifyContent="center"
      position="relative"
      textAlign="left"
    >
      <Spacer />
      {/* IMAGE CONTAINER - Centers the 3D asset over the noise effect */}
      <Box
        position="relative"
        w="90%"
        // h={{ base: "160px", md: "200px", lg: "220px" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {/* Layer 1: Grain Noise Image (Centered behind the asset) */}
        <Image
          src={imgbgGrainEffect}
          alt=""
          position="absolute"
          // Slightly larger than the main image to create the "glow/texture" effect
          w={{ base: "260px", md: "340px", lg: "100%" }}
          //   border={"1px solid black"}
          h="auto"
          zIndex={0}
          pointerEvents="none"
          userSelect="none"
        />

        {/* Layer 2: Main 3D Asset */}
        <Image
          className="giving-card-image"
          style={{ animationDelay: `${Math.random() * 1.5}s` }}
          src={image}
          alt={title}
          h={{ base: "150%", lg: "120%" }}
          objectFit="contain"
          zIndex={1}
        />
      </Box>
      <Spacer />

      {/* TEXT CONTENT CONTAINER */}
      <VStack
        align="flex-start"
        // spacing={3}
        w="100%"
        px={{ base: "28px" }}
        pb={"28px"}
        gap={0}
      >
        <Text
          color={textColor}
          fontSize={{ base: "28px", md: "30px", lg: "30px", xl: "32px" }}
          fontFamily={anybody.style.fontFamily}
          fontWeight="700"
          lineHeight="1"
        >
          {title}
        </Text>
        <Text
          color={subtextColor}
          fontSize={{ base: "18px", md: "20px", lg: "20px", xl: "22px" }}
          fontFamily={sequelSans.style.fontFamily}
          fontWeight="400"
          lineHeight="1.4"
          opacity={0.9}
        >
          {description}
        </Text>
      </VStack>
    </VStack>
  );
};

export default GivingCard;
