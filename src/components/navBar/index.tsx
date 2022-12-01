import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListIcon from "../../images/list.png";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EmailIcon from "@mui/icons-material/Email";
import HandymanIcon from "@mui/icons-material/Handyman";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import InfoIcon from "@mui/icons-material/Info";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import logo from "../../images/logoKendall.png";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

type Anchor = "left";

const NavBar = () => {
  const [state, setState] = React.useState({
    left: false,
  });
  let navigate = useNavigate();

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const itemsList = [
    {
      text: "Intro",
      icon: <EmojiPeopleIcon />,
      onClick: () => navigate("/home"),
    },
    {
      text: "About Me",
      icon: <InfoIcon />,
      onClick: () => navigate("/about"),
    },
    {
      text: "Skills",
      icon: <HandymanIcon />,
      onClick: () => navigate("/skills"),
    },
    {
      text: "Projects",
      icon: <OpenInBrowserIcon />,
      onClick: () => navigate("/projects"),
    },
    {
      text: "Contact",
      icon: <EmailIcon />,
      onClick: () => navigate("/contact"),
    },
  ];

  //could be moved:
  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {itemsList.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={item.onClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="NavBar">
      <img className="Logo" src={logo} alt="Kendall's custom logo" />
      <aside>
        {(["left"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <img className="NavigationMenu" src={ListIcon} alt="Menu Icon" />
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </aside>
    </div>
  );
};

export default NavBar;
