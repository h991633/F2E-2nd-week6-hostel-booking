import React, { useEffect, useState } from 'react'

import {  Link } from 'react-router-dom'
import {
    FacebookFilled,
    InstagramOutlined,
    PhoneFilled,
    MailOutlined,
    HomeOutlined,
    LoadingOutlined,
  } from '@ant-design/icons';
function HomePage() {
    const [apiData, setApiData] = useState([])
    
    const [nowBG, setNowBG] = useState(
        'https://i.imgur.com/PyVqqHa.png'
    )
    const [nowRoomName,setNowRoomName]=useState("")
    const [nowRoomNumber,setNowRoomNumber]=useState("")
    const [nowLoading,setNowLoading]=useState(true)
    // const [roomButtonHover,setRoomButtonHover]=useState([])
    useEffect(() => {
        document.title="White Space"
        fetch('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ydf7YJAusCU3YIdo4zZGxDzGu6qHJ2KI5aozP6SIcOsUnpaCdqv4uPJv9rSP',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('data', data)
                setApiData(data.items)
                // console.log('apiData', apiData)
                setNowBG(data.items[4].imageUrl)
                setNowRoomName(data.items[4].name)
                setNowRoomNumber("05")
                setNowLoading(false)
                
                // data.items.map((value)=>{
                //     getApiRoomDetail(value.id)
                //     return 0
                // })
                // getApiRoomDetail(data.items[0].id)
            })
            .catch((e) => {
                alert('ERR:' + e)
            })
    }, [])

    const getApiRoomDetail = (id) => {
        console.log('id', id)
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
                // setRoomDetailData(data.items);
                
            })
            .catch((e) => {
                alert('ERR:' + e)
            })
    }

    const handleHover = (e, index) => {
        // e.preventDefault()
        setNowBG(apiData[index].imageUrl)
        setNowRoomName(apiData[index].name)
        setNowRoomNumber("0"+(index+1))
       
    }
    

    return (
        <div class="roomImg" style={{ width: '100vw', minHeight: '100vh', background: 'url(' + nowBG + ')' }}>
            <header class="indexHeader">
                <div class="title">
                    <div class="stripe41 titleLeftBG"></div>
                    <div class="titleRight">
                        <div class="stripe titleRightBG"></div>
                        <h1 class="titleWord">
                            White
                            <br />
                            Space
                        </h1>
                    </div>
                </div>
                <div>
                    <nav class="roomSelect">
                        
                        {apiData.map((value,index)=>{
                            
                            return(
                            
                                <Link to={`reserve/${apiData[index].id}`}><div class="roomButton" onMouseOver={(e) => handleHover(e, index)}>
                                {value.name}
                                </div></Link>
                            
                                
                            )
                        })}
                        
                    </nav>
                    <div class="stripe70 roomSelectBG"></div>
                </div>
            </header>

            {nowLoading?<div class="loading"><LoadingOutlined style={{ color:'#ADADAD',fontSize: '40px' }}/></div>:""}

            <footer class="indexFooter">
                <figcaption class="indexFigcaption">
                    <div class="roomNumberBack">
                        <div class="roomNumber">{nowRoomNumber}</div>
                        <div class="roomNumberBG stripe70 "></div>
                    </div>
                    <div class="roomName">{nowRoomName}</div>
                </figcaption>

                <aside class="indexAside">
                    <div class="asideIcon">
                                <a href="https://www.facebook.com/Whitespace/" target="_blank" rel="noreferrer noopener" class="iconLink">
                                <FacebookFilled style={{ fontSize: '20px' }}/> 
                                </a>
                                &nbsp;&nbsp;
                                <a href="https://www.instagram.com/whitespace/" target="_blank" rel="noreferrer noopener" class="iconLink">
                                <InstagramOutlined style={{ fontSize: '20px' }} /> 
                                </a>
                    </div>

                    <div class="asideInformation"><PhoneFilled rotate={90} style={{ fontSize: '20px' }} /> &nbsp;&nbsp;02-17264937</div>
                    <div class="asideInformation"><MailOutlined style={{ fontSize: '20px' }}/>&nbsp;&nbsp; whitespace@whitespace.com.tw</div>
                    <div class="asideInformation"><HomeOutlined style={{ fontSize: '20px' }}/> &nbsp;&nbsp;台北市羅斯福路十段30號</div>
                </aside>
            </footer>
        </div>
    )
}
export default HomePage
