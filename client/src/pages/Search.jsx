import { Button, Select, Spinner, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";

const Search = () => {
  const [slidebarData, setSlidebarData] = useState({
    searchTerm: "",
    sort: "desc",
    category: "uncategorized",
  });
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const sortFromUrl = urlParams.get("sort");
    const categoryFromUrl = urlParams.get("category");

    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSlidebarData({
        ...slidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
      });
    }
    const fetchPosts = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/post/getposts?${searchQuery}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
        if (data.posts.length === 9) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };
    fetchPosts();
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === "searchTerm") {
      setSlidebarData({ ...slidebarData, searchTerm: e.target.value });
    }
    if (e.target.id === "sort") {
      const order = e.target.value || "desc";
      setSlidebarData({ ...slidebarData, sort: order });
    }
    if (e.target.id === "category") {
      const category = e.target.value || "uncategorized";
      setSlidebarData({ ...slidebarData, category });
    }
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search)
    urlParams.set("searchTerm", slidebarData.searchTerm);
    urlParams.set("sort", slidebarData.sort);
    urlParams.set("category", slidebarData.category);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  }

  const handleShowMore = async ()=>{
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex)
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/post/getposts?${searchQuery}`)
    if(!res.ok){
      return;
    }
    if(res.ok){
        const data = await res.json();
        setPosts([...posts, ...data.posts])
        if(data.posts.length === 9){
            setShowMore(true)
        }else{
            setShowMore(false)
        }
    }
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search Term:
            </label>
            <TextInput
              placeholder="Search..."
              id="searchTerm"
              type="text"
              value={slidebarData.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">Sort:</label>
            <Select
              onChange={handleChange}
              value={slidebarData.sort}
              id="sort"
            >
              <option value="desc">Latest</option>
              <option value="asc">Oldest</option>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">Category:</label>
            <Select
              onChange={handleChange}
              value={slidebarData.category}
              id="category"
            >
              <option value="uncategorized">Uncategorized</option>
              <option value="anime">Anime</option>
              <option value="animerecommendation">Anime recommendation</option>
              <option value="mangareview">Manga review</option>
              <option value="onepiece">One Piece</option>
              <option value="bigthree">Big three anime</option>
            </Select>
          </div>
          <Button type="submit" outline gradientDuoTone='purpleToPink'>Apply Fillters</Button>
        </form>
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5">Posts results:</h1>
        <div className="p-7 flex flex-wrap gap-4 justify-center items-center min-h-screen">
            {!loading && posts.length === 0 && (
                <p className="text-xl text-gray-500">No posts found.</p>
            )}
            {loading && (
                <Spinner size='xl' className="flex justify-center items-center"/>
            )}
            {!loading && posts && posts.map((post)=>(
                <PostCard key={post._id} post={post}/>
            ))}
            {showMore && <button className="text-teal-500 text-lg hover:underline p-7 w-full" onClick={handleShowMore}>Show More</button>}
        </div>
      </div>
    </div>
  );
};

export default Search;
