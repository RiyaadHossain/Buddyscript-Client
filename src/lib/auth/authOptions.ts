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

          const result = await res.json();

          console.log('resul: ', result);

          if (!res.ok || !result?.data) return null;

          const user = result.data.user;

          return {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            accessToken: result.data.token,
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
      if (user?.provider === 'credentials') {
        token.id = user.id;
        token.firstName = user?.firstName;
        token.lastName = user?.lastName;
        token.email = user.email;
        token.accessToken = user?.accessToken;
        token.provider = 'credentials';
      }
      return token;
    },

    async session({ session, token }) {
      if (token.provider !== 'credentials') {
        throw new Error('Invalid provider');
      }

      session.user = {
        id: token.id as string,
        firstName: token.firstName as string,
        lastName: token.lastName as string,
        email: token.email as string,
        accessToken: token.accessToken as string,
        provider: 'credentials',
      };

      return session;
    },
  },

  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: '/' },
};
