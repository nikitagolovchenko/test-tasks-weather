import { Box, TextField, Button, makeStyles, Theme } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { citiesSuccess } from '../store/actions/weatherActions';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    marginBottom: theme.spacing(3),
  },
  formGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  formBtn: {
    height: '100%',
    minHeight: '100%',
    marginLeft: theme.spacing(2),
  },
  formInput: {
    flexGrow: 1,
  },
}));

const Search: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [city, setCity] = useState<string>('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const sumbitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city) {
      dispatch(citiesSuccess(city.trim()));
      setCity('');
    }
  };

  return (
    <form className={classes.form} onSubmit={sumbitHandler}>
      <Box className={classes.formGroup}>
        <TextField
          label='Add city'
          variant='outlined'
          className={classes.formInput}
          value={city}
          onChange={changeHandler}
        />
        <Button
          className={classes.formBtn}
          type='submit'
          variant='contained'
          size='large'
          color='primary'
        >
          Search
        </Button>
      </Box>
    </form>
  );
};

export default Search;
