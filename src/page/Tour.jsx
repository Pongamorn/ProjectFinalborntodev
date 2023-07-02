import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import QuiltedImageList from "../Components/imageLists";
import CustomizedAccordions from "../Components/Accordion";
import { useParams } from "react-router-dom";

const Tour = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const url = `https://borntodev-final-project-api.borntodev.repl.co/courses/${id}`;
  const imgURL =
    "https://storage.borntodev.com/academy/content/New-Project-yQoixxVHfbqdO4-_fRbxwSY3Tq6xAc-plvgX1ZenI_fjtWOfUnlrfrb1hwHN3.webp";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h3" component="h1" marginTop={3}>
        {data.name}
      </Typography>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={8}>
          <img
            src={imgURL}
            alt=""
            style={{ width: "100%", height: 365, objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={4}>
          <QuiltedImageList />
        </Grid>
      </Grid>
      <Box marginTop={3}>
        <Typography Typography variant="h4" component="h4">
          Description
        </Typography>
        <Divider sx={{ marginBottom: 2, marginTop: 2 }} />
        <Typography variant="h6" component="h6">
          {data.description}
        </Typography>
      </Box>
    </Container>
  );
};

export default Tour;
