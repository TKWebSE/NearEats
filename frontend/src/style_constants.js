import { createMuiTheme } from '@material-ui/core/styles';

export const COLORS = {
    MAIN_COLOR: '#00695f',
    BORDER: '#e2e2e2',
    SUB_TEXT: '#545454',
    DELETE_WARN_BUTTON_COLOR:"#e91e63",
    SUB_BUTTON: '#eeeeee',
    STATUS_COLOR:`#8B008B`,
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
  
//デフォルトbuttonの色を設定
export const ButtonTheme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.MAIN_COLOR
    },
  },
  secondary: {
    main: COLORS.DELETE_WARN_BUTTON_COLOR
  },
});

//削除ボタンの色を設定
export const RedButtonTheme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.DELETE_WARN_BUTTON_COLOR
    },
  },
});