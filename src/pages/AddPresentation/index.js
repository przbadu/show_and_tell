import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import { Card, CardContent } from "@material-ui/core";
import AppInput from "../../components/form/AppInput";
import { UserContext } from "../../providers/userProvider";

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
  // const user = useContext(UserContext);
  const classes = useStyles();
  const history = useHistory();
  const [form, setForm] = React.useState({
    title: "",
    link: "",
    presenter: "",
    creator: "",
  });

  const handleClose = () => {
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
        open
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

              {/* this should be dropdown or Fixed list of user to select from */}
              <AppInput
                title="Who did the presentation?"
                name="presenter"
                value={form.presenter}
                onChange={handleChange}
              />
            </form>
          </CardContent>
        </Card>
      </Dialog>
    </div>
  );
}
