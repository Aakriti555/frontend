
import React , {useState} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';
import "./Sell.css";

const Container = styled.div`

`

const Wrapper = styled.div`
    padding:20px;
    ${mobile({padding:"10px"})}
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
         <Product>Sell your product on <Logo>attHire.</Logo> </Product>
        <section> 
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

            </Wrapper>
       
    </Container>
    
  )
}

export default Sell
