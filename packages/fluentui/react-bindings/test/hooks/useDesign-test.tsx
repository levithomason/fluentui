import { DesignConfig, useDesign } from '@fluentui/react-bindings';
import { ComponentStyleFunctionParam } from '@fluentui/styles';

describe('useDesign', () => {
  it('is a function', () => {
    expect(typeof useDesign).toEqual('function');
  });

  it('returns a css in js style object', () => {
    const style: DesignConfig = { display: 'block' };
    const ret = useDesign(() => style);
    expect(ret).toMatchObject(style);
  });

  it('calls the style function argument with style params', () => {
    const spy = jest.fn(() => ({}));
    const styleParam: ComponentStyleFunctionParam = {
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

    useDesign(spy);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(styleParam);
  });

  describe('caching', () => {
    it('returns cached result if func is referentially stable with no deps', () => {
      const spy = jest.fn(() => ({ display: 'flex' }));

      const ret1 = useDesign(spy);
      expect(spy).toHaveBeenCalledTimes(1);

      const ret2 = useDesign(spy);
      expect(spy).toHaveBeenCalledTimes(1);

      expect(ret1 === ret2).toBe(true);
    });

    it('returns cached result if func is refer referentially stable and deps are equal', () => {
      const spy = jest.fn(() => ({ display: 'flex' }));
      const ret1 = useDesign(spy, [true, false]);
      expect(spy).toHaveBeenCalledTimes(1);

      const ret2 = useDesign(spy, [true, false]);
      expect(spy).toHaveBeenCalledTimes(1);

      expect(ret1 === ret2).toBe(true);
    });

    it('skips cache if func is referentially unstable', () => {
      const spy1 = jest.fn(() => ({ display: 'flex' }));
      const spy2 = jest.fn(() => ({ display: 'flex' }));

      const ret1 = useDesign(spy1);
      expect(spy1).toHaveBeenCalledTimes(1);

      const ret2 = useDesign(spy2);
      expect(spy2).toHaveBeenCalledTimes(1);

      expect(ret1 === ret2).toBe(false);
    });

    it('skips cache if func is referentially stable but deps are not equal', () => {
      const spy = jest.fn(() => ({ display: 'flex' }));

      const ret1 = useDesign(spy, [true]);
      expect(spy).toHaveBeenCalledTimes(1);

      const ret2 = useDesign(spy, [false]);
      expect(spy).toHaveBeenCalledTimes(2);

      expect(ret1 === ret2).toBe(false);
    });

    // it('skips calling the function if func and deps are referentially stable', () => {
    //   const func = () => {}
    //
    // });

    it('limits the size of the cache to ....', () => {
      //
    });

    it('can configure the size of the cache', () => {
      // allow defining how many historical deps are remembered
    });

    it('forgets cache entries on unmount', () => {
      // note, this will require keeping a count of 'using' components
    });

    it('calls the function when ...', () => {});
  });
});
