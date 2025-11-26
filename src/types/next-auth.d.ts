import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    accessToken: string;
    provider: 'credentials';
  }

  interface Session {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      accessToken: string;
      provider: 'credentials';
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    accessToken: string;
    provider: 'credentials';
  }
}
