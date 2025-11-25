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

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import LoadingButton from './shared/LoadingButton';
import { Checkbox } from './ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';

export default function LoginPage() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = z.object({
    email: z
      .string()
      .min(1, { message: 'Email is required.' })
      .email({ message: 'Please enter a valid email address.' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long.' }),
  });

  type FormSchemaType = z.infer<typeof formSchema>;

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: FormSchemaType) => {
    setIsSubmitting(true);
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
      });

      if (result?.error) {
        toast.error('Invalid email or password');
        return;
      }

      toast.success('Login successful!');
      router.push('/feed');
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

      {/* Login form  */}
      <div className="relative min-h-screen flex flex-col lg:flex-row justify-center items-baseline-last gap-25">
        <div className="mt-8 lg:mt-50 px-4 lg:px-0 h-[550px]">
          {/* Login Illustration */}
          <Image
            src="/assets/images/login.png"
            alt="Login Illustration"
            width={640}
            height={640}
            className="object-cover"
          />
        </div>
        <div className="w-full lg:w-2/7  flex flex-col justify-start items-center bg-(--bg2) shadow-md rounded-sm px-10 pt-6 mb-15">
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
            <div className="text-center mb-8">
              <p className="text-gray-600 text-sm mb-2">Welcome back</p>
              <h4 className="text-2xl font-semibold text-gray-800">
                Login to your account
              </h4>
            </div>

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
                Or sign-in with google
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
                {/* Remember me & Forgot password */}
                <div className="flex items-center justify-between">
                  <Checkbox
                    id="remember"
                    className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-gray-600 cursor-pointer"
                  >
                    Remember me
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-500 hover:text-blue-600"
                  >
                    Forgot password?
                  </Link>
                </div>
                *
                <LoadingButton
                  type="submit"
                  isLoading={isSubmitting}
                  loadingText="Logging in..."
                  className="w-full py-6 bg-blue-500 hover:bg-blue-600 text-white font-medium"
                >
                  Login now
                </LoadingButton>
              </form>
            </Form>

            {/* Create Account Link */}
            <div className="text-center my-6">
              <p className="text-gray-600 text-sm">
                Dont have an account?{' '}
                <Link
                  href="/register"
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
