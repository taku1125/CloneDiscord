import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './SidebarChannelContent.scss'

const SidebarChannelContent = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className='sidebarChannelContents'>
      <div className="sidebarChannelsHeader">
        <div className="sidebarHeader" onClick={() => setIsHidden(!isHidden)}>
          {isHidden ?
            <ChevronRightIcon />
            :
            <ExpandMoreIcon />
          }
          <h4>仮置きチャンネル</h4>
        </div>
        <AddIcon className='sidebarAddIcon' onClick={() => alert("aaaaaaa")}/>
      </div>

      <div className="sidebarChannelList" hidden={isHidden}>
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
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
    </div>
  )
}

export default SidebarChannelContent