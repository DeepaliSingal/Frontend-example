import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Blog from './Blog';

const UserBlogs = () => {
  const [user, setUser] = useState();
  const url = "https://myapp1.adaptable.app";
  const id = localStorage.getItem("userId");
  const sendRequest = async () =>{
    const res = await axios.get(url+`/api/blog/user/${id}`).catch(err=>console.log(err));
    const data = await res.data;
    return data;
  }
  useEffect(() => {
    sendRequest().then((data)=>setUser(data.user));
  },[]);
  console.log(user);
  return (
    <div>
      {user && user.blogs &&
      user.blogs.map((blog, index) => (
        <Blog
          id={blog._id}
          key={index}
          isUser={true}
          title={blog.title}
          description={blog.description}
          imageURL={blog.image}
          userName={user.name}
        ></Blog>
      ))}</div>
  )
}

export default UserBlogs