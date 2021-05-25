import { createMuiTheme } from '@material-ui/core/styles';

export const COLORS = {
    MAIN_COLOR: '#00695f',
    BORDER: '#e2e2e2',
    SUB_TEXT: '#545454',
    SUB_BUTTON: '#eeeeee',
  }
  
  export const FONT_SIZE = {
    STAND_BODY: '24px',
    BODY1: '16px',
    BODY2: '14px',
  }

//ヘッダーの色を定義
export const headerTheme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.MAIN_COLOR
    },
  },
});
  
//buttonの色を設定
export const ButtonTheme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.MAIN_COLOR
    },
  },
});