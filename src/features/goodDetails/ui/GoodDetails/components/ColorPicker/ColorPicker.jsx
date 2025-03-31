import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import classes from './ColorPicker.module.scss';

export const ColorPicker = ({ changeColor, selectedId, colors }) => {
  return (
    <FormControl className={classes.pickerContainer} size="small">
      <InputLabel id="select-color-small-label">Colors</InputLabel>
      <Select
        labelId="select-color-small-label"
        id="select-color-small"
        label="Цвет"
        onChange={(event) => changeColor(event.target.value)}
        value={selectedId || ''}
      >
        {colors &&
          colors.map((color) => (
            <MenuItem key={color.id} value={color.id}>
              {color.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};
