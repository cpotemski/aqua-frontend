import {withPageAuthRequired} from "@auth0/nextjs-auth0";
import FleetMarker from "@components/fleet/fleetMarker";

const Home = () => {
    return (<>
            <FleetMarker />
        </>
    )
}

export default Home;

export const getServerSideProps = withPageAuthRequired()
