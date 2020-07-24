import { ComponentDesignStyleFunction } from '../styles/types';

export const areArraysEqual = (arr1: any[], arr2: any[]): boolean => {
  const length1 = arr1.length;
  const length2 = arr2.length;

  if (length1 !== length2) return false;

  for (let i = length1; i >= 0; i -= 1) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

const cache = new Map();
const useDesign = (styleFunc: ComponentDesignStyleFunction, deps: any[]) => {
  if (cache.has(styleFunc)) {
    const [cachedDesignConfig, cachedDeps] = cache.get(styleFunc);

    if (areArraysEqual(deps, cachedDeps)) {
      return cachedDesignConfig;
    }
  }

  // TODO: get from context
  const styleParam = {
    props: {},
    variables: {},
    theme: {
      siteVariables: {
        fontSizes: {},
      },
      componentVariables: {},
      componentStyles: {},
      icons: {},
      fontFaces: [],
      staticStyles: [],
      animations: {},
    },
    rtl: false,
    disableAnimations: false,
  };

  const designConfig = styleFunc(styleParam);
  cache.set(styleFunc, [designConfig, deps]);

  return designConfig;
};

/**

 Cache keys = [styleFunc, ...deps]

 type Props = {
   color: 'red' | 'green' | 'blue'
   size: 20 | 30
 }

 Provider
   - resolve styleFunc/styles
   - plugins
   - render to class names
     - enhancers
   - write to DOM

 <head>
   <styles>
     .design-1 { background: blue; }
     .design-2 { background: red; }
     .design-3 { background: blue; }

 const AvatarParent = () => {
    return <AvatarChild className={useDesign(() => ({background: 'blue'}))} />
 }

 const AvatarChild = ({design, className}) => (
   <Avatar
     className={className + ' foo}
     design={() => ({
       ...design?.(),
       width: props.size + 'px,
       height: props.size + 'px,
       border: `2px solid ${props.color}`,
       background: 'red'
     }), [design, props.color, props.size]}
   />
 )
 */

export default useDesign;
