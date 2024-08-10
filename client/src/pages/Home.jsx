import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [slide, setSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const autoSlideInterval = 3000;
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/post/getPosts`);
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  const nextSlide = () => {
    setSlide((slide) => (slide === posts.length - 1 ? 0 : slide + 1));
  };
  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? posts.length - 1 : slide - 1));
  };

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(nextSlide, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [nextSlide]);

  return (
    <div>
      <div className="flex flex-col gap-6 lg:p-28 p-3 max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold lg:text-7xl">Welcome to Aniblog</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Here you'll find a variety of articles on topics such as anime
          recommendation, manga review , anime review.
        </p>
        <Link
          to={"/search"}
          className="text-xm sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="flex justify-center items-center">
        {posts && posts.length > 0 && (
          <div className="flex justify-center items-center w-[800px] h-[400px] relative p-6">
            <BsArrowLeftCircleFill
              className="absolute w-8 h-8 text-gray-900 left-7 hover:cursor-pointer drop-shadow-md sm:left-7"
              onClick={prevSlide}
            />
            {posts.map((item, idx) => {
              return (
                <div
                  className={
                    slide === idx
                      ? "rounded-lg shadow-md w-full h-full"
                      : "hidden"
                  }
                >
                  <Link
                    to={`/post/${item.slug}`}
                    className={
                      slide === idx
                        ? "rounded-lg shadow-md w-full h-full"
                        : "hidden"
                    }
                  >
                    <img
                      src={item.image}
                      alt={idx.slug}
                      className={
                        slide === idx
                          ? "rounded-lg shadow-md w-full h-full"
                          : "hidden"
                      }
                    />
                  </Link>
                </div>
              );
            })}
            <BsArrowRightCircleFill
              className="absolute w-8 h-8 text-gray-900 right-7 hover:cursor-pointer drop-shadow-md sm:right-7"
              onClick={nextSlide}
            />
            <span className="flex absolute bottom-7">
              {posts.map((_, idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => setSlide(idx)}
                    className={
                      slide === idx
                        ? "bg-white h-2 w-2 rounded-full border-none outline-none shadow-md m-1 cursor-pointer"
                        : "h-2 w-2 rounded-full border-none outline-none shadow-md m-1 cursor-pointer bg-gray-500"
                    }
                  ></button>
                );
              })}
            </span>
          </div>
        )}
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
