import { ComponentDesignStyleFunction } from '../styles/types';

export const areArraysEqual = (arr1: any[], arr2: any[]): boolean => {
  console.log('areArraysEqual');
  const length1 = arr1.length;
  const length2 = arr2.length;

  if (length1 !== length2) {
    console.log('FALSE diff len');
    return false;
  }

  for (let i = length1; i >= 0; i -= 1) {
    if (arr1[i] !== arr2[i]) {
      console.log(`FALSE @${i}:`, arr1[i], arr2[i]);
      return false;
    }
  }

  console.log('true');
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

  // TODO: the deps would also have to be used as a CACHE key
  //  Otherwise, if you retrieve deps based on func ref alone, you'll get potentially the wrong deps to compare the incoming deps to.
  //  What we need is to compare incoming deps.
  //  You'd need to keep a second cache of func:deps[] -> deps:result and do a two level look up.
  //  Doubting that this is worth avoiding the function call at all.
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
