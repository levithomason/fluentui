import { resolveStyleRulesForSlots, reduceToClassNameForSlots } from '@griffel/core';
import type { CSSRulesByBucket, CSSClassesMapBySlot, GriffelStyle, CSSBucketEntry } from '@griffel/core';
import { useFluent_unstable } from '@fluentui/react-shared-contexts';

type StylesBySlots<Slots extends string | number> = Record<Slots, GriffelStyle>;

function normalizeCSSBucketEntry(entry: CSSBucketEntry): [string] | [string, Record<string, unknown>] {
  if (!Array.isArray(entry)) {
    return [entry];
  }
  if (process.env.NODE_ENV !== 'production' && entry.length > 2) {
    throw new Error(
      'CSS Bucket contains an entry with greater than 2 items, please report this to https://github.com/microsoft/griffel/issues',
    );
  }
  return entry;
}

export function makeStyles2<Slots extends string | number>(
  stylesBySlots: StylesBySlots<Slots>,
): [() => Record<Slots, string>, string] {
  let ltrClassNamesForSlots: Record<Slots, string> | null = null;
  let rtlClassNamesForSlots: Record<Slots, string> | null = null;
  const [classesMapBySlot, cssRulesByBucket] = resolveStyleRulesForSlots(stylesBySlots);

  function useComputeClasses(): Record<Slots, string> {
    const { dir } = useFluent_unstable();
    // if (classesMapBySlot === null) {
    //   [classesMapBySlot, cssRulesByBucket] = resolveStyleRulesForSlots(stylesBySlots);
    // }
    const isLTR = dir === 'ltr';

    if (isLTR) {
      if (ltrClassNamesForSlots === null) {
        ltrClassNamesForSlots = reduceToClassNameForSlots(classesMapBySlot, dir);
      }
    } else {
      if (rtlClassNamesForSlots === null) {
        rtlClassNamesForSlots = reduceToClassNameForSlots(classesMapBySlot, dir);
      }
    }
    return isLTR ? (ltrClassNamesForSlots as Record<Slots, string>) : (rtlClassNamesForSlots as Record<Slots, string>);
  }

  const css = Object.values(cssRulesByBucket!).reduce((acc, cssBucketEntries: CSSBucketEntry[]) => {
    const cssRules = cssBucketEntries.map(cssBucketEntry => {
      const [cssRule] = normalizeCSSBucketEntry(cssBucketEntry);
      return cssRule;
    });
    return acc + cssRules.join('');
  }, '');

  return [useComputeClasses, css];
}
