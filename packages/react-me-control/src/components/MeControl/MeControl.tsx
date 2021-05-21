import * as React from 'react';

import {
  Avatar,
  AvatarBadge,
  Button,
  ButtonProps,
  Image,
  makeStyles,
  mergeClasses,
  Menu,
  MenuDivider,
  MenuItem,
  MenuItemRadio,
  MenuList,
  MenuTrigger,
} from '@fluentui/react-components';
import {
  Clock20Regular,
  ArrowReset20Regular,
  Delete20Regular,
  Delete20Filled,
  Edit20Regular,
  Edit20Filled,
  Open16Regular,
  ChevronRight20Regular,
  ChevronLeft20Regular,
  PresenceAvailable16Filled,
  PresenceBusy16Filled,
  PresenceDnd16Filled,
  PresenceAway16Filled,
  PresenceOffline16Regular,
} from '@fluentui/react-icons';

export interface MeControlProps {
  enablePhase2?: boolean;
}

const AVATAR_SIZE = 48;
const CONTAINER_PADDING_X = 16;
const AVATAR_GAP = 12;
const LEFT_PADDING = CONTAINER_PADDING_X + AVATAR_SIZE + AVATAR_GAP;
const MAX_STATUS_MESSAGE_LENGTH = 280;

const ROOT_VIEW = 'root';
const EDIT_STATUS_MESSAGE_VIEW = 'edit-status-message';

const __fakeDataStore = {
  statusMessage: "I'm out today until 6PM",
  email: 'kellygoss@outlook.com',
  name: 'Kelly Goss',
};
const fakeMutation = data => Object.assign(__fakeDataStore, data);
const fakeQuery = () => ({ ...__fakeDataStore });

// TODO: this should be set on all the icons by default -> create a bug in system-icons repo
const useIconHoverStyles = makeStyles({
  root: {
    '& .icon-hover': { display: 'none' },
    '&:hover .icon-hover': { display: 'inline' },
    '&:hover .icon-regular': { display: 'none' },
  },
  icon: { fill: 'currentColor' },
});

