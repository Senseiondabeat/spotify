import React from 'react';
import './Body.css';
import Header from './Header';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify}/>

      <div className="body_info">
          <img src="https://cdn.vox-cdn.com/thumbor/Dxsdcn27a8LFLU1L22kn3Y3mYFk=/0x0:1000x687/920x613/filters:focal(424x212:584x372):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69028826/r_13086e68997581e587cccbd972d1d169.1000x978x1.0.png" 
          alt="" 
          />
          <div className="body_infoText">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>description...</p>
          </div>
      </div>
    </div>
  );
}

export default Body;
