import { Dialog, DialogTitle, DialogContent, DialogActions} from '@material-ui/core';

const TimerStopAlertModal = ({open, setOpen}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="stopAlert">
      <DialogTitle id="stopAlert">are you sure you want to reset timer</DialogTitle>
      <DialogActions>
        <button>yes</button>
        <button>no</button>
      </DialogActions>
    </Dialog>
  );
}

export default TimerStopAlertModal;