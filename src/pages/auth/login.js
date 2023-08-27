import Form from "@/components/auth/form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();

  const onSubmit = async (formData) => {
    const email = formData.email;
    const password = formData.password;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      // Handle login error
      console.error("Login error:", result.error);
    } else if (result?.url) {
      // User logged in successfully, redirect to home page
      router.push("/");
    }
  };

  return <Form signin={true} onFormSubmit={onSubmit} />;
}
