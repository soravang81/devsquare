import React from 'react';
import {forums} from "../../data/forum"

function Form({ name, description, link }) {
  return (
    <a href={link} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 ">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-200 border">
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

export default function Forum() {
  return (
    <div className="min-h-screen bg-100 flex flex-col items-center ">
      {/* <header className="w-full bg-blue-500 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Forum Topics</h1>
      </header> */}
      <main className="flex-grow w-full px-4 py-8 flex justify-center">
        <div className="flex flex-wrap justify-center">
          {forums.map((forum, index) => (
            <Form key={index} name={forum.name} description={forum.description} link={forum.link} />
          ))}
        </div>
      </main>
    </div>
  );
}


