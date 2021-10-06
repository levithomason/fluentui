import * as React from "react";
import {
  makeStyles,
  FluentProvider,
  teamsDarkTheme,
  Avatar,
  Button,
  AvatarProps,
} from "@fluentui/react-components";
import { CallEnd24Filled as HangUpIcon } from "@fluentui/react-icons";

const useStyles = makeStyles({
  layoutRoot: {
    width: "100vw",
    height: "100vh",
    display: "grid",
    gridTemplate: `
      "layout-toolbar layout-toolbar" auto
      "layout-canvas  layout-canvas"  1fr / 
       1fr            1fr
    `,
  },

  layoutToolbar: (theme) => ({
    gridArea: "layout-toolbar",
    padding: "4px 8px",
    background: theme.alias.color.neutral.neutralBackground1,
  }),

  layoutCanvas: {
    gridArea: "layout-canvas",
    display: "grid",
    gridTemplate: `
      "image avatars" auto
      "image avatars" auto /
       3fr   1fr
    `,
  },

  layoutCanvasAvatars: {
    gridArea: "avatars",
    display: "flex",
    justifyContent: "space-around",
    alignContent: "space-around",
    flexWrap: "wrap",
  },

  canvasVideos: {
    gridArea: "image",
    display: "flex",
    flexDirection: "column",
  },

  canvasVideo: {
    flex: 1,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },

  hangupButton: theme => ({
    background: theme.alias.color.red.background3,
  })
});

const useAvatarStyles = makeStyles({
  canvasAvatar: {
    cursor: 'pointer',
    margin: "16px",
  },
});

function AvatarTile(props: {
  active?: boolean;
  imageUrl?: string;
  name?: AvatarProps["name"];
}) {
  const classes = useAvatarStyles();
  const [isActive, setActive] = React.useState(props.active);
  const handleClick = React.useCallback(
    () => setActive(!isActive),
    [isActive, setActive]
  );

  return (
    <Avatar
      onClick={handleClick}
      active={isActive ? "active" : "inactive"}
      activeAppearance="ring"
      className={classes.canvasAvatar}
      image={{ src: props.imageUrl }}
      name={props.name}
      size={128}
    />
  );
}

function App() {
  const classes = useStyles();

  return (
    <FluentProvider theme={teamsDarkTheme}>
      <div className={classes.layoutRoot}>
        <div className={classes.layoutToolbar}>
          <Button className={classes.hangupButton} icon={<HangUpIcon />}>Leave</Button>
        </div>
        <div className={classes.layoutCanvas}>
          <div className={classes.canvasVideos}>
            <div
              className={classes.canvasVideo}
              style={{
                background: 'url("https://picsum.photos/id/986/1200/600")',
              }}
            />
            <div
              className={classes.canvasVideo}
              style={{
                background: 'url("https://picsum.photos/id/974/1200/600")',
              }}
            />
          </div>
          <div className={classes.layoutCanvasAvatars}>
            <AvatarTile
              name="Jane Doe"
              imageUrl="https://picsum.photos/id/1027/240"
            />
            <AvatarTile
              name="Jane Doe"
              imageUrl="https://picsum.photos/id/1027/240"
            />
            <AvatarTile
              name="Jane Doe"
              imageUrl="https://picsum.photos/id/1027/240"
            />
            <AvatarTile
              name="Jane Doe"
              imageUrl="https://picsum.photos/id/1027/240"
              active
            />
          </div>
        </div>
      </div>
    </FluentProvider>
  );
}

export default App;
