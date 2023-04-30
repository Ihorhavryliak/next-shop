"use client";
import { Container } from "@chakra-ui/react";
import { Providers } from "./providers";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />

          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
