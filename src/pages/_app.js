import { ChakraProvider } from "@chakra-ui/react";

function Myapp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps}></Component>
    </ChakraProvider>
  )
}

export default Myapp;
