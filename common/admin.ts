import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

const ROLES_KEY = 'http://aquata/roles';
const ADMIN_ROLE = 'admin';

export const withAdminRequired = () => withPageAuthRequired({
    getServerSideProps: async (context) => {
        const session = getSession(context.req, context.res);
        if (session?.user?.[ROLES_KEY].includes(ADMIN_ROLE)) {
            return { props: { } }
        }

        throw new Error('Admin role required!');
    }
});