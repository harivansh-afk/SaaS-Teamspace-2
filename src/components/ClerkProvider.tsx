'use client';

import { ClerkProvider as BaseClerkProvider } from '@clerk/nextjs';
import { useLocale } from 'next-intl';
import * as React from 'react';

export const ClerkProvider = ({ children }: { children: React.ReactNode }) => {
  const locale = useLocale();

  return (
    <BaseClerkProvider
      localization={{ locale }}
      signInUrl={`/${locale}/sign-in`}
      signUpUrl={`/${locale}/sign-up`}
      afterSignInUrl={`/${locale}/dashboard`}
      afterSignUpUrl={`/${locale}/dashboard`}
      afterSignOutUrl={`/${locale}`}
    >
      {children}
    </BaseClerkProvider>
  );
};
