import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">Owner's Dashboard</h1>
      <p>Welcome to the Hotel Management System Owner's Dashboard prototype.</p>
      {/* User Management Module placeholder */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">User Management</h2>
        <p>This module will allow CRUD operations on users, roles, and permissions.</p>
      </section>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
