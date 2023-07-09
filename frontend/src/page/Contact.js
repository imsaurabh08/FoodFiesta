import React from 'react'

const Contact = () => {
  return  (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white py-4 shadow">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800">Contact Us</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Get in Touch</h2>

          <div className="text-gray-600">
            <p>Email: srbhmodanwal@gmail.com</p>
            <p>Phone: +1 123-456-7890</p>
            <p>Address: Ayodhya, India</p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">© 2023 Food Ecommerce. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact