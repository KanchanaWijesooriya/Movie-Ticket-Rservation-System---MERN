import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BsGrid1X2Fill, BsFilm, BsCalendarFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsPersonFill, BsPersonCircle 
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsPersonFill className='icon_header' /> Admin Panel
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>
      <div className='sidebar-name'>
        <BsPersonCircle className='icon_header' /> Admin Name <br />
        <label id='name'>Kanchanra Wijesooriya</label>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/movies">
            <BsFilm className='icon' /> Movies
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/datetime">
            <BsCalendarFill className='icon' /> Date and Time
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/users">
            <BsPeopleFill className='icon' /> Users
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/bookings">
            <BsListCheck className='icon' /> Bookings
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/reports">
            <BsMenuButtonWideFill className='icon' /> Reports
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/settings">
            <BsFillGearFill className='icon' /> Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
