import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Products from './products.json'
import { loadAllProducts } from './store/reducer'

const Button = styled.button`
  color: antiquewhite;
  background-color: #c03;
  border: none;
  align-self: flex-end;
  padding: 0.5rem 2.5rem;
  width: 150px;
  white-space: nowrap;
  font-size: 16px;
  position: relative;
  bottom: 40px;

  @media only screen and (max-width: 600px) {
    align-self: center;
    width: 95%;
    bottom: 10px;
   
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  flex-direction: column;
  padding: 1rem 1rem 0 ;
  

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding-bottom: 15px;
  }
`

const Item = styled.div`
  display: flex;
  

  img {
    margin: 1rem;
    height: 125px;
    width: 125px;

    @media only screen and (max-width: 600px) {
      height: 75px;
      width: 75px;
    }
  }
`
const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  font-size: 18px;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }

  div {
    margin-top: 1rem;
  }

  span {
    width: 50px;
    position: relative;
    top: 25px;
    left: 300px;
    color: #c03;

    @media only screen and (max-width: 600px) {
      font-size: 16px;
      position: relative;
      top: -20px;
      left: 180px;
    }
    @media only screen and (max-width: 400px) {
      left: 140px;
    }
  }
`

function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadAllProducts)
  })

  const [addItem, handleItem] = useState({});

  function addItemToCart({partNumber, pricing}) {
    console.log({
      partNo: `#${partNumber}`,
      price: pricing.list 
    })
  }

  return (
    <Container>
      {Products.map(i => (
        <Wrapper key={i.partNumber}>
          <Item>
            <img src={i.image} alt={i.productDescription} />
            <ItemDetails>
              <b>{i.productDescription}</b>
              <div>
                PartNo: <b>#{i.partNumber}</b>
              </div>
              <span><b>{i.pricing.list}</b></span>
            </ItemDetails>
          </Item>

          <Button onClick={() => addItemToCart(i)}>Add to Cart</Button>
        </Wrapper>
      ))}
    </Container>
  )
}

export default App
