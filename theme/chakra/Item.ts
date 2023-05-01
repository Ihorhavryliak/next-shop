import {
  defineStyle,
  createMultiStyleConfigHelpers,
} from "@chakra-ui/styled-system";
import { listAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle((props) => ({
  // define the part you're going to style
  container: {

  },
  item: {
    //"text-transform": "none"
  },
  icon: {},
}));

export const ItemTheme = defineMultiStyleConfig({ baseStyle });
