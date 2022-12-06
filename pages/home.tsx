import Link from "next/link";
import PlayerInfo from "@components/header/playerInfo";
import {withPageAuthRequired} from "@auth0/nextjs-auth0";
import {useContext} from "react";
import {PlayerContext} from "@components/auth/playerContext";

const Home = () => {
    const playerId = useContext(PlayerContext);
    return (<>
            <h1>Aquata</h1>
            <PlayerInfo id={playerId}></PlayerInfo>
            <ul>
                <li>
                    <Link href="/api/auth/logout">
                        Logout
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Home;

export const getServerSideProps = withPageAuthRequired()
