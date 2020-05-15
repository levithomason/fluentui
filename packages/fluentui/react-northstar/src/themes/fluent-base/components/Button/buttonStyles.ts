import { ComponentSlotStylesPrepared } from '@fluentui/styles';
import { ButtonVariables } from './buttonVariables';

const buttonStyles: ComponentSlotStylesPrepared<
  {
    disabled?: boolean;
  },
  ButtonVariables
> = {
  root: ({ variables: v, props: p }) => ({
    padding: `0 ${v.rootLayoutWidePadding}`,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    // height: `calc(${v.textFontLineHeight} + ${v.rootLayoutWidePadding})`,
    // minHeight: v.minHeight,
    // TODO: Buttons that will go into a loading state should use v.loadingMinWidth
    minWidth: v.rootLayoutWideMinWidth,
    maxWidth: v.rootLayoutWideMaxWidth,
    fontSize: v.textFontSize,
    lineHeight: v.textFontLineHeight,
    borderRadius: v.rootCornerRadius,
    color: v.textFillColorRest,
    background: v.rootFillColorRest,
    // TODO: missing tokens or logic for X/Y, blur, and color
    boxShadow: `0 ${v.rootShadowHeightRest} ${v.rootShadowHeightRest} rgba(0, 0, 0, 0.2)`,
    ':hover': {
      color: v.textFillColorHover,
      background: v.rootFillColorHover,
      boxShadow: `0 ${v.rootShadowHeightHover} ${v.rootShadowHeightHover} rgba(0, 0, 0, 0.2)`,
    },
    ':active': {
      color: v.textFillColorPressed,
      background: v.rootFillColorPressed,
      boxShadow: `0 ${v.rootShadowHeightPressed} ${v.rootShadowHeightPressed} rgba(0, 0, 0, 0.2)`,
    },
    ':focus': {
      // TODO: there are missing tokens here for focus
      color: v.textFillColorPressed,
      background: v.rootFillColorPressed,
      boxShadow: `0 ${v.rootShadowHeightPressed} ${v.rootShadowHeightPressed} rgba(0, 0, 0, 0.2)`,
      outlineColor: v.focusOuterStrokeColor,
      outlineWidth: v.focusOuterStrokeWidth,
      // TODO: there is no outline radius, only border radius
      borderRadius: v.focusOuterCornerRadius,
    },
    ...(p.disabled && {
      color: v.textFillColorDisabled,
      background: v.rootFillColorDisabled,
      boxShadow: `0 ${v.rootShadowHeightDisabled} ${v.rootShadowHeightDisabled}`,
    }),
  }),
};

export default buttonStyles;
