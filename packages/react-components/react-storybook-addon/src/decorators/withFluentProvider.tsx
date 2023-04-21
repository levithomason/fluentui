import * as React from 'react';

import { FluentProvider } from '@fluentui/react-provider';
import { Theme, tokens } from '@fluentui/react-theme';
import { themes, defaultTheme, ThemeIds } from '../theme';
import { THEME_ID } from '../constants';
import { FluentGlobals, FluentStoryContext } from '../hooks';

// ============================================
// Anatomy
// ============================================

/**
 * Returns the component name and slot prop name from a BEM className.
 * @param {string} className
 * @returns { componentName: string, slotName: string }
 */
const parseClassName = (className: string) => {
  // const replace = className.replace(componentName, '');
  const [fuiName, slotName] = className.split(`__`);
  const componentName = fuiName.replace(`fui-`, '');

  return { componentName, slotName };
};

type AnatomyAnnotatorProps = {
  position: Position;
  componentName: string;
  slotName: string;
  label: string | number;
  labelTop: number;
  labelLeft: number;
  isSelected?: boolean;
  isMuted?: boolean;
};
const AnatomyAnnotation = ({
  componentName,
  slotName,
  position,
  label,
  labelTop,
  labelLeft,
  isSelected,
  isMuted,
  ...rest
}: AnatomyAnnotatorProps) => {
  const labelSize = 14;

  const offsetY = -window.scrollY + window.pageYOffset;
  const offsetX = -window.scrollX + window.pageXOffset;

  return (
    <div
      style={{
        transition: `box-shadow ${tokens.durationFast} ${tokens.curveEasyEase}, background-color ${tokens.durationFast} ${tokens.curveEasyEase}`,
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: '9999',
        top: position.y + offsetY,
        left: position.x + offsetX,
        width: position.width - 2,
        height: position.height - 2,
        ...(label && {
          boxShadow: slotName
            ? `inset 0 0 0 ${isMuted ? 0 : '1px'} rgba(0, 0, 255, ${isSelected ? 0.5 : 0.3})`
            : `0 0 0 ${isMuted ? 0 : '1px'} rgba(255, 0, 128, ${isSelected ? 0.5 : 0.3})`,
        }),
        ...(isSelected && {
          background: slotName ? `rgba(192, 192, 255, 0.8)` : 'rgba(255, 128, 192, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
        }),
      }}
      {...rest}
    >
      {label && (
        <span
          style={{
            transition: `opacity ${tokens.durationFast} ${tokens.curveEasyEase}`,
            display: 'block',
            zIndex: '99999',
            verticalAlign: 'middle',
            ...(slotName
              ? {
                  position: 'absolute',
                  // bottom: `-${labelSize / 2}px`,
                  right: `-${labelSize / 2}px`,
                }
              : {
                  position: 'fixed',
                  top: `${labelTop + offsetY}px`,
                  left: `${labelLeft + offsetX}px`,
                  bottom: 0,
                  margin: `-${labelSize / 2}px 0 0 -${labelSize / 2}px`,
                }),
            width: `${labelSize}px`,
            height: `${labelSize}px`,
            textAlign: 'center',
            lineHeight: `${labelSize}px`,
            fontSize: `12px`,
            fontWeight: 'bold',
            borderRadius: '100%',
            background: slotName ? `rgb(192, 192, 255)` : `rgb(255, 192, 224)`,
            opacity: isMuted ? 0 : 1,
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
};

type Position = {
  x: number;
  y: number;
  width: number;
  height: number;
};
type TrackedComponent = {
  componentName: string;
  cssSelector: string;
  labelLeft: number;
  labelTop: number;
  order: number;
  position: Position;
  slotName: string;
};
type ShowAnatomyProps = { children: React.ReactNode; displayName: string };
const ShowAnatomy = ({ children, displayName }: ShowAnatomyProps) => {
  const rafRef = React.useRef<number>(0);
  const childrenContainerRef = React.useRef<HTMLDivElement>(null);
  const [trackedComponents, setTrackedComponents] = React.useState<TrackedComponent[]>([]);
  const [selectedComponentName, setSelectedComponentName] = React.useState<string>('');

  React.useEffect(() => {
    const updateTrackedComponents = () => {
      if (!childrenContainerRef.current) {
        return;
      }

      const uniqueFluentClassNames: string[] = [];

      const classString = `fui-${displayName}`;
      const fluentUIElements = childrenContainerRef.current.querySelectorAll(`[class*="${classString}"]`);

      fluentUIElements.forEach(element => {
        // const classNames = element.className.split(' ').filter(cn => cn.includes(`fui-`));
        const classNames = element.className
          .toString() // NOTE: SVG elements have a className of type SVGAnimatedString which doesn't have a split method
          .split(' ')
          .filter(cn => cn.includes(classString));

        classNames.forEach((className: string) => {
          if (!uniqueFluentClassNames.includes(className)) {
            uniqueFluentClassNames.push(className);
          }
        });
      });

      const updatedTrackedComponents: TrackedComponent[] = [];
      uniqueFluentClassNames.forEach((className: string, i) => {
        const { componentName, slotName } = parseClassName(className);
        const cssSelector = `.${className}`;

        // here: we could query for the element that matches the cssSelector
        const targets = childrenContainerRef?.current?.querySelectorAll(cssSelector) ?? [];

        targets.forEach((target: Element, j: number) => {
          const trackedComponent: TrackedComponent = {
            componentName,
            cssSelector,
            labelLeft: 0,
            labelTop: 0,
            order: i * 100 + j,
            position: { x: 0, y: 0, width: 0, height: 0 },
            slotName,
          };

          if (target) {
            const targetRect = target.getBoundingClientRect();
            trackedComponent.position.x = targetRect.x;
            trackedComponent.position.y = targetRect.y;
            trackedComponent.position.width = targetRect.width;
            trackedComponent.position.height = targetRect.height;

            trackedComponent.labelLeft = trackedComponent.position.x;
            trackedComponent.labelTop = trackedComponent.position.y;
          }

          updatedTrackedComponents.push(trackedComponent);
        });
      });

      const sortedTrackedComponents = updatedTrackedComponents
        .sort((a, b) => a.labelTop - b.labelTop)
        .map((trackedComponent: TrackedComponent, i: number, arr) => {
          const tolerance = 16;
          const previousTrackedComponent = arr[i - 1];

          if (
            previousTrackedComponent &&
            trackedComponent.labelTop - previousTrackedComponent.labelTop < tolerance &&
            Math.abs(trackedComponent.labelLeft - previousTrackedComponent.labelLeft) < tolerance
          ) {
            trackedComponent.labelTop = Math.min(
              trackedComponent.labelTop + trackedComponent.position.height,
              previousTrackedComponent.labelTop + tolerance,
            );
          }
          return trackedComponent;
        })
        .sort((a, b) => a.labelLeft - b.labelLeft)
        .map((trackedComponent: TrackedComponent, i: number, arr) => {
          const tolerance = 14;
          const previousTrackedComponent = arr[i - 1];

          if (
            previousTrackedComponent &&
            trackedComponent.labelLeft - previousTrackedComponent.labelLeft < tolerance &&
            Math.abs(trackedComponent.labelTop - previousTrackedComponent.labelTop) < tolerance
          ) {
            trackedComponent.labelLeft = Math.min(
              trackedComponent.labelLeft + trackedComponent.position.width,
              previousTrackedComponent.labelLeft + tolerance,
            );
          }
          return trackedComponent;
        })
        .sort((a, b) => {
          // TODO: sort components by DOM order, then insert slots under their corresponding component

          // // DOM query order
          return a.order - b.order;

          // alphabetically by cssSelector
          // const aSortableSelector = a.cssSelector.replace('_', '-');
          // const bSortableSelector = b.cssSelector.replace('_', '-');
          //
          // if (aSortableSelector < bSortableSelector) {
          //   return -1;
          // }
          // if (aSortableSelector > bSortableSelector) {
          //   return 1;
          // }
          // return 0;
        });

      // Only update state if the tracked components have changed
      if (JSON.stringify(sortedTrackedComponents) !== JSON.stringify(trackedComponents)) {
        setTrackedComponents(sortedTrackedComponents);
      }

      rafRef.current = window.requestAnimationFrame(updateTrackedComponents);
    };

    updateTrackedComponents();

    return () => {
      window.cancelAnimationFrame(rafRef.current);
    };
  }, [displayName, trackedComponents]);

  let componentCounter = 0;
  let slotCounter = 0;

  const seenTrackedComponents = new Set<TrackedComponent['cssSelector']>();

  return (
    <div style={{ display: 'flex', gap: tokens.spacingHorizontalXXXL }}>
      <pre
        style={{
          flex: 1,
          padding: 0,
          margin: 0,
          fontFamily: 'var(--fontFamilyMonospace)',
          borderRight: `1px solid rgba(0, 0, 0, 0.1)`,
        }}
      >
        {trackedComponents.reduce<React.ReactNode[]>(
          (acc, { componentName, cssSelector, slotName, position, labelTop, labelLeft }) => {
            const name = slotName || componentName;

            const label = slotName ? String.fromCharCode(slotCounter + 97) : componentCounter + 1;
            const labelSize = 16;

            const isSelected = name === selectedComponentName;
            const isUnique = !seenTrackedComponents.has(cssSelector);

            acc.push(
              <AnatomyAnnotation
                label={isUnique ? label : ''}
                componentName={componentName}
                isSelected={isSelected}
                isMuted={!!(selectedComponentName && !isSelected)}
                slotName={slotName}
                labelTop={slotName ? position.y + position.height / 2 : labelTop}
                labelLeft={slotName ? position.x + position.width / 2 : labelLeft}
                position={position}
                data-anatomy-component={componentName}
                data-anatomy-slot={slotName}
              />,
            );

            if (isUnique) {
              seenTrackedComponents.add(cssSelector);

              if (slotName) {
                slotCounter++;
              } else {
                componentCounter++;
              }

              acc.push(
                <div
                  key={`${componentName}__${slotName}`}
                  style={{
                    padding: `${tokens.spacingVerticalXXS} ${
                      slotName ? tokens.spacingVerticalXXL : tokens.spacingHorizontalSNudge
                    }`,
                    marginTop: slotName ? 0 : tokens.spacingVerticalM,
                    backgroundColor: isSelected ? tokens.colorNeutralBackground1Hover : 'transparent',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() => setSelectedComponentName(name)}
                  onMouseLeave={() => setSelectedComponentName('')}
                >
                  {/*
                  TODO: It would be helpful to hide the content of the selected anatomy annotation
                        so that it is clear that only the containing area is the anatomy and not the content inside.

                        Something like this, but in the global scope:
                          .${cssSelector} * { visibility: hidden !important; }
                  */}
                  <span
                    style={{
                      display: 'inline-block',
                      width: `${labelSize}px`,
                      height: `${labelSize}px`,
                      fontSize: `${Math.round(labelSize * 0.75)}px`,
                      fontWeight: 'bold',
                      lineHeight: `${labelSize}px`,
                      textAlign: 'center',
                      color: 'black',
                      background: slotName ? `rgb(192, 192, 255)` : `rgb(255, 192, 224)`,
                      borderRadius: '999px',
                    }}
                  >
                    {label}
                  </span>
                  &nbsp;
                  {slotName || componentName}
                </div>,
              );
            }

            return acc;
          },
          [],
        )}
      </pre>

      <div style={{ flex: 3 }} ref={childrenContainerRef}>
        {children}
      </div>
    </div>
  );
};

const findTheme = (themeId?: ThemeIds) => {
  if (!themeId) {
    return;
  }
  return themes.find(value => value.id === themeId);
};

const getActiveFluentTheme = (globals: FluentGlobals) => {
  const selectedThemeId = globals[THEME_ID];
  const { theme } = findTheme(selectedThemeId) ?? defaultTheme;

  return { theme };
};

export const withFluentProvider = (StoryFn: () => JSX.Element, context: FluentStoryContext) => {
  const { globals, parameters } = context;
  const { mode } = parameters;
  const isVrTest = mode === 'vr-test';

  const globalTheme = getActiveFluentTheme(globals);
  const paramTheme = findTheme(parameters.fluentTheme);
  const { theme } = paramTheme ?? globalTheme;

  const displayName = context?.title?.split('/').pop() ?? '';

  return (
    <FluentProvider theme={theme} dir={parameters.dir}>
      {isVrTest ? (
        StoryFn()
      ) : (
        <FluentExampleContainer theme={theme}>
          <ShowAnatomy displayName={displayName}>{StoryFn()}</ShowAnatomy>
        </FluentExampleContainer>
      )}
    </FluentProvider>
  );
};

const FluentExampleContainer: React.FC<{ theme: Theme }> = props => {
  const { theme } = props;

  const backgroundColor = theme.colorNeutralBackground2;
  return <div style={{ padding: '48px 24px', backgroundColor }}>{props.children}</div>;
};
