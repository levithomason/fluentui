import { DesignConfig, useDesign, areArraysEqual } from '@fluentui/react-bindings';
import { ComponentStyleFunctionParam } from '@fluentui/styles';

describe('useDesign', () => {
  describe('areArraysEqual', () => {
    it('returns false if lengths are', () => {
      const a1: any[] = [];
      const a2: any[] = [0];

      expect(areArraysEqual(a1, a2)).toBe(false);
      expect(areArraysEqual(a2, a1)).toBe(false);
    });
  });

  it('is a function', () => {
    expect(typeof useDesign).toEqual('function');
  });

  it('returns a css in js style object', () => {
    const style: DesignConfig = { display: 'block' };
    const ret = useDesign(() => style, []);
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

    useDesign(spy, []);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(styleParam);
  });

  describe('cache miss cases', () => {
    it('func is referentially unstable', () => {
      const spy1 = jest.fn(() => ({ display: 'flex' }));
      const spy2 = jest.fn(() => ({ display: 'flex' }));

      const ret1 = useDesign(spy1, []);
      expect(spy1).toHaveBeenCalledTimes(1);
      expect(spy2).toHaveBeenCalledTimes(0);

      const ret2 = useDesign(spy2, []);
      expect(spy1).toHaveBeenCalledTimes(1);
      expect(spy2).toHaveBeenCalledTimes(1);

      expect(ret1 === ret2).toBe(false);
    });

    it('func is referentially stable but deps are not equal', () => {
      const spy = jest.fn(() => ({ display: 'flex' }));

      const ret1 = useDesign(spy, [true]);
      expect(spy).toHaveBeenCalledTimes(1);

      const ret2 = useDesign(spy, [false]);
      expect(spy).toHaveBeenCalledTimes(2);

      expect(ret1 === ret2).toBe(false);
    });
  });

  describe('cache hit cases', () => {
    it('func is referentially stable with no deps', () => {
      const spy = jest.fn(() => ({ display: 'flex' }));

      const ret1 = useDesign(spy, []);
      expect(spy).toHaveBeenCalledTimes(1);

      const ret2 = useDesign(spy, []);
      expect(spy).toHaveBeenCalledTimes(1);

      expect(ret1 === ret2).toBe(true);
    });

    it('func is refer referentially stable and deps are equal', () => {
      const spy = jest.fn(() => ({ display: 'flex' }));
      const ret1 = useDesign(spy, [true, false]);
      expect(spy).toHaveBeenCalledTimes(1);

      const ret2 = useDesign(spy, [true, false]);
      expect(spy).toHaveBeenCalledTimes(1);

      expect(ret1 === ret2).toBe(true);
    });
  });

  describe('cache size', () => {
    it('is limited to the last 5 results', () => {
      // call 5 times, 6th call removes 1st cache resulting in re-calling 1st call
    });

    it('can be configured', () => {
      // allow defining how many historical deps are remembered
    });

    it('forgets cache entries on unmount', () => {
      // note, this will require keeping a count of 'using' components
    });
  });
});
