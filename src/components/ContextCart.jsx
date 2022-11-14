import React, { useContext } from 'react'
import styled from 'styled-components'
import Announcement from './Announcement'
import Footer from './Footer'
import Navbar from './Navbar'
import Newsletter from './Newsletter'
import BottomFooter from './BottomFooter'
import { mobile } from '../responsive'
import { CartContext } from '../pages/Cart'
import CartInfo from '../components/CartInfo'
const Container = styled.div`

`

const Wrapper = styled.div`
    padding:20px;
    ${mobile({padding:"10px"})}
`

const Title = styled.h1`
    font-weight:300;
    text-align:center;
`
const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;

`
const TopButton = styled.button`
    padding : 10px;
    font-weight:600;
    Cursor:pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props)=>
        props.type === "filled" ? "black" : "transparent"}; 
    color:${(props) => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    ${mobile({display:"none"})}
`

const TopText = styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 20px;
`

const Bottom = styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({flexDirection:"column"})}
`

const Summary = styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding:20px;
    height:50vh;
    //background-color:red;
`

const SummaryTitle = styled.h1`
    font-family: 'Barlow', sans-serif;
    font-weight:300;
`

const SummaryItem = styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`

`

const SummaryItemPrice = styled.span`

`

const Button = styled.button`
     width:100%;
     padding:10px;
     background-color:black;
     color:white;
     font-weight:600;
     border:none;
     cursor:pointer;
`

const ContextCart = () => {

    const {item,totalItem,totalAmount} = useContext(CartContext);
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>Bag</Title>
            <Top>
                <TopButton>CONTINUE</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag({totalItem})</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type = "filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>  
                {
                    item.map((curItem) => {
                        return <CartInfo key = {curItem.id} {...curItem}/>
                    })
                }
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>{totalAmount}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>{(5/100)* totalAmount}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>{-(2/100) * totalAmount}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type = "total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice >RS {totalAmount + (5/100)* totalAmount + (-(2/100) * totalAmount)}</SummaryItemPrice>
                    </SummaryItem >
                    <Button>CHECK OUT NOW</Button>
                </Summary>
            </Bottom> 
        </Wrapper>
        <Footer/>
        <Newsletter/>
        <BottomFooter/>
        </Container>
  )
}

export default ContextCart
