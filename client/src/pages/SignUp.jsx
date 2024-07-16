import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [fromData, setFromData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFromData({ ...fromData, [e.target.id]: e.target.value.trim() });
  };
  const handleSumbit = async (e) => {
    e.preventDefault();
    if (!fromData.username || !fromData.email || !fromData.password) {
      setError("Please fill out all the fields");
    }
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fromData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setError(data.message);
      }
      setIsLoading(false);
      if(res.ok){
        navigate('/sign-in')
      }
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link
            to="/"
            className="sm:text-xl font-bold text-4xl dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
              ANI
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5 mb-5">
            Join ANIBLOG for anime reviews, recommendations and more. You can
            sign up with your email and password or with Google
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSumbit}>
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              outline
              pill
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
            <OAuth/>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {error && (
            <Alert className="mt-5" color="failure">
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
