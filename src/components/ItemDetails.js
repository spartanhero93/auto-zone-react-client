import styled from 'styled-components'

export default function ItemDetails ({item}) {
  return (
    <ItemDetailsStyled>
      <b>{item.productDescription}</b>
      <div>
        PartNo: <b>#{item.partNumber}</b>
      </div>
      <span>
        <b>{item.pricing.list}</b>
      </span>
    </ItemDetailsStyled>
  )
}

const ItemDetailsStyled = styled.div`
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


