import store, { persistor } from '@/storage/store'
import '@/styles/globals.css'
import { CookiesProvider } from 'react-cookie'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import NextNProgress from 'nextjs-progressbar'


export default function App({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <CookiesProvider>
              <NextNProgress height={4} color='#2395FF'/>
                <Component {...pageProps} />
            </CookiesProvider>
        </PersistGate>
    </Provider>
  </>
  )
}
