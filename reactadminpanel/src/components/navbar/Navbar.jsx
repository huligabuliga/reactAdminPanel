import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="searchg">
                <input type="text" placeholder="Search..." />
                <SearchOutlinedIcon className="icon"/>

            </div>
            <div className="items">
                <div className="item">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar