import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../contexts/productsContext";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PhotoCamera } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const { getCategories, categories, addProduct } = useContext(productsContext);

  const [title, setTitle] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [brand, setBrand] = useState("");

  useEffect(() => {
    getCategories();
  }, []);
  // console.log(categories);

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("size", size);
    newProduct.append("brand", brand);
    newProduct.append("category", category);
    newProduct.append("image", image);
    addProduct(newProduct, navigate);
  }

  return (
    <Container maxWidth="sm">
      <Box
        display={"flex"}
        flexDirection={"column"}
        marginTop={"50px"}
        marginBottom={"100px"}>
        <Typography variant="h6" color={"gold"}>
          Add Product
        </Typography>
        <TextField
          style={{ marginTop: "20px" }}
          label="Title"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          style={{ marginTop: "20px" }}
          label="Description"
          variant="outlined"
          value={description}
          onChange={e => {
            setDescription(e.target.value);
          }}
        />
        <TextField
          style={{ marginTop: "20px" }}
          label="Brand"
          variant="outlined"
          value={brand}
          onChange={e => setBrand(e.target.value)}
        />
        <TextField
          style={{ marginTop: "20px" }}
          label="Price"
          variant="outlined"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <TextField
          style={{ marginTop: "20px", marginBottom: "20px" }}
          label="Size"
          variant="outlined"
          value={size}
          onChange={e => setSize(e.target.value)}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={e => setCategory(e.target.value)}>
            {categories.map(item => (
              <MenuItem key={item.title} value={item.title}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box>
          <IconButton
            style={{ marginTop: "20px", marginBottom: "20px" }}
            color="primary"
            aria-label="upload picture"
            component="label">
            <input
              name="file"
              hidden
              accept="image/*"
              type="file"
              onChange={e => setImage(e.target.files[0])}
            />
            <PhotoCamera />
          </IconButton>
          {image ? <Typography variant="span">{image.name}</Typography> : null}
        </Box>
        <Button variant="contained" color="secondary" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default AddProduct;
