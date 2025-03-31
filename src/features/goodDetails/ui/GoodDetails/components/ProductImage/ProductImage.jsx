import classes from './ProductImage.module.scss';

export const ProductImage = ({ selectedImage }) => {
  return (
    <div className={classes.productImageContainer}>
      <img src={selectedImage} className={classes.productImage} />
    </div>
  );
};
