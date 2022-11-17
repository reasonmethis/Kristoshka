import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import foods from "./FoodData";

interface selectFoodPropT {
  food: string;
  setFood: (food: string) => void; //React.Dispatch<React.SetStateAction<string>>
}

export default function SelectFood({ food, setFood }: selectFoodPropT) {
  const handleChange = (event: SelectChangeEvent) => {
    setFood(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ingredient</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={food}
          label="Ingredient"
          onChange={handleChange}
        >
          {foods.map((food) => (
            <MenuItem key={food.name} value={food.name}>{food.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
