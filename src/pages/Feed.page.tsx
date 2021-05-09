import React from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Timeline } from '../components/Timeline';
import { useAuthStore } from '../store/auth.store';

export const FeedPage = () => {
  const { user } = useAuthStore();

  return (
    <div>
      <Header />
      <div>
        <Timeline />
        {JSON.stringify(user)}
        <Sidebar />
      </div>
    </div>
  );
};
