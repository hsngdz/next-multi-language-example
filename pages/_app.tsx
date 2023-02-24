import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/layout/Header";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";
import LanguageProvider from "../components/LanguageProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </LanguageProvider>
  );
}

export default MyApp;
