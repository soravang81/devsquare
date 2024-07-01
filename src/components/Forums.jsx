import React from 'react';

const forums = [
  { name: 'Fundraising', description: 'Discuss strategies and ideas for fundraising.', link: '/fundraising' },
  { name: 'Marketing', description: 'Share marketing tips and tricks.', link: '/marketing' },
  { name: 'Product Development', description: 'Discuss product development and ideas.', link: '/product-development' }
];

function Forum({ name, description, link }) {
  return (
    <a href={link} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-blue-600">{name}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-blue-500 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Forum Topics</h1>
      </header>
      <main className="flex-grow w-full px-4 py-8 flex justify-center">
        <div className="flex flex-wrap justify-center">
          {forums.map((forum, index) => (
            <Forum key={index} name={forum.name} description={forum.description} link={forum.link} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
