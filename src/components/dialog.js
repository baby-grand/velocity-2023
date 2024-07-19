import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Talent from "../sections/talent";
import Founders from "../sections/founders";
import RegionalPriorities from "../sections/regionalPriorities";

export default function ScrollDialog(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
    // clear all classes from body tag
    document.body.className = '';
  };



  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Box onClick={handleClickOpen('paper')}>{props.children}</Box>
      <Dialog
        id={'dialog-id-'+props.trigger}
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={{
          // backdrop:
          '& .MuiBackdrop-root': {
            backgroundColor: 'transparent',
          },
          '& .MuiDialog-paper': {
            backgroundColor: theme.extraColors.bgSofter,
            boxShadow: {
              xs: props.trigger === 'talent' ? '-10px 0px 0px #03FFDA' : props.trigger === 'founders' ? '-10px 0px 0px #FBC02E' : props.trigger === 'regional_priorities' ? '-10px 0px 0px #FF24A1' : null,
              md: props.trigger === 'talent' ? '-12px 0px 0px #03FFDA' : props.trigger === 'founders' ? '-12px 0px 0px #FBC02E' : props.trigger === 'regional_priorities' ? '-12px 0px 0px #FF24A1' : null,
              lg: props.trigger === 'talent' ? '-30px 0px 0px #03FFDA' : props.trigger === 'founders' ? '-30px 0px 0px #FBC02E' : props.trigger === 'regional_priorities' ? '-30px 0px 0px #FF24A1' : null,
            },
            //backgroundImage: `url(${TalentBgImage})`,
            width: '100%',
            maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '1200px', xl: '1320px' },
            height: '100%',
            maxHeight: '100%',
            margin: 0,
            borderRadius: 0,
            border: 'none',
          },
          '& .MuiDialog-container': {
            width: '100%',
            maxWidth: {
              xs: 'calc(100% - 30px)',
              sm: 'calc(100% - 40px)',
              md: 'calc(100% - 148px)',
              lg: 'calc(100% - 220px)',
              xl: '1320px'
            },
            height: '100%',
            maxHeight: {
              xs: 'calc(100% - 70px)',
              sm: 'calc(100% - 94px)',
              md: 'calc(100% - 120px)',
              lg: 'calc(100% - 160px)',
              xl: 'calc(100% - 160px)'
            },
            margin: {
              xs: '55px auto 0 auto',
              sm: '75px auto 0 auto',
              md: '100px auto 0 auto',
              lg: '130px auto 0 auto',
              xl: '130px auto 0 auto',
            },
            borderRadius: 0,
          },

        }}
      >
        {/* <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle> */}
        <DialogContent dividers={scroll === 'paper'} sx={{ border: 'none', padding: 0 }} data-scroll-to-top>
          <DialogContentText
            component="div"
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            sx={{
              color: theme.extraColors.black,
            }}
          >

            {
              props.trigger === 'talent' ? <Talent handleClose={handleClose} />
            : props.trigger === 'founders' ? <Founders handleClose={handleClose} />
            : props.trigger === 'regional_priorities' ? <RegionalPriorities handleClose={handleClose} />
            : null
            }

          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}