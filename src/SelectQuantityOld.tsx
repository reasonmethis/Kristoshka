import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ChangeEvent } from "react";
//import Select, { SelectChangeEvent } from '@mui/material/Select';
//import ChangeEvent
interface SelectQuantityPropT {
  amt: number;
  amtStr: string;
  setAmt: (amt: number) => void;
  setAmtStr: (amtStr: string) => void;
}

export default function SelectQuantity(props: SelectQuantityPropT) {
  //ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  //ChangeEvent<HTMLInputElement>
  //React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  const MAX_LENGTH = 5;
  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    //Have to do some awkward validation - would be much easier with input type text,
    //but I want the type to be numeric so browsers default to numeric kbrd
    const val: string = event.target.value;
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
      event.target.value = props.amtStr; //.toString() //TODO - store previous string val and use it
      //otherwise 0.0008 becomes 0 since previous val="0.000" corresponds to amt 0
    } else {
      const num = Number(val);
      console.log("val", val, "num", num);
      props.setAmt(num);
      props.setAmtStr(val);
      if (val[0] === ".") {
        event.target.value = "0" + val; //otherwise if user deletes 3 from ".3"
        //input will become invalid and the above procedure will restore prev value "0.3"
      }
    }
  };

  return (
    <>
      <Box
        component="form"
        //sx={{
        //  "& > :not(style)": { m: 1, width: "25ch" },
        //}}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="select-quantity"
          label="Amt"
          type="number"
          defaultValue={1}
          sx={{ width: "25%" }}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            inputMode: "numeric",
            //placeholder: "Select quantity",
            //pattern: '/?\d+(\.\d+)/g'
          }}
          onChange={handleChange}
        />
      </Box>
    </>
  );
}
