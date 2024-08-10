import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">About Aniblog</h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to Aniblog! We're passionate fans who love diving into the
              captivating worlds of Japanese animation and graphic novels.
              Whether you're a seasoned otaku or just starting your anime
              journey, you've come to the right place.
            </p>
            <h2 className="text-2xl">Our Mission</h2>
            <p>
              Our mission is simple: to share our love for anime and manga with
              fellow enthusiasts. We'll bring you reviews, recommendations, and
              thought-provoking articles that explore the latest series, classic
              gems, and everything in between.
            </p>
            <h2 className="text-2xl">About Me</h2>
            <h3 className="font-semibold">Labib ahammed</h3>
            <p>
              <ul>
                <li>Founder of Aniblog</li>
                <li>Favorite anime: One Piece</li>
              </ul>
            </p>
            <h2 className="text-2xl">Contact Us</h2>
            <p>
              Have a burning question or want to share your thoughts on the
              latest episode? Reach out to us at <b><i>grandlineadventurer@gmail.com</i></b>.
              We'd love to hear from you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
