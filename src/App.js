import React, { useState } from 'react';
// import useStyles from './styles'
import Group from './components/Group'
import { Button } from '@material-ui/core'

function App() {

  const [values, setValues] = useState([]);




  return (
    <div className="App">
      <h1>QueryBuider</h1>
      <Group setQuery={setValues} />
      <Button variant="contained" onClick={() => alert(JSON.stringify(values))} style={{ marginLeft: 10 }}>Ver Query</Button>
    </div>
  );
}

export default App;
