import { useEffect, useState } from 'react'
import ImgBanner from './ImgBanner'
import RoomServiceIcon from '@material-ui/icons/RoomService'
import WeekendIcon from '@material-ui/icons/Weekend'
import PetsIcon from '@material-ui/icons/Pets'
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly'
import KitchenIcon from '@material-ui/icons/Kitchen'
import LocalBarIcon from '@material-ui/icons/LocalBar'
import SmokeFreeIcon from '@material-ui/icons/SmokeFree'
import AirIcon from '@material-ui/icons/Air'
import DiningOutlinedIcon from '@material-ui/icons/DiningOutlined'
import LandscapeOutlinedIcon from '@material-ui/icons/LandscapeOutlined'
import TvIcon from '@material-ui/icons/Tv'
import WifiIcon from '@material-ui/icons/Wifi'

import ReserveCalendar from './ReserveCalendar'
import ReserveForm from './ReserveForm'
export default function Reserve(props) {
    const [roomDetailData, setRoomDetailData] = useState({
        room: [
            {
                id: '',
                name: '',
                imageUrl: ['', '', ''],
                normalDayPrice: '?',
                holidayPrice: '?',
                descriptionShort: {
                    GuestMin: '?',
                    GuestMax: '?',
                    Bed: ['', ''],
                    'Private-Bath': '?',
                    Footage: '?',
                },
                description: '',
                checkInAndOut: {
                    checkInEarly: '??:??',
                    checkInLate: '??:??',
                    checkOut: '??:??',
                },
                amenities: {
                    'Wi-Fi': false,
                    Breakfast: false,
                    'Mini-Bar': false,
                    'Room-Service': false,
                    Television: false,
                    'Air-Conditioner': false,
                    Refrigerator: false,
                    Sofa: false,
                    'Great-View': false,
                    'Smoke-Free': false,
                    'Child-Friendly': false,
                    'Pet-Friendly': false,
                },
            },
        ],
        booking: [],
    })

    const [bookingDateArr, setBookingDateArr] = useState([])

    useEffect(() => {
        // console.log('props',props);
        // console.log('params.id',props.match.params.id);
        getApiRoomDetail(props.match.params.id)
        document.title = 'Booking'
    }, [])
    const getApiRoomDetail = (id) => {
        
        fetch('https://challenge.thef2e.com/api/thef2e2019/stage6/room/' + id, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ydf7YJAusCU3YIdo4zZGxDzGu6qHJ2KI5aozP6SIcOsUnpaCdqv4uPJv9rSP',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('RoomDetaildata', data)
                setRoomDetailData(data)
                apiUpdateBookingDateArr(data.booking)
            })
            .catch((e) => {
                console.log('ERR:' + e)
                window.location = '/404'
            })
    }
   
    const ApiDeleteAllBooking = () => {
        
        fetch('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ydf7YJAusCU3YIdo4zZGxDzGu6qHJ2KI5aozP6SIcOsUnpaCdqv4uPJv9rSP',
                
            },
            
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('ApiDeleteAllBooking', data)
             
                getApiRoomDetail(props.match.params.id)
            })
            .catch((e) => {
                console.log('ERR:' + e)
                
            })
    }
    const apiUpdateBookingDateArr=(booking)=>{
 
        const newBookingDateArr=booking.map((v)=>new Date(v.date))
        setBookingDateArr(newBookingDateArr)
    }

    const { name, imageUrl, descriptionShort, description, checkInAndOut, normalDayPrice, holidayPrice, amenities } =
        roomDetailData.room[0]
    return (
        <div>
            <header>
                <div
                    className="reserveTitle"
                    onClick={() => {
                        // postApiBooking(props.match.params.id)
                    }}
                >
                    <div className="stripeGrey2percent reserveTitleLeftBG"></div>
                    <div className="reserveTitleRight">
                        <div className="stripeGrey  reserveTitleRightBG"></div>
                        <a href="/F2E-2nd-week6-hostel-booking/">
                        <h1 className="reserveTitleWord">WhiteSpace</h1>
                        </a>
                    </div>
                </div>
                <ImgBanner name={name} imageUrl={imageUrl} />
            </header>
            <main className="reserveMain">
                <div className="reserveMainLeft">
                    <span className="reserveRoomName">
                        {name}
                        <br />
                    </span>

                    <span className="roomBasicDescription">
                        房客人數限制：{descriptionShort.GuestMin}~{descriptionShort.GuestMax} 人<br />
                        床型：{descriptionShort.Bed.join(',')}
                        <br />
                        衛浴數量：{descriptionShort['Private-Bath']} 間<br />
                        房間大小：{descriptionShort.Footage} 平方公尺
                        <br />
                    </span>
                    <p className="roomDescription">{description}</p>
                    <div>
                        <div className="Slash marginTopBottom28"></div>
                        <div className="Slash marginTopBottom28"></div>
                        <div className="Slash marginTopBottom28"></div>
                    </div>
                    <div className="checkIn">
                        <span className="checkText">
                            Check In
                            <br />
                        </span>
                        <time className="checkTime">
                            {checkInAndOut.checkInEarly} — {checkInAndOut.checkInLate}
                        </time>
                    </div>
                    <div className="checkOut">
                        <span className="checkText">
                            Check Out
                            <br />
                        </span>
                        <time className="checkTime">{checkInAndOut.checkOut}</time>
                    </div>
                    <div className="iconSection">
                        <div className={amenities['Wi-Fi'] ? 'roomIcon' : 'roomIconFalse'}>
                            <WifiIcon />
                            &nbsp; Wi-Fi
                        </div>
                        <div className={amenities['Television'] ? 'roomIcon' : 'roomIconFalse'}>
                            <TvIcon />
                            &nbsp; 電視
                        </div>
                        <div className={amenities['Great-View'] ? 'roomIcon' : 'roomIconFalse'}>
                            <LandscapeOutlinedIcon />
                            &nbsp; 漂亮的視野
                        </div>
                        <div className={amenities['Breakfast'] ? 'roomIcon' : 'roomIconFalse'}>
                            <DiningOutlinedIcon />
                            &nbsp; 早餐
                        </div>
                        <div className={amenities['Air-Conditioner'] ? 'roomIcon' : 'roomIconFalse'}>
                            <AirIcon />
                            &nbsp; 空調
                        </div>
                        <div className={amenities['Smoke-Free'] ? 'roomIcon' : 'roomIconFalse'}>
                            <SmokeFreeIcon />
                            &nbsp; 禁止吸煙
                        </div>
                        <div className={amenities['Mini-Bar'] ? 'roomIcon' : 'roomIconFalse'}>
                            <LocalBarIcon />
                            &nbsp; mini Bar
                        </div>
                        <div className={amenities['Refrigerator'] ? 'roomIcon' : 'roomIconFalse'}>
                            <KitchenIcon />
                            &nbsp; 冰箱
                        </div>
                        <div className={amenities['Child-Friendly'] ? 'roomIcon' : 'roomIconFalse'}>
                            <ChildFriendlyIcon />
                            &nbsp; 適合兒童
                        </div>
                        <div className={amenities['Room-Service'] ? 'roomIcon' : 'roomIconFalse'}>
                            <RoomServiceIcon />
                            &nbsp; Room Service
                        </div>
                        <div className={amenities['Sofa'] ? 'roomIcon' : 'roomIconFalse'}>
                            <WeekendIcon />
                            &nbsp; 沙發
                        </div>
                        <div className={amenities['Pet-Friendly'] ? 'roomIcon' : 'roomIconFalse'}>
                            <PetsIcon />
                            &nbsp; 寵物攜帶
                        </div>
                    </div>
                </div>
                <div className="reserveMainMid">
                    <span className="weekdayPrice">NT.{normalDayPrice}</span>
                    <br />
                    <span className="priceDescribe">平日(一~四)</span>
                    <br />
                    <br />
                    <span className="holidayPrice">NT.{holidayPrice}</span>
                    <br />
                    <span className="priceDescribe">假日(五~日)</span>
                    <br />
                </div>
                <div className="reserveMainRight">
                    <div className="reserveCalendar">
                        <ReserveCalendar bookingDateArr={bookingDateArr} />
                    </div>

                <div style={{display:'flex'}}>
                    <ReserveForm
                        normalDayPrice={normalDayPrice}
                        holidayPrice={holidayPrice}
                        bookingDateArr={bookingDateArr}
                        setBookingDateArr={setBookingDateArr}
                        roomId={props.match.params.id}
                        getApiRoomDetail={getApiRoomDetail}
                    />
                    <div className="doReserve"style={{marginLeft:'52px'}}>
                        <div className="doReserveButton" style={{backgroundColor:'#f00',width: '153px'}} onClick={() => {ApiDeleteAllBooking()}}>
                            刪除所有預約
                        </div>
                        <div className="doDeleteButtonBG stripeGrey24"> </div>
                    </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
