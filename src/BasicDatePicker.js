
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
// import DesktopDatePicker from '@material-ui/lab/DatePicker';

import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';

export default function BasicDatePicker(props) {
  const [value, setValue] = React.useState(props.showDate);
  // console.log('BasicDatePicker(props)',props);
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        // label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          props.setReserveDate(newValue,props.type)
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}