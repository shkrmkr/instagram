import React from 'react';
import { useAuthStore } from '../store/auth.store';

export const Dashboard = () => {
  const { user, logout } = useAuthStore();

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>welcome! {user?.username}</h3>
      <button onClick={() => logout()}>logout</button>
    </div>
  );
};
