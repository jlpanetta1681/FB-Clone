import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import { Avatar, IconButton } from "@material-ui/core";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function Header() {
    return (
        <div classname="header">
            <div className="header_left">
                <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAuNzUyIDMuMDlDNTAuNDI3LjMzIDQzLjkzMiAwIDQwLjIzIDBzLTcuNi4zOTUtMTIuNiAzLjA5Yy01LjAwMiAyLjY5OC02Ljc1NiA3LjQzNC03LjQwNiAxMC4zMjhzLjEzIDExLjMxMy4xMyAxMS41MWMwIC4xOTgtMy44OTcuMTk4LTUuMzkuMjY0LTEuNDk1LjA2Ni0xLjgyLjcyNC0xLjk1IDEuMTE4LS4xMy4zOTUuNjUgMTEuMzguNjUgMTEuMzhsLjQ1NSAzLjk0NmMuODQzLjQ2IDUgLjI2MyA1LjcxNS4zOTUuNzE0LjEzMy45NzQgMS4xMiAxLjA0IDMuODgyLjA2NCAyLjc2My40NTQgMTMuMzUzLjUyIDE1LjUyMy4wNjQgMi4xNyAxLjAzOCAyLjE3IDMuMzc3IDIuMjM2czExLjM2Ni4zMyAxMS44ODUuMzMgMS4wNC0uNjU4IDEuMDQtMi42OTdjMC0yLjA0LjY1LTE5LjIwNy43MTMtMTkuNi4wNjUtLjM5NiAxLjQzIDAgMi41OTggMHM2Ljc1NS0uMzk2IDcuNzMtLjUyN2MuOTczLS4xMzIgMS4zNjMtMTAuMzkzIDEuMzYzLTEzLjc0N3MtMi4xNDItMy40ODctMy41MDYtMy41NTNjLTEuMzY0LS4wNjYtNy44Ni4xOTctOC4yNS0uMDY2LS4zOS0uMjYyIDEuMjM1LTUuMzkzIDMuMzgtNi40NDUgMi4xNDItMS4wNTIgNy40MDQtLjQ2IDguMDUzLS4zMy42NS4xMzMgMS4xMDQtMS4zOCAxLjE3LTIuNTY0LjA2NS0xLjE4My4xMy04LjYxNi0uMTk1LTExLjM4em0tNC42NDQgMjIuMDA0Yy4xOTUgMCAxLjEzNyAxLjA1MiAxLjM5NiAxLjQ4cy0uMTMgMS4xODQtLjIyNyAxLjI1Yy0uMDk3LjA2Ni0xLjE3LTEuNzc2LTEuMzMyLTIuMDQtLjE2Mi0uMjYzLjAzMy0uNjkuMTYzLS42OXptMy4zNDUtMTIuNGMtLjU4NS4wNjctNi4zNjUtLjUyNS05LjYxMy42Ni0zLjI0OCAxLjE4My01LjA2NiA0LjUzOC01LjI2IDYuMzgtLjE5NiAxLjg0LS4yNiA1LjI2LjI2IDUuMjZzNS4xMy4xIDYuODg0LjE2NWMxLjc1NC4wNjUgMi42OTYtLjAzNCAyLjg1OC4xOTYuMTYyLjIzIDIuNjMgMy43NSAyLjU5OCAzLjk4LS4wMzIuMjMtLjI2IDEuNDEzLS4zOSAxLjI1cy0yLjQzNi00LjIxLTIuNTk4LTQuMDQ2Yy0uMTYyLjE2NC0uNTg1Ljc5LS4yOTIgMS4yMTcuMjkyLjQyOCAyLjc2IDQuMTc3IDIuNzI4IDQuMzQtLjAzMi4xNjUtLjMyNSAxLjA1My0uNDg3LjgyMy0uMTYtLjIzLTIuOTU0LTUuMDY1LTMuMTE3LTUtLjE2Mi4wNjctLjYxNy42OTItLjM5IDEuMDg2LjIyNy4zOTUgMy4yNDggNC42MzcgMy4yOCA0Ljg2Ny4wMzIuMjMtLjAzMiAxLjk3My0uMjI3IDEuOTA4LS4xOTUtLjA2NS0yLjkyMy01LjIyOC0zLjM3OC01LjIyOC0uNDU1IDAtLjYxNy44ODgtLjM1NyAxLjIxNy4yNi4zMjggMy40NzYgNS4wOTcgMy40NzYgNS4xOTVzLS43NDcuNTYtMS4wMDcuMzYyYy0uMjYtLjE5Ny0yLjg5LTUuMjYyLTMuMTUtNS4yNjJzLS45NzUuMzMtLjc0OC42OWMuMjI3LjM2MyAyLjc2IDQuNDc0IDIuNjMgNC41MDctLjEzLjAzMy0uNjE2LjE5Ny0uOTczLS4xOTctLjM1OC0uMzk1LTIuNDA0LTQuMDEyLTIuNjY0LTMuOTQ3LS4yNi4wNjYtLjc0Ny42MjUtLjQ4Ny45NTQuMjYuMzMgMi41MzIgMy4xOSAyLjI3MiAzLjI1Ni0uMjYuMDY2LTEuNTYuMDMzLTEuNjU2LS4xLS4wOTctLjEzLTEuMzk2LTIuNjk2LTEuNjktMi42OTYtLjI5IDAtLjY4LjQ2LS41Mi43NTYuMTYzLjI5NiAxLjE3IDEuOTA4IDEuMDczIDEuOTA4LS4wOTggMC0zLjAyLS4xNjQtMy4xMi4xOTctLjA5Ni4zNjIuMTYzIDIuNzk1IDAgMi42OTctLjE2LS4xLTEuNDYtMi43My0xLjY1NS0yLjczLS4xOTUgMC0uNTUyLjc1Ni0uNDIyIDEuMDg1LjEzLjMzIDIuMTQzIDIuNzk1IDIuMjA4IDMuMDZzLjA2NiAyLjIwMi0uMDY0IDEuOTQtMi4wNzgtMy43MTctMi4yMDgtMy42NTJjLS4xMy4wNjYtLjQ1NS45NTQtLjM5IDEuMTVzMi42NjMgMy44ODIgMi43MjggNC4xNDUuMDk3IDIuNzYzLS4wMzIgMi41NjVjLS4xMy0uMTk3LTIuOTIzLTUuNTI1LTMuMTUtNS40OTItLjIyNy4wMzQtLjQyMiAxLjE1Mi0uMjkyIDEuNTE0LjEzLjM2MiAzLjMxMyA1LjI2MiAzLjM0NSA1LjUyNS4wMzIuMjYyLjA2NSAxLjU3OC0uMDY1IDEuNDhzLTMuNTQtNi40MTQtMy43MDItNi4zMTVjLS4xNjIuMS0uMjkyIDEuMDItLjE5NSAxLjQxNC4wOTcuMzk0IDMuODk3IDYuMzEzIDMuOTMgNi40NDUuMDMyLjEzMi0uMDMyIDIuNzYzLS4xNjIgMi42My0uMTMtLjEzLTMuOTYyLTYuOTA1LTQuMTktNi44NzMtLjIyNi4wMzMtLjM5IDEuMjE3LS4yMjYgMS41MTMuMTYyLjI5NiA0LjQ4MiA2LjQ4IDQuNTE0IDYuODA4LjAzMy4zMy4xNjMgMS45NCAwIDEuODc1LS4xNi0uMDY2LTQuNzA4LTcuNzMtNC44Ny03LjY5Ni0uMTYyLjAzMy0uMzkgMS4wNTItLjMyNSAxLjI4My4wNjUuMjMgNS4xMyA3LjkyNiA1LjEzIDguMTlzLS4wMy40OTItLjMyNC40OTJjLS4yOSAwLS42MTYuMDMzLS45MDgtLjI2My0uMjkyLS4yOTYtNC40ODItNy4yNjgtNC43NzQtNy4yMDItLjI5Mi4wNjYtLjM1NyAxLjE4NC0uMjYgMS41NDYuMDk3LjM2MiA0LjU0NyA1Ljk1MyA0LjM4NCA2LjAyLS4xNjIuMDY1LTYuMDQtLjM2My02LjQ5NS0uMzYzLS40NTUgMC0uODQ0LS4xMzItLjg0NC0uMTMycy4xOTUtLjI2My0uMzU3LS44NTUtMS4zNjQtMS41NDYtMS43Mi0xLjMxNmMtLjM1OC4yMy0uMjI4LjYyNSAwIC44NTUuMjI2LjIzIDEuMTM2LjkyLjk3MyAxLjA1Mi0uMTYzLjEzLTIuNTAyLS4wMzQtMi42LS4yNjQtLjA5Ni0uMjMtLjEzLTkuNjctLjE5NC0xMi45NTgtLjA2NS0zLjI5LS4yMjctNy45OTItLjk0Mi04LjQ4NS0uNzE0LS40OTMtNi4wNC0uNjI1LTYuMzMzLS45Mi0uMjMtLjIzNC0uOTA4LTEwLjcyMi0uNTItMTAuNzg4LjM5LS4wNjYgNS4zOTIuMTMyIDYuMjM2LS4zOTUuODQ0LS41MjYgMS4wNC0xLjQ0Ny45MS0yLjYzLS4xMy0xLjE4NS0uOTEtOS40MDcuNTg0LTEyLjU2NHM0LjQ4Mi02LjE4MyA5LjA5My04LjAyNUMzNS44MTUuOTIgNDEuNTMgMS4wNSA0NS40OTMgMS41NzhjMy45NjIuNTI2IDQuMzUyIDEuMjUgNC40MTcgMy4xNTcuMDYzIDEuOTEuMTI4IDcuODk1LS40NTcgNy45NnpNMjIuNzI1IDI2LjE4Yy0uMjI3LjAzMi0uMTk1Ljk4Ni0uMTk1IDEuMzQ3IDAgLjM2Mi0yLjExLjEzMi0yLjYzLjEtLjUyLS4wMzQtMS4wMjYuMTA2LS45NDMuNTI1LjAzMi4xNjQgMCAuNTYuMTk1LjY1OC4xOTUuMSA0LjIyMi4xMzIgNC42MTIuMTMyLjM5IDAgLjI5Mi0yLjA0LjIyNy0yLjUtLjA2My0uNDYtMS4wMzgtLjI5Ni0xLjI2NS0uMjYzem02LjA0LTE5LjI3NGMtMS4wMzguNTI2LTIuOTg3IDIuMTA1LTQuMTg4IDQuMTEtMS4yMDIgMi4wMDctMS41MjYgMy41Mi0xLjU2IDQuODM2LS4wMyAxLjMxNi4xOSAyLjE4NC40MjMgMi4zMDIuMjYuMTMyLjYxNy0uMDMzLjkxLS4wMzMuMjkgMC0uMDMzLTMuNzggMS42ODgtNi43NzQgMS43Mi0yLjk5MyA0LjE5LTMuNzE2IDQuNjEyLTMuNzUuNDIyLS4wMzIuMzU3LS42NTcuMjYtMS4xMTctLjA5OC0uNDYyLTEuMTA1LS4xLTIuMTQ0LjQyNnptNy43NjIgNi4zOGMtLjI2LS4wNjUtMS4zOTYuMjk3LTEuOTguODktLjU4Ni41OS0xLjY5IDIuNDk4LTEuODg1IDMuMTIzLS4xOTUuNjI0LS4xMDQgMS41MS4yMjcgMS42NDMuMzI0LjEzMi42OCAwIC45MDgtLjE2NC4yMjctLjE2NS4yMjctMS40OC43NDctMi42LjUyLTEuMTE3IDIuMTEtMS44NCAyLjI3My0xLjk3Mi4xNjQtLjEzMi0uMDMtLjg1NS0uMjktLjkyek00NC4wOTQgMi44M2MtLjU3OC0uMTEtLjg0NCAxLjAyLS41NTIgMS4xNS4yOTIuMTMzIDIuMjczLjQzIDIuODI1LjQ5NC41NTIuMDY2LjkxLjAzMyAxLjA0LjM5NXMtLjAzMyAzLjY1LjE5NCAzLjgxNWMuMjI4LjE2NCAxLjIwMy40OTMgMS4yMDMtLjM2MnMuMTMtNC4zNzQtLjI2LTQuNzAzYy0uMzktLjMyOC0zLjc2Ny0uNjU3LTQuNDUtLjc5ek0yNS41MTggNTUuNzEyYy0uMzkzLjEwNi0uNTIuMzYyLS4xNjIgMS4wNTIuMzU3LjY5IDIuNSAzLjA5IDIuODI1IDMuMDkuMzI2IDAgLjgxMy0uMzk0LjQ4OC0uODItLjMyNS0uNDI4LTIuNjYzLTMuNDUzLTMuMTUtMy4zMjJ6bTIuMjQtMS4wODVjLS4xMy0uMS0uNzEzLjU2LS41ODQuNzkgMCAwIDIuNjk2IDMuNTUgMy4wNTMgNC4wNDQuMzU3LjQ5NC43MTQuNTkzIDEuMDcyLjM5Ni4zNTYtLjE5Ny0uMTMtLjc5LS4zOS0xLjMxNnMtMy4wMi0zLjgxNC0zLjE1LTMuOTEzeiIvPjwvc3ZnPg==" alt="" />
                <div className="header_input">
                    <SearchIcon />
                    <input
                        placeholder="Search JoeBook"
                        type="text" />
                    <input type="text" />
                </div>

                <div className="header_center">
                    <div className="header_option
                header_option--active">
                        <HomeIcon fontSize="large" />
                    </div>

                    <div className="header_option">
                        <FlagIcon fontSize="large" />
                    </div>

                    <div className="header_option">
                        <SubscriptionsOutlinedIcon fontSize="large" />
                    </div>

                    <div className="header_option">

                        <StorefrontOutlinedIcon fontSize="large" />
                    </div>

                    <div className="header_option">
                        <SupervisedUserCircleOutlinedIcon fontSize="large" />

                    </div>

                    <div className="header_right">
                        <div className="header_Info" >
                            <Avatar />
                            <h4>Joseph</h4>
                        </div>

                        <IconButton>
                            <AddIcon />
                        </IconButton>
                        <IconButton>
                            <ForumIcon />
                        </IconButton>
                        <IconButton>
                            <NotificationsActiveIcon />
                        </IconButton>
                        <IconButton>
                            <ExpandMoreIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
};






export default Header
