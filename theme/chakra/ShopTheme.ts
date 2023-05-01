import { extendTheme } from "@chakra-ui/react";
import { ContainerTheme } from "./Container";
import { ItemTheme } from "./Item";
import { LinkTheme } from "@/theme/chakra/Link";

const colorsObj = {
  blue: {
    100: "#08c",
    300: "#1aa9e1",
    800: "#3b5a9a",
  },
  whiteObj: {
    100: "rgba(0,0,0,0.01)"
  },
  grey: {
    100: "#7c4a3a",
    200: "#e7e7e7",
    300: "#f7f7f7",
    400: "#f4f4f4",
    500: "#606669",
    600: "#777777",
    700: "#6b7a83",
    800: "#8d8d8d",
    900: "#696969",
    1000: "#465157"
  },
  textColor: {
    100: "#bde1f5",
    200: "#0088cc",
  },
  black: {
    100: "#222529",
    300: "#333333"
  },
  red:{
    100: "#ff5b5b"
  }
};

const typographyObj = {
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
};

const defaults = {
  styles: {
    global: {
      html: {
        fontSize: "14px",
      },
      "html, body": {
        maxWidth: "100%",
        //overflowX: 'hidden',
        backgroundColor: "gray.600", // Add the desired background color
      },
    },
  },
};
const componentsObj = {
  Container: ContainerTheme,
  List: ItemTheme,
  Link: LinkTheme
};

const colors = { ...colorsObj };
const sizes = {
  smOne: {},
};
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
