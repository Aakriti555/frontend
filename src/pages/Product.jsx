import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
// import {Add , Remove} from '@material-ui/icons'
import BottomFooter from '../components/BottomFooter'
import { mobile } from '../responsive'
import { FaStar } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom'
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};
const Container = styled.div`

`
const Wrapper = styled.div`
    padding :50px;
    display:flex;
    ${mobile({padding:"10px",flexDirection:"column"})}
`
const ImageContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    ${mobile({height:"40vh"})}
`
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({padding:"10px"})}
`
const Title = styled.h1`
    font-weight:300;
`
const Description = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight:100;
    font-size:40px;
`
const FilterContainer = styled.div`
    width:50%;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    ${mobile({width:"100%"})}
`

const Filter = styled.div`
    display:flex;
    align-items:center;
    
`

const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`

const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props => props.color};
    margin:0px 5px;
    cursor:pointer;
`

const FilterSize = styled.select`
    margin-left:10px;
    padding :10px;
`

const FilterSizeOption = styled.option`
`

const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({width:"100%"})}
`

// const AmountContainer = styled.div`
//     display:flex;
//     align-items:center;
//     font-weight:700;
// `

// const Amount = styled.span`
//     width:30px;
//     height:30px;
//     border-radius:10px;
//     border:1px solid teal;
//     display:flex;
//     align-items:center;
//     justify-content:center;
//     margin:0px 5px;
// `

const Button = styled.button`
    padding :10px;
    border:none;
    border-radius:10px;
    background-color:black;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    font-weight:400;
    &:hover{
        opacity:0.7;
    }
`
const Rating = styled.div`
    display:flex;
    margin-top:10px;
`
const Product = () => {
    const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src = "https://i.ibb.co/S6qMxwr/jean.jpg"/>
            </ImageContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Description>
                    It's all in the touch. Quality jeans are made from a stronger, heavier weight of denim. They should not only look luxurious but feel luxurious, too. So get your hands on the fabric when shopping. 
                </Description>
                <Price>Rs 1500</Price>
            
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color = "black"/>
                        <FilterColor color = "darkblue"/>
                        <FilterColor color = "gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                  <Link to="/Cart">  <Button>BUY</Button> </Link>
                    <Button>RENT</Button>
                </AddContainer>
                <Rating>
            <div style={styles.container}>

      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <textarea
        placeholder="What's your experience?"
        style={styles.textarea}
      />

      <button
        style={styles.button}
      >
        Submit
      </button>
      
    </div>
     </Rating>
            </InfoContainer>
        </Wrapper>
        
           
        <Newsletter/>
        <Footer/>
        <BottomFooter/>
        </Container>
  );
    }

  const styles = {
    container: {
        marginTop:10,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300
    },
    button: {
      backgroundColor:"Black",
      border:"none",
      cursor:"pointer",
      color:"white",
      width: 300,
      padding: 10,
      borderRadius:10,
      
    }
};


export default Product










