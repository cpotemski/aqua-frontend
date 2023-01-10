import '../styles/globals.css'
import type {AppProps} from 'next/app'
import apollo from "../apollo-client";
import {ApolloProvider} from '@apollo/client';
import DefaultLayout from "@components/layouts/default";

import './styles.css';
import ErrorBoundary from "@components/error/errorBoundary";

function MyApp({Component, pageProps}: AppProps) {
    return <ErrorBoundary>
        <ApolloProvider client={apollo}>
            <DefaultLayout>
                <Component {...pageProps} />
            </DefaultLayout>
        </ApolloProvider>
    </ErrorBoundary>
}

export default MyApp
