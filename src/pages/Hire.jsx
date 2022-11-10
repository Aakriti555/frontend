
import { TextareaAutosize } from '@material-ui/core';
import React , {useState} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';
import "./Sell.css";
import BottomFooter from '../components/BottomFooter';

const Container = styled.div`

`

const Wrapper = styled.div`
    // width:40%;
    padding:20px;
    
    // background-color:white;
    // align-items:center;
    // justify-content:center;
    ${mobile({width:"75%"})}
   
    
`
const Product = styled.div`
   font-size: 30px;
   font-weight: 600;
   align-items: center;
   text-align: center;
`
const Logo = styled.h1`
    font-size: 50px;
    font-weight:bold;
    color: Maroon;
    ${mobile({fontSize:"20px"})}
`;
const Form = styled.form`
    display:flex;
    // background-color:DimGrey ;
    flex-direction:column;

`;
const Input = styled.input`
    font-size:15px;
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px
`;
const Button = styled.button`
    width:10%;
    border:none;
    margin:10px;
    padding:15px 20px;
    background-color:black;
    color:white;
    cursor:pointer;
`;
const Title =styled.div`
     text-align: left;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-width:10%;
    margin:10px 0px;
    padding:10px
`;
const Discription = styled.p`
    display:flex;
    height:300px;
    width:41%;
    
    position:relative;
`
const Select = styled.select`
    padding:10px;
    margin-right:17px;
    margin-top:20px;
    width:42%;
    display:flex;
    justify-content:center;
    align-content:center;
`
const Option = styled.option``
const Sell = () => {
    const [selectedImages , setSelectedImages] = useState([]);
    const onSelectFile = (event) => {
       
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file)=>
        {
            return URL.createObjectURL(file);
        });
        setSelectedImages(imagesArray);
    } 


  return (

    <Container>
        <Navbar/>
        <Wrapper>
         <Product>Rent your product on <Logo>attHire.</Logo> </Product>
         <Form>
                  
                <Title><Input placeholder = "Title"></Input><br/>
                <Input  placeholder = "Price"  ></Input><br/>
                
                <Select>
                    <Option disabled selected>
                        Category
                    </Option>
                    <Option>Male</Option>
                    <Option>Female</Option>
                    <Option>Kids</Option>
                </Select> 
                <Discription>
                    
                    {/* <Input style ={{height:"100%" ,width:"100%",textAlign:"start"}} placeholder = "Description"></Input><br/> */}
                    <TextareaAutosize style ={{height:"100%" ,width:"100%",marginTop:"30px"}} placeholder = "Description"></TextareaAutosize><br/>
                </Discription>
                

                {/* <Button>CREATE</Button> */}
                {/* </Title> */}
            {/* </Form> */}
        <section> 
            <br/><br/><br/>
            <label>
                + Add Images
            <br/>
            <span>Up to 10 images</span>
            <input type ='file' name='images' style ={{display:"none"}} onChange={onSelectFile} multiple accept='image/png , image/jpg , image/webp'></input>
            </label>
            <br/>
            { selectedImages.length > 0 &&
            (
                selectedImages.length>10 ? (
                    <p className='error'>You can't upload more than 10 images!<br/> 
                    <span>Please delete <b>{selectedImages.length-10}</b> of them  </span>
                    </p>
                ):(
                    <button className='upload-btn' onClick={()=>{ console.log("Upload Images")}}>UPLOAD {selectedImages.length === 1 ? " ":  "S" }</button>
                )
            )
                }
            <div className="images">
            {selectedImages && 
            selectedImages.map((image , index)=>
            {
                return (
                    <div key={image} className='image'>
                    <img src={image} height="200" alt="upload" />
                    <button onClick={()=> setSelectedImages(selectedImages.filter((e)=> e !==image))}>
                    Deleted image
                    </button>
                    <p>{index + 1}</p>
                    </div>
                )
            })
            }
            </div>
        </section>
        <Button>CREATE</Button>
        </Title>
        </Form>
            </Wrapper>
            <BottomFooter/>
    </Container>


  )
}

export default Sell
