import { useState } from 'react'
import { episodeList } from './data'
import Episode from './Episode'





function App() {
  const [num, setNum] = useState(0)
  const [stateEpisode, setStateEpisode] = useState(episodeList)



return(
  <div className='episodeContainer'>
  <h1>Dark Echoes</h1>
  <h2></h2>
  {episodeList.map(episode=><Episode key={episode.id} id={episode.id} title = {episode.title} description = {episode.description}/>)}
  




  </div>
)


}










export default App
  // TODO

