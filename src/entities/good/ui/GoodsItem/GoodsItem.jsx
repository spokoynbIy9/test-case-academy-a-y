import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import classes from './GoodsItem.module.scss';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '@/app/providers/Router/config/RouterConfig';

const GoodsItem = (props) => {
  const navigate = useNavigate();
  const { good } = props;

  const transferToDetails = (goodId) => {
    const path = RoutesPath.GoodPage.replace(':id', goodId);
    navigate(path);
  };

  return (
    <Card
      className={classes.container}
      onClick={() => transferToDetails(good.id)}
    >
      <CardMedia
        component="img"
        image={good.colors[0].images[0]}
        alt={good.name + ' ' + good.colors[0].name}
      />
      <CardContent>
        <Typography>{good.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default GoodsItem;
