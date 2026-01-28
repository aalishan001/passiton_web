import { sequelSans } from "@/lib/fonts";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

export const PressableButton = ({
  label,
  onClick,
  shadowColor = "#000000",
  bg = "transparent",
  textColor = "black",
  fontSize = "2xl",
  fontWeight = "500",
}) => {
  const [pressed, setPressed] = useState(false);

  return (
    <Button
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onClick={onClick}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontFamily={sequelSans.style.fontFamily}
      color={textColor}
      bg={bg}
      border={`2px solid ${shadowColor}`}
      borderRadius="9999px"
      px={{ base: 2, md: 4 , lg: 8, xl: 10}}
      py={{ base: 2, md: 4 , lg: 5, xl: 6}}
      transform={pressed ? "translate(4px, 4px)" : "translate(0, 0)"}
      boxShadow={pressed ? "0px 0px 0 transparent" : `4px 4px 0 ${shadowColor}`}
      transition="all 0.12s ease"
      w={"fit-content"}
    >
      {label}
    </Button>
  );
};
