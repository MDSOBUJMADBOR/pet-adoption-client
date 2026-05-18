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
    <div className="px-4 sm:px-6 lg:px-8 bg-gray-100 py-8 md:py-0">
      {/* Container */}
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
          <Form className="w-full flex flex-col gap-4">
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

            <TextField
              isRequired
              minLength={6}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 6) {
                  return "Password must be at least 6 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter Your Password" />
              <Description>
                Must be at least 6 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>

            <Button
              className="rounded-[10px] w-full bg-cyan-500"
              type="submit"
            >
              Login
            </Button>
          </Form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <Separator className="flex-1" />
            <div className="text-xs sm:text-sm whitespace-nowrap">
              Or login  with
            </div>
            <Separator className="flex-1" />
          </div>

          {/* Google Button */}
          <Button variant="outline" className="w-full rounded-[10px] hover:bg-green-100">
          <FcGoogle />  Sign in with Google
          </Button>
          <p className='text-center'>Don't have an account? <Link href={"/register"}><span className='text-blue-500'>Register</span></Link> </p>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;