import * as React from 'react';
import {useEffect, useState} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {getLevels} from "../../Services/EnumService";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function FilterLevel(props: any) {
  const [lev, setLevel] = React.useState<string[]>(props.initialLevel || []);
    const [levels, setLevels] = useState([]);

    const load = async () => {
        setLevels((await getLevels()).map((level: any) => level.level));
    }
    useEffect( () => {load()},
        [])
  const handleChange = (event: SelectChangeEvent<typeof lev>) => {
    const {
      target: { value },
    } = event;
    setLevel(
      // On autofill, we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    props.childToParent(value)
  };

  return ( 
      <FormControl size='small' sx={{ m: 1, width: 250 }}>
        <InputLabel id="demo-multiple-checkbox-label">Level</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={lev}
          onChange={handleChange}
          input={<OutlinedInput label="Category" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {levels.map((level) => (
            <MenuItem key={level} value={level}>
              <Checkbox checked={lev.indexOf(level) > -1} />
              <ListItemText primary={level} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}