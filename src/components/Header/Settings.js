import { useState } from 'react';
import { Dialog, DialogTitle } from '@material-ui/core';
import SettingsHealthidoro from './SettingsHealthidoro';
import SettingsPomobasic from './SettingsPomobasic';


const Settings = ({open, setOpen, isHealthidoro, setIsHealthidoro}) => {

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = e => {
    e.preventDefault()
    setOpen(false);
  };


  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);
  const [isBreakAlert, setIsBreakAlert] = useState(true);
  const [isAutoBreak, setIsAutoBreak] = useState(true);
  const [isAutoPomo, setIsAutoPomo] = useState(true);

  const buttonHandler = (setButtonState, buttonState) => {
    setButtonState(!buttonState);
  }

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="settings">
      <DialogTitle id="settings">Settings</DialogTitle>
      <form action="">
        <ul>
          <li>
            <label htmlFor="dark-mode">dark mode</label>
            <button
              aria-labelledby="dark-mode"
              role="switch" aria-checked="true"
              type="button"
              onClick={() => buttonHandler(setIsDarkMode, isDarkMode)}
            >
              <span>on</span>
              <span>off</span>
            </button>
          </li>
          <li>
            <label htmlFor="break-music">play music on break</label>
            <button
              aria-labelledby="break-music"
              role="switch"
              aria-checked="true"
              type="button"
              onClick={() => buttonHandler(setIsPlayingMusic, isPlayingMusic)}
            >
              <span>on</span>
              <span>off</span>
            </button>
          </li>
          <li>
            <label htmlFor="break-alert">alert on break</label>
            <button
              aria-labelledby="break-alert"
              role="switch"
              aria-checked="false"
              type="button"
              onClick={() => buttonHandler(setIsBreakAlert, isBreakAlert)}
            >
              <span>on</span>
              <span>off</span>
            </button>
          </li>
          <li>
            <label htmlFor="autostart-break">autostart break</label>
            <button
              aria-labelledby="autostart-break"
              role="switch"
              aria-checked="true"
              onClick={() => buttonHandler(setIsAutoBreak, isAutoBreak)}
            >
              <span>on</span>
              <span>off</span>
            </button>
          </li>
          <li>
            <label htmlFor="autostart-pomo">autostart pomo</label>
            <button
              aria-labelledby="autostart-pomo"
              role="switch"
              aria-checked="true"
              onClick={() => buttonHandler(setIsAutoPomo, isAutoPomo)}
            >
              <span>on</span>
              <span>off</span>
            </button>
          </li>
          {isHealthidoro ? <SettingsHealthidoro /> : <SettingsPomobasic />}
        </ul>

        <button type="submit" onClick={e => handleSubmit(e)}>ok</button>
      </form>
    </Dialog>
  )
}

export default Settings;