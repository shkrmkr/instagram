import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';

export const NotFoundPage = () => {
  return (
    <div>
      <Header />
      <h3>Sorry, this page isn&apos;t svailable.</h3>
      <p>
        The link you followed may be broken, or the page may have been removed.
        <Link to="/">Go back to Instagram</Link>
      </p>
    </div>
  );
};
