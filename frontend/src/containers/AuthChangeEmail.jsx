import { Fragment, useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme } from "../style_constants";
import { AUTH_CHANGE_EMAIL } from "../constants";
import { MaterialUITextField } from "../component/MaterialUITextField";
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";


const Wrapper = styled.div`
  margin-left:20%;
  margin-right:20%;
`;

const TitleWrapper = styled.h1`
`;

const TextWrapper = styled.h2`
`;

const ButtonWrapper = styled.div`
  text-align:right;
`;

export const AuthChangeEmail = () => {
  const [value, setValue] = useState(0);

  function handleSubmit() {

  }

  return (
    <Fragment>
      <Wrapper>
        <TitleWrapper>
          {AUTH_CHANGE_EMAIL.HEADER_TITLE}
        </TitleWrapper>
        <MaterialUITextField
          label={AUTH_CHANGE_EMAIL.TEXT_FIELD_LABEL}
          value={value}
          setValue={() => setValue}
        />
        <ButtonWrapper>
          <ThemeProvider theme={ButtonTheme}>
            <MaterialUICommonButton
              onClick={() => handleSubmit()}
              btnLabel={AUTH_CHANGE_EMAIL.SUBMIT_BUTTON_LABEL}
            />
          </ThemeProvider>
        </ButtonWrapper>
      </Wrapper>
    </Fragment>
  )
}
