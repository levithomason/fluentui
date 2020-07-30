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

    it('func is refer referentially stable and short deps are equal', () => {
      const depsToTry = [undefined, null, true, false, 0, 1, 999, '', 'str'];

      // we test many types of deps to be sure our comparison logic is solid
      depsToTry.forEach(dep => {
        const spy = jest.fn(() => ({ display: 'flex' }));

        const ret1 = useDesign(spy, [dep]);
        expect(spy).toHaveBeenCalledTimes(1);

        const ret2 = useDesign(spy, [dep]);
        expect(spy).toHaveBeenCalledTimes(1);

        expect(ret1 === ret2).toBe(true);
      });
    });

    it('func is refer referentially stable and long deps are equal', () => {
      const spy = jest.fn(() => ({ display: 'flex' }));
      const ret1 = useDesign(spy, [undefined, null, true, false, 0, 1, 999, '', 'str']);
      expect(spy).toHaveBeenCalledTimes(1);

      const ret2 = useDesign(spy, [undefined, null, true, false, 0, 1, 999, '', 'str']);
      expect(spy).toHaveBeenCalledTimes(1);

      expect(ret1 === ret2).toBe(true);
    });
  });

  describe('cache size', () => {
    it.only('is limited to the last 10 results', () => {
      const spy = jest.fn(() => ({ display: 'flex' }));

      // prime 10 cache hits
      // for (let i = 1; i <= 10; i += 1) {
      useDesign(spy, [0]);
      useDesign(spy, [1]);
      useDesign(spy, [2]);
      useDesign(spy, [3]);
      expect(spy).toHaveBeenCalledTimes(4);
      // console.log('call A', i, spy.mock.calls.length);
      // expect(spy).toHaveBeenCalledTimes(i);
      // }

      // validate 10 cache hits
      // for (let i = 1; i <= 10; i += 1) {
      useDesign(spy, [0]);
      expect(spy).toHaveBeenCalledTimes(4);
      useDesign(spy, [1]);
      expect(spy).toHaveBeenCalledTimes(4);
      useDesign(spy, [2]);
      expect(spy).toHaveBeenCalledTimes(4);
      useDesign(spy, [3]);
      expect(spy).toHaveBeenCalledTimes(4);
      // console.log('call B', i, spy.mock.calls.length);
      // expect(spy).toHaveBeenCalledTimes(10);
      // }

      // an 11th cache result should result in executing the function again
      // useDesign(spy, [999]);
      // expect(spy).toHaveBeenCalledTimes(11);
    });

    it('can be configured', () => {
      // allow defining how many historical deps are remembered
    });

    it('forgets cache entries on unmount', () => {
      // note, this will require keeping a count of 'using' components
    });
  });
});
