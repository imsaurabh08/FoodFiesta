import React from 'react'

const About = () => {

  
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white py-4 shadow">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800">About Us</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Our Story</h2>

        <p className="text-gray-600 mb-4 font-semibold">
          At Food Ecommerce, we believe that good food brings people together. Our journey started with a simple idea:
          to make quality ingredients and delightful meals accessible to everyone. From humble beginnings as a small local
          market, we have grown to become a trusted online destination for food enthusiasts and passionate home cooks.

          Today, we are proud to offer an extensive selection of fresh produce, artisanal products, and carefully curated
          recipes. We source directly from local farmers and renowned suppliers to ensure the highest quality standards.
          With a focus on sustainability and supporting local communities, we aim to nourish both your body and soul.

          Join us on this gastronomic adventure as we strive to make every meal memorable and every gathering special.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h2>

        <p className="text-gray-600 mb-4 ">
          Our mission is to inspire culinary creativity and empower people to enjoy exceptional food experiences.
          We are committed to:

          - Providing a seamless and convenient online shopping experience.
          - Offering a diverse range of premium ingredients, unique flavors, and exciting culinary discoveries.
          - Promoting sustainable practices and supporting local farmers and producers.
          - Sharing knowledge, recipes, and inspiration to enhance your cooking skills and broaden your palate.
          - Delivering exceptional customer service and fostering a community of food lovers.

          We believe that food should be more than just sustenance; it should be a source of joy, creativity, and connection.
          With our mission as our guiding force, we invite you to embark on a culinary journey with us.

          Let's savor the flavors, embrace new tastes, and create delicious memories together!
        </p>

        <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h2>

        <p className="text-gray-600">
          Email:  srbhmodanwal@gmail.com<br />
          Phone: +1 123-456-7890<br />
          Address: Ayodhya , India
        </p>
      </main>

      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">© 2023 Food Ecommerce. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default About