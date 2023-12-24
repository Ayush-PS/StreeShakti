import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import css from "../Styles/Emergency.module.css";
import { motion } from "framer-motion";
import {slideIn, staggerContainer } from "../../utils/motion";

const initialContact = { name: "", phoneNumber: "" };

const Emergency = () => {
  const [contacts, setContacts] = useState([
    { name: "Emergency Contact 1", phoneNumber: "123-456-7890" },
    { name: "Emergency Contact 2", phoneNumber: "987-654-3210" },
  ]);

  const [newContact, setNewContact] = useState(initialContact);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const addContact = () => {
    if (newContact.name && newContact.phoneNumber) {
      setContacts((prevContacts) => [...prevContacts, newContact]);
      setNewContact(initialContact);
    }
  };
  const imgurl =
    "https://static.vecteezy.com/system/resources/previews/014/273/466/non_2x/abstract-colorful-blob-shapes-element-design-free-png.png";
  const imgurl2 =
    "https://i.pinimg.com/originals/c5/36/c9/c536c9cdd607000657528893e5005848.png";
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`innerWidth ${css.container}`}
    >
      <Box
        alignItems="center"
        minHeight="100vh"
        p={4}
        justifyContent="center"
        textAlign="center"
        className={css.wrapper}
      >
        <img src={imgurl} alt="" className={css.i1} />
        <img src={imgurl2} alt="" className={css.i2} />
        <Box mt={20} mb={10}>
          <Typography variant="h2" fontFamily="Caveat" gutterBottom>
            Add New Contact
          </Typography>
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={newContact.name}
            onChange={handleInputChange}
            style={{ marginRight: "16px" }}
            required
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            name="phoneNumber"
            required
            value={newContact.phoneNumber}
            onChange={handleInputChange}
            style={{ marginRight: "16px" }}
          />
          <Button
            variant="contained"
            style={{ backgroundColor: "rgb(165, 65, 42)" }}
            onClick={addContact}
          >
            Add Contact
          </Button>
        </Box>
        <motion.div variants={slideIn("up", "tween", 0.1, 1)}>
          <Box display="flex" justifyContent="center">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                style={{
                  margin: "16px",
                  minWidth: "250px",
                  maxWidth: "300px",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {contact.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Phone: {contact.phoneNumber}
                  </Typography>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "rgb(165, 65, 42)",
                      marginTop: "16px",
                    }}
                    href={`tel:${contact.phoneNumber}`}
                  >
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Emergency;
