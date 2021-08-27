import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Products from './products.json'
import { loadAllProducts } from './store/reducer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Wrapper = styled.div`
  display: flex;
  button: {
    padding: 4rem;
  }
`

const ProductImage = styled.img`
  margin: 1rem; 
  height: 125px;
  width: 125px;
`

const ItemDetails = styled.div`
padding: .rem 0;
font-size: 18px;
font-weight: 600;
`

const Button = styled.button`
  color: antiquewhite;
  background-color: #c03;
  padding: 0.3rem 1.5rem;
  border: none;
`

function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadAllProducts)
  })

  //const [addItem, handleItem] = useState({});

  return (
    <Container>
      {Products.map(i => (
        <Wrapper key={i.partNumber}>
          <ProductImage src={i.image} alt={i.productDescription}/>
          <ItemDetails>
            {i.productDescription}
            <div>
              PartNo: <b>{i.partNumber}</b>
            </div>
            <span>{i.pricing.list}</span>
          </ItemDetails>
          <div>
            <Button>Add to Cart</Button>
          </div>
        </Wrapper>
      ))}
    </Container>
  )
}

export default App
