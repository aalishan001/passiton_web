import { Box, VStack, Image, Text, Button, Flex } from "@chakra-ui/react";
import { anybody, sequelSans } from "@/lib/fonts";
import { PressableButton } from "./CustomAnimatedButton";

const StepCard = ({
  bgColor,
  title,
  description,
  mockupImage,
  mockupBgImage,
  textColor,
  btnBg = "white",
  buttonText,
  btnShadowColor,
  btnOnClick,
}) => {
  return (
    <Box
      position="relative"
      bg={bgColor}
      borderRadius="32px"
      borderBottomRightRadius={"100px"}
      overflow="hidden"
      w="100%"
      minH={{ base: "340px", md: "400px" }}
      px={{ base: "20px", md: "24px" }}
      pt={{ base: "24px", md: "32px" }}
      pb={{ base: "16px", md: "20px" }}
      display="flex"
      flexDirection="column"
      transition="transform 0.2s ease"
      _hover={{ transform: "translateY(-4px)" }}
    >
      {/* 1. Grain/Noise Overlay Layer */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.15}
        pointerEvents="none"
        backgroundImage="url('/path-to-your-grain-texture.png')"
        backgroundSize="200px"
        zIndex={1}
      />

      {/* 2. Content Layer */}
      <VStack
        align="flex-start"
        justifyContent={"space-between"}
        // border={"1px solid black"}
        spacing={6}
        zIndex={2}
        position="relative"
        minH={{ base: "300px", md: "360px" }}
      >
        <Box>
          <Text
            as="h3"
            color={textColor}
            fontSize={{ base: "28px", md: "40px" }}
            fontFamily={sequelSans.style.fontFamily}
            fontWeight="600"
          >
            {title}
          </Text>

          <PressableButton
            label={buttonText}
            shadowColor={btnShadowColor}
            bg={btnBg}
            onClick={btnOnClick}
            fontSize={{ base: "16px", md: "24px", lg: "20px", xl: "24px" }}
            fontWeight={"500"}
          />
        </Box>

        <Flex flex={1} align="flex-end">
          <Text
            color={textColor}
            fontSize={{ base: "18px", md: "28px" }}
            fontFamily={sequelSans.style.fontFamily}
            maxW={{ base: "160px", md: "400px" }} // Prevents text from running into the phone image
            lineHeight="1.2"
            // border={"1px solid black"}
          >
            {description}
          </Text>
        </Flex>
      </VStack>

      {/* 3. Phone Mockup Layer (Floating at bottom-right) */}
      <Box
        position="absolute"
        bottom="-100px"
        right="-20px"
        zIndex={2}
        w={{ base: "180px", md: "220px" }}
      >
        <Image
          src={mockupBgImage}
          alt="App Interface"
          objectFit="contain"
          w={"100%"}
          position={"absolute"}
          top={{ base: "30px", md: "80px" }}
          left={{ base: "-60px", md: "-80px" }}
          // border={"1px solid black"}
        />
        <Image
          src={mockupImage}
          alt="App Interface"
          transform="rotate(-10deg)" // Adds that organic, playful tilt seen in the UI
          objectFit="contain"
          w={"100%"}
        />
      </Box>
    </Box>
  );
};

export default StepCard;
