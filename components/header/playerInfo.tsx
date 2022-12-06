import {usePlayerByIdQuery} from "@api";
import {isNil} from "lodash";

const PlayerInfo = ({id}: { id: string }) => {
    const {
        data,
        error,
        loading
    } = usePlayerByIdQuery({variables: {id}})

    if (error) {
        throw Error(`Could not get player with id ${id}`);
    }
    if (loading) return <div>Loading...</div>;

    if (data === undefined || isNil(data.playerById)) {
        return <>No player info.</>
    }

    const player = data.playerById

    return (<>
        Moin {player.name}!
    </>)

}

export default PlayerInfo;