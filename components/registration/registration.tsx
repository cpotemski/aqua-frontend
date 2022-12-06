import {useRegisterMutation} from "@api";
import {useUser} from "@auth0/nextjs-auth0";

const Registration = () => {
    const {user, error, isLoading} = useUser();

    const [
        registrationMutation,
        {error: registrationError},
    ] = useRegisterMutation()

    if (error || registrationError) {
        console.log(error, registrationError);
        throw Error(`Error in registration`);
    }

    if (isLoading) return <div>Loading...</div>;

    if (!user) {
        throw Error('could not find user');
    }

    const id = user.sub!;

    const register = async () => {
        console.log('register player for user id', id)
        const player = await registrationMutation({
            variables: {
                input: {
                    id,
                    email: user.email!,
                    name: 'LordArmageddon',
                    stationName: 'Hamburg',
                    coordinates: {x: 1, y: 2}
                }
            }
        })

        console.log('created player', id, player)
    }

    return <>
        <h2>Registration</h2>
        <button onClick={register}>Register</button>
    </>

}

export default Registration;