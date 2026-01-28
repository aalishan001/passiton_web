import React, { useRef } from "react";
import { Box, Text, VStack, Flex, useBreakpointValue } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { anybody } from "@/lib/fonts";

const MotionPath = motion.path;

const Section7 = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const isMobile = useBreakpointValue({ base: true, lg: false });
  const cableWidth = 3.2; // Slightly thinner for a cleaner "wire" look

  const content = [
    {
      title: "REDUCING",
      subtitle: "THE WASTE LOOP",
      desc: "Reuse stops waste before it begins.",
    },
    {
      title: "STRENGTHENING",
      subtitle: "LOCAL CONNECTIONS",
      desc: "What you give can help someone nearby.",
    },
    {
      title: "NORMALIZING",
      subtitle: "REUSE AS A HABIT",
      desc: "When sharing is easy, it becomes routine.",
    },
    {
      title: "PRESERVING",
      subtitle: "FINITE RESOURCES",
      desc: "Reuse saves materials, energy, and time.",
    },
  ];

  return (
    <Box
      ref={containerRef}
      maxH={{ base: "80vh", lg: "100vh" }}
      bg="transparent"
      py={{ base: 10, lg: 20 }}
      position="relative"
      overflow="hidden"
    >
      {/* SVG LAYER */}
      <Box position="absolute" top={0} left={0} w="100%" h="100%" zIndex={0}>
        <svg
          width="100%"
          height="100%"
          viewBox={isMobile ? "0 0 400 1100" : "0 0 1440 1200"}
          fill="none"
          preserveAspectRatio="xMidYMin slice"
        >
          {isMobile ? (
            <>
              {/* REVERSED MOBILE STACK: Top cable is longest, bottom is shortest */}
              <FlowGroup
                d="M120,0 V110 Q120,140 180,140"
                delay={0}
                isInView={isInView}
                strokeWidth={cableWidth}
              />
              <FlowGroup
                d="M100,0 V240 Q100,270 180,270"
                delay={0.2}
                isInView={isInView}
                strokeWidth={cableWidth}
              />
              <FlowGroup
                d="M80,0 V370 Q80,400 180,400"
                delay={0.4}
                isInView={isInView}
                strokeWidth={cableWidth}
              />
              <FlowGroup
                d="M60,0 V500 Q60,530 180,530"
                delay={0.6}
                isInView={isInView}
                strokeWidth={cableWidth}
              />
            </>
          ) : (
            <>
              {/* REVERSED DESKTOP STACK: Inner cables (near center) go further out */}
              {/* 1sr outer left */}
              <FlowGroup
                d="M660,0 V320 Q660,350 600,350"
                delay={0}
                isInView={isInView}
                strokeWidth={cableWidth}
              />
              {/* 2nd inner left */}
              <FlowGroup
                d="M690,0 V580 Q690,610 600,610"
                delay={0.4}
                isInView={isInView}
                strokeWidth={cableWidth}
              />

              {/* 4th outer right */}
              <FlowGroup
                d="M750,0 V230 Q750,260 840,260"
                delay={0.2}
                isInView={isInView}
                strokeWidth={cableWidth}
              />
              {/* 3rd inner right */}
              <FlowGroup
                d="M720,0 V430 Q720,460 840,460"
                delay={0.8}
                isInView={isInView}
                strokeWidth={cableWidth}
              />
            </>
          )}
        </svg>
      </Box>

      {/* CONTENT LAYER */}
      <Box
        position="relative"
        zIndex={1}
        h={isMobile ? "1100px" : "1200px"}
        maxW="1440px"
        mx="auto"
      >
        {isMobile ? (
          <Box w="100%" h="100%">
            <AbsoluteContent top="7%" left="50%" data={content[0]} />
            <AbsoluteContent top="20%" left="50%" data={content[1]} />
            <AbsoluteContent top="32%" left="50%" data={content[2]} />
            <AbsoluteContent top="45%" left="50%" data={content[3]} />
          </Box>
        ) : (
          <Box w="100%" h="100%">
            {/* Top Outer Left (Inner Cable) */}
            <AbsoluteContent
              top="28%"
              left="50%"
              transform="translateX(-150%)"
              align="flex-end"
              data={content[0]}
            />
            {/* Bottom Inner Left (Outer Cable) */}
            <AbsoluteContent
              top="56%"
              left="50%"
              transform="translateX(-150%)"
              align="flex-end"
              data={content[3]}
            />

            {/* Top Outer Right (Inner Cable) */}
            <AbsoluteContent
              top="17%"
              left="50%"
              transform="translateX(50%)"
              align="flex-start"
              data={content[1]}
            />
            {/* Middle Inner Right (Outer Cable) */}
            <AbsoluteContent
              top="39%"
              left="50%"
              transform="translateX(50%)"
              align="flex-start"
              data={content[2]}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

const AbsoluteContent = ({
  top,
  left,
  transform,
  data,
  align = "flex-start",
}) => (
  <Flex
    position="absolute"
    top={top}
    left={left}
    transform={transform}
    direction="column"
    align={align}
    w={{ base: "180px", lg: "400px" }}
  >
    <ContentBlock {...data} align={align} />
  </Flex>
);

const FlowGroup = ({ d, delay, isInView, strokeWidth }) => (
  <g>
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <MotionPath
      d={d}
      stroke="#C1DDC5"
      strokeWidth={strokeWidth}
      strokeOpacity="0.8"
      initial={{ pathLength: 0 }}
      animate={isInView ? { pathLength: 1 } : {}}
      transition={{ duration: 1.5, delay, ease: "easeInOut" }}
    />
    <MotionPath
      d={d}
      stroke="#317039"
      strokeWidth={strokeWidth + 0.3}
      strokeLinecap="square"
      filter="url(#glow)"
      initial={{ pathLength: 0.2, pathOffset: 0, opacity: 0 }}
      animate={
        isInView
          ? {
              pathOffset: [0, 1],
              opacity: [0, 1, 1, 0],
            }
          : {}
      }
      transition={{
        duration: 3.5,
        repeat: Infinity,
        delay: delay + 1.2,
        ease: "linear",
      }}
    />
  </g>
);

const ContentBlock = ({ title, subtitle, desc, align }) => (
  <VStack
    align={align}
    spacing={1}
    textAlign={align === "flex-end" ? "right" : "left"}
  >
    <Text
      fontWeight="900"
      color="#2D5A27"
      fontSize={{ base: "14px", md: "lg", lg: "36px" }}
      lineHeight="0.9"
      fontFamily={anybody.style.fontFamily}
    >
      <Box as="span" color="#8CC63F" display="block">
        {title}
      </Box>
      {subtitle}
    </Text>
    <Text
      fontSize={{ base: "11px", lg: "17px" }}
      color="gray.600"
      fontWeight="500"
      maxW="320px"
    >
      {desc}
    </Text>
  </VStack>
);

export default Section7;
