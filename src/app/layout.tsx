import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Poppins } from 'next/font/google';
import { Toaster } from 'sonner';
import ClientLayoutWrapper from '../components/shared/ClientLayoutWrapper';
import { ReduxProvider } from '../components/shared/providers/ReduxProvider';
import UserSyncProvider from '../components/shared/providers/UserSyncProvider';
import { authOptions } from '../lib/auth/authOptions';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Your App',
  description: 'Pixel-perfect conversion',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${poppins.variable} font-sans antialiased`}
      >
        <ReduxProvider>
          <ClientLayoutWrapper session={session}>
            <UserSyncProvider>
              {children}
              <Toaster
                position="bottom-right"
                richColors
                toastOptions={{
                  duration: 5000,
                  style: {
                    // Custom background & text
                    background: '#1890ff', // green-500
                    color: '#ffffff',
                    fontSize: '14px',
                    borderRadius: '0.5rem',
                    padding: '1rem',
                  },
                }}
              />
            </UserSyncProvider>
          </ClientLayoutWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
