import React from "react";
import {
  Avatar,
  Card,
  Box,
  IconButton,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Blog = ({ title, description, imageURL, userName, isUser, id }) => {
  const url = "https://myapp1.adaptable.app";
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/myBlogs/${id}`);
  };
  const deleteRequest = async () => {
    const res = await axios
      .delete(url+`/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/myBlogs/"))
      .then(() => navigate("/blogs"));
  };
  console.log(title, isUser);
  return (
    <Card
      sx={{
        width: "30%",
        margin: "auto",
        mt: 2,
        padding: 3,
        boxShadow: "5px 5px 10px #ccc",
        ":hover": {
          boxShadow: "20px 20px 30px #ccc",
        },
      }}
    >

        {isUser && (
          <Box display="flex">
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <ModeEditOutlineIcon color="warning" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon color="error" />
            </IconButton>
          </Box>
        )}

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {userName.charAt(0)}
          </Avatar>
        }
        title={title}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageURL}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b>{userName}</b>
          {": "}
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Blog;
