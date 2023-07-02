/* eslint-disable react/prop-types */
import { Box, Grid, Paper, Rating, Typography, Button } from "@mui/material";
import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Card = ({ courses }, { key }) => {
  const imgURL =
    "https://storage.borntodev.com/academy/content/New-Project-yQoixxVHfbqdO4-_fRbxwSY3Tq6xAc-plvgX1ZenI_fjtWOfUnlrfrb1hwHN3.webp";
  const navigate = useNavigate();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3}>
        <img className="img" src={imgURL} alt="" />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            {courses.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {courses.category}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
            marginTop={2}
          >
            <Rating name="read-only" readOnly value={4.5} precision={0.5} />
            <Typography variant="body2" component="p" marginLeft={1}>
              (reviews)
            </Typography>
          </Box>
          <Box height={70}>
            <Typography variant="body2" component="p" marginTop={3}>
              {courses.description}
            </Typography>
          </Box>
        </Box>
        <Box paddingBottom={1}>
          <Button
            variant="text"
            fullWidth
            onClick={() => navigate(`/${courses.id}`)}
          >
            MORE DETAIL
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Card;
