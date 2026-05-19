"use client";

import { authClient } from "@/lib/auth-client";
import { Card, Separator } from "@heroui/react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const loginData = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signIn.email({
        email: loginData.email,
        password: loginData.password,
        callbackURL: "/",
      });

      if (error) {
        alert(error.message || "Login failed ❌");
        return;
      }

      if (data) {
        alert("Login Successful ✅");
        router.push("/");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };


   const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-gray-100 py-8 md:py-0">
      <div className="max-w-4xl mx-auto min-h-screen flex flex-col justify-center">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Login
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Sign in to continue to PetNest
          </p>
        </div>

        {/* Card */}
        <Card className="border rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto p-4 sm:p-6">
          
          {/* Form */}
          <Form onSubmit={onSubmit} className="w-full flex flex-col gap-4">

            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="Enter Your Email" />
              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 6) {
                  return "Password must be at least 6 characters";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter Your Password" />
              <Description>
                Must be at least 6 characters
              </Description>
              <FieldError />
            </TextField>

            {/* Submit */}
            <Button
              className="rounded-[10px] w-full bg-cyan-500 text-white"
              type="submit"
              disabled={loading}              
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </Form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <Separator className="flex-1" />
            <div className="text-xs sm:text-sm whitespace-nowrap">
              Or login with
            </div>
            <Separator className="flex-1" />
          </div>

          {/* Google Login */}
          <Button
            variant="outline"
            className="w-full rounded-[10px] hover:bg-green-100 flex items-center justify-center gap-2"
            onClick={handleGoogleSignin}
          >
            <FcGoogle /> Sign in with Google
          </Button>

          {/* Register Link */}
          <p className="text-center mt-4 text-sm">
            Don't have an account?{" "}
            <Link href="/register">
              <span className="text-blue-500 cursor-pointer">
                Register
              </span>
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;