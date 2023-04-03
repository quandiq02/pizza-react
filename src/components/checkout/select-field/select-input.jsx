import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'delivery',
    label: 'Delivery',
  },
  {
    value: 'pickup',
    label: 'Local pickup',
  },
];

export default function SelectTextFields() {
  return (
        <TextField
          id="outlined-select-currency"
          select
          defaultValue="delivery"
          className='checkout__tab'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
  );
}