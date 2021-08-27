import styled from 'styled-components'

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

export default Button