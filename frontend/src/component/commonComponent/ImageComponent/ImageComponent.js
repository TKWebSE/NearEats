import { Fragment, useState } from "react";
import styled from "styled-components";
import foodSelectImage from "../../../images/food-select.jpg";

const FoodImageWrapper = styled.label`
position:relative;

&:hover{
    transition: all .3s;
    opacity: 0.5;
    color:black;
    transform: scale(1.05);
}
`;

const FoodImage = styled.img`
    width:100%;
    height:60%;
    margin-bottom:2%;
    &:hover{
        transition: all .3s;
        transform: scale(1.05);
    }
`;

export const ImageComponent = ({ dispatch, actionType }) => {
  const [preview, setPreview] = useState();

  function onChangeFhoto(e) {
    const files = e.target.files
    if (files.length > 0) {
      var file = files[0]
      dispatch({
        type: actionType,
        payload: {
          image: file
        }
      })
      setPreview(window.URL.createObjectURL(file))
    }
  }

  return (
    <Fragment>
      <FoodImageWrapper htmlFor={"upload-button"} >
        {
          preview ?
            <FoodImage src={
              preview
            }
              alt="dummy" >
            </FoodImage>
            :
            <FoodImage src={
              foodSelectImage
            }
              alt="dummy" >
            </FoodImage>
        }
      </FoodImageWrapper>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={onChangeFhoto}
      />
    </Fragment>
  )
}
