import { useState } from 'react'
import { AppProps } from 'next/app'
import SimpleReactLightbox from 'simple-react-lightbox'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false)
  return (
    <ChakraProvider>
      <NavBar open={open} setOpen={setOpen}>
        <SimpleReactLightbox>
          <Component {...pageProps} open={open} setOpen={setOpen} />
        </SimpleReactLightbox>
      </NavBar>
    </ChakraProvider>
  )
}
