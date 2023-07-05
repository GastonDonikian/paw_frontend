import * as React from 'react';
import {useEffect, useState} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {getCategories} from "../../Services/EnumService";
import {intl} from "../../i18n/i18n";

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


export default function FilterCategory(props : any) {
  const [cat, setCategory] = React.useState<string[]>(props.initialCategory || []);
  const [categories, setCategories] = useState([]);

    const load = async () => {
       setCategories((await getCategories()).map((categ: any) => categ.category));
    }
    useEffect( () => {load()},
        [])
  const handleChange = (event: SelectChangeEvent<typeof cat>) => {
    const {
      target: { value },
    } = event;
    setCategory(
      // On autofill, we get a stringifies value.
      typeof value === 'string' ? value.split(',') : value,
    );
    props.childToParent(value)
  };

  // @ts-ignore
    return (
      <FormControl size='small' sx={{ m: 1, width: 250}}>
        <InputLabel id="demo-multiple-checkbox-label">{intl.formatMessage({ id: 'category' })}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={cat}
          onChange={handleChange}
          input={<OutlinedInput label="Category" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {categories.map((category: any) => (
            <MenuItem key={category} value={category}>
              <Checkbox checked={cat.indexOf(category) > -1} />
              <ListItemText primary={category} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}