import {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import units from './UnitData'

interface SelectUnitsPropT {
    unit: string,
    setUnit: (unit: string) => void//React.Dispatch<React.SetStateAction<string>>
  }
 
export default function SelectUnits({unit, setUnit}: SelectUnitsPropT) {
const handleChange = (event: SelectChangeEvent) => {
    setUnit(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120}}>
      <FormControl fullWidth>
        <InputLabel id="units-label">From</InputLabel>
        <Select
          labelId="units-label"
          id="units"
          value={unit}
          label="Units"
          onChange={handleChange}
        >
          {units.map((unit) => <MenuItem key={unit.name} value={unit.name}>{unit.name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}