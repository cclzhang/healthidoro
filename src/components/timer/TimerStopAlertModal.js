import { Dialog, DialogTitle, DialogActions} from '@material-ui/core';

const TimerStopAlertModal = ({open, setOpen, setTimerMode}) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleForceStop = () => {
    setTimerMode('empty');
    setOpen(false);
  }

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="stopAlert">
      <DialogTitle id="stopAlert">are you sure you want to reset timer</DialogTitle>
      <DialogActions>
        <button onClick={handleForceStop}>yes</button>
        <button onClick={handleClose}>no</button>
      </DialogActions>
    </Dialog>
  );
}

export default TimerStopAlertModal;