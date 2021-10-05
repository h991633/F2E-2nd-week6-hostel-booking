

import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import StaticDatePicker from '@material-ui/lab/StaticDatePicker';
import PickersDay from '@material-ui/lab/PickersDay';
import endOfWeek from 'date-fns/endOfWeek';
import isSameDay from 'date-fns/isSameDay';
import isWithinInterval from 'date-fns/isWithinInterval';
import startOfWeek from 'date-fns/startOfWeek';
const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay' && prop !== 'isReserveDay'&& prop !== 'isPastDay',
})(({ theme, dayIsBetween, isFirstDay, isLastDay,isReserveDay,isPastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  }),
  ...(isLastDay && {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  }),
  // 以上為範例的css
  ...(isReserveDay&&!isPastDay && {
    borderRadius: 0,
    background:` linear-gradient(
      45deg, 
      rgba(0, 0,0, 1) 0%, rgba(0, 0,0, 1) 2%, rgba(255, 255, 255, 0) 2%, rgba(255, 255, 255, 0) 10%,rgba(0, 0,0, 1) 10%, rgba(0, 0,0, 1) 12%, rgba(255, 255, 255, 0) 12%, rgba(255, 255, 255, 0) 20%,rgba(0, 0,0, 1) 20%, rgba(0, 0,0, 1) 22%, rgba(255, 255, 255, 0) 22%, rgba(255, 255, 255, 0) 30%,rgba(0, 0,0, 1) 30%, rgba(0, 0,0, 1) 32%, rgba(255, 255, 255, 0) 32%, rgba(255, 255, 255, 0) 40%,rgba(0, 0,0, 1) 40%, rgba(0, 0,0, 1) 42%, rgba(255, 255, 255, 0) 42%, rgba(255, 255, 255, 0) 50%,rgba(0, 0,0, 1) 50%, rgba(0, 0,0, 1) 52%, rgba(255, 255, 255, 0) 52%, rgba(255, 255, 255, 0) 60%,rgba(0, 0,0, 1) 60%, rgba(0, 0,0, 1) 62%, rgba(255, 255, 255, 0) 62%, rgba(255, 255, 255, 0) 70%,rgba(0, 0,0, 1) 70%, rgba(0, 0,0, 1) 72%, rgba(255, 255, 255, 0) 72%, rgba(255, 255, 255, 0) 80%,rgba(0, 0,0, 1) 80%, rgba(0, 0,0, 1) 82%, rgba(255, 255, 255, 0) 82%, rgba(255, 255, 255, 0) 90%,rgba(0, 0,0, 1) 90%, rgba(0, 0,0, 1) 92%, rgba(255, 255, 255, 0) 92%, rgba(255, 255, 255, 0) 100%
      )`,
    backgroundSize : "24px 24px",
  }),
  ...(!isReserveDay && {
    borderRadius: 0,
    background: "#F7F7F7",
  }),
  ...(isPastDay && {
    borderRadius: 0,
    background: "#F7F7F7",
    color: '#C9CCD0',
  }),
}));

export default function ReserveCalendar(props) {
  const [value, setValue] = React.useState(new Date());

  const getDate = (day)=>{
  var date = new Date();
  date.setDate(date.getDate()+day);//day可以為負數，意思是：昨天
  return date;
  }
  //塞個幾天進來測試
  // const [reservationDateArr, setReservationDateArr] = React.useState(props.bookingDateArr);
  // console.log('props.bookingDateArr',props.bookingDateArr);
  const reservationDateArr=props.bookingDateArr;
  const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    if (!value) {
      return <PickersDay {...pickersDayProps} />;
    }
    
    // const start = startOfWeek(value);
    // const end = endOfWeek(value);
    // const dayIsBetween = isWithinInterval(date, { start, end });
    // const isFirstDay = isSameDay(date, start);
    // const isLastDay = isSameDay(date, end);
    const dayIsBetween = false;
    const isFirstDay = false;
    const isLastDay = false;
    //將範例的設定弄不見

    //some()會將陣列中的「每一個」元素帶入指定的函式內做判斷，只要有任何一個元素符合判斷條件，就會回傳 true，如果全都不符合，就會回傳 false。
    const isReserveDay=reservationDateArr.some((reserve)=>isSameDay(date, reserve))
    // console.log("value",value)
    const isPastDay=date<new Date()||isSameDay(date,new Date())

    return (
      <CustomPickersDay
        {...pickersDayProps}
        disableMargin
        dayIsBetween={dayIsBetween}
        isFirstDay={isFirstDay}
        isLastDay={isLastDay}
        isReserveDay={isReserveDay}
        isPastDay={isPastDay}
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        label="Week picker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderDay={renderWeekPickerDay}
        renderInput={(params) => <TextField {...params} />}
        inputFormat="'Week of' MMM d"
      />
    </LocalizationProvider>
  );
}
