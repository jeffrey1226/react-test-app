import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 50,
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      width: 540,
    },
  },
  list: {
    border: '1px solid'
  },
  item: {
    borderBottom: '1px solid',
    '&:last-child': {
      borderColor: 'transparent'
    }
  },
}));

const initialData = [
  "Milk",
  "Coffie",
  "Orange",
  "Bread"
];

function App() {
  const classes = useStyles();
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
    <div className="App" style={{ display: 'flex', justifyContent: 'center' }}>
      <div className={classes.container}>
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
        <List className={classes.list}>
          {
            data
              .filter(item => searchKey.isEmpty || (item.toLowerCase().includes(searchKey.toLowerCase())))
              .map((item, index) => (
                <ListItem key={index} className={classes.item}>
                  {item}
                </ListItem>
              ))
          }
        </List>
      </div>
    </div>
  );
}

export default App;
