import SingleUserDetails from '@/components/SingleUserDetails'

const page = async ({ params }) => {

    return (
        <SingleUserDetails id={params.id} />
    )
}

export default page