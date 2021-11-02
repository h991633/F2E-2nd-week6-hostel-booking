import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'inline-block',

        width: '100vw',
        height: '100vh',
        // minWidth: '1200px',
        // minHeight: '800px',
    },
    modalColumn: {
    
        position: "relative",
        top:"15%",
        outline: 0,
    },
    modalTop: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    modalBottom: {
       
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height:'100px',
    },
    paper: {
        display: 'inline-block',
        bgcolor: 'background.paper',
        
        // border: '2px solid #000',
        // boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),

        outline: 0,
    },
}))

export default function ImgBanner(props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const imageName=props.name
    const imageUrl=props.imageUrl
//     const [imageUrl,setImageUrl]=React.useState(["https://images.unsplash.com/photo-1515511856280-7b23f68d2996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80",
//     "https://images.unsplash.com/photo-1526880792616-4217886b9dc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//     "https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80"
// ])
    const [nowImageUrl,setNowImageUrl]=React.useState("https://images.unsplash.com/photo-1515511856280-7b23f68d2996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80")
    const [imgPage,setImgPage]=React.useState(1)
    const handleOpen = (page) => {
        setOpen(true)
        setImgPage(page)
        setNowImageUrl(imageUrl[page-1])
    }

    const handleClose = () => {
        setOpen(false)
    }
    const nextPage = () =>{
        if(imgPage<3){
            setImgPage(imgPage+1)
            setNowImageUrl(imageUrl[imgPage])
        }else{
            setImgPage(1)
            setNowImageUrl(imageUrl[0])
        }
    }
    const previousPage =()=>{
        if(imgPage<2){
            setImgPage(3)
            setNowImageUrl(imageUrl[2])
        }else{
            
            setImgPage(imgPage-1)
            setNowImageUrl(imageUrl[imgPage-2])
        }
    }

    return (
        <div>
            {/* <button type="button" >
                react-transition-group
            </button> */}
            <div class="imgBanner">
                    <img
                        class="imgBannerLeft"
                        src={imageUrl[0]}
                        alt="房間圖片"
                        onClick={()=>{handleOpen(1)}}
                    ></img>
                    <div class="imgBannerRight">
                        <img
                            class="imgBannerRightTop"
                            src={imageUrl[1]}
                            alt="房間圖片"
                            onClick={()=>{handleOpen(2)}}
                        ></img>
                        <img
                            class="imgBannerRightBottom"
                            src={imageUrl[2]}
                            alt="房間圖片"
                            onClick={()=>{handleOpen(3)}}
                        ></img>
                    </div>
                </div>
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
                        <div className={classes.modalTop}>
                            <LeftOutlined style={{ fontSize: '38px', color: 'white', marginLeft: 'calc(100vw * 100 / 1499)' }} onClick={previousPage} />
                            <div className={classes.paper}>
                                <div style={{ fontSize: '0' }}>
                                    <img
                                        src={nowImageUrl}
                                        alt="房間圖片"
                                        style={{ maxHeight: '462px',maxWidth:'calc(100vw * 1000 / 1499)' }}
                                    ></img>
                                </div>
                            </div>
                            <RightOutlined style={{ fontSize: '38px', color: 'white', marginRight: 'calc(100vw * 100 / 1499)' }} onClick={nextPage} />
                        </div>
                        <div className={classes.modalBottom}>
                          <span style={{marginRight:'calc(100vw * 278 / 1499)',fontSize: '16px',color: '#FFFFFF',letterSpacing: '1.67px'}}>{imageName}</span>
                          <span style={{marginLeft:'calc(100vw * 278 / 1499)',fontSize: '16px',color: '#FFFFFF',letterSpacing: '1.67px'}}>{imgPage}/3</span>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
