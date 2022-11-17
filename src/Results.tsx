import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type ResType = {res: string[]}
export default function Results({res}: ResType) {
  return (//margin doesn't work 
    <Box sx={{ marginTop: 10 }}>
      <Typography align="center" variant="h6" gutterBottom >
        {res[0]}
      </Typography>
      <Typography align="center" variant="body1" gutterBottom >
        {res[1]}
      </Typography>
      <Typography align="center" variant="body1" gutterBottom >
        {res[2]}
      </Typography>
    </Box>
  );
}