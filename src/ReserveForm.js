import React, { useEffect, useState } from 'react'

// import { makeStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

import BasicDatePicker from './BasicDatePicker'

import { CheckCircleOutlined, LoadingOutlined } from '@ant-design/icons'
import isSameDay from 'date-fns/isSameDay'
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
    },
    modalColumn: {
        position: 'relative',

        outline: 0,
    },

    paper: {
        display: 'inline-block',
        bgcolor: 'background.paper',

        // border: '2px solid #000',
        // boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),

        outline: 0,
    },
    form: {
        // width: '423px',
        // height: '485px',
        background: 'white',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.50)',
        fontWeight: 'bold',
    },
    formTop: {
        paddingTop: '27px',
        paddingLeft: '42px',
        paddingRight: '42px',
    },
    formTitle: {
        margin: '0',
        padding: '0',
        fontFamily: 'NotoSansCJKtc-Medium',
        fontSize: '24px',
        color: '#000000',
        letterSpacing: '2.51px',
    },
    formInput: {
        fontFamily: 'NotoSansCJKtc-Medium',
        fontSize: '14px',
        color: '#000000',
        letterSpacing: '1.46px',
        lineHeight: '54.5px',
    },
    formInputTextBox: {
        border: ' 1px solid #C9C9C9',
        borderRadius: '5px',
        display: 'inline-block',
    },
    formInputTextBoxText: {
        width: '243px',
        height: '32px',
    },
    formInputTextBoxDate: {
        width: '95px !important',
        height: '34px !important',
        transform: 'translate(0px, 9px)',
    },
    result: {
        width: '423px',

        background: 'white',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.50)',
    },
}))

