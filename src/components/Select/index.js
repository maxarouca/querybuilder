import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({ title, options, name, value, handleChange }) {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={title}>{title}</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
          inputProps={{
            name: name,
            id: title,
          }}
        >
          {options.map(o => (
            <MenuItem key={o} value={o}>{o}</MenuItem>
          ))}
        </Select>
      </FormControl>

    </form>
  );
}