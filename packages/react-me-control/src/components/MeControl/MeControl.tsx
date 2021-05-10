import * as React from 'react';

import {
  Avatar,
  Button,
  Divider,
  Image,
  makeStyles,
  Menu,
  MenuDivider,
  MenuItem,
  MenuItemRadio,
  MenuList,
  MenuTrigger,
} from '@fluentui/react-components';
import {
  ClockIcon,
  ResetIcon,
  ChevronRightIcon,
  NavigateExternalInlineIcon,
  EditIcon,
  ChevronLeftIcon,
  InfoIcon,
  StatusCircleOuterIcon,
  AwayStatusIcon,
  Blocked2SolidIcon,
  CircleRingIcon,
} from '@fluentui/react-icons-mdl2';
import { SkypeCircleCheckIcon } from '@fluentui/react-icons-mdl2-branded';

export interface MeControlProps {}

const AVATAR_SIZE = 48;
const CONTAINER_PADDING_X = 16;
const AVATAR_GAP = 12;
const LEFT_PADDING = CONTAINER_PADDING_X + AVATAR_SIZE + AVATAR_GAP;

const ROOT_VIEW = 'root';
const EDIT_STATUS_MESSAGE_VIEW = 'edit-status-message';

const ____fakeDataStore = {
  statusMessage: "I'm out today until 6PM",
  email: 'kellygoss@outlook.com',
  name: 'Kelly Goss',
};
const fakeMutation = data => Object.assign(____fakeDataStore, data);
const fakeQuery = () => ({ ...____fakeDataStore });

const useStyles = makeStyles({
  root: theme => ({
    width: '320px',
    minHeight: '200px',
    background: theme.alias.color.neutral.neutralBackground1,
    boxShadow: theme.alias.shadow.shadow8,
  }),

  logo: {
    gridArea: 'logo',
    height: '25px',
    // TODO: spec says elevation is [optional], even though it is in the default variant.
    //       remove default shadows from image styles
    boxShadow: 'none',
    // TODO: spec says border is "none" in default variant.
    //       remove from image styles
    border: 'none',
  },

  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `16px ${CONTAINER_PADDING_X}px 8px`,
  },

  userInfoRow: {
    display: 'grid',
    gap: '12px',
    gridTemplate: `
           "avatar name"    auto
           "avatar email"   auto /
            auto   1fr
          `,
    padding: `8px ${CONTAINER_PADDING_X}px 4px`,
  },

  avatar: { gridArea: 'avatar' },

  name: { gridArea: 'name', fontWeight: 'bold', fontSize: '24px', lineHeight: '20px' },

  email: { gridArea: 'email', fontSize: '14px', lineHeight: '16px' },

  statusMessage: {
    background: '#eee',
    padding: '16px 12px',
    margin: `0 ${CONTAINER_PADDING_X}px 8px ${LEFT_PADDING}px`,
  },
  statusMessageDisplayUntil: { fontSize: '80%', marginTop: '16px' },

  editStatusMessageRoot: {
    padding: ' 16px',
  },
  editStatusMessageTextArea: theme => ({
    height: '240px',
    width: '100%',
    fontFamily: 'inherit',
    resize: 'none',
    background: theme.alias.color.neutral.neutralBackground2,
    overflowX: 'hidden',
    overflowY: 'scroll',
    border: 'none',
    borderBottom: `2px solid ${theme.alias.color.brand.brandBackground}`,
  }),

  menuItem: { paddingLeft: `${LEFT_PADDING}px` },

  available: theme => ({
    color: theme.alias.color.lime.foreground3,
  }),
  busy: theme => ({
    color: theme.alias.color.cranberry.foreground3,
  }),
  doNotDisturb: theme => ({
    color: theme.alias.color.cranberry.foreground3,
  }),
  beRightBack: theme => ({
    color: theme.alias.color.peach.foreground3,
  }),
  appearAway: theme => ({
    color: theme.alias.color.peach.foreground3,
  }),
  appearOffline: theme => ({
    // TODO: do outline color, gray in light theme, white in contrast theme
    // color: theme.alias.color.red.foreground1,
  }),
});

const StatusMessageTextArea: React.FunctionComponent = () => {
  const { statusMessage } = fakeQuery();
  const styles = useStyles();

  const handleChangeStatusMessage = React.useCallback(e => {
    fakeMutation({ statusMessage: e.target.value });
  }, []);

  return (
    <textarea className={styles.editStatusMessageTextArea} onInput={handleChangeStatusMessage}>
      {statusMessage}
    </textarea>
  );
};

