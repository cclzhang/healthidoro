import React, { useState, useRef, useEffect } from 'react';
import shortSong from '../../assets/shortSong.mp3';
import longSong from '../../assets/longSong.mp3';

const MusicPlayer = ({timerType}) => {

  const [isMuted, setIsMuted] = useState(false);
  const [audioFile, setAudioFile] = useState(shortSong);
  const audioEl = useRef(null);

  useEffect(() => {
    if (timerType === 'shortBreak') {
      fetch(shortSong)
        .then(() => {
          setAudioFile(shortSong);
        })
        .then(() => {
          return audioEl.current.play();
        })
        .catch(error => {
          console.log("this is the short audio error: ", error, "This is audioEl", audioEl.current)
        })
    } else if (timerType === 'longBreak') {
      fetch(longSong)
        .then(() => {
          setAudioFile(longSong);
        })
        .then(() => {
          return audioEl.current.play();
        })
        .catch(error => {
          console.log("this is the long audio error: ", error, "This is audioEl", audioEl.current)
        })
    } else {
      console.log('short and long audio is false')
    }

    return audioEl.current.pause();
  });

  return (
    <section className="musicPlayer">
      <button onClick={() => { setIsMuted(!isMuted) }}>mute</button>
      {isMuted
        ? <audio muted src={audioFile} ref={audioEl} ></audio>
        : <audio src={audioFile} ref={audioEl} ></audio>
      }
    </section>
  )
}

export default MusicPlayer;

