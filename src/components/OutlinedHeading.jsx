import { Heading } from "@chakra-ui/react";

/**
 * Reusable outlined heading component
 *
 * @param {string} text - Heading text
 * @param {string} as - h1, h2, h3 etc.
 * @param {string} color - Text color
 * @param {string|number} maxW - Max width
 * @param {object} fontSize - Responsive fontSize object (chakra)
 * @param {string} className - Optional extra class
 */
export default function OutlinedHeading({
  text,
  as = "h1",
  color = "#ffffff",
  //   maxW = "1100px",
  fontSize = {
    base: "36px",
    sm: "48px",
    md: "80px",
    lg: "96px",
  },
  className = "",
  ...rest
}) {
  return (
    <Heading
      as={as}
      className={`hero-heading ${className}`}
      fontWeight="extrabold"
      textTransform="uppercase"
      letterSpacing="wider"
      lineHeight="1.15"
      //   maxW={maxW}
      color={color}
      fontSize={fontSize}
      {...rest}
    >
      <span className="hero-heading-text" style={{ color }}>
        {text}
      </span>
    </Heading>
  );
}
