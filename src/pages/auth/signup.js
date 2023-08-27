import Form from "@/components/auth/form";



export default function SignUp() {
    const onSubmit = async (firstName,label,email,password) => { // Accept formData object
      try {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          body: JSON.stringify(firstName,label,email,password), // Use the formData object here
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          alert("Sign up successful");
        }
      } catch (err) {
        console.log(err);
      }
    };
  
  return <Form signin={false} onFormSubmit={onSubmit}/>


//     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//         <form className="space-y-6" onSubmit={onSubmit}>
//           <div>
//             <div className="mt-2">
//               <input
//                 id="firstName"
//                 name="firstName"
//                 type="text"
//                 autoComplete="firstName"
//                 placeholder="Enter your First Name"
//                 required
//                 className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           <div>
//             <div className="mt-2">
//               <input
//                 id="lastName"
//                 name="lastName"
//                 type="text"
//                 autoComplete="lastName"
//                 placeholder="Enter your Last Name"
//                 required
//                 className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           <div>
//             <div className="mt-2">
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 placeholder="Enter your Email"
//                 required
//                 className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div>
//             <div className="flex items-center justify-between"></div>
//             <div className="mt-2">
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 placeholder="Enter Password"
//                 required
//                 className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           <div className="flex items-center justify-between">
//             <div className="text-sm leading-5">
//               <Link
//                 href="/auth/login"
//                 className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
//               >
//                 Already have account
//               </Link>
//             </div>
//           </div>

//           <div>
//             <span className="block w-full rounded-md shadow-sm">
//               <button
//                 type="submit"
//                 className="flex w-full justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
//               >
//                 Sign up
//               </button>
//             </span>
//           </div>
//         </form>

//         <div className="mt-6">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm leading-5">
//               <span className="px-2 bg-white text-gray-500">
//                 Or continue with
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
}
