import * as React from 'react';
import { MeControlProps } from './MeControl.types';
import { makeStyles } from '@fluentui/react-make-styles';

// import { meControlShorthandProps, MeControlState } from './MeControl.types';
import { Button } from '@fluentui/react-button';
import { Avatar } from '@fluentui/react-avatar';
import { Image } from '@fluentui/react-image';
import { Menu, MenuTrigger /*, MenuDivider*/, MenuList, MenuItem } from '@fluentui/react-menu';
import {
  // CheckMarkIcon,
  // ClockIcon,
  // StatusCircleRingIcon,
  // ResetIcon,
  ChevronRightIcon,
  NavigateExternalInlineIcon,
} from '@fluentui/react-icons-mdl2';

const AVATAR_SIZE = 48;
const CONTAINER_PADDING_X = 16;
const AVATAR_GAP = 12;
const LEFT_PADDING = CONTAINER_PADDING_X + AVATAR_SIZE + AVATAR_GAP;

const ROOT_VIEW = 'root';
const EDIT_STATUS_MESSAGE_VIEW = 'edit-status-message';

const useStyles = makeStyles({
  root: theme => ({
    background: theme.alias.color.neutral.neutralBackground1,
    boxShadow: theme.alias.shadow.shadow8,
    width: '400px',
    minHeight: '200px',
  }),
});

/**
 * MeControl component
 */
export const MeControl = React.forwardRef<HTMLElement, MeControlProps>((props, ref) => {
  const styles = useStyles();
  const [view, setView] = React.useState(ROOT_VIEW);

  const handleEditStatus = React.useCallback(() => {
    setView(EDIT_STATUS_MESSAGE_VIEW);
  }, []);

  const handleBack = React.useCallback(() => {
    setView(ROOT_VIEW);
  }, []);

  return (
    // TODO: Root slot is a menu
    // TODO: note, we do not document the anatomy of the Menu well, the menuPopup is secret. Make it known.
    <Menu
      menuPopup={{
        className: styles.root,
        style: {
          padding: '8px 0',
          width: '320px',
          // border: '2px solid red',
        },
      }}
    >
      <MenuTrigger>
        <div>
          <Button iconOnly icon={<Avatar size={20} badge="success" />} primary />
          View: {view}
        </div>
      </MenuTrigger>
      <MenuList>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: `8px ${CONTAINER_PADDING_X}px` /*border: '1px solid blue'*/,
          }}
        >
          <Image
            src="https://www.backbase.com/wp-content/uploads/2020/05/Microsoft-Logo-PNG-Transparent.png"
            style={{
              gridArea: 'logo',
              height: '25px',
              // TODO: spec says elevation is [optional], even though it is in the default variant.
              //       remove default shadows from image styles
              boxShadow: 'none',
              // TODO: spec says border is "none" in default variant.
              //       remove from image styles
              border: 'none',
            }}
          />
          <Button transparent size="small" style={{ gridArea: 'signout' }}>
            Sign out
          </Button>
        </div>
        <div
          style={{
            display: 'grid',
            gap: '12px',
            gridTemplate: `
           "avatar name"    auto
           "avatar email"   auto /
            auto   1fr
          `,
            padding: `8px ${CONTAINER_PADDING_X}px 4px`,
          }}
        >
          <Avatar style={{ gridArea: 'avatar' }} badge="success" size={AVATAR_SIZE} />
          <span style={{ gridArea: 'name', fontWeight: 'bold', fontSize: '24px', lineHeight: '20px' }}>Kelly Goss</span>
          <span style={{ gridArea: 'email', fontSize: '14px', lineHeight: '16px' }}>kellygoss@outlook.com</span>
        </div>
        <div
          style={{
            background: '#eee',
            padding: '16px 12px',
            margin: `0 ${CONTAINER_PADDING_X}px 8px ${LEFT_PADDING}px`,
          }}
        >
          <div>I'm out today until 6PM</div>
          <div style={{ fontSize: '80%', marginTop: '16px' }}>Display until 11:59 PM</div>
        </div>
        <MenuList>
          <MenuItem
            secondaryContent={<ChevronRightIcon />}
            style={{ paddingLeft: `${LEFT_PADDING}px` }}
            onClick={() => setView(EDIT_STATUS_MESSAGE_VIEW)}
          >
            Available
          </MenuItem>
          {/*<MenuList>*/}
          {/*  <MenuItem icon={<CheckMarkIcon />}>Available</MenuItem>*/}
          {/*  <MenuItem icon={<ClockIcon />}>Appear Away</MenuItem>*/}
          {/*  <MenuItem icon={<StatusCircleRingIcon />}>Appear Offline</MenuItem>*/}
          {/*  <MenuDivider />*/}
          {/*  <MenuItem icon={<ResetIcon />}>Reset Status</MenuItem>*/}
          {/*</MenuList>*/}
        </MenuList>
        {/*
           TODO: we do not support a navigation style menu
                 where icons are used to indicate change of UI but not for pointing to a nested menu.
        */}
        {/*
          TODO: secondaryContent does not align with the submenuIndicator
                the secondary content is too close to the right of the menu item compared to an indicator icon
        */}
        <MenuItem secondaryContent={<ChevronRightIcon />} style={{ paddingLeft: `${LEFT_PADDING}px` }}>
          Set status message
        </MenuItem>
        <MenuItem secondaryContent={<NavigateExternalInlineIcon />} style={{ paddingLeft: `${LEFT_PADDING}px` }}>
          My Microsoft account
        </MenuItem>
      </MenuList>
    </Menu>
  );
});

MeControl.displayName = 'MeControl';
