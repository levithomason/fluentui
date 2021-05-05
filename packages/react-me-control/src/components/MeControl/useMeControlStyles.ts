import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import { MeControlState } from './MeControl.types';

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: theme => ({
    background: console.log(theme) || theme.alias.color.neutral.neutralBackground1,
    boxShadow: theme.alias.shadow.shadow8,
    width: '400px',
    minHeight: '200px',
  }),

  // TODO add additional classes for different states and/or slots
});

/**
 * Apply styling to the MeControl slots based on the state
 */
export const useMeControlStyles = (state: MeControlState): MeControlState => {
  const styles = useStyles();
  state.className = mergeClasses(styles.root, state.className);

  // TODO Add class names to slots, for example:
  // state.card.className = mergeClasses(styles.card, state.card.className);

  return state;
};
