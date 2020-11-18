/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

import { Accessibility } from '@fluentui/accessibility';
import { getElementType, useFluentContext, useStyles, useTelemetry, useUnhandledProps } from '@fluentui/react-bindings';

import { ChildrenComponentProps, childrenExist, ContentComponentProps, UIComponentProps } from '../../utils';
import { ShorthandValue } from '../../types';

//
// Settings & Utilities
//
const DURATION_MS = 1000;

// @ts-ignore
const didMove = (currRect: ClientRect, prevRect: ClientRect) => {
  return (
    !isClose(prevRect.top, currRect.top) ||
    !isClose(prevRect.left, currRect.left) ||
    !isClose(prevRect.right, currRect.right) ||
    !isClose(prevRect.bottom, currRect.bottom)
  );
};

const isClose = (a: number, b: number) => Math.round(a) === Math.round(b);

// @ts-ignore
const onEnter = (node: HTMLElement, rect: ClientRect) => {
  node.style.zIndex = '2';
  node.style.opacity = '0';

  // const centerX = (rect.left + rect.right) / 2
  // const centerY = (rect.top + rect.bottom) / 2
  //
  // const signX = centerX > node.parentElement.offsetWidth / 2 ? 1 : -1
  // const signY = centerY > node.parentElement.offsetHeight / 2 ? 1 : -1

  // const scaleTransform = '' // `scale3d(0.75, 0.75, 0)`
  // const x = rect.width * 0.1 * signX
  // const y = rect.height * 0.1 * signY
  // const translateTransform = `translate3d(${x}px, ${y}px, 0)`

  // node.style.transform = `${scaleTransform} ${translateTransform}`

  // console.log('ENTER', {
  //   curr: rect,
  //   class: node.getAttribute('class'),
  //   transform: node.style.transform,
  //   node,
  // })
};

// @ts-ignore
const onMove = (node: HTMLElement, currRect: ClientRect, prevRect: ClientRect) => {
  node.style.zIndex = '3';

  let originX = 'center';
  let translateX = 0;
  if (isClose(prevRect.left, currRect.left)) {
    originX = 'left';
  } else if (isClose(prevRect.right, currRect.right)) {
    originX = 'right';
  } else {
    originX = 'left';
    translateX = prevRect.left - currRect.left;
  }

  let originY = 'center';
  let translateY = 0;
  if (isClose(prevRect.top, currRect.top)) {
    originY = 'top';
  } else if (isClose(prevRect.bottom, currRect.bottom)) {
    originY = 'bottom';
  } else {
    originY = 'top';
    translateY = prevRect.top - currRect.top;
  }

  const scaleX = prevRect.width / currRect.width;
  const scaleY = prevRect.height / currRect.height;

  const scaleTransform = `scale3d(${scaleX}, ${scaleY}, 1)`;
  const translateTransform = `translate3d(${translateX}px, ${translateY}px, 0)`;

  node.style.transformOrigin = `${originX} ${originY}`;
  node.style.transform = `${scaleTransform} ${translateTransform}`;

  // console.log('MOVE', {
  //   class: node.getAttribute('class'),
  //   prev: prevRect,
  //   curr: currRect,
  //   originX,
  //   originY,
  //   transform: node.style.transform,
  //   node,
  // })
};

// @ts-ignore
const onLeave = (node: HTMLElement, rect: ClientRect) => {
  const parent = node.parentNode;
  const clone = node.cloneNode(true) as HTMLElement;
  clone.style.zIndex = '1';

  // const centerX = (rect.left + rect.right) / 2
  // const centerY = (rect.top + rect.bottom) / 2
  //
  // const signX = centerX > parent.offsetWidth / 2 ? 1 : -1
  // const signY = centerY > parent.offsetHeight / 2 ? -1 : 1

  clone.style.position = 'fixed';
  clone.style.top = `${rect.top}px`;
  clone.style.left = `${rect.left}px`;
  clone.style.width = `${rect.width}px`;
  clone.style.height = `${rect.height}px`;
  clone.style.opacity = '1';
  clone.style.transition = `opacity ${DURATION_MS * 0.5}ms, transform ${DURATION_MS * 0.5}ms`;
  clone.style.transitionTimingFunction = `linear`;

  // const scaleTransform = '' // `scale3d(0.75, 0.75, 0)`
  // const x = rect.width * 0.1 * signX
  // const y = rect.height * 0.1 * signY
  // const translateTransform = `translate3d(${x}px, ${y}px, 0)`

  // child.style.transform = `scale(1, 1, 1) translate3d(0, 0, 0)`

  parent.appendChild(clone);

  setTimeout(() => {
    clone.style.opacity = '0';
    // child.style.transform = `${scaleTransform} ${translateTransform}`

    setTimeout(() => {
      parent.removeChild(clone);
    }, DURATION_MS);
  });

  // console.log('LEAVE', {
  //   class: clone.getAttribute('class'),
  //   style: {
  //     top: clone.style.top,
  //     left: clone.style.left,
  //     width: clone.style.width,
  //     height: clone.style.height,
  //   },
  //   prev: rect,
  //   prevStyle: clone.style,
  //   node: clone,
  // })
};

