import { useParams } from 'react-router-dom';
import classes from './GoodDetails.module.scss';
import { useEffect, useState } from 'react';
import {
  Button,
  FormControl,
  ImageList,
  ImageListItem,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { useGetGoodPerIdQuery } from '../../api/goodApi';
import { useGetSizesPerCodesQuery } from '@/entities/size/api/sizeApi';
import { findPerId } from '@/shared/lib/helpers/findPerId';
import { useDispatch, useSelector } from 'react-redux';
import { addGood } from '@/entities/cart/model/cartSlice';
import sha256 from 'crypto-js/sha256';

export const GoodDetails = () => {
  const { id } = useParams();
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { data: good } = useGetGoodPerIdQuery(id);

  const [colorState, setColorState] = useState({
    colors: [],
    selected: {},
  });

  const [selectedImage, setSelectedImage] = useState('');

  const [selectedSize, setSelectedSize] = useState(null);

  const { data: sizes } = useGetSizesPerCodesQuery(
    colorState.selected?.sizes || [],
    {
      skip: !good || !colorState.selected?.sizes,
    }
  );

  const changeColor = (event) => {
    setColorState((prevState) => {
      return {
        ...prevState,
        selected: findPerId(prevState.colors, event.target.value),
      };
    });
  };

  const changeSize = (event) => {
    setSelectedSize(findPerId(sizes, event.target.value));
  };

  const changeActiveImage = (image) => {
    setSelectedImage(image);
  };

  const addToCart = (img, name, color, size, price) => {
    const hash = sha256(
      JSON.stringify({ name, color, size, price })
    ).toString();

    const similiarGood = cart.find((good) => good.id === hash);

    if (!similiarGood) {
      const currentGood = {
        id: hash,
        name,
        color,
        size,
        price,
        img,
      };

      dispatch(addGood(currentGood));
    }
  };

  useEffect(() => {
    if (good && good.colors && good.colors.length > 0) {
      setColorState({
        colors: good.colors,
        selected: good.colors[0],
      });
    }
  }, [good]);

  useEffect(() => {
    if (sizes) {
      setSelectedSize(sizes[0]);
    }
  }, [sizes]);

  useEffect(() => {
    if (Object.entries(colorState.selected).length) {
      setSelectedImage(colorState.selected.images[0]);
    }
  }, [colorState.selected]);

  return good && Object.entries(colorState.selected).length ? (
    <Stack className={classes.goodContainer}>
      <Stack className={classes.galleryContainer}>
        {colorState.selected.images.map((image) => (
          <img
            onClick={() => changeActiveImage(image)}
            className={`${classes.defaultImage} ${
              selectedImage === image ? classes.activeImg : ''
            }`}
            key={image}
            src={image}
            width={50}
            height={70}
          />
        ))}
      </Stack>
      <Stack>
        <img
          src={selectedImage}
          alt={good.name + ' ' + colorState.selected.name}
          width={350}
          height={400}
        />
        <Stack className={classes.goodInfo}>
          <Typography>{good.name}</Typography>
          <Typography>{colorState.selected.description}</Typography>

          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="select-color-small-label">Colors</InputLabel>
            <Select
              labelId="select-color-small-label"
              id="select-color-small"
              label="Цвет"
              onChange={changeColor}
              value={colorState.selected.id || ''}
            >
              {colorState.colors.length > 0 &&
                colorState.colors.map((color) => (
                  <MenuItem key={color.id} value={color.id}>
                    {color.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="select-size-small-label">Sizes</InputLabel>
            <Select
              labelId="select-size-small-label"
              id="select-size-small"
              label="Размер"
              onChange={changeSize}
              value={selectedSize ? selectedSize.id : 'no-sizes'}
              disabled={!selectedSize}
            >
              {sizes && sizes.length > 0 ? (
                sizes.map((size) => (
                  <MenuItem key={size.id} value={size.id}>
                    {size.label} - {size.number}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value={'no-sizes'}>Нет размеров</MenuItem>
              )}
            </Select>
          </FormControl>
          <Button
            onClick={() =>
              addToCart(
                colorState.selected.images[0],
                good.name,
                colorState.selected.name,
                selectedSize.label,
                colorState.selected.price
              )
            }
          >
            Добавить
          </Button>
        </Stack>
      </Stack>
    </Stack>
  ) : (
    <div>Не захотел грузить</div>
  );
};
