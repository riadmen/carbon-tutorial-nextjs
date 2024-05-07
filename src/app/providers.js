'use client';

import { Content, Theme } from '@carbon/react';
import PageHeader from '@/components/PageHeader/PageHeader';

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g100">
        <PageHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
