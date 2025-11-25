/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            }
          );

          const data = await res.json();

          if (!res.ok || !data) return null;

          return {
            id: data.data.user._id,
            email: data.data.user.email,
            role: data.data.user.role,
            accessToken: data.data.token,
            provider: 'credentials',
          };
        } catch (error) {
          console.error('Login failed:', error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user && user.provider === 'credentials') {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
        token.accessToken = user.accessToken;
        token.provider = 'credentials';
      }
      return token;
    },

    async session({ session, token }) {
      if (token.provider !== 'credentials') {
        throw new Error('Invalid session provider');
      }

      session.user = {
        id: token.id as string,
        provider: 'credentials',
        email: token.email as string,
        role: token.role as string,
        accessToken: token.accessToken as string,
      };

      return session;
    },
  },

  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: '/login' },
};
