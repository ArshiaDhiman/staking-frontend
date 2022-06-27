import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { Layout } from "@components";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "@src/store";
import { Provider } from "react-redux";

function getLibrary(provider: any) {
    return new Web3Provider(provider);
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Provider store={store}>
            <Web3ReactProvider getLibrary={getLibrary}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                <ToastContainer position="bottom-right" theme="dark" />
            </Web3ReactProvider>
        </Provider>
    );
}

export default MyApp;

// main entry point into app
