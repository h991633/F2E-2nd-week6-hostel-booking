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
    const postApiBooking = (id,name="HELL",tel="0987654321",date=["2021-10-10"]) => {
        
        fetch('https://challenge.thef2e.com/api/thef2e2019/stage6/room/' + id, {
            method: 'POST',
            body:JSON.stringify({
                "name": name,
                "tel": tel,
                "date": date
            }),
            
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ydf7YJAusCU3YIdo4zZGxDzGu6qHJ2KI5aozP6SIcOsUnpaCdqv4uPJv9rSP',
                
            },
            
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('postApiBooking', data)
             
                getApiRoomDetail(props.match.params.id)
            })
            .catch((e) => {
                console.log('ERR:' + e)
                
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
                    class="reserveTitle"
                    onClick={() => {
                        // postApiBooking(props.match.params.id)
                    }}
                >
                    <div class="stripeBlack2percent reserveTitleLeftBG"></div>
                    <div class="reserveTitleRight">
                        <div class="stripeBlack  reserveTitleRightBG"></div>
                        <a href="/F2E-2nd-week6-hostel-booking/">
                        <h1 class="reserveTitleWord">WhiteSpace</h1>
                        </a>
                    </div>
                </div>
                <ImgBanner name={name} imageUrl={imageUrl} />
            </header>
            <main class="reserveMain">
                <div class="reserveMainLeft">
                    <span class="reserveRoomName">
                        {name}
                        <br />
                    </span>

                    <span class="roomBasicDescription">
                        房客人數限制：{descriptionShort.GuestMin}~{descriptionShort.GuestMax} 人<br />
                        床型：{descriptionShort.Bed.join(',')}
                        <br />
                        衛浴數量：{descriptionShort['Private-Bath']} 間<br />
                        房間大小：{descriptionShort.Footage} 平方公尺
                        <br />
                    </span>
                    <p class="roomDescription">{description}</p>
                    <div>
                        <div class="Slash marginTopBottom28"></div>
                        <div class="Slash marginTopBottom28"></div>
                        <div class="Slash marginTopBottom28"></div>
                    </div>
                    <div class="checkIn">
                        <span class="checkText">
                            Check In
                            <br />
                        </span>
                        <time class="checkTime">
                            {checkInAndOut.checkInEarly} — {checkInAndOut.checkInLate}
                        </time>
                    </div>
                    <div class="checkOut">
                        <span class="checkText">
                            Check Out
                            <br />
                        </span>
                        <time class="checkTime">{checkInAndOut.checkOut}</time>
                    </div>
                    <div class="iconSection">
                        <div class={amenities['Wi-Fi'] ? 'roomIcon' : 'roomIconFalse'}>
                            <WifiIcon />
                            &nbsp; Wi-Fi
                        </div>
                        <div class={amenities['Television'] ? 'roomIcon' : 'roomIconFalse'}>
                            <TvIcon />
                            &nbsp; 電視
                        </div>
                        <div class={amenities['Great-View'] ? 'roomIcon' : 'roomIconFalse'}>
                            <LandscapeOutlinedIcon />
                            &nbsp; 漂亮的視野
                        </div>
                        <div class={amenities['Breakfast'] ? 'roomIcon' : 'roomIconFalse'}>
                            <DiningOutlinedIcon />
                            &nbsp; 早餐
                        </div>
                        <div class={amenities['Air-Conditioner'] ? 'roomIcon' : 'roomIconFalse'}>
                            <AirIcon />
                            &nbsp; 空調
                        </div>
                        <div class={amenities['Smoke-Free'] ? 'roomIcon' : 'roomIconFalse'}>
                            <SmokeFreeIcon />
                            &nbsp; 禁止吸煙
                        </div>
                        <div class={amenities['Mini-Bar'] ? 'roomIcon' : 'roomIconFalse'}>
                            <LocalBarIcon />
                            &nbsp; mini Bar
                        </div>
                        <div class={amenities['Refrigerator'] ? 'roomIcon' : 'roomIconFalse'}>
                            <KitchenIcon />
                            &nbsp; 冰箱
                        </div>
                        <div class={amenities['Child-Friendly'] ? 'roomIcon' : 'roomIconFalse'}>
                            <ChildFriendlyIcon />
                            &nbsp; 適合兒童
                        </div>
                        <div class={amenities['Room-Service'] ? 'roomIcon' : 'roomIconFalse'}>
                            <RoomServiceIcon />
                            &nbsp; Room Service
                        </div>
                        <div class={amenities['Sofa'] ? 'roomIcon' : 'roomIconFalse'}>
                            <WeekendIcon />
                            &nbsp; 沙發
                        </div>
                        <div class={amenities['Pet-Friendly'] ? 'roomIcon' : 'roomIconFalse'}>
                            <PetsIcon />
                            &nbsp; 寵物攜帶
                        </div>
                    </div>
                </div>
                <div class="reserveMainMid">
                    <span class="weekdayPrice">NT.{normalDayPrice}</span>
                    <br />
                    <span class="priceDescribe">平日(一~四)</span>
                    <br />
                    <br />
                    <span class="holidayPrice">NT.{holidayPrice}</span>
                    <br />
                    <span class="priceDescribe">假日(五~日)</span>
                    <br />
                </div>
                <div class="reserveMainRight">
                    <div class="reserveCalendar">
                        <ReserveCalendar bookingDateArr={bookingDateArr} />
                    </div>

                <div style={{display:'flex'}}>
                    <ReserveForm
                        normalDayPrice={normalDayPrice}
                        holidayPrice={holidayPrice}
                        bookingDateArr={bookingDateArr}
                        setBookingDateArr={setBookingDateArr}
                        roomId={props.match.params.id}
                        postApiBooking={postApiBooking}
                    />
                    <div class="doReserve"style={{marginLeft:'52px'}}>
                        <div class="doReserveButton" style={{backgroundColor:'#f00',width: '153px'}} onClick={() => {ApiDeleteAllBooking()}}>
                            刪除所有預約
                        </div>
                        <div class="doDeleteButtonBG stripeBlack24"> </div>
                    </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
