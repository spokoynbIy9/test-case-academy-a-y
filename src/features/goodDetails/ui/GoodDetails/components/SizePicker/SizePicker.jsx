import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import classes from './SizePicker.module.scss';

export const SizePicker = ({ sizes, selectedId, changeSize, hasSizes }) => {
  return (
    <FormControl className={classes.pickerContainer} size="small">
      <InputLabel id="select-size-small-label">Sizes</InputLabel>
      <Select
        labelId="select-size-small-label"
        id="select-size-small"
        label="Размер"
        onChange={(event) => changeSize(event.target.value)}
        value={selectedId || 'no-sizes'}
        disabled={!selectedId}
      >
        {sizes && hasSizes ? (
          sizes.map((size) => (
            <MenuItem key={size.id} value={size.id}>
              {size.label} - {size.number}
            </MenuItem>
          ))
        ) : (
          <MenuItem value={'no-sizes'}>Нет размеров</MenuItem>
        )}
      </Select>
    </FormControl>
  );
};
