"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";

import { Button } from "./ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

export default function RegisterPage() {
  const formSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Email is required." })
      .email({ message: "Please enter a valid email address." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." }),
    repeatPassword: z
      .string()
      .min(6, { message: "Please repeat your password." }),
    agreeTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and conditions.",
    }),
  });

  type FormSchemaType = z.infer<typeof formSchema>;

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
      agreeTerms: false,
    },
  });

  // Credentials login
  const onSubmit = async (values: FormSchemaType) => {
    console.log("value: ", values);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-(--bg1) py-16">
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left */}
        <div className="absolute top-0 left-0">
          <Image
            src="/assets/images/shape1.svg"
            alt="shape1"
            width={150}
            height={150}
            className="block"
          />
        </div>
        {/* Top Right */}
        <div className="absolute top-0 right-5 z-(-99)">
          <Image
            src="/assets/images/shape2.svg"
            alt="shape2"
            width={440}
            height={540}
            className="block"
          />
        </div>
        {/* Bottom Left */}
        <div className="absolute bottom-[-25] right-2">
          <Image
            src="/assets/images/shape3.svg"
            alt="shape3"
            width={600}
            height={440}
            className="w-130"
          />
        </div>
      </div>

      {/* Login main image */}

      {/* Login form container */}
      <div className="relative min-h-screen flex justify-center items-center gap-25">
        {/* <div className="absolute left-35 bottom-[-40] w-1/2 hidden lg:flex items-center justify-center"> */}
        <div className="">
          <Image
            src="/assets/images/registration.png"
            alt="Login Illustration"
            width={740}
            height={740}
            className="object-cover"
          />
        </div>
        <div className="w-full lg:w-[400px]  flex flex-col justify-start items-center bg-(--bg2) shadow-md rounded-sm px-10 py-6 mb-15">
          {/* Logo */}
          <div className="py-8">
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={180}
              height={40}
            />
          </div>

          <div className="w-full max-w-md">
            {/* Welcome text */}
            <div className="text-center mb-8">
              <p className="text-gray-600 text-sm mb-2">Welcome back</p>
              <h4 className="text-2xl font-semibold text-gray-800">
                Login to your account
              </h4>
            </div>

            {/* Google Sign-in Button */}
            <Button
              type="button"
              variant="outline"
              className="w-full py-6 mb-6 flex items-center justify-center gap-3 border-gray-100 "
              // onClick={handleGoogleSignIn}
            >
              <Image
                src="assets/images/google.svg"
                alt="Google"
                width={20}
                height={20}
              />
              <span className="text-gray-700 text-md font-semibold">
                Or Register with Google
              </span>
            </Button>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative bg-white px-4 flex justify-between">
                <span className="text-gray-500 text-sm">Or</span>
              </div>
            </div>

            {/* Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-10 px-2"
              >
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-700">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="rounded-md border border-gray-100 bg-white py-6 px-5
                        focus-visible:outline-none 
                        focus-visible:border-blue-100 
                        focus-visible:ring-1 focus-visible:ring-blue-500/40 
                        transition-all duration-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-700">Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          className="rounded-md border border-gray-100 bg-white py-6 px-5 focus-visible:outline-none focus-visible:border-blue-100 focus-visible:ring-1 focus-visible:ring-blue-500/40"
                          // disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Repeat Password */}
                <FormField
                  control={form.control}
                  name="repeatPassword"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-700">
                        Repeat Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="repeatPassword"
                          className="rounded-md border border-gray-100 bg-white py-6 px-5 focus-visible:outline-none focus-visible:border-blue-100 focus-visible:ring-1 focus-visible:ring-blue-500/40"
                          // disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Agree Terms */}
                <FormField
                  control={form.control}
                  name="agreeTerms"
                  render={({ field }) => {
                    const { value, onChange, ...rest } = field;
                    return (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Input
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                            checked={value}
                            onChange={(e) => onChange(e.target.checked)}
                            {...rest}
                          />
                        </FormControl>
                        <FormLabel className="text-gray-700 text-sm">
                          I agree to the{" "}
                          <Link
                            href="/terms"
                            className="text-blue-500 hover:text-blue-600 underline"
                          >
                            terms and conditions
                          </Link>
                        </FormLabel>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                {/* Login Button */}
                <Button
                  type="submit"
                  className="w-full py-6 bg-blue-500 hover:bg-blue-600 text-white font-medium"
                  // disabled={isSubmitting}
                >
                  Login now
                </Button>
              </form>
            </Form>

            {/* Create Account Link */}
            <div className="text-center mt-6">
              <p className="text-gray-600 text-sm">
                Dont have an account?{" "}
                <Link
                  href="/signup"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Create New Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
