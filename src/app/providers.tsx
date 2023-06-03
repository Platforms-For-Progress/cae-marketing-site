"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  colors: {
    brand: {
      100: "#7289DA",
      200: "#7289DA",
      300: "#7289DA",
      400: "#7289DA",
      500: "#7289DA",
      600: "#5B69A6",
      700: "#4C569D",
      800: "#3D4F92",
      900: "#2D3784",
    },
  },
};

const theme = extendTheme({ config });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorModeScript initialColorMode="light" />
      <CacheProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
    </>
  );
}
