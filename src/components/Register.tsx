/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
// app/login/page.tsx
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';
import { Button } from './ui/button';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import LoadingButton from './shared/LoadingButton';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';

export default function RegisterPage() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = z
    .object({
      firstName: z.string().min(1, { message: 'First name is required.' }),
      lastName: z.string().min(1, { message: 'Last name is required.' }),
      email: z
        .string()
        .min(1, { message: 'Email is required.' })
        .email({ message: 'Please enter a valid email address.' }),
      password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters long.' }),
      repeatPassword: z.string().min(6, { message: 'Confirm your password.' }),
    })
    .refine((data) => data.password === data.repeatPassword, {
      message: 'Passwords must match',
      path: ['repeatPassword'],
    });

  type FormSchemaType = z.infer<typeof formSchema>;

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  const onSubmit = async (values: FormSchemaType) => {
    setIsSubmitting(true);
    const payload = {
      ...values,
      provider: 'local',
    };
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/signup`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || 'Signup failed');
        return;
      }

      toast.success('Signup successful! You can now login.');
      router.push('/');
    } catch (err: any) {
      toast.error(err?.message || 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-(--bg1)">
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left */}
        <div className="absolute top-0 left-0">
          <Image
            src="/assets/images/shape1.svg"
            alt="shape1"
            width={150}
            height={150}
            className=" hidden lg:block"
          />
        </div>
        {/* Top Right */}
        <div className="absolute top-0 right-5 z-(-99)">
          <Image
            src="/assets/images/shape2.svg"
            alt="shape2"
            width={440}
            height={540}
            className=" hidden lg:block"
          />
        </div>
        {/* Bottom Left */}
        <div className="absolute bottom-[-25] right-2">
          <Image
            src="/assets/images/shape3.svg"
            alt="shape3"
            width={600}
            height={440}
            className="w-130 hidden lg:block"
          />
        </div>
      </div>

      {/*  */}

      {/* registration form  */}
      <div className="relative min-h-screen flex flex-col lg:flex-row justify-center items-center lg:gap-20">
        <div className=" w-full lg:w-auto flex justify-center items-end lg:items-start h-[300px] md:h-[500px] lg:h-[850px]">
          <Image
            src="/assets/images/registration.png"
            alt="Register Illustration"
            width={700}
            height={700}
            className="object-contain"
            priority
          />
        </div>

        <div className="w-full lg:w-2/7  flex flex-col justify-start items-center bg-(--bg2) shadow-md rounded-sm px-10 pt-6 mt-5 mb-15">
          {/* Logo */}
          <div className="pt-3 pb-8">
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
              <p className="text-gray-600 text-md mb-2">Get Started Now</p>
              <h4 className="text-2xl font-semibold text-gray-800">
                Registration
              </h4>
            </div>

            {/* Google Sign-in Button */}
            <Button
              type="button"
              variant="outline"
              className="w-full py-6 mb-6 flex items-center justify-center gap-3 border-gray-100 "
            >
              <Image
                src="assets/images/google.svg"
                alt="Google"
                width={20}
                height={20}
              />
              <span className="text-gray-700 text-md font-semibold">
                Or Register with google
              </span>
            </Button>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative bg-white px-4">
                <span className="text-gray-500 text-sm">Or</span>
              </div>
            </div>

            {/* Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-10 px-2"
              >
                {/* First name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-700">
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="rounded-md border border-gray-100 bg-white py-6 px-5 focus-visible:outline-none focus-visible:border-blue-100 focus-visible:ring-1 focus-visible:ring-blue-500/40 transition-all duration-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Last Name */}
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-700">Last Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="rounded-md border border-gray-100 bg-white py-6 px-5 focus-visible:outline-none focus-visible:border-blue-100 focus-visible:ring-1 focus-visible:ring-blue-500/40 transition-all duration-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                          className="rounded-md border border-gray-100 bg-white py-6 px-5 focus-visible:outline-none focus-visible:border-blue-100 focus-visible:ring-1 focus-visible:ring-blue-500/40 transition-all duration-200"
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
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/*Repeat Password */}
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
                          type="password"
                          className="rounded-md border border-gray-100 bg-white py-6 px-5 focus-visible:outline-none focus-visible:border-blue-100 focus-visible:ring-1 focus-visible:ring-blue-500/40"
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Remember me & Forgot password */}
                {/* <div className="flex items-center justify-between">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                          />
                        </FormControl>
                        <FormLabel className="text-sm text-gray-600 cursor-pointer mt-0!">
                          Remember me
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-500 hover:text-blue-600"
                  >
                    Forgot password?
                  </Link>
                </div> */}

                <LoadingButton
                  type="submit"
                  isLoading={isSubmitting}
                  loadingText="Logging in..."
                  className="w-full py-6 bg-blue-500 hover:bg-blue-600 text-white font-medium"
                >
                  Sign Up
                </LoadingButton>
              </form>
            </Form>

            {/* Create Account Link */}
            <div className="text-center my-6">
              <p className="text-gray-600 text-sm">
                You already have an account?
                <Link
                  href="/"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
