
import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to My Project</h1>
        <p>
          This is a starter project to help you get up and running. The application 
          includes Header component from your existing project.
        </p>
        <div className="mt-8">
          <a 
            href="/frontend" 
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Go to Next.js App
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