const IconButtonHover = (
  props: Omit<ButtonProps, 'icon'> & {
    regularIcon: React.ElementType;
    hoverIcon: React.ElementType;
  },
) => {
  const { regularIcon: Regular, hoverIcon: Hover, ...buttonProps } = props;
  const styles = useIconHoverStyles();

  return (
    <Button
      transparent
      iconOnly
      size="small"
      {...buttonProps}
      className={mergeClasses(styles.root, props.className)}
      icon={
        <>
          <Regular className={mergeClasses('icon-regular', styles.icon)} />
          <Hover className={mergeClasses('icon-hover', styles.icon)} />
        </>
      }
    />
  );
};

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
    // minHeight: '156px',
    minHeight: 'auto',
    maxWidth: '320px',
    paddingBottom: '12px',
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

  editNameHoverArea: {
    ':hover': {
      '& .edit-name-button': {
        display: 'block',
      },
    },
  },

  name: theme => ({
    // TODO: note, figma designs have bold name, not semi-bold, but there is no bold token
    fontWeight: theme.global.type.fontWeights.semibold,
    fontSize: theme.global.type.fontSizes.base[300],
    lineHeight: theme.global.type.fontSizes.base[300],
  }),

  editNameButton: theme => ({
    gridArea: 'editName',
    display: 'none',
    padding: 0,
    margin: '0 0 0 12px',
    // TODO: red lines call for 12px square icon here
    //       the button needs to be slightly larger to fit it
    height: '16px',
    width: '16px',
    minHeight: '16px',
    minWidth: '16px',
    color: theme.alias.color.neutral.neutralForeground2,
  }),
  editNameIcon: {
    // TODO: red lines call for 12px square icon here but button doesn't have a size this small
    width: '12px',
    height: '12px',
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
      '& .status-message-buttons': {
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
  statusMessageButtons: {
    position: 'absolute',
    display: 'none',
    bottom: 0,
    right: 0,
  },
  editStatusMessageButton: {
    width: '24px',
    height: '24px',
    minWidth: '0',
    minHeight: '0',
  },
  editStatusMessageIcon: theme => ({
    fontSize: theme.global.type.fontSizes.base[300],
  }),
  removeStatusMessageIcon: theme => ({
    fontSize: theme.global.type.fontSizes.base[300],
  }),

  editStatusMessageRoot: {
    padding: '16px 16px 24px 16px',
  },
  editStatusMessageHeader: {
    marginBottom: '16px',
  },
  editStatusMessageHeaderButton: {
    float: 'left',
    marginTop: '-8px',
    marginLeft: '-8px',
  },
  editStatusMessageHeaderText: theme => ({
    fontSize: theme.global.type.fontSizes.base[300],
    lineHeight: theme.global.type.lineHeights.base[300],
    fontWeight: theme.global.type.fontWeights.semibold,
  }),

  editStatusMessageHeaderEmail: theme => ({
    fontSize: theme.global.type.fontSizes.base[300],
    lineHeight: theme.global.type.lineHeights.base[300],
    color: theme.alias.color.neutral.neutralForeground3,
  }),

  editStatusMessageTextAreaContainer: {
    position: 'relative',
    marginBottom: '24px',
  },

  editStatusMessageTextAreaCharacterCount: theme => ({
    position: 'absolute',
    right: '12px',
    bottom: '12px',
    color: theme.alias.color.neutral.neutralForeground3,
    fontSize: theme.global.type.fontSizes.base[300],
    lineHeight: theme.global.type.lineHeights.base[300],
  }),

  editStatusMessageTextArea: theme => ({
    boxSizing: 'border-box',
    padding: '8px',
    height: '240px',
    width: '100%',
    fontFamily: 'inherit',
    fontSize: theme.global.type.fontSizes.base[400],
    lineHeight: theme.global.type.lineHeights.base[400],
    color: 'inherit',
    resize: 'none',
    // TODO: figma file shows bg2, but hex is #F5F5F5, which is bg3 in our code. bg2 in code is #FAFAFA.
    background: theme.alias.color.neutral.neutralBackground3,
    overflowX: 'hidden',
    overflowY: 'auto',
    border: 'none',
    borderBottom: `2px solid ${theme.alias.color.brand.brandBackground}`,
    borderRadius: '4px',
  }),

  menuItem: {
    paddingLeft: `${LEFT_PADDING}px`,
    // make svg icons inherit font color
    // TODO: this should be set on all the icons by default -> create a bug in system-icons repo
    fill: 'currentColor',
  },

  // Align the link icon vertically
  myAccountMenuItem: { height: '16px' },

  statusMenu: theme => ({
    width: '237px',
    borderRadius: theme.global.borderRadius.medium,
    // make svg icons inherit font color
    // TODO: this should be set on all the icons by default -> create a bug in system-icons repo
    fill: 'currentColor',
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
    color: theme.alias.color.neutral.neutralForeground4,
  }),
  statusMenuItemDuration: theme => ({
    color: theme.alias.color.neutral.neutralForeground1,
  }),
  statusMenuItemResetStatus: theme => ({
    color: theme.alias.color.neutral.neutralForeground1,
  }),

  statusMessageError: theme => ({
    color: theme.alias.color.cranberry.foreground3,
    margin: '12px 0',
  }),

  statusMessageDisplayUntilLabel: theme => ({
    marginBottom: '8px',
    fontSize: theme.global.type.fontSizes.base[300],
    lineHeight: theme.global.type.lineHeights.base[300],
    color: theme.alias.color.neutral.neutralForeground2,
  }),
  statusMessageDisplayUntilSelect: theme => ({
    boxSizing: 'border-box',
    marginBottom: '16px',
    width: '100%',
    padding: '8px',
    // TODO: figma file shows bg2, but hex is #F5F5F5, which is bg3 in our code. bg2 in code is #FAFAFA.
    background: theme.alias.color.neutral.neutralBackground3,
    border: 'none',
    borderRadius: '4px',
    color: 'inherit',
  }),
  setStatusMessageDoneButton: {
    float: 'right',
  },

  debugState: theme => ({
    padding: '8px',
    marginTop: '360px',
    marginBottom: '16px',
    color: theme.alias.color.neutral.neutralForeground3,
    background: theme.alias.color.neutral.neutralBackground3,
    borderRadius: theme.global.borderRadius.large,
  }),
});

const StatusMessageTextArea: React.FunctionComponent = () => {
  const { statusMessage } = fakeQuery();
  const styles = useStyles();
  const [characterCount, setCharacterCount] = React.useState(MAX_STATUS_MESSAGE_LENGTH - statusMessage.length);

  const handleChangeStatusMessage = React.useCallback(e => {
    const newStatusMessage = e.target.value;
    setCharacterCount(MAX_STATUS_MESSAGE_LENGTH - newStatusMessage.length);
    if (newStatusMessage.length >= MAX_STATUS_MESSAGE_LENGTH) {
      return;
    }
    fakeMutation({ statusMessage: newStatusMessage });
  }, []);

  return (
    <div className={styles.editStatusMessageTextAreaContainer}>
      <textarea
        className={styles.editStatusMessageTextArea}
        onInput={handleChangeStatusMessage}
        value={statusMessage}
      />
      <div className={styles.editStatusMessageTextAreaCharacterCount}>{characterCount}</div>
    </div>
  );
};

