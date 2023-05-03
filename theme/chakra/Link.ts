import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brandPrimary = defineStyle({
  _hover: {
    color: "textColor.200",
    textDecoration: "none",
  },
});

const brandClear = defineStyle({
  _hover: {
    textDecoration: "none",
  },
});

const clearHome = defineStyle({
  textTransform: "uppercase",
  color: "black.100",
  fontSize: "12px",
  fontWeight: "700",
  letterSpacing: "0.12px",
  fontFamily: 'Poppins-700',
  _hover: {
    textDecoration: "none",
  },
});

export const LinkTheme = defineStyleConfig({
  variants: { brandPrimary, brandClear, clearHome },
});
