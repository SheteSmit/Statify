import { useState } from 'react'
import axios from "axios";
import PlaylistList from './components/PlaylistList';
import "./App.css"

function App() {

   // new line start
  const [profileData, setProfileData] = useState(null)

  function getData() {
    axios({
      method: "GET",
      url:"/getTracks",
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        playlists: res.playlists,
        avg_score: res.avg_score,
        images: res.images}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}
    //end of new line 

  return (
    <div className="App">
        {/* new line start*/}
        <p>To get your profile details: </p><button onClick={getData} className="button-62">Click me</button>
        {profileData && <div>
          <h1>All Playlists: </h1>
            <PlaylistList playLists={profileData} />
          <h2>Average Score: </h2>
            <p>{profileData.avg_score}</p>
            </div>
        }
         {/* end of new line */}
    </div>
  );
}

export default App;