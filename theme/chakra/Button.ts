import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const blackOne = defineStyle({
  fontSize: "13px",
  fontFamily: "Poppins-700",
  letterSpacing: "0.13px",
  padding: "21px 29px",
  backgroundColor: "black.100",
  borderColor: "black.100 black.100  black.600",
  color: "white",
  textTransform: "uppercase",
  borderRadius: "0",
  transition:
    "color 0.15s,background-color 0.15s,border-color 0.15s,box-shadow 0.15s,transform 0.2s",
    lineHeight: '1.42857',
    _hover : {
      borderColor: "black.200 black.200  black.100",
      bg: "black.700",
    }
 
  });

export const ButtonTheme = defineStyleConfig({
  variants: { blackOne },
});
