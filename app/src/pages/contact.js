import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';

function Contact() {
  return (
    <Layout>
      <div className="w-full max-w-md mx-auto mt-10" style={{ minWidth: '300px' }}>
        <h1 className="text-3xl font-bold mb-5 text-center">Contact Form</h1>
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="name">
              Nom
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Nom"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="surname">
              Cognom
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="surname"
              type="text"
              placeholder="Cognom"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="phone">
              Telèfon
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Telèfon"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="message">
              Comentaris
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
              id="message"
              placeholder="Comentaris"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Contact;

