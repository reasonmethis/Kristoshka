import { Box, Paper, Stack, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import "./App.css";
import Results from "./Results";
import SelectFood from "./SelectFood";
import SelectQuantity from "./SelectQuantity";
import SelectUnits from "./SelectUnits";
import SelectUnitsTo from "./SelectUnitsTo";

import foods from "./FoodData";
import units from "./UnitData";

const CUP_TO_TSPS = 48;

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const formatNum = (num: number): string => {
  if (Math.round(num / 1000000000) >= 1000) {
    return "MANY";
  }
  if (Math.round(num / 1000000) >= 1000) {
    return formatNum(num / 1000000000) + "B";
  }
  if (Math.round(num / 1000) >= 1000) {
    return formatNum(num / 1000000) + "M";
  }
  if (Math.round(num) > 9999) {
    return formatNum(num / 1000) + "k";
  }
  if (Math.round(num * 10) >= 1000) { //99.95 -> "100"
    return Math.round(num).toString();
  }
  if (Math.round(num * 100) >= 1000) { //99.94 -> "99.9"
    return (Math.round(num * 10) / 10).toString();
  }
  if (Math.round(num * 1000) >= 1000) {
    return (Math.round(num * 100) / 100).toString();
  }
  return (Math.round(num * 1000) / 1000).toString();
  /*num.toLocaleString("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: decimals,*/
};

function App() {
  const [food, setFood] = useState("Water");
  const [unit, setUnit] = useState(units[0].name);
  const [unitTo, setUnitTo] = useState("grams");
  const [amt, setAmt] = useState(1);
  const [amtStr, setAmtStr] = useState("1");
  const convert = () => {
    const foodObj = foods.find((f) => f.name === food);
    const unitObj = units.find((u) => u.name === unit);
    const unitToObj = units.find((u) => u.name === unitTo);
    if (!foodObj || !unitObj || !unitToObj) return ["<NA>", "<NA>"];

    //convert to base units (3000mg -> 3g, for mg nBaseUnits is 0.001)
    const amtInBaseUnits = amt * unitObj.nBaseUnits;
    const tsp2grams = foodObj.cup2grams / CUP_TO_TSPS;
    let amtInGrams: number;
    let amtInTsps: number;
    if (unitObj.baseUnit === "teaspoons") {
      amtInGrams = amtInBaseUnits * tsp2grams;
      amtInTsps = amtInBaseUnits;
    } else if (unitObj.baseUnit === "grams") {
      amtInGrams = amtInBaseUnits;
      amtInTsps = amtInBaseUnits / tsp2grams;
    } else {
      return ["<NA>", "<NA>"];
    }
    //calculate calories
    const grams2calories = foodObj.cup2calories / foodObj.cup2grams;
    const nCaloriesStr = formatNum(amtInGrams * grams2calories)

    //calculate amt in final units
    let amtInBaseUnitsTo: number;
    if (unitToObj.baseUnit === "teaspoons") {
      amtInBaseUnitsTo = amtInTsps;
    } else if (unitToObj.baseUnit === "grams") {
      amtInBaseUnitsTo = amtInGrams;
    } else {
      return ["<NA>", nCaloriesStr];
    }
    //convert from base units (3g -> 0.003kg)
    return [
      formatNum(amtInBaseUnitsTo / unitToObj.nBaseUnits),
      nCaloriesStr,
    ];
  };

  const [amtInUnitsToStr, nCaloriesStr] = convert();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Box
        id="outerbox"
        sx={{
          //m: 0
          //flexWrap: 'wrap',
          //"& > :not(style)": {
          //m: 10,
          maxWidth: 400,
          width: "98vw",
          //},
        }}
      >
        <Paper elevation={6}>
          <Stack spacing={2} sx={{ padding: "20px" }}>
            <Typography variant="h4" align="center" gutterBottom>
              KRISTOSHKA
            </Typography>
            <SelectFood food={food} setFood={setFood} />
            <SelectUnits unit={unit} setUnit={setUnit} />
            <SelectUnitsTo unitTo={unitTo} setUnitTo={setUnitTo} />
            <SelectQuantity
              amt={amt}
              setAmt={setAmt}
              amtStr={amtStr}
              setAmtStr={setAmtStr}
            />
            <Results
              res={[
                `${amt} ${unit}`,
                `${amtInUnitsToStr} ${unitTo}`,
                `${nCaloriesStr} Cal`,
              ]}
            />
          </Stack>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;
