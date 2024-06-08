import React, { Fragment, useEffect, useReducer, useContext, useState } from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import Skeleton from "@material-ui/lab/Skeleton";
import { ThemeProvider } from '@material-ui/core/styles';
import { SaveButton } from "../component/MaterialUISaveButton";
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";
import foodSelectImage from "../images/food-select.jpg";
import { ButtonTheme } from "../style_constants";
import { FOOD_EDIT_TEXT, REQUEST_STATE } from "../constants";
import { fetchFoodApi, updateFoodApi, updateNoImageFoodApi } from '../apis/foodApis';
import { initializeState, foodEditActionTypes, foodEditReducer } from "../reducer/foodEditReducer";
import { FoodEditCard } from "../component/foodComponent/FoodEditCard";
import { FoodDispatch, FoodState, MessageDispatch, MessageState } from '../context/Context';
import { useHistory } from "react-router-dom";
import { SessionState, SessionDispatch } from "../context/Context";
import { TextFieldInReducer } from "../component/TextFieldInReducer";
import { MultiLineTextFieldInReducer } from "../component/MultiLineTextFieldInReducer";
import MUIAnimatedMultiSelect from "../component/MUIAnimatedMultiSelect";
import { foodsIndexURL, foodShowURL } from "../urls/index";
import { messageActionTypes } from "../reducer/messageReducer";
import { validateFoodName, validatePrice, validateDescription } from "../AppFunction";
import { handleCreatePost } from "../AppImageFunction";
import { changeImageURL } from "../AppImageFunction";


const Wrapper = styled.div`
  margin-left:20%;
  margin-right:20%;
  margin-bottom:5%;
`;

const FoodEditHeader = styled.h1`
  margin-top:5%;
`;

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

const FoodName = styled.h1`
    text-align:left;
    padding-right:1%;
`;

const FoodPrice = styled.h2`
   text-align:left;
   padding-right:1%;
   `;

const FoodDesicription = styled.div`
    text-align:left;
    padding-right:1%;
`;

const FoodCity = styled.div``;

const SelectWrapper = styled.div`
    margin-top:3%;
    margin-bottom:3%;
    margin-left:1%;
`;

const BtnWrapper = styled.div`
  // margin-left: 100%;
  display: flex;
  justify-content: flex-end;
  `;

const SaveWrapper = styled.div`
  margin:1% 1% 1% -1%;
//   ${media.lessThan("huge")`
//   margin:-1% 1% 1% -1%;
// `}
//   ${media.lessThan("medium")`
//   margin:2.5% 1% 1% -1%;
// `}
`;

const CancelWrapper = styled.div`
`;

const SkeltonImage = styled.div`
  margin-bottom:2%;
`;

const SkeltonTitle = styled.div`
  margin-bottom:2%;
