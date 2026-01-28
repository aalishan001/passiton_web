import {
  Box,
  VStack,
  HStack,
  Image,
  Text,
  Link,
  Flex,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import { anybody, sequelSans } from "@/lib/fonts";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  // Desktop scattered positions - Coordinates tightened to reduce gaps
  const leftAssets = [
    {
      src: "/Footer/clock.png",
      top: "5%",
      left: { lg: "0%", xl: "0%" },
      size: { lg: "180px", xl: "200px" },
    },
    {
      src: "/Footer/plant.png",
      top: "18%",
      left: { lg: "14%", xl: "12%" },
      size: "220px",
    },
    {
      src: "/Footer/cup.png",
      top: "44%",
      left: { lg: "0%", xl: "0%" },
      size: "210px",
    },
    {
      src: "/Footer/book.png",
      top: "60%",
      left: { lg: "14%", xl: "12%" },
      size: "200px",
    },
    {
      src: "/Footer/mouse.png",
      top: "80%",
      left: { lg: "0%", xl: "0%" },
      size: "200px",
    },
  ];

  const rightAssets = [
    {
      src: "/Footer/backpack.png",
      top: "5%",
      right: { lg: "0%", xl: "0%" },
      size: { lg: "160px", xl: "160px" },
    },
    {
      src: "/Footer/mat.png",
      top: "25%",
      right: { lg: "14%", xl: "12%" },
      size: "170px",
    },
    {
      src: "/Footer/bowl.png",
      top: "40%",
      right: { lg: "0%", xl: "0%" },
      size: "180px",
    },
    {
      src: "/Footer/coloring_book.png",
      top: "60%",
      right: { lg: "14%", xl: "12%" },
      size: "160px",
    },
    {
      src: "/Footer/hoodie.png",
      top: "80%",
      right: { lg: "0%", xl: "0%" },
      size: "200px",
    },
  ];

  const allAssets = [...leftAssets, ...rightAssets];

  return (
    <Box
      as="footer"
      bg="transparent"
      pt="80px"
      pb="40px"
      position="relative"
      overflow="hidden"
      color={"black"}
    >
      {/* 1. TOP HEADING & SUBTEXT */}
      <VStack
        spacing={4}
        textAlign="center"
        pb={{ base: "24px", md: "24px", lg: "16px", xl: "16px" }}
        position={"relative"}
        // border={"1px solid black"}
      >
        {/* font-family: Anybody; font-weight: 700; font-style: Bold; font-size:
        128px; leading-trim: NONE; line-height: 110.00000000000001%;
        letter-spacing: -4%; text-align: center; */}
        <Heading
          className={styles.strokeHeading}
          fontFamily={sequelSans.style.fontFamily}
          fontSize={{ base: "52px", md: "80px", lg: "92px", xl: "116px" }}
          lineHeight="1.2"
          fontWeight="700"
          color="#2D5A27"
        >
          Start with a small act
        </Heading>
        <Text
          fontFamily={sequelSans.style.fontFamily}
          fontSize={{ base: "16px", md: "18px", lg: "20px", xl: "24px" }}
          lineHeight="1.2"
          px={{ base: "16px", md: "40px", lg: "60px", xl: "100px" }}
        >
          Scan to download the app. Pass it on, Feel the joy of giving!
        </Text>
        <Image
          src="/Footer/footer_arrow.svg"
          alt="arrow"
          position={"absolute"}
          top={"100%"}
          left={"30%"}
          display={{ base: "none", lg: "block" }}
        />
      </VStack>

      {/* 2. CENTER CONTENT */}
      <Box
        position="relative"
        h={{ base: "auto", lg: "500px" }}
        mb={{ base: "40px", lg: "80px" }}
      >
        {/* DESKTOP ASSETS (Animated, Larger, Closer to center) */}
        {leftAssets.map((asset, i) => (
          <Image
            key={`left-${i}`}
            src={asset.src}
            position="absolute"
            top={asset.top}
            left={asset.left}
            boxSize={asset.size}
            display={{ base: "none", lg: "block" }}
            objectFit="contain"
            className="giving-card-image"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}

        {rightAssets.map((asset, i) => (
          <Image
            key={`right-${i}`}
            src={asset.src}
            position="absolute"
            top={asset.top}
            right={asset.right}
            boxSize={asset.size}
            display={{ base: "none", lg: "block" }}
            objectFit="contain"
            className="giving-card-image"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}

        {/* Center QR Code */}
        <Flex justify="center" align="center" h="100%">
          <Image
            src="/Footer/qr-code.png"
            boxSize={{ base: "180px", md: "250px" }}
          />
        </Flex>

        {/* MOBILE ASSETS (Static, Larger, Tight Gap, Offset row) */}
        <Box display={{ base: "block", lg: "none" }} mt={6}>
          <SimpleGrid columns={5} spacing={1}>
            {allAssets.map((asset, i) => {
              // Logic to move the first and last image in the grid up slightly
              const isFirstOrLast = i === 0 || i === 4 || i === 5 || i === 9;
              return (
                <Flex
                  key={i}
                  justify="center"
                  align="center"
                  transform={isFirstOrLast ? "translateY(-30px)" : "none"}
                >
                  <Image
                    src={asset.src}
                    boxSize={{ base: "75px", md: "100px" }}
                    objectFit="contain"
                  />
                </Flex>
              );
            })}
          </SimpleGrid>
        </Box>
      </Box>

      {/* 3. BOTTOM BRANDING */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "flex-end" }}
        gap={{ base: 10, md: 12 }}
        px={{ base: "15px", md: "40px", lg: "80px", xl: "160px" }}
        mt={{ base: "16px", md: "24px", lg: "32px", xl: "100px" }}
      >
        <VStack align="flex-start" maxW="750px" spacing={3}>
          <HStack spacing={2}>
            <Image
              src="/Footer/footer_logo.png"
              height={{ base: "60px", md: "72px", lg: "80px", xl: "88px" }}
            />
            <Text
              fontSize={{ base: "32px", md: "40px", lg: "48px", xl: "52px" }}
              fontFamily={sequelSans.style.fontFamily}
              fontWeight="800"
              color="#2D5A27"
            >
              Passiton
            </Text>
          </HStack>
          <Text
            fontSize={{ base: "12px", md: "14px", lg: "14px", xl: "16px" }}
            color="gray.600"
            lineHeight="1.4"
            textAlign="left"
            fontFamily={sequelSans.style.fontFamily}
          >
            PASSITON IS A COMMUNITY-DRIVEN SHARING PLATFORM AND DOES NOT
            FACILITATE BUYING OR SELLING OF ITEMS. ALL ITEMS LISTED ARE SHARED
            FREELY BETWEEN USERS. PASSITON DOES NOT VERIFY, INSPECT OR GUARANTEE
            THE CONDITION OF ITEMS. USERS ARE RESPONSIBLE FOR THEIR OWN
            INTERACTIONS AND EXCHANGES. PRODUCT SCREENS AND VISUALS SHOWN ON
            THIS WEBSITE ARE FOR ILLUSTRATIVE PURPOSES ONLY.
          </Text>
        </VStack>

        <VStack
          align={{ base: "flex-start", md: "flex-start" }}
          spacing={3}
          minW={"200px"}
        >
          <Text
            fontWeight="700"
            fontSize={{ base: "16px", md: "20px", lg: "32px", xl: "40px" }}
            fontFamily={sequelSans.style.fontFamily}
          >
            Follow us on
          </Text>
          <HStack spacing={3}>
            <Link
              href="https://www.facebook.com/PassitonIndia"
              isExternal
              target="_blank"
            >
              <Image
                src="/Footer/fb.svg"
                boxSize={{ base: "40px", md: "44px", lg: "52px", xl: "60px" }}
              />
            </Link>
            <Link
              href="https://www.instagram.com/passitonindia/?utm_source=ig_web_button_share_sheet"
              isExternal
              target="_blank"
            >
              <Image
                src="/Footer/insta.svg"
                boxSize={{ base: "40px", md: "44px", lg: "52px", xl: "60px" }}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/passiton-india/?viewAsMember=true"
              isExternal
              target="_blank"
            >
              <Image
                src="/Footer/linkedin.svg"
                boxSize={{ base: "40px", md: "44px", lg: "52px", xl: "60px" }}
              />
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;