// @ts-ignore
const play = (node: HTMLElement) => {
  // set transition
  setTimeout(() => {
    node.style.transition = `opacity ${DURATION_MS}ms, transform ${DURATION_MS}ms`;
    node.style.transitionTimingFunction = 'cubic-bezier(0.1, 1, 0.1, 1)';

    // trigger transition back to original state
    setTimeout(() => {
      node.style.transform = '';
      node.style.opacity = '1';

      // DONE
      setTimeout(() => {
        node.style.transition = '';
        node.style.transitionTimingFunction = '';
        node.style.transform = '';
        node.style.zIndex = '';
      }, DURATION_MS);
    });
  });
};

export interface AppLayoutAreaSlotClassNames {
  content: string;
}

export interface AppLayoutAreaProps
  extends UIComponentProps,
    ChildrenComponentProps,
    ContentComponentProps<ShorthandValue<AppLayoutAreaProps>> {
  /**
   * Accessibility behavior if overridden by the user.
   * @default AppBehavior
   * @available AppWarningBehavior
   */
  accessibility?: Accessibility;
  area?: string;
  debug?: boolean;
  transitions?: {
    in?: boolean;
    out?: boolean;
    move?: boolean;
  };
}
export type AppLayoutAreaStylesProps = Pick<AppLayoutAreaProps, 'area' | 'debug'>;

/**
 * A app layout contains and arranges the high level areas of an application.
 */
export function AppLayoutArea(props: AppLayoutAreaProps) {
  const context = useFluentContext();
  const { setStart, setEnd } = useTelemetry(AppLayoutArea.displayName, context.telemetry);
  setStart();

  const { area, children, content, debug } = props;

  const unhandledProps = useUnhandledProps(AppLayoutArea.handledProps, props);

  const ElementType = getElementType(props);

  // prevRect: ClientRect;
  //
  // didMount/willUpdate
  //   const node: any = findDOMNode(this);
  //   if (!node) return;
  //
  //   this.prevRect = node.getBoundingClientRect();
  //
  // componentDidUpdate(prevProps: Readonly<AppLayoutAreaProps>, prevState: Readonly<{}>, snapshot?: any): void {
  //   const node: any = findDOMNode(this);
  //   if (!node) return;
  //
  //   const currRect = node.getBoundingClientRect();
  //   const prevRect = this.prevRect;
  //
  //   if (!prevRect) {
  //     if (this.props.transitions.in !== false) {
  //       onEnter(node, currRect);
  //     }
  //   } else if (!didMove(currRect, prevRect)) {
  //     return;
  //   } else if (this.props.transitions.move !== false) {
  //     onMove(node, currRect, prevRect);
  //   }
  //
  //   play(node);
  //
  //   node.prevRect = currRect;
  // }
  //
  // componentWillUnmount() {
  //   const node: any = findDOMNode(this);
  //   if (!node) return;
  //
  //   if (this.props.transitions.out !== false) onLeave(node, node.getBoundingClientRect());
  // }

  const { classes } = useStyles(AppLayoutArea.displayName, {
    className: AppLayoutArea.className,
    mapPropsToStyles: () => ({ area, debug }),
    mapPropsToInlineStyles: () => ({}),
    rtl: context.rtl,
  });

  const result = (
    <ElementType className={classes.root} {...unhandledProps}>
      {childrenExist(children) ? children : content}
    </ElementType>
  );

  setEnd();
  return result;
}

AppLayoutArea.defaultProps = {
  transitions: { in: true, out: true, move: true },
};
AppLayoutArea.displayName = 'AppLayoutArea';
AppLayoutArea.handledProps = [
  'accessibility',
  'className',
  'design',
  'styles',
  'variables',
  'content',
  'children',

  'area',
  'debug',
  'transitions',
];
AppLayoutArea.className = 'ui-app-layout__area';