export default function ReserveForm(props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [reserveStartDate, setReserveStartDate] = React.useState(null)
    const [reserveEndDate, setReserveEndDate] = React.useState(null)
    const [weekday, setWeekday] = useState('?')
    const [holiday, setHoliday] = useState('?')
    const [reserveDateCorrect, setReserveDateCorrect] = useState(false)
    const [totalPrice, setTotalPrice] = useState('?')
    const { normalDayPrice, holidayPrice } = props
    const [customerName, setCustomerName] = useState('')
    const [customerPhone, setCustomerPhone] = useState('')

    const [openResult, setOpenResult] = useState(false)
    const [isResultSuccess, setIsResultSuccess] = useState(false)
    const [resultMsg, setResultMsg] = useState('請輸入姓名')
    const [reserveDateArr, setReserveDateArr] = useState([])
    //reserveDateArr 準備預約的日期
    const bookedDateArr = props.bookingDateArr
    //bookedDateArr 已被預約的日期
    const [isLoading, setIsLoading] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    const handleOpenResult = () => {
        setOpenResult(true)
    }

    const handleCloseResult = () => {
        setOpenResult(false)
    }

    const setReserveDate = (ReserveDate, type) => {
        if (type == 'start') {
            setReserveStartDate(ReserveDate)
        }
        if (type == 'end') {
            setReserveEndDate(ReserveDate)
        }
    }
    const datePlus = (date, day) => {
        let anotherDate = new Date(date)
        //深拷貝
        anotherDate.setDate(anotherDate.getDate() + day) //day可以為負數，意思是：昨天
        return anotherDate
    }

    const countDay = () => {
        const weekType = ['h', 'w', 'w', 'w', 'w', 'h', 'h']
        const dayTypeArr = []

        const startDayType = reserveStartDate.getDay()
        //.getDay() 日 一 二~六 回傳值 0 1 2 ~ 6
        const startToEndDay = Math.round((reserveEndDate - reserveStartDate) / 86400000)
        if (startToEndDay < 0) {
            setWeekday('?')
            setHoliday('?')
            setReserveDateCorrect(false)
            setTotalPrice('?')
            return 0
        }
        // console.log('end不小於start')
        let todayType = startDayType
        const realDateArr = []
        for (let i = 0; i <= startToEndDay; i++) {
            dayTypeArr.push(weekType[todayType])
            realDateArr.push(datePlus(reserveStartDate, i))
            if (todayType < 6) {
                todayType += 1
            } else {
                todayType = 0
            }
        }
        let wDay = dayTypeArr.filter((d) => d == 'w').length
        let HDay = dayTypeArr.filter((d) => d == 'h').length
        setWeekday(wDay)
        setHoliday(HDay)
        setReserveDateArr(realDateArr)
        let sumPrice = normalDayPrice * wDay + holidayPrice * HDay
        if (sumPrice > 0) {
            setTotalPrice(sumPrice)
        }
        setReserveDateCorrect(true)
    }
    const dateFormat = (date) => {
        let yyyy = date.getFullYear()
        let mm = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : '' + (date.getMonth() + 1)
        let dd = date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate()
        return yyyy + '-' + mm + '-' + dd
    }
    const postApiBooking = (id, name = 'HELL', tel = '0987654321', date = ['2021-10-10']) => {
        fetch('https://challenge.thef2e.com/api/thef2e2019/stage6/room/' + id, {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                tel: tel,
                date: date,
            }),

            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ydf7YJAusCU3YIdo4zZGxDzGu6qHJ2KI5aozP6SIcOsUnpaCdqv4uPJv9rSP',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('postApiBooking', data)
                if (typeof data.message == 'undefined') {
                    props.getApiRoomDetail(id)
                } else {
                    console.log('data.message', data.message)
                    setIsResultSuccess(false)
                    setResultMsg(data.message+"，請將頁面重新整理以獲得最新預約情況")
                }
                setIsLoading(false)
                handleOpenResult()
            })
            .catch((e) => {
                console.log('ERR:' + e)
            })
    }
    const confirmReserve = () => {
        console.log('確定預約')
        console.log('customerName', customerName)
        console.log('customerPhone', customerPhone)
        console.log('reserveStartDate', reserveStartDate)
        console.log('reserveEndDate', reserveEndDate)
        console.log('totalPrice', totalPrice)
        console.log('reserveDateArr', reserveDateArr)
        console.log('bookedDateArr', bookedDateArr)

        let isBookedDate = reserveDateArr.some((RD) => bookedDateArr.some((BD) => isSameDay(RD, BD)))

        //isSameDay(ADate, BDate) 會比對A時間跟B時間是不是同一天
        // let A=new Date()
        // let B=new Date()
        // console.log('ABisSameDay',isSameDay(A,B));

        //some()會將陣列中的「每一個」元素帶入指定的函式內做判斷，
        //只要有任何一個元素符合判斷條件，就會回傳 true，如果全都不符合，就會回傳 false。
        let nowTime = new Date()
        let isBeforeDate = reserveDateArr.some((RD) => RD < nowTime)

        if (customerName == '') {
            setResultMsg('請輸入姓名')
            handleClose()
            setIsResultSuccess(false)
            handleOpenResult()
        } else if (customerPhone == '') {
            setResultMsg('請輸入電話')
            handleClose()
            setIsResultSuccess(false)
            handleOpenResult()
        } else if (customerPhone.length !== 10) {
            setResultMsg(
                '請輸入電話號碼十碼如0223123456或0912345678(國外電話無法線上預約，請撥02-17264937進行預約)，若無法撥通電話會取消預約'
            )
            handleClose()
            setIsResultSuccess(false)
            handleOpenResult()
        } else if (!reserveDateCorrect) {
            setResultMsg('日期輸入有誤')
            handleClose()
            setIsResultSuccess(false)
            handleOpenResult()
        } else if (isBookedDate) {
            setResultMsg('所選日期已被預約')
            handleClose()
            setIsResultSuccess(false)
            handleOpenResult()
        } else if (isBeforeDate) {
            setResultMsg('不可預約明天之前的日期')
            handleClose()
            setIsResultSuccess(false)
            handleOpenResult()
        } else {
            setIsResultSuccess(true)
            setResultMsg('預約成功')
            handleClose()
            setIsLoading(true)
            // bookedDateArr.push(...reserveDateArr)
            // props.setBookingDateArr(bookedDateArr.slice(0))
            //(id,name="HELL",tel="0987654321",date=[["2021-10-10"]])
            let newBookingDateArr = reserveDateArr.map((v) => dateFormat(v))
            // console.log('newBookingDateArr',newBookingDateArr);
            postApiBooking(props.roomId, customerName, customerPhone, newBookingDateArr)
            // handleOpenResult() 移到postApiBooking
        }
    }

    useEffect(() => {
        if (reserveStartDate && reserveEndDate) {
            let days = 0
            days = Math.round((reserveEndDate - reserveStartDate) / 86400000) + 1
            console.log('days', days)
            countDay()
        } else {
            setWeekday('?')
            setHoliday('?')
            setReserveDateCorrect(false)
            setTotalPrice('?')
        }
    }, [reserveStartDate, reserveEndDate])
    return (
        <div>
            <div class="doReserve">
                <div
                    class="doReserveButton"
                    onClick={() => {
                        handleOpen()
                    }}
                >
                    預約時段
                </div>
                <div class="doReserveButtonBG stripeBlack24"></div>
            </div>
            {isLoading ? (
                <div style={{ position: 'fixed', top: '50%', left: '50%' }}>
                    <LoadingOutlined style={{ color: '#ADADAD', fontSize: '40px' }} />
                </div>
            ) : (
                ''
            )}

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.modalColumn}>
                        <div className={classes.paper}>
                            <div className={classes.form}>
                                <div className={classes.formTop}>
                                    <h1 className={classes.formTitle}>預約時段</h1>

                                    <div>
                                        <div class="Slash"></div>
                                        <div class="Slash"></div>
                                        <div class="Slash"></div>
                                    </div>
                                    <br />
                                    <div className={classes.formInput}>
                                        姓名 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input
                                            type="text"
                                            className={classes.formInputTextBox + ' ' + classes.formInputTextBoxText}
                                            id="customerName"
                                            value={customerName}
                                            onChange={() => {
                                                setCustomerName(document.getElementById('customerName').value)
                                            }}
                                        />{' '}
                                        <br />
                                        電話 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input
                                            type="text"
                                            className={classes.formInputTextBox + ' ' + classes.formInputTextBoxText}
                                            id="customerPhone"
                                            value={customerPhone}
                                            onChange={() => {
                                                setCustomerPhone(document.getElementById('customerPhone').value)
                                            }}
                                        />{' '}
                                        <br />
                                        預約起迄 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        {/* <input type="text" className={classes.formInputTextBox+" "+classes.formInputTextBoxDate}/> */}
                                        <div className={classes.formInputTextBox + ' ' + classes.formInputTextBoxDate}>
                                            <BasicDatePicker
                                                setReserveDate={setReserveDate}
                                                showDate={reserveStartDate}
                                                type="start"
                                            />
                                        </div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        {/* <input type="text" className={classes.formInputTextBox+" "+classes.formInputTextBoxDate}/> */}
                                        <div className={classes.formInputTextBox + ' ' + classes.formInputTextBoxDate}>
                                            <BasicDatePicker
                                                setReserveDate={setReserveDate}
                                                showDate={reserveEndDate}
                                                type="end"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="countDate">
                                    <div class="countDateRow">
                                        <span>平日時段</span>
                                        <span>{weekday}夜</span>
                                    </div>
                                    <div class="countDateRow">
                                        <span>假日時段</span>
                                        <span>{holiday}夜</span>
                                    </div>
                                </div>
                                <div class="countPrice"> = &nbsp; NT.{totalPrice}</div>
                                <div class="finalCheck">
                                    <div class="formCancel" onClick={handleClose}>
                                        取消
                                    </div>
                                    <div class="formConfirm" onClick={confirmReserve}>
                                        確定預約
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Modal>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openResult}
                onClose={handleCloseResult}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openResult}>
                    <div className={classes.modalColumn}>
                        <div className={classes.paper}>
                            <div className={classes.result}>
                                <div className={classes.formTop}>
                                    <h1 className={classes.formTitle}>預約{isResultSuccess ? '成功' : '失敗'}</h1>
                                    <div>
                                        <div class="Slash"></div>
                                        <div class="Slash"></div>
                                        <div class="Slash"></div>
                                    </div>
                                </div>
                                {isResultSuccess ? (
                                    <div class="resultSuccess">
                                        <CheckCircleOutlined style={{ color: '#ADE8C6', fontSize: '70px' }} />
                                    </div>
                                ) : (
                                    <div class="resultMsg">{resultMsg}</div>
                                )}

                                <div class="finalCheck">
                                    <div></div>
                                    {isResultSuccess ? (
                                        <div class="formConfirm" onClick={handleCloseResult}>
                                            回頁面
                                        </div>
                                    ) : (
                                        <div
                                            class="formConfirm"
                                            onClick={() => {
                                                handleCloseResult()
                                                handleOpen()
                                            }}
                                        >
                                            返回
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
