import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Bookmark, MessageCircle, MoreHorizontal, Send, Type } from 'lucide-react'
import { Button } from './ui/button'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import CommentDialog from './CommentDialog'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import axios from 'axios'
import { setPosts, setSelectedPost } from '../redux/postSlice'
import { Badge } from './ui/badge'

const Post = ({ post }) => {
  if (!post || !post.author) {
    return null;
  }
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const { user } = useSelector(store => store.auth);
  const { posts } = useSelector(store => store.post);
  const [liked, setLiked] = useState(post.likes.includes(user?._id) || false);
  const [postLike, setPostLike] = useState(post.likes.length || 0);
  const[comment,setComment]=useState(post.comments || []);
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    const inputtext = e.target.value;
    if (inputtext.trim()) {
      setText(inputtext);
    } else {
      setText("");
    }
  }

  const likeOrDislikeHandler = async () => {
    try {
      const action = liked ? 'dislike' : 'like';
      const res = await axios.get(`http://localhost:8000/api/v1/post/${post._id}/${action}`, { withCredentials: true }).catch(err => {
        console.error("Error fetching like/dislike:", err);
        toast.error("Failed to like/dislike the post.");
      });

      if (res.data.success) {
        const updatedLikes = liked ? postLike - 1 : postLike + 1;
        setPostLike(updatedLikes);
        setLiked(!liked);

        const updatedPostData = posts.map(p => 
          p._id === post._id ? {
            ...p,
            likes: liked ? p.likes.filter(id => id !== user._id) : [...p.likes, user._id],
          } : p
        );
        dispatch(setPosts(updatedPostData));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

 const commentHandler=async()=>{
    try{
      const res=await axios.post(`http://localhost:8000/api/v1/post/${post._id}/comment`,{text},{
        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true
      });
      console.log(res.data);
      if (res.data.success) {
        const updatedCommentData = [...comment, res.data.comment];
        setComment(updatedCommentData);

        const updatedPostData = posts.map(p =>
            p._id === post._id ? { ...p, comments: updatedCommentData } : p
        );

        dispatch(setPosts(updatedPostData));
        toast.success(res.data.message);
        setText("");
    }
   } catch (error) {
    console.log(error);
    }
 }


  const deletePostHandler = async () => {
    try {
      const res = await axios.delete(`http://localhost:8000/api/v1/post/delete/${post?._id}`, { withCredentials: true })
      if (res.data.success) {
        const updatePostData = posts.filter((postItem) => postItem?._id != post?._id);
        dispatch(setPosts(updatePostData));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message);
    }
  }

  return (
    <div className='my-8 w-full max-w-sm mx-auto'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Avatar>
            <AvatarImage src={post.author?.profilePicture}  alt="post_image"></AvatarImage>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='flex items-center gap-3'>
             <h1>{post.author?.username}</h1>
             {user?._id == post.author._id && <Badge variant="secondary">Author</Badge>}
          </div>
          
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <MoreHorizontal className='cursor-pointer' />
          </DialogTrigger>
          <DialogContent className="w-[90%] max-w-sm p-6 rounded-lg shadow-lg bg-white">
            <div className="flex flex-col px-40 justify-center">
            {
              post?.author?._id !== user?._id &&  <button className="text-[#ED4956] bg-white px-6 py-2 w-fit rounded-lg ">Unfollow</button>
            }
              <br />
              <Button variant="ghost" className="cursor-pointer text-black bg-white w-fit ">Add to favorites</Button>
              <br />
              {
                user && user?._id == post?.author._id && <Button onClick={deletePostHandler} variant="ghost" className="cursor-pointer text-black bg-white w-fit ">Delete</Button>
              }
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <img
        className='rounded-sm my-2 w-full aspect-square object-cover'
        src={post.image}
        alt='post_image'
      />
      <div className='flex items-center justify-between my-2'>
        <div className='flex items-center gap-3'>
          {
            liked ? <FaHeart onClick={likeOrDislikeHandler} size={'24'} className='cursor-pointer text-red-600' /> : <FaRegHeart onClick={likeOrDislikeHandler} size={'23px'} className='cursor-pointer hover:text-gray-600' />
          }
          <MessageCircle onClick={() =>{
            dispatch(setSelectedPost(post));
              setOpen(true);
          }} size={'24px'} className='cursor-pointer hover:text-gray-600' />
          <Send size={'23px'} className='cursor-pointer hover:text-gray-600' />
        </div>
        <Bookmark />
      </div>
      <span className='font-medium block mb-2'>{postLike} likes</span>
      <p>
        <span className='font-medium mr-2'>{post.author?.username}</span>
        {post.caption}
      </p>
      {
         comment.length > 0 && (
          <span onClick={() =>{
            dispatch(setSelectedPost(post));
              setOpen(true);
          }} className='cursor-pointer text-sm text-gray-400'>View all {comment.length} comments</span>
     
         )
      }
       <CommentDialog open={open} setOpen={setOpen} />
      <div className='flex items-center justify-between'>
        <input
          type='text'
          placeholder='Add a comment...'
          value={text}
          onChange={changeEventHandler}
          className='outline-none text-sm w-full'
        />
        {
          text && <span onClick={commentHandler} className='text-[#3BADF8] cursor-pointer'>Post</span>
        }
      </div>
    </div>
  )
}

export default Post;
