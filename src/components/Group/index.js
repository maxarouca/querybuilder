import React, { useState, useEffect } from 'react';
import Condition from '../Condition'
import { Button, Switch } from '@material-ui/core'

import useStyles from './styles'


// import { Container } from './styles';

const Group = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    conditions: [],
    e_ou: '',
  });

  const [state, setState] = useState({
    checkedA: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const addCondition = () => {
    const conditions = values.conditions
    conditions.push({
      type: 'condition',
      name: 'Name',
      value: 'Teste'
    })
    setValues({ ...values, conditions })
  }

  const removeItem = (index) => {
    const conditions = values.conditions
    conditions.splice(index, index + 1)
    setValues({ ...values, conditions })
  }

  const saveConditionValue = (index, conditionValue) => {
    const conditions = values.conditions
    conditions[index] = {
      ...conditions[index],
      name: conditionValue.conditions,
      value: conditionValue.options
    }

    setValues({ ...values, conditions })
  }

  const addGroup = () => {
    const conditions = values.conditions
    conditions.push({
      type: 'group',
      name: 'Group',
      value: {}
    })
    setValues({ ...values, conditions })
  }

  console.log('conditions', values.conditions)
  console.log('values', values)
  // console.log('state', state)

  return (
    <div style={{ border: '5px solid #3F51B5' }}>
      <div className={classes.row}>
        <div style={{ margin: '0 15px' }}>
          E
        <Switch
            checked={state.checkedA}
            onChange={handleChange('checkedA')}
            value="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          OU
      </div>
        <Button variant="contained" color="primary" onClick={() => addCondition()}>Adicionar Condição</Button>
        <Button variant="contained" color="primary" onClick={() => addGroup()} style={{ marginLeft: 10 }}>Adicionar Grupo</Button>
      </div>

      {values.conditions.map((c, index) => {
        if (c.type === 'condition') {
          return (
            <div key={index} className={classes.row}>
              <Condition saveConditionValue={(values) => saveConditionValue(index, values)} />
              <Button variant="contained" color="secondary" onClick={() => removeItem(index)}>Remover Condição</Button>
            </div>
          )
        }
        return (
          <>
            <Group key={index} />
            <Button variant="contained" color="secondary" onClick={() => removeItem(index)} style={{ marginLeft: 10 }}>Remover Grupo</Button>
          </>
        )
      })}
    </div>
  )
};

export default Group;

// const RGroup = (props) => <Group {...props} />