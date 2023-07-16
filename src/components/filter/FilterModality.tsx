import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
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

const modalities = [intl.formatMessage({ id: 'remote' }), intl.formatMessage({ id: 'in_person' })];

export default function FilterModality(props: any) {
  const [mod, setModality] = React.useState<string[]>(props.initalModality || []);

  const handleChange = (event: SelectChangeEvent<typeof mod>) => {
    const {
      target: { value },
    } = event;
    setModality(
      typeof value === 'string' ? value.split(',') : value,
    );
    props.childToParent(value)
  };

  return (
      <FormControl data-testid="form" size='small' sx={{ m: 1, width: 250 }}>
        <InputLabel id="demo-multiple-checkbox-label">{intl.formatMessage({ id: 'modality' })}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={mod}
          onChange={handleChange}
          input={<OutlinedInput label="Modality" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {modalities.map((modality) => (
            <MenuItem key={modality} value={modality}>
              <Checkbox checked={mod.indexOf(modality) > -1} />
              <ListItemText primary={modality} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}