export const MeControl: React.FunctionComponent<MeControlProps> = props => {
  const { statusMessage, name, email } = fakeQuery();

  const styles = useStyles();
  const [view, setView] = React.useState(ROOT_VIEW);
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState('available');

  const handleTriggerClick = React.useCallback(() => {
    setOpen(!open);
  }, []);

  const handleEditStatus = React.useCallback(() => {
    setView(EDIT_STATUS_MESSAGE_VIEW);
  }, []);

  const handleChangeStatus = React.useCallback((e, name, checkedItems) => {
    setStatus(checkedItems[0]);
    setOpen(false);
  }, []);

  const handleBack = React.useCallback(() => {
    setView(ROOT_VIEW);
  }, []);

  const handleChangeName = React.useCallback(() => {
    alert('handleChangeName');
  }, []);

  const handleChangeProfilePicture = React.useCallback(() => {
    alert('handleChangeProfilePicture');
  }, []);

  return (
    <div>
      <pre>
        {JSON.stringify(
          {
            view,
            open,
            name,
            email,
            status,
            statusMessage,
          },
          null,
          2,
        )}
      </pre>

      {/* TODO: Root slot is a menu*/}
      {/* TODO: note, we do not document the anatomy of the Menu well, the menuPopup is secret. Make it known.*/}
      <Menu
        // TODO: temp controlled menu since click inside closes
        open={open}
        className={styles.root}
      >
        <MenuTrigger>
          <Button iconOnly icon={<Avatar size={20} badge="success" />} primary onClick={handleTriggerClick} />
        </MenuTrigger>
        {(view === ROOT_VIEW && (
          <MenuList>
            <div className={styles.headerRow}>
              <Image
                src="https://www.backbase.com/wp-content/uploads/2020/05/Microsoft-Logo-PNG-Transparent.png"
                className={styles.logo}
              />
              <Button transparent size="small" style={{ gridArea: 'signout' }}>
                Sign out
              </Button>
            </div>
            <div className={styles.userInfoRow}>
              {/* TODO: hover/click to edit pic */}
              <Avatar
                className={styles.avatar}
                badge="success"
                size={AVATAR_SIZE}
                onClick={handleChangeProfilePicture}
              />
              <span className={styles.name}>
                {name}
                <Button transparent iconOnly icon={<EditIcon />} onClick={handleChangeName} />
              </span>
              <span className={styles.email}>{email}</span>
            </div>
            {status && (
              <div className={styles.statusMessage}>
                <div>{statusMessage}</div>
                <div className={styles.statusMessageDisplayUntil}>
                  {/* TODO: display until should be pulled from some state */}
                  Display until 11:59 PM
                </div>
              </div>
            )}
            <MenuList>
              <Menu hasCheckmarks hasIcons>
                <MenuTrigger>
                  <MenuItem secondaryContent={<ChevronRightIcon />} className={styles.menuItem} submenuIndicator={null}>
                    Available
                  </MenuItem>
                </MenuTrigger>
                {/* TODO: this callback should be (e, data) so 
                        1. we can include more data in the object later
                        2. we stay consistent across all component callbacks 
              */}
                <MenuList checkedValues={{ status: [status] }} onCheckedValueChange={handleChangeStatus}>
                  <MenuItemRadio
                    name="status"
                    value="available"
                    icon={<SkypeCircleCheckIcon className={styles.available} />}
                  >
                    Available
                  </MenuItemRadio>
                  <MenuItemRadio name="status" value="busy" icon={<StatusCircleOuterIcon className={styles.busy} />}>
                    Busy
                  </MenuItemRadio>
                  <MenuItemRadio
                    name="status"
                    value="do-not-disturb"
                    icon={<Blocked2SolidIcon className={styles.doNotDisturb} />}
                  >
                    Do Not Disturb
                  </MenuItemRadio>
                  <MenuItemRadio
                    name="status"
                    value="be-right-back"
                    icon={<AwayStatusIcon className={styles.beRightBack} />}
                  >
                    Be Right Back
                  </MenuItemRadio>
                  <MenuItemRadio
                    name="status"
                    value="appear-away"
                    icon={<AwayStatusIcon className={styles.appearAway} />}
                  >
                    Appear Away
                  </MenuItemRadio>
                  <MenuItemRadio
                    name="status"
                    value="appear-offline"
                    icon={<CircleRingIcon className={styles.appearOffline} />}
                  >
                    Appear Offline
                  </MenuItemRadio>
                  <MenuDivider />
                  <MenuItem icon={<ClockIcon />}>Duration</MenuItem>
                  <MenuDivider />
                  <MenuItem icon={<ResetIcon />}>Reset Status</MenuItem>
                </MenuList>
              </Menu>
            </MenuList>
            {/*
           TODO: we do not support a navigation style menu
                 where icons are used to indicate change of UI but not for pointing to a nested menu.
        */}
            {/*
          TODO: secondaryContent does not align with the submenuIndicator
                the secondary content is too close to the right of the menu item compared to an indicator icon
        */}
            <MenuItem secondaryContent={<ChevronRightIcon />} className={styles.menuItem} onClick={handleEditStatus}>
              Set status message
            </MenuItem>
            <MenuItem secondaryContent={<NavigateExternalInlineIcon />} className={styles.menuItem}>
              My Microsoft account
            </MenuItem>
          </MenuList>
        )) ||
          (view === EDIT_STATUS_MESSAGE_VIEW && (
            <div className={styles.editStatusMessageRoot}>
              <Button transparent icon={<ChevronLeftIcon />} iconPosition="before" onClick={handleBack}>
                Back
              </Button>
              <Divider />
              <div>
                <label>Status ({email})</label>
                <StatusMessageTextArea />
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Show when people message me <InfoIcon />
                </label>
              </div>
              <div>
                <label>Clear status message after</label>
                <select>
                  <option value="Today">Today</option>
                  <option value="1 hour">1 hour</option>
                </select>
              </div>
              <div>
                <Button primary>Done</Button>
              </div>
            </div>
          ))}
      </Menu>
    </div>
  );
};

MeControl.displayName = 'MeControl';
