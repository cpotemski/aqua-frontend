import LoggedIn from "@components/auth/loggedIn";
import {withPageAuthRequired} from "@auth0/nextjs-auth0";

const Index = () => {
    return (<>
            <LoggedIn/>
        </>
    )
}

export default Index;
export const getServerSideProps = withPageAuthRequired()
