import React from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from './store/store'
import reportWebVitals from './reportWebVitals'
import './style/reset.css'
import './style/fonts.css'
import 'aos/dist/aos.css'
import {App} from "./App"
import {BrowserRouter} from "react-router-dom"
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <GoogleReCaptchaProvider
    reCaptchaKey={'6LcvoFAhAAAAAI44vBjoCDzOVF_x4vCLCGNcUXb_'}>
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  </GoogleReCaptchaProvider>
);

// If you want to start measuring performance in your store, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
