import '../styles/globals.css'
import type {AppProps} from 'next/app'
import apollo from "../apollo-client";
import {ApolloProvider} from '@apollo/client';
import Link from "next/link";

function MyApp({Component, pageProps}: AppProps) {
    return <ApolloProvider client={apollo}>
        <Link href='/'>Home</Link>
        <Component {...pageProps} />
    </ApolloProvider>
}

export default MyApp
