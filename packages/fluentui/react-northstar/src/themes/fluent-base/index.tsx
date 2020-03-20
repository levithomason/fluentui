import { createTheme } from '@fluentui/styles';
// import { pxToRem } from 'src/utils'
import { ThemeInput } from '@fluentui/styles/src';

const designUnit = 4;
const density = 1;
const whiteSpace = 1;

// density

const cornerRadius = 2;

const fluentBaseTheme: ThemeInput = createTheme(
  {
    siteVariables: {
      designUnit: `${designUnit}px`,
      density,
      whiteSpace,

      componentHeight: designUnit * 8,
      cornerRadius
    },

    componentVariables: {
      Button: siteVars => ({
        // height: pxToRem(makeDense(siteVars.componentHeight, siteVars.density)),
        paddingX: `calc(var(--fui-design-unit) * 5 * var(--fui-density))`,
        marginX: `calc(var(--fui-design-unit) * 5 * var(--fui-white-space))`
        // minHeight: pxToRem(makeDense(siteVars.designUnit * 3, siteVars.density)),
        // maxWidth: pxToRem(makeDense(siteVars.designUnit * 70, siteVars.density)),
        // minWidth: pxToRem(makeDense(siteVars.designUnit * 0.5, siteVars.density)),
        // cornerRadius: pxToRem(makeDense(siteVars.cornerRadius, siteVars.density)),
      })
    },

    componentStyles: {
      Button: {
        root: ({ variables: v, props: p }) => ({
          padding: `0 ${v.paddingX}`,
          margin: `0 ${v.marginX}`,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          height: v.height,
          minHeight: v.minHeight,
          maxWidth: v.maxWidth,
          // TODO: Buttons that will go into a loading state should use v.loadingMinWidth
          minWidth: v.minWidth,
          borderRadius: v.cornerRadius
        })
      }
    }
  },
  'fluent-base'
);

export default fluentBaseTheme;