export const MeControl: React.FunctionComponent<MeControlProps> = props => {
  const { statusMessage, name, email } = fakeQuery();

  const styles = useStyles();
  const [view, setView] = React.useState(EDIT_STATUS_MESSAGE_VIEW);
  const [open, setOpen] = React.useState(true);
  const [isOnline, setIsOnline] = React.useState(true);
  const [status, setStatus] = React.useState('Available');
  const [hasStatusMessageError, setHasStatusMessageError] = React.useState(false);

  const statusMessageDisplayUntilDate = new Date();

  const handleTriggerClick = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleSignoutClick = React.useCallback(() => {
    alert('handleSignoutClick');
  }, [open]);

  const handleSetRootView = React.useCallback(() => {
    setView(ROOT_VIEW);
  }, []);

  const handleSetEditStatusMessageView = React.useCallback(() => {
    setView(EDIT_STATUS_MESSAGE_VIEW);
  }, []);

  const handleChangeStatus = React.useCallback((e, name, checkedItems) => {
    setStatus(checkedItems[0]);
    // TODO: is this really the intended behavior, it is highly unproductive in the user flow
    // setOpen(false);
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

  const handleMyMicrosoftAccountClick = React.useCallback(() => {
    alert('handleMyMicrosoftAccountClick');
  }, []);

  const avatarBadge = <AvatarBadge />;

  return (
    <div>
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
            icon={props.enablePhase2 ? <Avatar size={28} badge={avatarBadge} /> : <Avatar size={28} />}
            size="large"
            primary
            onClick={handleTriggerClick}
          />
        </MenuTrigger>
        {((!props.enablePhase2 || view === ROOT_VIEW) && (
          <MenuList>
            <div className={styles.headerRow}>
              <Image
                src="https://www.backbase.com/wp-content/uploads/2020/05/Microsoft-Logo-PNG-Transparent.png"
                className={styles.logo}
              />
              <Button transparent size="small" className={styles.signoutButton} onClick={handleSignoutClick}>
                Sign out
              </Button>
            </div>
            <div className={styles.userInfoRow}>
              {/* TODO: hover/click to edit pic */}
              {props.enablePhase2 ? (
                <Avatar
                  className={styles.avatar}
                  badge={avatarBadge}
                  size={AVATAR_SIZE}
                  onClick={handleChangeProfilePicture}
                />
              ) : (
                <Avatar className={styles.avatar} size={AVATAR_SIZE} />
              )}
              <span className={styles.editNameHoverArea}>
                <span className={styles.nameContainer}>
                  <span className={styles.name}>{name}</span>
                  {props.enablePhase2 && (
                    <IconButtonHover
                      regularIcon={Edit20Regular}
                      hoverIcon={Edit20Filled}
                      onClick={handleChangeName}
                      className={'edit-name-button ' + styles.editNameButton}
                    />
                  )}
                </span>
                <span className={styles.email}>{email}</span>
              </span>
            </div>
            {props.enablePhase2 && statusMessage && (
              <div className={styles.statusMessage}>
                <div>{statusMessage}</div>
                {statusMessageDisplayUntilDate && (
                  <div className={styles.statusMessageDisplayUntil}>
                    Display until{' '}
                    {statusMessageDisplayUntilDate.toLocaleString('en-US', {
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true,
                    })}
                  </div>
                )}
                <div className={'status-message-buttons ' + styles.statusMessageButtons}>
                  <IconButtonHover
                    regularIcon={Edit20Regular}
                    hoverIcon={Edit20Filled}
                    className={styles.editStatusMessageButton}
                    onClick={handleSetEditStatusMessageView}
                  />
                  <IconButtonHover
                    regularIcon={Delete20Regular}
                    hoverIcon={Delete20Filled}
                    onClick={handleClearStatus}
                    className={styles.editStatusMessageButton}
                  />
                </div>
              </div>
            )}
            {props.enablePhase2 && (
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
                    <MenuItem
                      className={styles.menuItem}
                      submenuIndicator={<ChevronRight20Regular className={styles.submenuIndicator} />}
                    >
                      {status}
                    </MenuItem>
                  </MenuTrigger>
                  {/* TODO: MenuList onCheckedValueChange callback signature should be (e, data) so:
                        1. we can include more data in the object later
                        2. we stay consistent across all component callbacks
                  */}
                  <MenuList>
                    <MenuItemRadio
                      name="status"
                      value="Available"
                      icon={<PresenceAvailable16Filled className={styles.statusMenuItemAvailable} />}
                    >
                      Available
                    </MenuItemRadio>
                    {props.enablePhase2 && (
                      <MenuItemRadio
                        name="status"
                        value="Busy"
                        icon={<PresenceBusy16Filled className={styles.statusMenuItemBusy} />}
                      >
                        Busy
                      </MenuItemRadio>
                    )}
                    {props.enablePhase2 && (
                      <MenuItemRadio
                        name="status"
                        value="Do not disturb"
                        icon={<PresenceDnd16Filled className={styles.statusMenuItemDoNotDisturb} />}
                      >
                        Do Not Disturb
                      </MenuItemRadio>
                    )}
                    {props.enablePhase2 && (
                      <MenuItemRadio
                        name="status"
                        value="Be right back"
                        icon={<PresenceAway16Filled className={styles.statusMenuItemBeRightBack} />}
                      >
                        Be Right Back
                      </MenuItemRadio>
                    )}
                    <MenuItemRadio
                      name="status"
                      value="Appear away"
                      icon={<PresenceAway16Filled className={styles.statusMenuItemAppearAway} />}
                    >
                      Appear Away
                    </MenuItemRadio>
                    {props.enablePhase2 && (
                      <MenuItemRadio
                        name="status"
                        value="Appear offline"
                        icon={<PresenceOffline16Regular className={styles.statusMenuItemAppearOffline} />}
                      >
                        Appear Offline
                      </MenuItemRadio>
                    )}
                    <MenuDivider />
                    {props.enablePhase2 && (
                      <MenuItem className={styles.statusMenuItemDuration} icon={<Clock20Regular />}>
                        Duration
                      </MenuItem>
                    )}
                    <MenuDivider />
                    <MenuItem className={styles.statusMenuItemResetStatus} icon={<ArrowReset20Regular />}>
                      Reset Status
                    </MenuItem>
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
                    there is a workaround of forcing "hasSubmenu", should we really have this?
            */}
            {props.enablePhase2 && (
              <MenuItem
                hasSubmenu
                submenuIndicator={<ChevronRight20Regular className={styles.submenuIndicator} />}
                className={styles.menuItem}
                onClick={handleSetEditStatusMessageView}
              >
                Set status message
              </MenuItem>
            )}
            <MenuItem
              hasSubmenu
              submenuIndicator={{ className: styles.myAccountMenuItem, children: <Open16Regular /> }}
              className={styles.menuItem}
              onClick={handleMyMicrosoftAccountClick}
            >
              My Microsoft account
            </MenuItem>
          </MenuList>
        )) ||
          (props.enablePhase2 && view === EDIT_STATUS_MESSAGE_VIEW && (
            <div className={styles.editStatusMessageRoot}>
              <div className={styles.editStatusMessageHeader}>
                <Button
                  transparent
                  iconOnly
                  icon={<ChevronLeft20Regular />}
                  iconPosition="before"
                  onClick={handleSetRootView}
                  className={styles.editStatusMessageHeaderButton}
                />
                <div className={styles.editStatusMessageHeaderText}>Set status message</div>
                <div className={styles.editStatusMessageHeaderEmail}>{email}</div>
              </div>
              <StatusMessageTextArea />
              <div>
                {hasStatusMessageError && (
                  <div className={styles.statusMessageError}>
                    {isOnline
                      ? 'Failed to set status note, please try again.'
                      : "Failed to set status note, try again when you're online."}
                  </div>
                )}
                <label className={styles.statusMessageDisplayUntilLabel}>Clear status message after</label>
                <select className={styles.statusMessageDisplayUntilSelect}>
                  <option value="never">Never</option>
                  <option value="today">Today</option>
                  <option value="1-hour">1 hour</option>
                  <option value="4-hours">4 hours</option>
                  <option value="this-week">This week</option>
                  <option value="custom">Custom</option>
                </select>
              </div>
              <Button primary className={styles.setStatusMessageDoneButton} onClick={handleSetRootView}>
                Done
              </Button>
            </div>
          ))}
      </Menu>

      <pre className={styles.debugState}>
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
      <div style={{ marginBottom: '16px' }}>
        <input type="checkbox" checked={isOnline} onChange={e => setIsOnline(e.target.checked)} /> isOnline
      </div>
      <div style={{ marginBottom: '16px' }}>
        <input
          type="checkbox"
          checked={hasStatusMessageError}
          onChange={e => setHasStatusMessageError(e.target.checked)}
        />{' '}
        hasStatusMessageError
      </div>
    </div>
  );
};

MeControl.displayName = 'MeControl';
