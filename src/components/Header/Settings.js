import { useState } from 'react';
import { Dialog, DialogTitle } from '@material-ui/core';
import SettingsHealthidoro from './SettingsHealthidoro';
import SettingsPomobasic from './SettingsPomobasic';


const Settings = ({
  open, setOpen, isHealthidoro, setIsHealthidoro, 
  isMusicOnBreak, setIsMusicOnBreak, 
  isAutoBreak, setIsAutoBreak, isAutoPomo, setIsAutoPomo, isBreakAlert, setIsBreakAlert
}) => {

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = e => {
    e.preventDefault()
    setOpen(false);
  };


  const [isDarkMode, setIsDarkMode] = useState(true);


  const buttonHandler = (e, setButtonState, buttonState) => {
    e.preventDefault();
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
              role="switch" 
              aria-checked="true"
              type="button"
              onClick={e => buttonHandler(e, setIsDarkMode, isDarkMode)}
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
              onClick={e => buttonHandler(e, setIsMusicOnBreak, isMusicOnBreak)}
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
              onClick={e => buttonHandler(e, setIsBreakAlert, isBreakAlert)}
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
              onClick={e => buttonHandler(e, setIsAutoBreak, isAutoBreak)}
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
              onClick={e => buttonHandler(e, setIsAutoPomo, isAutoPomo)}
            >
              <span>on</span>
              <span>off</span>
            </button>
          </li>
          {isHealthidoro ? <SettingsHealthidoro /> : <SettingsPomobasic />}
        </ul>

        <button type="submit" onClick={handleSubmit}>ok</button>
      </form>
    </Dialog>
  )
}

export default Settings;