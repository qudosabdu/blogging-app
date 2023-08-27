import { getSession } from "next-auth/react"

export default function SignUp () {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Your Profile Page
          </h2>
        </div>
        </div>
    )
};

export async function getServerSideProps({req}) {
  const session = await getSession({req})
  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    }
  }
  return {
    props: {session},
  }
}
