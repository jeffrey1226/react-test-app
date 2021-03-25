import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const initialData = [
  "Milk",
  "Coffie",
  "Orange",
  "Bread"
];

function App() {
  const [data, setData] = useState(initialData);
  const [searchKey, setSearchKey] = useState("");

  const onSearch = (e) => {
    setSearchKey(e.target.value);
  };

  const onAddData = () => {
    setData(
      [
        ...data,
        Math.random().toString(36).substr(2, 8)
      ]
    );
  }

  return (
    <div className="App">
      <Box
        display="flex"
      >
        <TextField
          fullWidth
          placeholder="Search"
          variant="outlined"
          onChange={onSearch}
        />
        <Button
          color="primary"
          variant="contained"
          endIcon={<AddIcon />}
          onClick={onAddData}
        >
          Add
        </Button>
      </Box>
      <List >
        {
          data
            .filter(item => searchKey.isEmpty || (item.toLowerCase().includes(searchKey.toLowerCase())))
            .map((item, index) => (
              <ListItem key={index}>
                {item}
              </ListItem>
            ))
        }
      </List>
    </div>
  );
}

export default App;
