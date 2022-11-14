
import styled from 'styled-components';
import { mobile } from '../responsive';
import {Add , Remove, Delete} from '@material-ui/icons';
import { useContext } from 'react';
import { CartContext } from '../pages/Cart';
const Info = styled.div`
    flex:3;
`

const Product = styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({flexDirection:"column"})}
`
const ProductDetail = styled.div`
    flex:2;
    display:flex;
`
const Image = styled.img`
    width:200px;
`
const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`
const ProductName = styled.span`
`
const ProductId = styled.span`
`
const ProductColor = styled.div`
    width : 20px;
    height : 20px;
    border-radius:50%;
    background-color : ${props=>props.color}
`
const ProductSize = styled.span`
`
const PriceDetail = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`

const ProductAmount = styled.div`
    font-size:24px;
    margin:5px;
    ${mobile({margin:"5px 15px"})}
`

const ProductPrice = styled.div`
    font-size:30px;
    font-weight:200;
    ${mobile({marginBottom:"20px"})}
`

const Hr = styled.hr`
    background-color:#eee;
    border:none;
    height:1px;
`
const RemoveItem = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const CartInfo = ({id,title,img,price,quantity,description}) => {
    //const [item,setItem] = useState(CartProduct)
    const {removeItem,increment,decrement} = useContext(CartContext)
  return (
    <Info>
                <Product>
                    <ProductDetail>
                        <Image src ={img}></Image>
                        <Details>
                            <ProductName><b>Product:</b>{title}</ProductName>
                            <ProductId><b>ID:</b> {id}</ProductId>
                            <ProductColor color="lightgray"/>
                            <ProductSize><b>Size:</b> 37</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add style={{fontSize:30,cursor:"pointer"}} onClick = {()=> increment(id)}/>
                            <ProductAmount>{quantity}</ProductAmount>
                            <Remove style={{fontSize:30,cursor:"pointer"}} onClick = {() => {decrement(id)}}/>
                        </ProductAmountContainer>
                        <ProductPrice>Rs {price}</ProductPrice>
                    </PriceDetail>
                    <RemoveItem>
                            <Delete style= {{fontSize:30,color:"red",cursor:"pointer"}} onClick = {() => removeItem(id)}/>    
                    </RemoveItem>
                </Product>
                <Hr/>
    </Info>
  )
}

export default CartInfo
