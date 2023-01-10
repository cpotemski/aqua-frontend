import {ReactNode} from "react";
import Header from "@components/header";
import styles from './default.module.css';

export default function DefaultLayout({children}: { children: ReactNode }) {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <div>
                {children}
            </div>
        </div>
    )
}