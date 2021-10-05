import { Result, Button } from 'antd'
export default function Reserve(props) {
    return (
        <div style={{display:"flex",justifyContent:"center",WebkitAlignItems:"center",height: "100vh"}}>
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary"><a href="/F2E-2nd-week6-hostel-booking/" style={{color:"black"}}>Back Home</a></Button>}
        />
        </div>
    )
}
