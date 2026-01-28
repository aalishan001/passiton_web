import { useRef, useState } from "react";
import { Box, VStack, Flex, Text, Image } from "@chakra-ui/react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { anybody } from "@/lib/fonts";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Section6 = () => {
  const containerRef = useRef(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Local state to trigger React re-renders for the image key
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Smooth progress for the horizontal text movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Text movement values
  const xLeft = useTransform(smoothProgress, [0, 1], ["0%", "-25%"]);
  const xRight = useTransform(smoothProgress, [0, 1], ["-25%", "0%"]);

  // Map the scroll progress to an integer [0, 1, 2]
  const imageIndexTransform = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1], // Thresholds for switching
    [0, 1, 2, 3],
  );

  // Use this event listener to update React state when the scroll-driven value changes
  useMotionValueEvent(imageIndexTransform, "change", (latest) => {
    const rounded = Math.floor(latest);
    if (rounded !== activeImgIndex) {
      setActiveImgIndex(rounded);
    }
  });

  const images = [
    "/section5/sec5largemob1.webp",
    "/section5/sec5largemob2.webp",
    "/section5/sec5largemob3.webp",
    "/section5/sec5largemob1.webp",
  ];

  const marqueeText =
    "No clutter. No ads. No noise. No clutter. No ads. No noise. ";

  return (
    <Box ref={containerRef} h="300vh" position="relative">
      <Box
        position="sticky"
        top={0}
        h="100vh"
        w="100%"
        overflow="hidden"
        bgImage="url('/section1/green_noise.jpg')"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* Background Noise Layer */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="url('/section1/green_noise.jpg')"
          opacity={0.4}
          zIndex={0}
        />

        <VStack w="100%" position="relative" zIndex={1}>
          {/* MARQUEE SECTION */}
          <Box w="100%" position="relative">
            {/* Horizontal Text Rows */}
            <VStack spacing={4} opacity={0.15}>
              <MotionFlex style={{ x: xLeft }} whiteSpace="nowrap">
                <MarqueeRow text={marqueeText} />
              </MotionFlex>
              <MotionFlex style={{ x: xRight }} whiteSpace="nowrap">
                <MarqueeRow text={marqueeText} />
              </MotionFlex>
              <MotionFlex style={{ x: xLeft }} whiteSpace="nowrap">
                <MarqueeRow text={marqueeText} />
              </MotionFlex>
              <MotionFlex style={{ x: xRight }} whiteSpace="nowrap">
                <MarqueeRow text={marqueeText} />
              </MotionFlex>
            </VStack>

            {/* CENTER PHONE IMAGE */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              zIndex={10}
              w={{ base: "260px", md: "300px", lg: "340px" }}
            >
              {/* AnimatePresence can be added here for cross-fades, 
                  but a simple keyed MotionBox works well for swaps */}
              {/* CENTER PHONE IMAGE */}
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex={10}
                w={{ base: "260px", md: "300px", lg: "340px" }}
              >
                {/* Standard Box instead of MotionBox removes the transition effects */}
                <Box key={activeImgIndex}>
                  <Image
                    src={images[activeImgIndex]}
                    alt={`Mockup ${activeImgIndex}`}
                    w="100%"
                    h="auto"
                    objectFit="contain"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

const MarqueeRow = ({ text }) => (
  <Text
    fontSize={{ base: "80px", md: "120px", lg: "140px" }}
    fontWeight="900"
    color="white"
    fontFamily={anybody.style.fontFamily}
    lineHeight="1"
    letterSpacing="tighter"
  >
    {text} {text}
  </Text>
);

export default Section6;
