import { extendTheme } from "@chakra-ui/react";
import { ContainerTheme } from "./Container";

const colorsObj = {
  blue: {
    100: "#08c",
  },
};

const typographyObj = {};

const defaults = {};
const componentsObj = {
  Container: ContainerTheme,
};

const colors = { ...colorsObj };
const sizes = {};
const typography = { ...typographyObj };
const components = { ...componentsObj };

const ShopTheme = extendTheme({
  ...defaults,
  colors,
  sizes,
  ...typography,
  components,
});

export default ShopTheme;
