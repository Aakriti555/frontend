import React  from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import {Link} from 'react-router-dom';


const Container = styled.div`
    width:100vw;
    height:100vh;
    background-color:#f1f1f1;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Wrapper = styled.div`
    width:30%;
    padding:20px;
    background-color:white;
    ${mobile({width:"75%"})}
`
const Title = styled.h1`
    font-size:24px;
    font-weight:300;
    font-weight:bold;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Form = styled.form`
    display:flex;
    flex-direction:column;
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0px;
    padding:10px
`

const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:black;
    color:white;
    cursor:pointer;
    margin-bottom:10px;
`
const Logo = styled.h1`
    font-weight:bold;
    display:flex;
    
    justify-content:center;
    align-items:center;
    ${mobile({fontSize:"20px"})}
`;


// const Link = styled.a`
//     margin:5px 0px;
//     font-size:12;
//     color:gray;
// `
const Login = () => {
  return (
    
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <br/> 
            <Link to ='/' style ={{textDecoration:'none' ,color:'Maroon',cursor:'pointer'}}>
                <Logo>
                                    attHire.
                </Logo>
                </Link>
<br/>
            <Form>
              <h4>Email</h4>
                <Input placeholder = "Username or Email"></Input>
                <br/>
                <h4>Password</h4>
                <Input placeholder = "Password"></Input>
               <p> <Button>LOG IN</Button>
                <Link to="/forgotPassword">
                <h4 style={{ marginBottom: "5%", fontWeight: "bold",color:'black',cursor:'pointer' }}>
                  Forgot password?
                </h4>
                
              </Link>
              </p>
                {/* <Link style = {{cursor:'pointer'}}>Forgotten your Password?</Link> */}
              <p> Not a Member? <Link to ='/Register' style = {{color:'black',cursor:'pointer'}}>Join Us.
     </Link> </p>
     
            </Form>
            
        </Wrapper>
    </Container>
   
  )
}

export default Login
