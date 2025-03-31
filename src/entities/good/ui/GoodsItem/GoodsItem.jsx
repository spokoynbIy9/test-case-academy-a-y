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
import { useCallback } from 'react';

const GoodsItem = (props) => {
  const navigate = useNavigate();
  const { good } = props;

  const imageUrl = good.colors[0].images[0];
  const colorName = good.colors[0].name;

  const transferToDetails = useCallback(
    (goodId) => {
      const path = RoutesPath.GoodPage.replace(':id', goodId);
      navigate(path);
    },
    [navigate]
  );

  return (
    <Card
      className={classes.itemContainer}
      onClick={() => transferToDetails(good.id)}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt={good.name + ' ' + colorName}
      />
      <CardContent>
        <Typography variant="body1" component="h3" gutterBottom>
          {good.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GoodsItem;
