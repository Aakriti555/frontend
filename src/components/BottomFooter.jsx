import React from 'react'
import styled from 'styled-components'
import {LocationOn} from '@material-ui/icons'
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
const Container = styled.div`
    height:10vh;
    background-color:black;
    weight:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    position:relative;
    ${mobile({flexDirection:"column",height:"15vh"})}
    
`
const Location = styled.div`
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:50px;
`
const CopyRight = styled.p`
    color:white;
    flex:1;
    align-items:center;
    justify-content:center;
`
const Right = styled.div`
    display:flex;
    
`
const List = styled.ul`
    list-style:none;
    display:flex;
`
const ListItem = styled.li`
    margin-right:20px;
    font-size:17px;
    font-weight:500;
    color:gray;
`

const BottomFooter = () => {
  return (
    <Container>
        <Location><LocationOn/> Nepal</Location>
        <CopyRight>© 2022 attHire, Inc.All Rights Reserved</CopyRight>
        <Right>
            <List>
                <ListItem>Guides</ListItem>
                <ListItem>Terms of Sales</ListItem>
                <Link to={'/Terms'}style = {{color:'black',cursor:'pointer'}}><ListItem>Terms of Use</ListItem></Link>
                <Link to={'/Privacy'}style = {{color:'black',cursor:'pointer'}}> <ListItem>Privacy Policy</ListItem> </Link>
            </List>
        </Right>
    </Container>
  )
}

export default BottomFooter