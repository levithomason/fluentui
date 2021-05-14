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
  DeleteIcon,
} from '@fluentui/react-icons-mdl2';
import { SkypeCircleCheckIcon } from '@fluentui/react-icons-mdl2-branded';
import { AvatarBadge, AvatarBadgeProps } from '../../../../react-avatar/src';

export interface MeControlProps {}

const AVATAR_SIZE = 48;
const CONTAINER_PADDING_X = 16;
const AVATAR_GAP = 12;
const LEFT_PADDING = CONTAINER_PADDING_X + AVATAR_SIZE + AVATAR_GAP;

const ROOT_VIEW = 'root';
const EDIT_STATUS_MESSAGE_VIEW = 'edit-status-message';

const __fakeDataStore = {
  statusMessage: "I'm out today until 6PM",
  email: 'kellygoss@outlook.com',
  name: 'Kelly Goss',
};
const fakeMutation = data => Object.assign(__fakeDataStore, data);
const fakeQuery = () => ({ ...__fakeDataStore });

/**
 * Phase 2 items:
 *  Avatar presence/status indicator
 *  Edit profile picture
 *  Edit name
 *  Status dropdown menu item
 *  Displaying current status message
 *  Edit/Remove current status message
 *  Set status message menu item
 */

const useStyles = makeStyles({
  root: theme => ({
    width: '320px',
    minHeight: '200px',
    background: theme.alias.color.neutral.neutralBackground1,
    boxShadow: theme.alias.shadow.shadow8,
    borderRadius: theme.global.borderRadius.medium,
  }),

  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: `16px ${CONTAINER_PADDING_X}px 8px`,
  },

  logo: {
    gridArea: 'logo',
    height: '20px',
    // TODO: spec says elevation is [optional], even though it is in the default variant.
    //       remove default shadows from image styles
    boxShadow: 'none',
    // TODO: spec says border is "none" in default variant.
    //       remove from image styles
    border: 'none',
  },

  signoutButton: {
    gridArea: 'signout',
    // TODO: ask design about this, it should be styled like text and aligned to its container.
    //       the button padding and min sizes make it impossible to align the text to the container.
    padding: 0,
    height: 'auto',
    width: 'auto',
    minWidth: 0,
    minHeight: 0,
  },

  userInfoRow: {
    display: 'grid',
    columnGap: '12px',
    gridTemplate: `
      "avatar name  editName"    auto
      "avatar email email"   auto /
       auto   1fr   auto
    `,
    margin: `20px ${CONTAINER_PADDING_X}px 4px`,
  },

  avatar: { gridArea: 'avatar' },

  nameContainer: {
    gridArea: 'name',
    display: 'flex',
    alignItems: 'flex-end',
  },

  name: theme => ({
    // TODO: note, figma designs have bold name, not semi-bold, but there is no bold token
    fontWeight: theme.global.type.fontWeights.semibold,
    fontSize: theme.global.type.fontSizes.base[300],
    lineHeight: theme.global.type.fontSizes.base[300],
  }),

  editNameButton: theme => ({
    gridArea: 'editName',
    padding: 0,
    margin: '0 0 0 12px',
    height: '12px',
    width: '12px',
    minHeight: '12px',
    minWidth: '12px',
    color: theme.alias.color.neutral.neutralForeground2,
  }),
  editNameIcon: {
    transform: 'scale(0.6)', // default 20px icon down to 12px
  },

  email: theme => ({
    gridArea: 'email',
    fontSize: theme.global.type.fontSizes.base[200],
    lineHeight: theme.global.type.fontSizes.base[200],
    color: theme.alias.color.neutral.neutralForeground2,
  }),

  statusMessage: theme => ({
    position: 'relative',
    background: theme.alias.color.neutral.neutralBackground3,
    padding: '8px',
    margin: `8px ${CONTAINER_PADDING_X}px 8px ${LEFT_PADDING}px`,
    borderRadius: theme.global.borderRadius.medium,
    fontSize: theme.global.type.fontSizes.base[300],
    lineHeight: theme.global.type.fontSizes.base[300],
    ':hover': {
      '& .status-message-controls': {
        display: 'block',
      },
    },
  }),
  statusMessageDisplayUntil: theme => ({
    marginTop: '8px',
    fontSize: theme.global.type.fontSizes.base[100],
    lineHeight: theme.global.type.fontSizes.base[100],
    color: theme.alias.color.neutral.neutralForeground2,
  }),
  statusMessageButtons: theme => ({
    position: 'absolute',
    // display: 'none',
    bottom: 0,
    right: 0,
  }),
  editStatusMessageIcon: theme => ({
    fontSize: theme.global.type.fontSizes.base[300],
  }),
  removeStatusMessageIcon: theme => ({
    fontSize: theme.global.type.fontSizes.base[300],
  }),

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

  statusMenu: theme => ({
    width: '237px',
    borderRadius: theme.global.borderRadius.medium,
  }),
  statusMenuItemAvailable: theme => ({
    color: theme.alias.color.lime.foreground3,
  }),
  statusMenuItemBusy: theme => ({
    color: theme.alias.color.cranberry.foreground3,
  }),
  statusMenuItemDoNotDisturb: theme => ({
    color: theme.alias.color.cranberry.foreground3,
  }),
  statusMenuItemBeRightBack: theme => ({
    color: theme.alias.color.peach.foreground3,
  }),
  statusMenuItemAppearAway: theme => ({
    color: theme.alias.color.peach.foreground3,
  }),
  statusMenuItemAppearOffline: theme => ({
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
    <textarea
      className={styles.editStatusMessageTextArea}
      onInput={handleChangeStatusMessage}
      defaultValue={statusMessage}
    />
  );
};

const IS_PHASE_2 = false;

export const MeControl: React.FunctionComponent<MeControlProps> = props => {
  const { statusMessage, name, email } = fakeQuery();

  const styles = useStyles();
  const [isPhase2, setIsPhase2] = React.useState(IS_PHASE_2);
  const [view, setView] = React.useState(ROOT_VIEW);
  const [open, setOpen] = React.useState(true);
  const [status, setStatus] = React.useState('available');

  const handleTriggerClick = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleSetRootView = React.useCallback(() => {
    setView(ROOT_VIEW);
  }, []);

  const handleSetEditStatusMessageView = React.useCallback(() => {
    setView(EDIT_STATUS_MESSAGE_VIEW);
  }, []);

  const handleChangeStatus = React.useCallback((e, name, checkedItems) => {
    setStatus(checkedItems[0]);
    setOpen(false);
  }, []);

  const handleChangeName = React.useCallback(() => {
    alert('handleChangeName');
  }, []);

  const handleClearStatus = React.useCallback(() => {
    alert('handleClearStatus');
  }, []);

  const handleChangeProfilePicture = React.useCallback(() => {
    alert('handleChangeProfilePicture');
  }, []);

  const [avatarBadgeProps, setAvatarBadgeProps] = React.useState<AvatarBadgeProps>({});
  const avatarBadge = <AvatarBadge {...avatarBadgeProps} />;

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

      <div style={{ padding: '16px 0' }}>
        <label>
          <input type="checkbox" onChange={e => setIsPhase2(e.target.checked)} /> Enable Phase 2
        </label>
      </div>

      {/* TODO: Root slot is a menu*/}
      {/* TODO: note, we do not document the anatomy of the Menu well, the menuPopup is secret. Make it known.*/}
      <Menu
        // TODO: temp controlled menu since click inside closes
        open={open}
        menuPopup={{ className: styles.root }}
      >
        <MenuTrigger>
          <Button
            iconOnly
            icon={isPhase2 ? <Avatar size={20} badge={avatarBadge} /> : <Avatar size={20} />}
            primary
            onClick={handleTriggerClick}
          />
        </MenuTrigger>
        {(view === ROOT_VIEW && (
          <MenuList>
            <div className={styles.headerRow}>
              <Image
                src="https://www.backbase.com/wp-content/uploads/2020/05/Microsoft-Logo-PNG-Transparent.png"
                className={styles.logo}
              />
              <Button transparent size="small" className={styles.signoutButton}>
                Sign out
              </Button>
            </div>
            <div className={styles.userInfoRow}>
              {/* TODO: hover/click to edit pic */}
              {isPhase2 ? (
                <Avatar
                  className={styles.avatar}
                  badge={avatarBadge}
                  size={AVATAR_SIZE}
                  onClick={handleChangeProfilePicture}
                />
              ) : (
                <Avatar className={styles.avatar} size={AVATAR_SIZE} />
              )}
              <span className={styles.nameContainer}>
                <span className={styles.name}>{name}</span>
                {isPhase2 && (
                  <Button
                    transparent
                    iconOnly
                    size="small"
                    icon={<EditIcon className={styles.editNameIcon} />}
                    onClick={handleChangeName}
                    className={styles.editNameButton}
                  />
                )}
              </span>
              <span className={styles.email}>{email}</span>
            </div>
            {isPhase2 && status && (
              <div className={styles.statusMessage}>
                <div>{statusMessage}</div>
                <div className={styles.statusMessageDisplayUntil}>
                  {/* TODO: display until should be pulled from some state */}
                  Display until 11:59 PM
                  <div className={'status-message-controls ' + styles.statusMessageButtons}>
                    <Button
                      transparent
                      size="small"
                      iconOnly
                      onChange={handleSetEditStatusMessageView}
                      icon={<EditIcon className={styles.editStatusMessageIcon} />}
                    />
                    <Button
                      transparent
                      size="small"
                      iconOnly
                      onChange={handleClearStatus}
                      icon={<DeleteIcon className={styles.removeStatusMessageIcon} />}
                    />
                  </div>
                </div>
              </div>
            )}
            {isPhase2 && (
              <MenuList>
                <Menu
                  hasCheckmarks
                  hasIcons
                  checkedValues={{ status: [status] }}
                  onCheckedValueChange={handleChangeStatus}
                  position="below"
                  align="top"
                  menuPopup={{
                    className: styles.statusMenu,
                  }}
                >
                  <MenuTrigger>
                    <MenuItem className={styles.menuItem}>Available</MenuItem>
                  </MenuTrigger>
                  {/* TODO: this callback should be (e, data) so 
                        1. we can include more data in the object later
                        2. we stay consistent across all component callbacks 
                  */}
                  <MenuList>
                    <MenuItemRadio
                      name="status"
                      value="available"
                      icon={<SkypeCircleCheckIcon className={styles.statusMenuItemAvailable} />}
                    >
                      Available
                    </MenuItemRadio>
                    <MenuItemRadio
                      name="status"
                      value="busy"
                      icon={<StatusCircleOuterIcon className={styles.statusMenuItemBusy} />}
                    >
                      Busy
                    </MenuItemRadio>
                    <MenuItemRadio
                      name="status"
                      value="do-not-disturb"
                      icon={<Blocked2SolidIcon className={styles.statusMenuItemDoNotDisturb} />}
                    >
                      Do Not Disturb
                    </MenuItemRadio>
                    <MenuItemRadio
                      name="status"
                      value="be-right-back"
                      icon={<AwayStatusIcon className={styles.statusMenuItemBeRightBack} />}
                    >
                      Be Right Back
                    </MenuItemRadio>
                    <MenuItemRadio
                      name="status"
                      value="appear-away"
                      icon={<AwayStatusIcon className={styles.statusMenuItemAppearAway} />}
                    >
                      Appear Away
                    </MenuItemRadio>
                    <MenuItemRadio
                      name="status"
                      value="appear-offline"
                      icon={<CircleRingIcon className={styles.statusMenuItemAppearOffline} />}
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
            )}
            {/*
              TODO: we do not support a navigation style menu
                     where icons are used to indicate change of UI but not for pointing to a nested menu.
              TODO: secondaryContent does not align with the submenuIndicator
                    the secondary content is too close to the right of the menu item compared to an indicator icon
              TODO: the submenuIndicator should show if the user defines one, whether or not there is a submenu.
                    there is a workarond of forcing "hasSubmenu", should we really have this?
            */}
            {isPhase2 && (
              <MenuItem
                hasSubmenu
                submenuIndicator={<ChevronRightIcon />}
                className={styles.menuItem}
                onClick={handleSetEditStatusMessageView}
              >
                Set status message
              </MenuItem>
            )}
            <MenuItem hasSubmenu submenuIndicator={<NavigateExternalInlineIcon />} className={styles.menuItem}>
              My Microsoft account
            </MenuItem>
          </MenuList>
        )) ||
          (view === EDIT_STATUS_MESSAGE_VIEW && (
            <div className={styles.editStatusMessageRoot}>
              <Button transparent icon={<ChevronLeftIcon />} iconPosition="before" onClick={handleSetRootView}>
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
