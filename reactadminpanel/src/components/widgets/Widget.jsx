import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const Widget = ({type}) => {

    let data; 

    switch(type){
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (<PersonOutlineOutlinedIcon className="icon"/>),

            }
            break;
            default:
                break;
    
    }



  return (
    <div className="widget">
        <div className="left">
            <span className="title">USERS</span>
            <span className="counter">21312</span>
            <span className="link">See all users</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon/>
                20%
                </div>
        <PersonOutlineOutlinedIcon className="icon"/>
        </div>
    </div>
  )
}

export default Widget