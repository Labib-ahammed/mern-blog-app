import React, { useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import moment from "moment";
import { Button, Textarea } from "flowbite-react";

const Comment = ({ comment, onLike, onEdit }) => {
  const [user, setUser] = useState({});
  const { currentUser } = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${comment.userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [comment]);

  const handleEdit = async () => {
    setIsEditing(true);
    setEditedComment(comment.content)
  };
  const handleSave = async ()=>{
    try {
      const res = await fetch(`/api/comment/editComment/${comment._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: editedComment }),
      });
      if (res.ok) {
        setIsEditing(false);
        onEdit(comment, editedComment)
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="flex p-4 border-b dark:border-gray-600 text-sm">
      <div className="flex-shrink-0 mr-3">
        <img
          className="w-10 h-10 rounded-full bg-gray-200"
          src={user.profilePicture}
          alt={user.username}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-1 gap-2">
          <span className="font-blod mr-l text-xs truncate">
            {user ? `@${user.username}` : "anonymous user"}{" "}
          </span>
          <span className="text-gray-500 text-xs">
            {" "}
            {moment(comment.createdAt).fromNow()}
          </span>
        </div>
        {isEditing ? (
          <>
          <Textarea
            className="mb-2"
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
          />
          <div className="flex justify-end gap-3 mt-3 text-xs">
            <Button type="button" size='sm' gradientDuoTone='purpleToBlue' onClick={handleSave}>Save</Button>
            <Button type="button" size='sm' gradientDuoTone='purpleToBlue' outline onClick={()=> setIsEditing(false)}>Cancel</Button>
          </div>
          </>
          
        ) : (
          <>
            <p className="text-gray-500 pb-2 dark:text-gray-300">
              {comment.content}
            </p>

            <div className="flex items-center pt-2 text-xs border-t border-gray-300 dark:border-gray-700 max-w-fit gap-2">
              <button
                type="button"
                onClick={() => onLike(comment._id)}
                className={`text-gray-400 hover:text-blue-500 ${
                  currentUser &&
                  comment.likes.includes(currentUser._id) &&
                  "!text-blue-500"
                }`}
              >
                <FaThumbsUp className="text-sm" />
              </button>
              <p className="text-gray-400">
                {comment.numberOfLikes > 0 &&
                  comment.numberOfLikes +
                    " " +
                    (comment.numberOfLikes === 1 ? "like" : "likes")}
              </p>
              {currentUser &&
                (currentUser._id === comment.userId || currentUser.isAdmin) && (
                  <button
                    onClick={handleEdit}
                    type="button"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    Edit
                  </button>
                )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Comment;
