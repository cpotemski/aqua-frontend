import {useLoggedInQuery} from "@api";
import Home from "../../pages/home";
import Registration from "@components/registration/registration";
import {UserProvider} from "@auth0/nextjs-auth0";
import PlayerProvider from "./playerContext";

const LoggedIn = () => {
    const {
        data,
        error,
        loading
    } = useLoggedInQuery()

    if (error) {
        return <UserProvider>
            <Registration/>
        </UserProvider>
    }
    if (loading) return <div>Loading...</div>;
    if (!data) {
        throw Error('No player data for context');
    }

    return <PlayerProvider value={data.me}><Home/></PlayerProvider>

}

export default LoggedIn