import { useState } from 'react'
import axios from "axios";
import PlaylistList from './components/PlaylistList';
import classes from "./App.module.css"

function App() {

   // new line start
  const [profileData, setProfileData] = useState(null)

  function getData() {
    axios({
      method: "GET",
      url:"/getTracks",
    })
    .then((response) => {
      const res = response.data
      console.log(res)
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
    <>
      <div className={classes.body}>
          <h1 className={classes.text}>To get your profile details: </h1>
      </div>
      <div>
          <button onClick={getData} className={classes.button}>See Your Results</button>
          {profileData && <div>
            <h1>All Playlists: </h1>
              <PlaylistList playLists={profileData} />
            <h2>Average Score: </h2>
              <p>{profileData.avg_score}</p>
            </div>
          }
      </div>
    </>
  );
}

export default App;