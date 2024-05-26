import './App.css';

function App() {
  return (
    <div>
      <div className="header">
          <div className="header-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/VK_Full_Logo_%282021-present%29.svg/2560px-VK_Full_Logo_%282021-present%29.svg.png" alt=""/> </div>
          <div className="header-find">
              <label htmlFor=""></label>
              <input type="text"/>
          </div>
          <div className="header-events"><img src="https://icon-icons.com/icons2/936/PNG/512/musical-bell-outline_icon-icons.com_73481.png" alt=""/></div>
          <div className="header-music"><img src="https://pic.onlinewebfonts.com/thumbnails/icons_562056.svg" alt=""/></div>
          <div className="header-services"><img src="https://icon-icons.com/icons2/2719/PNG/512/dots_nine_icon_175235.png" alt=""/></div>
          <div className="header-profile"><img src="https://icon-icons.com/icons2/1904/PNG/512/profile_121261.png" alt=""/></div>
      </div>
    </div>
  );
}

export default App;
