import {
  memo,
  useRef,
  useState,
  SyntheticEvent,
  MouseEvent,
} from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  useTheme,
  Snackbar,
  IconButton,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import SendIcon from "@material-ui/icons/Send";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.type === "dark" ? "#091c34" : "#ccff90",
      paddingBottom: theme.spacing(5),
    },
    wave: {
      width: "100%",
      height: theme.spacing(50),
      [theme.breakpoints.down("md")]: {
        height: theme.spacing(25),
      },
    },
    left: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    leftContainer: {
      flexGrow: 1,
    },
    iconsGrid: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    socialItem: {
      display: "flex",
      alignItems: "center",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      "&:hover": {
        textDecoration: "none",
        color: theme.palette.secondary.light,
      },
    },
    illustrationContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    illustration: {
      width: "80%",
    },
    sendButton: {
      marginTop: theme.spacing(2),
    },
  })
);

function Footer() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const nameRef = useRef<HTMLInputElement>(null!);
  const emailRef = useRef<HTMLInputElement>(null!);
  const messageRef = useRef<HTMLInputElement>(null!);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (
    _event: SyntheticEvent | MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };


  return (
    <footer className={classes.root}>
      <img
        className={classes.wave}
        src={
          theme.palette.type === "dark"
            ? "/assets/footer-wave-dark.svg"
            : "/assets/footer-wave-light.svg"
        }
        alt="wave for styling and separating sections"
      />
      <Container id="contact">
        <Grid container>
          <Grid item md={6} sm={12}>
            <Typography variant="h3" align="left">
              Connect with me
            </Typography>
            <article
              itemScope
              itemType="http://schema.org/Author"
              className={classes.left}
            >
              <Grid container className={classes.leftContainer}>
                <Grid item md={6} sm={6} className={classes.iconsGrid}>
                  <Link
                    className={classes.socialItem}
                    href="https://github.com/anshuvermaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <GitHubIcon className={classes.icon} fontSize="large" />

                    <Typography>Github</Typography>
                  </Link>

                  <Link
                    className={classes.socialItem}
                    href="https://www.linkedin.com/in/anshu-verma-747b6513a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <LinkedInIcon className={classes.icon} fontSize="large" />

                    <Typography>LinkedIn</Typography>
                  </Link>

                  <Link
                    className={classes.socialItem}
                    href="https://twitter.com/anshuvermaa_"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <TwitterIcon className={classes.icon} fontSize="large" />

                    <Typography>Twitter</Typography>
                  </Link>

                  <Link
                    className={classes.socialItem}
                    href="mailto:anshuverma.av2187@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <MailIcon fontSize="large" className={classes.icon} />
                    <Typography>anshuverma.av2187@gmail.com</Typography>
                  </Link>
                </Grid>

                <Grid
                  item
                  md={6}
                  sm={6}
                  className={classes.illustrationContainer}
                >
                </Grid>
              </Grid>
            </article>
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography variant="h3" align="left">
              Say Hi
            </Typography>
            <form action="https://formsubmit.co/anshuverma.av2187@gmail.com" method="POST">
              <TextField
                label="Name"
                fullWidth
                margin="dense"
                variant="outlined"
                color="secondary"
                inputRef={nameRef}
                required
                id="form-name"
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="dense"
                variant="outlined"
                color="secondary"
                inputRef={emailRef}
                required
                placeholder="So I can get back to you"
                id="form-email"
              />
              <TextField
                label="Message"
                fullWidth
                margin="dense"
                multiline
                rows={5}
                variant="outlined"
                color="secondary"
                inputRef={messageRef}
                required
                id="form-message"
              />
              <Button
                variant="outlined"
                className={classes.sendButton}
                color="secondary"
                endIcon={<SendIcon />}
                type="submit"
              >
                send
              </Button>
            </form>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              action={
                <>
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={handleClose}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </>
              }
            />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default memo(Footer);
