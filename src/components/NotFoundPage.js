import React from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <div className="content-container">
      <p>
        404 Not Found{' '}
        <Link className="button button--danger" to="/">
          Go Home
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
