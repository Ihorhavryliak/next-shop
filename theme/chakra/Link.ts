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

export const LinkTheme = defineStyleConfig({
  variants: { brandPrimary, brandClear },
});
