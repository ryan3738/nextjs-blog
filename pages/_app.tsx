import { useState } from 'react'
import { AppProps } from 'next/app'
import SimpleReactLightbox from 'simple-react-lightbox'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import '../styles/global.css'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false)
  return (
    <ChakraProvider theme={theme}>
      <NavBar open={open} setOpen={setOpen}>
        <SimpleReactLightbox>
          <Component {...pageProps} open={open} setOpen={setOpen} />
        </SimpleReactLightbox>
      </NavBar>
    </ChakraProvider>
  )
}
