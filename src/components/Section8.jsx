import { Box, VStack, Text, Flex, AspectRatio } from "@chakra-ui/react";
import { anybody, sequelSans } from "@/lib/fonts";

const Section8 = () => {
  return (
    <Box
      py={{ base: "40px", md: "80px" }}
      px={{ base: "20px", md: "40px", lg: "100px", xl: "180px" }}
    >
      <VStack spacing={10} w="100%">
        {/* --- VIDEO PLAYER CONTAINER --- */}
        <Box
          w="100%"
          maxW="1100px"
          // Stroke 4 Green Border
          border="8px solid #317039"
          borderRadius={{ base: "24px", md: "40px" }}
          overflow="hidden"
          p={{ base: "6px", md: "12px" }}
          bg="#E6F4EA" // Light green inner padding area
        >
          <Box
            borderRadius={{ base: "18px", md: "28px" }}
            overflow="hidden"
            bg="black"
          >
            <AspectRatio ratio={16 / 9}>
              <iframe
                title="Passiton Video"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Dummy YouTube link
                allowFullScreen
                style={{ border: 0 }}
              />
            </AspectRatio>
          </Box>
        </Box>

        {/* --- INFO CARD SECTION --- */}
        <Box
          w="100%"
          maxW="1100px"
          bg="#317039" // Dark green background
          borderRadius={{ base: "32px", md: "48px", lg: "54px", xl: "60px" }}
          py={{ base: "20px", md: "32px" }}
          px={{ base: "24px", md: "48px" }}
          textAlign="center"
        >
          <VStack spacing={1}>
            <Text
              fontSize={{ base: "20px", md: "28px", lg: "32px" }}
              fontFamily={anybody.style.fontFamily}
              fontWeight="700"
              color="white"
              lineHeight="1.2"
            >
              <Box as="span" color="#BDE93D">
                Giving,
              </Box>{" "}
              made effortless!
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "18px" }}
              fontFamily={sequelSans.style.fontFamily}
              fontWeight="400"
              color="whiteAlpha.900"
              maxW="700px"
            >
              Watch how a few simple steps can turn unused items into meaningful
              impact.
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Section8;
