import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {intl} from "../../i18n/i18n";

export default function FilterOrderBy(props : any) {
  const [order, setOrder] = React.useState(props.initialOrderBy || '');

  const handleChange = (event: SelectChangeEvent) => {
    setOrder(event.target.value);
    props.childToParent(event.target.value);
  };

  return (

  <FormControl data-testid="form" size="small"  sx={{ m: 1, width: 250 }}>
      <InputLabel id="demo-simple-select-helper-label">{intl.formatMessage({ id: 'order_by' })}</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={order}
        label="Order by (descending)"
        onChange={handleChange}
      >
          <MenuItem value={"Price"}>{intl.formatMessage({ id: 'price' })}</MenuItem>
          <MenuItem value={"Rating"}>{intl.formatMessage({ id: 'rating' })}</MenuItem>
      </Select>
    </FormControl>
    
  );
}