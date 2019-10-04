import React, { useState, useEffect } from 'react';
import { conditions, options } from './options'
import Select from '../Select'
import useStyles from './styles'

const Condition = ({ saveConditionValue }) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    conditions: '',
    options: ''
  });

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };


  const renderOptions = () => {
    switch (values.conditions) {
      case 'Gênero':
        return options.gender
      case 'Cor cabelo':
        return options.hairColor
      case 'Comprimento cabelo':
        return options.hairLength
      case 'Frequência visita dias':
        return options.frequency
      case 'Natural':
        return options.nature
      case 'Calvície':
        return options.calvicie
      case 'Pelos rosto':
        return options.hairFace
      default:
        return []
    }
  }

  useEffect(() => {
    saveConditionValue(values)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])


  return <div className={classes.row}>
    <span className={classes.startCondition}> Quando: </span>
    <Select title="Condição" name='conditions' options={conditions} handleChange={handleChange} value={values.conditions} />
    <Select title="Valor" name='options' options={renderOptions()} handleChange={handleChange} value={values.options} />
  </div>
};

export default Condition;
