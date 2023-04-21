import type { Metadata } from 'next';
import getAllUsers from '@/lib/getAllUsers';

import React from 'react';

export const metadata: Metadata = {
  title: 'users page',
  description: 'welcome to users page',
};

export default function UsersPage() {
  return <div>page</div>;
}
