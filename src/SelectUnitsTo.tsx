import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import units from "./UnitData";

interface SelectUnitsToPropT {
  unitTo: string;
  setUnitTo: (unitTo: string) => void; //React.Dispatch<React.SetStateAction<string>>
}

export default function SelectUnitsTo({
  unitTo,
  setUnitTo,
}: SelectUnitsToPropT) {
  const handleChange = (event: SelectChangeEvent) => {
    setUnitTo(event.target.value as string);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="units-to-label">To</InputLabel>
        <Select
          labelId="units-to-label"
          id="units-to"
          value={unitTo}
          label="To"
          onChange={handleChange}
        >
          {units.map((unit) => (
            <MenuItem value={unit.name}>{unit.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
