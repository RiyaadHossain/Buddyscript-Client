'use client';
// app/login/page.tsx
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { Button } from '../../components/ui/button';

import { Checkbox } from '../../components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form';
import { Input } from '../../components/ui/input';

export default function LoginPage() {
  const formSchema = z.object({
    email: z
      .string()
      .min(1, { message: 'Email is required.' })
      .email({ message: 'Please enter a valid email address.' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long.' }),
    rememberMe: z.boolean().optional(),
  });

  type FormSchemaType = z.infer<typeof formSchema>;

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  // Credentials login
  const onSubmit = async (values: FormSchemaType) => {
    console.log('value: ', values);
    // setIsSubmitting(true);
    // try {
    //   const result = await signIn('credentials', {
    //     redirect: false,
    //     email: values.email,
    //     password: values.password,
    //   });
    //   if (result?.error) {
    //     toast.error('Invalid email or password');
    //     return;
    //   }
    //   toast.success('Login successful!');
    //   router.push('/');
    // } catch (err: any) {
    //   toast.error(err?.message || 'Something went wrong');
    // } finally {
    //   // setIsSubmitting(false);
    // }
  };

  // Google sign-in handler
  const handleGoogleSignIn = () => {
    console.log('Google sign-in clicked');
    // Implement Google OAuth logic here
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
      <div className="relative min-h-screen flex justify-center items-baseline-last gap-25">
        {/* <div className="absolute left-35 bottom-[-40] w-1/2 hidden lg:flex items-center justify-center"> */}
        <div className="mt-50 ">
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

                {/* Remember me & Forgot password */}
                <div className="flex items-center justify-between">
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
                        <FormLabel className="text-sm text-gray-600 cursor-pointer !mt-0">
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
                </div>

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
                Dont have an account?{' '}
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
