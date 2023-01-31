import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function FilterOrderBy() {
  const [order, setOrder] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setOrder(event.target.value);
  };

  return (

  <FormControl size="small"  sx={{ m: 1, width: 250 }}>
      <InputLabel id="demo-simple-select-helper-label">Order by {"(descending)"}</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={order}
        label="Order by (descending)"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Price</MenuItem>
        <MenuItem value={20}>Rating</MenuItem>
      </Select>
    </FormControl>
    
  );
}