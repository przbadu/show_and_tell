import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Slide from "@material-ui/core/Slide";
import { useHistory } from "react-router-dom";
import { Card, CardContent } from "@material-ui/core";
import AppInput from "../../components/form/AppInput";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddPresentationPage() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(true);
  const [form, setForm] = React.useState({
    title: "",
    link: "",
    presenter: "",
    creator: "",
  });

  const handleClose = () => {
    setOpen(false);
    history.push("/");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {};

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <FontAwesomeIcon icon={faTimes} />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Add Presentation
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSave}>
              save
            </Button>
          </Toolbar>
        </AppBar>

        <Card>
          <CardContent>
            <form noValidate autoComplete="off">
              <AppInput
                title="What was the presentation about?"
                name="title"
                value={form.title}
                onChange={handleChange}
              />

              <AppInput
                title="Presentation hosted link (e.g: google slide link)"
                name="link"
                value={form.link}
                onChange={handleChange}
              />
            </form>
          </CardContent>
        </Card>
      </Dialog>
    </div>
  );
}
