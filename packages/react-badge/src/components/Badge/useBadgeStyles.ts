import { mergeClasses, makeStyles } from '@fluentui/react-make-styles';
import { BadgeState } from './Badge.types';

const useStyles = makeStyles({
  root: theme => ({
    display: 'inline-flex',
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.alias.color.neutral.brandBackground,
    borderColor: theme.alias.color.neutral.brandBackground,
    color: theme.alias.color.neutral.neutralForegroundInvertedAccessible,
    fontWeight: theme.global.type.fontWeights.semibold,
    borderWidth: theme.global.strokeWidth.thin,
    borderStyle: 'solid',
    fontFamily: theme.global.type.fontFamilies.base,
    position: 'relative',
  }),
  rootSmallest: {
    width: '6px',
    height: '6px',
    fontSize: '4px',
  },
  rootSmaller: {
    width: '10px',
    height: '10px',
    fontSize: '6px',
  },
  rootSmall: {
    minWidth: '16px',
    height: '16px',
    paddingRight: '6px',
    paddingLeft: '6px',
    gap: '4px',
    fontSize: '8px',
  },
  rootMedium: {
    height: '20px',
    minWidth: '20px',
    gap: '4px',
    paddingRight: '8px',
    paddingLeft: '8px',
    fontSize: '10px',
  },
  rootLarge: {
    minWidth: '24px',
    height: '24px',
    paddingRight: '8px',
    paddingLeft: '8px',
    fontSize: '12px',
    gap: '6px',
  },
  rootLargerLargest: theme => ({
    minWidth: '32px',
    height: '32px',
    paddingRight: '12px',
    paddingLeft: '12px',
    gap: '6px',
    fontSize: '12px',
    borderWidth: theme.global.strokeWidth.thick,
  }),
  rootRounded: theme => ({ borderRadius: theme.global.borderRadius.medium }),
  rootRoundedSmallSmallerSmallest: theme => ({ borderRadius: theme.global.borderRadius.small }),
  rootCircular: { borderRadius: '99px' },
  rootGhost: theme => ({
    background: 'transparent',
    border: 'none',
    color: theme.alias.color.neutral.brandBackground,
  }),
  rootOutline: theme => ({
    background: 'transparent',
    borderColor: theme.alias.color.neutral.brandBackground,
    color: theme.alias.color.neutral.brandBackground,
  }),
  rootTint: theme => ({
    background: theme.global.palette.brand.tint60,
    color: theme.global.palette.brand.shade40,
    border: 'none',
  }),
  icon: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
});

/**
 * Applies style classnames to slots
 */
export const useBadgeStyles = (state: BadgeState): BadgeState => {
  const styles = useStyles();
  state.className = mergeClasses(
    styles.root,
    state.size === 'smallest' && styles.rootSmallest,
    state.size === 'smaller' && styles.rootSmaller,
    state.size === 'small' && styles.rootSmall,
    state.size === 'medium' && styles.rootMedium,
    state.size === 'large' && styles.rootLarge,
    (state.size === 'larger' || state.size === 'largest') && styles.rootLargerLargest,
    state.shape === 'circular' && styles.rootCircular,
    state.shape === 'rounded' && styles.rootRounded,
    state.shape === 'rounded' &&
      (state.size === 'small' || state.size === 'smaller' || state.size === 'smallest') &&
      styles.rootRoundedSmallSmallerSmallest,
    state.appearance === 'ghost' && styles.rootGhost,
    state.appearance === 'outline' && styles.rootOutline,
    state.appearance === 'tint' && styles.rootTint,
    state.className,
  );

  if (state.icon) {
    state.icon.className = mergeClasses(styles.icon, state.icon.className);
  }

  return state;
};
