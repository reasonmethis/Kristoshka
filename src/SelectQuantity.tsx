import { Box, Slider, Stack, TextField } from "@mui/material";
import { ChangeEvent } from "react";
//import Select, { SelectChangeEvent } from '@mui/material/Select';
//import ChangeEvent
interface SelectQuantityPropT {
  amt: number;
  amtStr: string;
  setAmt: (amt: number) => void;
  setAmtStr: (amtStr: string) => void;
}

const MAX_AMT = 12;
const MAX_LENGTH = 5;

export default function SelectQuantity(props: SelectQuantityPropT) {
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    //console.log("slider chng", newValue)
    if (typeof newValue !== "number") return;
    newValue = Math.round((newValue * MAX_AMT * 4) / 100) / 4;
    props.setAmt(newValue);
    props.setAmtStr(newValue.toString());
  };

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    //Have to do some awkward validation - would be much easier with input type text,
    //but I want the type to be numeric so browsers default to numeric kbrd
    let val: string = event.target.value;
    const isInvalid = val === "" && !event.target.checkValidity(); //checkvalidity is
    //false for "0.1" with default step, see below
    //validity attr contains more detailed info

    //console.log(val, isInvalid)// {...event.target.validity})

    //one problem with numeric input type is that this function won't even run if the
    //field is empty and user enters "+-673" or '--1234'
    //another issue: when I enter "5.1" the function doesn't run on the dot. Then, if
    //input another digit, the function runs but "5.5" is considered invalid
    //to make it valid I would need to set step=0.1 on the inpu, but then 5.11
    //would still be invalid (and I don't want the up and down arrows to use a tiny step)

    //if new value in the textbox doesn't conform to what we want, reset it to the current amt
    if (val.length > MAX_LENGTH || val.includes("-") || isInvalid) {
      console.log(val, props.amtStr);
      event.target.value = props.amtStr; //.toString() //TODO - store previous string val and use it
      //otherwise 0.0008 becomes 0 since previous val="0.000" corresponds to amt 0
    } else {
      const num = Number(val);
      console.log("val", val, "num", num);
      if (val[0] === ".") {
        val = "0" + val; //otherwise if user deletes 3 from ".3"
        //input will become invalid and the above procedure will restore prev value "0.3"
        event.target.value = val;
      }
      // replace "04" with "4" ("0" can't just be erased because of value prop on textfield)
      if (val[0] === "0" && val[1] && val[1] !==".") {
        val = val.slice(1)
        event.target.value = val
      }
      props.setAmt(num);
      props.setAmtStr(val);
    }
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Box component="form" noValidate autoComplete="off" flex={1.4}>
        <TextField
          id="select-quantity"
          label="Amt"
          type="number"
          defaultValue={1}
          value={props.amt} //this causes "0" to not be eraseable
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            inputMode: "numeric",
            min: 0,
            max: 99999,
            step: 0.25,
            //placeholder: "Select quantity",
            //pattern: '/?\d+(\.\d+)/g'
          }}
          onChange={handleChange}
        />
      </Box>
      <Box flex={4}>
        <Slider
          value={
            (props.amt * 100) /
            MAX_AMT /*typeof value === "number" ? value : 0*/
          }
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
        />
      </Box>
    </Stack>
  );
}
