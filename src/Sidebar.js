import React from 'react'
import './Sidebar.css'
import SidebarRow from "./SidebarRow"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import { ExpandMoreOutlined } from '@material-ui/icons';



function SideBar() {
    return (
        <div className="sidebar">
            <SidebarRow src='https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/p720x720/106579433_10216259253265318_3364130088040214947_o.jpg?_nc_cat=110&ccb=2&_nc_sid=e3f864&_nc_ohc=er3GYkhvT8UAX-bGqtS&_nc_ht=scontent-ort2-2.xx&tp=6&oh=e822fb695c8d93be2e153d1f877c16f3&oe=601EC2FB' title='Joe Panetta' />

            <SidebarRow
                Icon={LocalHospitalIcon}
                title="Covid-19 Information Center"
            />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />

            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />

            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />

            <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace" />
        </div>
    )
}

export default SideBar
