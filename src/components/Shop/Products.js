import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
   {
      id: 'i1',
      title: 'The First Book ',
      description: 'The First Book I have ever wrote',
      price: 5,
   },
   {
      id: 'i2',
      title: 'The Second Book ',
      description: 'The Second Book I have ever wrote',
      price: 5,
   },
   {
      id: 'i3',
      title: 'The Third Book ',
      description: 'The Third Book I have ever wrote',
      price: 5,
   },
];

const Products = (props) => {
   return (
      <section className={classes.products}>
         <h2>Buy your favorite products</h2>
         <ul>
            {DUMMY_PRODUCTS.map((product) => (
               <ProductItem
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
               />
            ))}
         </ul>
      </section>
   );
};

export default Products;
