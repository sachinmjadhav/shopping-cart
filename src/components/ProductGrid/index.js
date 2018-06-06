import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ProductWrapper = styled.div`
  flex-basis: 24%;
  margin-bottom: 20px;
`;

const ProductImage = styled.img`
  width: 100%;
`;

const ProductName = styled.div`
  margin: 10px 0;
`;

const ProductGrid = ({ products, addToCart }) => (
  <Wrapper>
    {products.map(product => (
      <ProductWrapper key={product._id}>
        <ProductImage src={product.picture} />
        <ProductName>{product.name}</ProductName>
        <button onClick={() => addToCart(product)}>Add To Cart</button>
      </ProductWrapper>
    ))}
  </Wrapper>
);

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired
};

export default ProductGrid;