`;

const SkeltonDescription = styled.div``;


export const FoodEdit = ({ match }) => {
  const SessionAuthState = useContext(SessionState);
  const SessionAuthDispatch = useContext(SessionDispatch);
  const messageState = useContext(MessageState);
  const messageDispatch = useContext(MessageDispatch);
  const [state, dispatch] = useReducer(foodEditReducer, initializeState);
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const [city, setCity] = useState();
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: foodEditActionTypes.FETCHING });
    fetchFoodApi(match.params.foodId)
      .then((data) => {
        console.log(data)
        console.log(data.food.count)
        if (data.food.count === 0) {
          history.push(foodShowURL(data.food.id));
        }
        if (data.food.user_id === SessionAuthState.currentUser.id) {
          setCity(data.food.city);
          dispatch({
            type: foodEditActionTypes.FETCH_SUCCESS,
            payload: {
              food: data.food
            }
          })
        } else {
          history.push(foodsIndexURL);
        }
      })
      .catch(e => console.log(e))
  }, []);

  const onChangeFhoto = (e) => {
    const files = e.target.files
    if (files.length > 0) {
      var file = files[0]
      setImage(file)
      setPreview(window.URL.createObjectURL(file))
    } else {
      dispatch({
        type: foodEditActionTypes.SETTINGFOODIMAGE,
        payload: {
          image: null
        }
      })
    }
  }

  const createFormData = (e) => {
    const formData = new FormData();
    try {
      if (state.food.image === null || state.food.image === undefined) {
        throw e;
      }
      formData.append('food[image]', image);
      formData.append('food[name]', state.food.name);
      formData.append('food[price]', state.food.price);
      formData.append('food[description]', state.food.description);
      formData.append('food[city]', city);
      return formData
    } catch (e) {
      messageDispatch({
        type: messageActionTypes.SET_ERROR_MESSAGE,
        payload: {
          errorMessage: FOOD_EDIT_TEXT.NO_IMAGE_MESSAGE
        },
      })
    }
  }

  function onKeyDownEnter(event) {
    submitHandle()
  }

  function handleCancel() {
    history.push(foodShowURL(state.food.id))
  }

  const submitHandle = async () => {
    try {
      validateFoodName(state.food.name);
      validatePrice(state.food.price);
      validateDescription(state.food.description);
      if (preview) {
        const formData = await createFormData();

        updateFoodApi(state.food, formData, city)
          .then((data) => {
            history.push(foodShowURL(data.food.id))
          })
          .catch(e => {
            messageDispatch({
              type: messageActionTypes.SET_ERROR_MESSAGE,
              payload: {
                errorMessage: FOOD_EDIT_TEXT.CANT_CHANGE_UPLOAD
              }
            })
          });
      } else {
        updateNoImageFoodApi(state.food, city)
          .then((data) => {
            history.push(foodShowURL(data.food.id))
          })
          .catch(e => {
            messageDispatch({
              type: messageActionTypes.SET_ERROR_MESSAGE,
              payload: {
                errorMessage: FOOD_EDIT_TEXT.CANT_CHANGE_UPLOAD
              }
            })
          });
      }
    } catch (e) {
      messageDispatch({
        type: messageActionTypes.SET_ERROR_MESSAGE,
        payload: {
          errorMessage: e
        }
      })
    };
  }


  console.log(state)
  // console.log(state.food.image.url)
  console.log(preview)
  console.log(foodSelectImage)
  console.log(city)
  return (
    <Fragment>
      <Wrapper>
        <FoodEditHeader>
          {FOOD_EDIT_TEXT.HEADER_TITLE}
        </FoodEditHeader>
        {
          REQUEST_STATE.OK === state.fetchstate ?
            <Fragment>
              <FoodImageWrapper htmlFor={"upload-button"} >
                {
                  preview ?
                    <FoodImage src={preview} alt="dummy" />
                    :
                    <FoodImage
                      src={state.food.image.url === null ? foodSelectImage : changeImageURL(state.food.image.url)} alt="foodImage">
                    </FoodImage>
                }
              </FoodImageWrapper>
              <input
                type="file"
                id="upload-button"
                style={{ display: "none" }}
                onChange={onChangeFhoto}
              />
              <FoodName>
                <TextFieldInReducer
                  label={FOOD_EDIT_TEXT.FOOD_NAME_LABEL}
                  value={state.food.name}
                  dispatch={dispatch}
                  actionType={foodEditActionTypes.SETTINGFOODNAME}
                  onKeyDown={onKeyDownEnter}
                />
              </FoodName>
              <FoodPrice>
                <TextFieldInReducer
                  label={FOOD_EDIT_TEXT.FOOD_PRICE_LABEL}
                  value={state.food.price}
                  dispatch={dispatch}
                  actionType={foodEditActionTypes.SETTINGFOODPRICE}
                  onKeyDown={onKeyDownEnter}
                />
              </FoodPrice>
              <FoodDesicription>
                <MultiLineTextFieldInReducer
                  label={FOOD_EDIT_TEXT.FOOD_DESCRIPTION_LABEL}
                  value={state.food.description}
                  dispatch={dispatch}
                  actionType={foodEditActionTypes.SETTINGFOODDESCRIPTION}
                  onKeyDown={onKeyDownEnter}
                />
              </FoodDesicription>
              <SelectWrapper>
                <MUIAnimatedMultiSelect
                  placeholederText={FOOD_EDIT_TEXT.LOCATION_PLACEHOLDER_TEXT}
                  setCity={setCity}
                  city={city}
                  onKeyDown={onKeyDownEnter}
                />
              </SelectWrapper>
              <BtnWrapper>
                <SaveWrapper>
                  <SaveButton
                    onClick={submitHandle}
                    btnLabel={FOOD_EDIT_TEXT.SAVE_BTN_LABEL}
                  />
                </SaveWrapper>
                <CancelWrapper>
                  <MaterialUICommonButton
                    onClick={handleCancel}
                    btnLabel={FOOD_EDIT_TEXT.CANCEL_BTN_LABEL}
                  />
                </CancelWrapper>
              </BtnWrapper>
            </Fragment>
            :
            <Fragment>
              <SkeltonImage>
                <Skeleton variant="rect" width={450} height={300} />
              </SkeltonImage>
              <SkeltonTitle>
                <Skeleton variant="rect" width={450} height={30} />
              </SkeltonTitle>
              <SkeltonDescription>
                <Skeleton variant="rect" width={450} height={30} />
              </SkeltonDescription>
            </Fragment>
        }
      </Wrapper >
    </Fragment >
  )
}
