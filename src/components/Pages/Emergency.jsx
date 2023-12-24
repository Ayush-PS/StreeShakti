import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const Emergency = () => {
  const [exerciseList, setExerciseList] = useState([]);
  const [exercise, setExercise] = useState({
    name: '',
    duration: '',
    calories: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExercise({ ...exercise, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExerciseList([...exerciseList, exercise]);
    setExercise({ name: '', duration: '', calories: '' });
  };

  return (
    <Container
      style={{
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Paper
        style={{
          width: '80%',
          padding: '1.5rem',
        }}
        elevation={3}
      >
        <Typography variant="h4" gutterBottom>
          Fitness Tracker
        </Typography>

        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
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
          <Button variant="contained" color="primary" type="submit">
            Add Exercise
          </Button>
        </form>

        <div style={{ marginTop: '1.5rem' }}>
          <Typography variant="h6">Exercise Log</Typography>
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
  );
};

export default Emergency;
