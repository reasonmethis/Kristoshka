import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type ResType = {res: string[]}
export default function Results({res}: ResType) {
  return (//margin doesn't work 
    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}sx={{ marginTop: 10 }}>
      <Card sx={{ minWidth: "15rem", borderRadius: "8px"}}>
      <CardContent>
        <Typography sx={{}} variant="body2" color="text.secondary" gutterBottom>
          {res[0]}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {res[1]}
        </Typography>
        <Typography sx={{ }} variant="body2" color="text.secondary">
          {res[2]}
        </Typography>
      </CardContent>
      {/*<CardActions>
        <Button size="small">Learn More</Button>
        </CardActions>*/}
    </Card>
    {/*
      <Typography align="center" variant="h6" gutterBottom >
        {res[0]}
      </Typography>
      <Typography align="center" variant="body1" gutterBottom >
        {res[1]}
      </Typography>
      <Typography align="center" variant="body1" gutterBottom >
        {res[2]}
      </Typography>*/}
    </Stack>
  );
}