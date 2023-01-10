import {useMeQuery} from "@api";
import {isNil} from "lodash";
import {Simulate} from "react-dom/test-utils";
import play = Simulate.play;

const PlayerInfo = () => {
    const {
        data,
        error,
        loading
    } = useMeQuery()

    if (error) {
        throw Error(`Could not get player info`);
    }
    if (loading) return <div>Loading...</div>;

    if (data === undefined || isNil(data.me)) {
        return <>No player info.</>
    }

    const player = data.me

    let coordinatesString = '';

    if(player.coordinates) {
        coordinatesString = `(${player.coordinates.x}:${player.coordinates.y})`;
    }

    return (<>
        {player.name} {coordinatesString}
    </>)

}

export default PlayerInfo;