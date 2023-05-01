import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brandPrimary = defineStyle({
 
  _hover: {
    color: "textColor.200",
    textDecoration: "none",
  },
});

export const LinkTheme = defineStyleConfig({
  variants: { brandPrimary },
});
