import React from 'react'
import './Sidebar.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* sidebarLeft */}
      <div className='sidebarLeft'>
        <div className='serverIcon'>
          <img src="./discord-mark-white.png" alt="" />
        </div>
        <div className='serverIcon'>
          <img src="./discord-mark-white.png" alt="" />
        </div>
      </div>


      {/* sidebarRight */}
      <div className='sidebarRight'>
        <div className="sidebarTop">
          <h3>サーバー名</h3>
          <ExpandMoreIcon />
        </div>
        <div className="sidebarChannels">

          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>仮置きチャンネル</h4>
            </div>
            <AddIcon className='sidebarAddIcon' />
          </div>

          <div className="sidebarChannelList">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />

          </div>

          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <div className='accountStatus'>
                <img src="./くまピクミン.jpg" alt="" className="accountImg" />
                <div className="accountName">
                  <h4>taku</h4>
                  <span>#1125</span>
                </div>
              </div>

              <div className="sidebarVoice">
                <MicIcon className='sidebarVoiceIcon'/>
                <HeadsetIcon className='sidebarVoiceIcon'/>
                <SettingsIcon className='sidebarVoiceIcon'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar