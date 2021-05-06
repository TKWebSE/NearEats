import React,{Fragment,useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      
    },
  },
}));

//foodの名前を設定するためのテキストフィールドコンポーネント
export default function MaterialUISetFoodNameLine(food) {
  const classes = useStyles();
  const [value,setValue] = useState(food.name)

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(()=> {
    setValue(food.name);
  },[food])

  return (
    <wrapper>
        {
        value === undefined || value === null?
        <Fragment>
            LOADING
        </Fragment>
        :
        <Fragment>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField 
            id="outlined-basic" 
            label="商品名" 
            variant="outlined" 
            fullWidth
            value={value}
            onChange={handleChange}
        />
        </form>
        </Fragment>
        }
    </wrapper>
  );
}