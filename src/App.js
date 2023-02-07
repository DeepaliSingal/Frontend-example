import React from "react";
import {Route,Routes} from "react-router-dom";
import Auth from "./components/Auth";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import { useSelector } from "react-redux";

// React-redux being a state management tool makes it easier to pass these states from one component to another irrespective of their position in the component tree and hence prevents the complexity of the application.

function App() {
  const isLoggedIn = useSelector((state)=>state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <React.Fragment>
      <header>
      <Header></Header>
      </header>
      <main>
        <Routes>
          { !isLoggedIn ? <Route path='/auth' element={ <Auth/> }></Route> :
          <>
          <Route path='/blogs' element={ <Blogs/> }></Route>
          <Route path='/myBlogs' element={ <UserBlogs/> }></Route>
          <Route path='/myBlogs/:id' element={ <BlogDetail/> }></Route>
          <Route path='/blogs/add' element={ <AddBlog/> }></Route>
          </>
          }
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
