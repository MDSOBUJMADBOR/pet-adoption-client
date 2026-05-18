"use client";

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
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-gray-100 py-8 ">
      <div className="max-w-4xl mx-auto min-h-screen flex flex-col justify-center">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Create Your Account
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Start your adoption journey today 🐾
          </p>
        </div>

        {/* Card */}
        <Card className="border rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto p-4 sm:p-6">
          
          <Form className="w-full flex flex-col gap-4">

            {/* Name */}
            <TextField isRequired name="name" type="text">
              <Label>Name</Label>
              <Input placeholder="Enter your name" />
              <FieldError />
            </TextField>

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
              <Input placeholder="Enter your email" />
              <FieldError />
            </TextField>

            {/* Photo */}
            <TextField isRequired name="image" type="text">
              <Label>Photo URL</Label>
              <Input placeholder="https://example.com/photo.jpg" />
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
                if (!/[A-Z]/.test(value)) {
                  return "Must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description>
                Min 6 chars, 1 uppercase & 1 number
              </Description>
              <FieldError />
            </TextField>

            {/* Confirm Password */}
            <TextField
              isRequired
              name="confirmPassword"
              type="password"
            >
              <Label>Confirm Password</Label>
              <Input placeholder="Re-enter your password" />
              <FieldError />
            </TextField>

            {/* Submit */}
            <Button
              className="rounded-[10px] w-full bg-cyan-500"
              type="submit"
            >
              Register
            </Button>
          </Form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <Separator className="flex-1" />
            <div className="text-xs sm:text-sm whitespace-nowrap">
              Or continue with
            </div>
            <Separator className="flex-1" />
          </div>

          {/* Google */}
          <Button
            variant="outline"
            className="w-full rounded-[10px] hover:bg-green-100 flex items-center justify-center gap-2"
          >
            <FcGoogle /> Sign up with Google
          </Button>

          {/* Login Link */}
          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-blue-500 cursor-pointer">
                Login
              </span>
            </Link>
          </p>

        </Card>
      </div>
    </div>
  );
};

export default LoginPage;



// const password = formData.get("password");
// const confirm = formData.get("confirmPassword");

// if (password !== confirm) {
//   alert("Passwords do not match");
// }