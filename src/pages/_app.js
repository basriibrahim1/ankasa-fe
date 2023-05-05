import store, { persistor } from '@/storage/store'
import '@/styles/globals.css'
import { CookiesProvider } from 'react-cookie'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <CookiesProvider>
                <Component {...pageProps} />
            </CookiesProvider>
        </PersistGate>
    </Provider>
   
  )
}
