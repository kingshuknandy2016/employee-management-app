import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import theme from '../Theme';

export interface CardDisplayProps {
  // title: string;
  // imagePath: string;
  userId?: number;
  id?: number;
  title: string;
  body: string;
}
const CardDisplay = (props: CardDisplayProps) => {
  return (
    <Card sx={{ marginBottom: theme.spacing(5) }}>
      <CardActionArea>
        {/* <CardMedia
          sx={{
            height: '250px',
            [theme.breakpoints.down('sm')]: {
              height: 150,
            },
          }}
          image={props.imagePath}
          title="My Post"
        ></CardMedia> */}
        <CardContent>
          <Typography gutterBottom variant="h5">
            {props.title}
          </Typography>
          <Typography variant="body2">{props.body}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardDisplay;
