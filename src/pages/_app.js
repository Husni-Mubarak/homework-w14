import { ChakraBaseProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <ChakraBaseProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraBaseProvider>
  );
}
