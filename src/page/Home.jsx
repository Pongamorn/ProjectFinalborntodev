import Card from "../Components/Card";
import { Container, Grid, Typography } from "@mui/material";
import cities from "../data.json";
import { useEffect, useState } from "react";

const Home = () => {
  const url = "https://borntodev-final-project-api.borntodev.repl.co/courses";
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCourses(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <Container sx={{ marginY: 5 }}>
        <Grid container spacing={3}>
        {courses.map((data) => (
            <>  
                    <Card courses={data} id={data.id} />
            </>
        ))}
        </Grid>
        {/* {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              {city.name}
            </Typography>
            <Grid container spacing={4}>
              {city.tours.map((tour, index) => (
                <Card tour={tour} key={index} />
              ))}
            </Grid>
          </>
        ))} */}
      </Container>
    </div>
  );
};

export default Home;
