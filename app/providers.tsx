// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import ShopTheme from "../theme/chakra/ShopTheme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={ShopTheme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
