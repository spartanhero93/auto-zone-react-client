import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Products from './products.json'
import { addProduct, loadAllProducts } from './store/reducer'
import Button from './components/Button'
import ItemDetails from './components/ItemDetails'


function App () {
  const dispatch = useDispatch()

  /**
   * @description: on mount dispatch an action that takes in all the products
   */
  useEffect(() => {
    dispatch(loadAllProducts)
  })

  return (
    <Container>
      {Products.map(i => (
        <Wrapper key={i.partNumber}>
          <Item>
            <img src={i.image} alt={i.productDescription} />
            <ItemDetails item={i} />
          </Item>

          <Button onClick={() => dispatch(addProduct(i))}>Add to Cart</Button>
        </Wrapper>
      ))}
    </Container>
  )
}

/**
 * @description: These are the styles for the main container and items wrapper
 */

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

export default App
