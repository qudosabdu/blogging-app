import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router"; // Import the useRouter hook

export default function Header() {
  const router = useRouter(); // Get the current route
  let pageTitle = "Blog App"; // Default title

  // Set different titles based on the page
  if (router.pathname === "/auth/signup") {
    pageTitle = "Sign Up";
  } else if (router.pathname === "/auth/login") {
    pageTitle = "Log In";
  } else if (router.pathname === "/profile") {
    pageTitle = "Profile";
    } else if (router.pathname === "/") {
    pageTitle = "Home";
    }

  return (
    <header>
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2  dark:bg-blue-600">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div>
            <Link
              href="/"
              class="flex items-center text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 font-semibold text-3xl tracking-tight mr-3"
            >
             Personal Blogging App
            </Link>
          </div>
          <div class="flex items-center lg:order-2">
            {router.pathname === "/" && ( // Show link only on the home page
              <Link
                href="/"
                class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-1 lg:px-1 py-0 lg:py-0 mr-2 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Home
              </Link>
            )}
            {router.pathname === "/auth/login" && ( // Show link only on the login page
              <Link
                href="/auth/signup"
                class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-1 lg:px-1 py-0 lg:py-0 mr-2 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Sign up
              </Link>
            )}
            {router.pathname !== "/auth/login" && ( // Show links other than login on pages other than login
              <>
                <button
                  onClick={signOut}
                  class="text-gray-800 dark:text-white  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-1 lg:px-1 py-1 lg:py-0 mr-2 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Logout
                </button>
                <Link
                  href="/profile"
                  class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-1 lg:px-1 py-1 lg:py-0 mr-2 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Profile
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <main class="bg-slate-50 dark:g-slate-50">
        <div class="max-w-screen-xl mx-auto py-6 px-4 sm:py-12 sm:px-3 lg:px-4">
          <div class="text-start">
            <h1 class="text-4xl font-extrabold text-gray-900 dark:text-black sm:text-2xl sm:tracking-tight lg:text-3xl">
              {pageTitle}
            </h1>
          </div>
        </div>
      </main>
    </header>
  );
}
