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
                
            })
            .catch((e) => {
                alert('ERR:' + e)
            })
    }, [])

    const handleHover = (e, index) => {
        // e.preventDefault()
        setNowBG(apiData[index].imageUrl)
        setNowRoomName(apiData[index].name)
        setNowRoomNumber("0"+(index+1))
       
    }
    

    return (
        <div className="roomImg" style={{ width: '100vw', minHeight: '100vh', background: 'url(' + nowBG + ')' }}>
            <header className="indexHeader">
                <div className="title">
                    <div className="stripe41 titleLeftBG"></div>
                    <div className="titleRight">
                        <div className="stripe titleRightBG"></div>
                        <h1 className="titleWord">
                            White
                            <br />
                            Space
                        </h1>
                    </div>
                </div>
                <div>
                    <nav className="roomSelect">
                        
                        {apiData.map((value,index)=>{
                            
                            return(
                            
                                <Link to={`reserve/${apiData[index].id}`}><div className="roomButton" onMouseOver={(e) => handleHover(e, index)}>
                                {value.name}
                                </div></Link>
                            
                                
                            )
                        })}
                        
                    </nav>
                    <div className="stripe70 roomSelectBG"></div>
                </div>
            </header>

            {nowLoading?<div className="loading"><LoadingOutlined style={{ color:'#ADADAD',fontSize: '40px' }}/></div>:""}

            <footer className="indexFooter">
                <figcaption className="indexFigcaption">
                    <div className="roomNumberBack">
                        <div className="roomNumber">{nowRoomNumber}</div>
                        <div className="roomNumberBG stripe70 "></div>
                    </div>
                    <div className="roomName">{nowRoomName}</div>
                </figcaption>

                <aside className="indexAside">
                    <div className="asideIcon">
                                <a href="https://www.facebook.com/Whitespace/" target="_blank" rel="noreferrer noopener" className="iconLink">
                                <FacebookFilled style={{ fontSize: '20px' }}/> 
                                </a>
                                &nbsp;&nbsp;
                                <a href="https://www.instagram.com/whitespace/" target="_blank" rel="noreferrer noopener" className="iconLink">
                                <InstagramOutlined style={{ fontSize: '20px' }} /> 
                                </a>
                    </div>

                    <div className="asideInformation"><PhoneFilled rotate={90} style={{ fontSize: '20px' }} /> &nbsp;&nbsp;02-17264937</div>
                    <div className="asideInformation"><MailOutlined style={{ fontSize: '20px' }}/>&nbsp;&nbsp; whitespace@whitespace.com.tw</div>
                    <div className="asideInformation"><HomeOutlined style={{ fontSize: '20px' }}/> &nbsp;&nbsp;台北市羅斯福路十段30號</div>
                </aside>
            </footer>
        </div>
    )
}
export default HomePage
