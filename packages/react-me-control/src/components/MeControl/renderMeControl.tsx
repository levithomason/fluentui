import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { meControlShorthandProps, MeControlState } from './MeControl.types';
import { Button } from '@fluentui/react-button';
import { Avatar } from '@fluentui/react-avatar';
import { Image } from '@fluentui/react-image';
import { MenuTrigger, MenuDivider, MenuList, MenuItem } from '@fluentui/react-menu';

/**
 * Render the final JSX of MeControl
 */
export const renderMeControl = (state: MeControlState) => {
  const { slots, slotProps } = getSlots(state, meControlShorthandProps);

  return (
    <slots.root {...slotProps.root} style={{ padding: '8px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 16px' }}>
        <Image src="https://picsum.photos/100/25" style={{ gridArea: 'logo' }} />
        <Button transparent size="small" style={{ gridArea: 'signout' }}>
          Sign out
        </Button>
      </div>
      <div
        style={{
          display: 'grid',
          gap: '4px',
          gridTemplate: `
           "avatar name"    auto
           "avatar email"   auto /
            auto   1fr
          `,
          padding: '8px 16px',
        }}
      >
        <Avatar style={{ gridArea: 'avatar' }} badge={'success'} />
        <span style={{ gridArea: 'name' }}>Kelly Goss</span>
        <span style={{ gridArea: 'email' }}>kellygoss@outlook.com</span>
      </div>
      <MenuList>
        <MenuItem>
          <MenuTrigger>
            <MenuItem>Available</MenuItem>
          </MenuTrigger>
          {/*<MenuList>*/}
          {/*  <MenuItem>Available</MenuItem>*/}
          {/*  <MenuItem>Appear Away</MenuItem>*/}
          {/*  <MenuItem>Appear Offline</MenuItem>*/}
          {/*  <MenuDivider />*/}
          {/*  <MenuItem>Reset Status</MenuItem>*/}
          {/*</MenuList>*/}
        </MenuItem>
        <MenuItem>Set status message</MenuItem>
        <MenuItem>My Microsoft account</MenuItem>
      </MenuList>
      {/*{state.children}*/}
    </slots.root>
  );
};
