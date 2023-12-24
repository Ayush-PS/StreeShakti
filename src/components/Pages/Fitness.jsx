import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import i1 from "./fit.png";
import img1 from "./11.png";
import img2 from "./22.png";
import img3 from "./33.png";
import img4 from "./44.png";
import css from "../Styles/Fitness.module.css";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer,slideIn } from "../../utils/motion";
import back from "./back.png";
import ExBox from "../helpers/ExBox";
import { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Fitness = () => {
  const imgurl =
    "https://static.vecteezy.com/system/resources/previews/014/273/466/non_2x/abstract-colorful-blob-shapes-element-design-free-png.png";
  const imgurl2 =
    "https://i.pinimg.com/originals/c5/36/c9/c536c9cdd607000657528893e5005848.png";
  const [exerciseList, setExerciseList] = useState([]);
  const [exercise, setExercise] = useState({
    name: "",
    duration: "",
    calories: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExercise({ ...exercise, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExerciseList([...exerciseList, exercise]);
    setExercise({ name: "", duration: "", calories: "" });
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`innerWidth ${css.container}`}
      style={{ marginTop: "-10vh", position: "relative", overflow: "hidden" }}
    >
      <motion.img
        src={back}
        className={css.back}
        variants={fadeIn("left", "tween", 0.4, 1)}
      />
      <img src={imgurl} alt="" className={css.i1} />
      <img src={imgurl2} alt="" className={css.i2} />
      <Box
        sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
        display="flex"
        justifyContent="space-around"
        height="90vh"
      >
        <Box width="50%">
          <Typography color="brown" fontWeight="600" fontSize="26px">
            Fitness Club
          </Typography>
          <Typography
            fontWeight={700}
            sx={{ fontSize: { lg: "44px", xs: "40px" } }}
            mb="23px"
            mt="30px"
          >
            Sweat, Smile <br />
            And Repeat
          </Typography>
          <Typography fontSize="2rem" fontFamily="Caveat" lineHeight="35px">
            Check out the most effective exercises personalized to you
          </Typography>
          <Stack>
            <Button
              style={{
                marginTop: "45px",
                textDecoration: "none",
                width: "30%",
                textAlign: "center",
                background: "rgb(165, 65, 42)",
                padding: "14px",
                fontSize: "22px",
                textTransform: "none",
                color: "white",
                borderRadius: "4px",
              }}
            >
              Explore Exercises
            </Button>
          </Stack>
          <Typography
            fontWeight={600}
            fontFamily="Caveat"
            color="rgb(216, 130, 106)"
            marginTop="-5rem"
            sx={{
              opacity: "0.1",
              display: { lg: "block", xs: "none" },
              fontSize: "200px",
            }}
          >
            Exercise
          </Typography>
        </Box>
        <img
          src={i1}
          alt="hero-banner"
          style={{ height: "100vh", marginTop: "-10vh", marginLeft: "0" }}
        />
      </Box>
      <h1 className={css.h}> Some Exercises You Can Practice!</h1>
      <div className={css.acontainer}>
        <ExBox image={img4} title="WeightLigting" />
        <ExBox image={img1} title="Running" />
        <ExBox image={img2} title="Squats" />
        <ExBox image={img3} title="Cardio Excercise" />
      </div>
      <motion.div variants={slideIn("up", "tween", 0.5, 1.3)}>
      <Container
        style={{
          marginTop: "2rem",
          marginBottom: "10vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          style={{
            width: "80%",
            padding: "1.5rem",
          }}
          elevation={3}
        >
          <Typography fontFamily="Caveat" variant="h2" gutterBottom>
            Exercise Log Form
          </Typography>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Exercise Name"
              variant="outlined"
              name="name"
              value={exercise.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Duration (minutes)"
              variant="outlined"
              type="number"
              name="duration"
              value={exercise.duration}
              onChange={handleChange}
              required
            />
            <TextField
              label="Calories Burned"
              variant="outlined"
              type="number"
              name="calories"
              value={exercise.calories}
              onChange={handleChange}
              required
            />
            <Button
              variant="contained"
              style={{ background: "rgb(165, 65, 42)", color: "white" }}
              type="submit"
            >
              Add Exercise
            </Button>
          </form>

          <div style={{ marginTop: "1.5rem" }}>
            <Typography variant="h6">Your Exercise Log</Typography>
            <List>
              {exerciseList.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={`${item.name} - Duration: ${item.duration} minutes, Calories Burned: ${item.calories}`}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </Paper>
      </Container>
      </motion.div>
    </motion.div>
  );
};

export default Fitness;
