import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@components/layouts/layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
