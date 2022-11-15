import {ChangeEvent} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//import Select, { SelectChangeEvent } from '@mui/material/Select';
//import ChangeEvent
interface SelectQuantityPropT {
  amt: number,
  setAmt: (amt: number) => void
}

export default function SelectQuantit(props: SelectQuantityPropT) {
  //ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  //ChangeEvent<HTMLInputElement>
  //React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    props.setAmt(Number(event.target.value as string))
  };

  return (
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
        label="Quantity"
        type="number"
        fullWidth
        InputLabelProps={{
          shrink: true       
        }}
        InputProps={{
          //min: 0,
          //step: 0.1,
          placeholder: "Select quantity"
        }}
        onChange={handleChange}
      />
    </Box>
  );
}
