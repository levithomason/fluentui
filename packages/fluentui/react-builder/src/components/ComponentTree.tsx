import * as React from 'react';
import { JSONTreeElement } from './types';
import { TreeItemProps, Tree } from '@fluentui/react-northstar';
import { jsonTreeFindElement } from '../config';
import { TrashDebugButton } from './DebugButtons';

export type ComponentTreeProps = {
  tree: JSONTreeElement;
  selectedComponent?: JSONTreeElement;
  onSelectComponent?: (jsonTreeElement: JSONTreeElement) => void;
  onDeleteComponent?: () => void;
};

const jsonTreeToTreeItems: (
  tree: JSONTreeElement | string,
  selectedComponentId: string,
  handleSelectedComponent: TreeItemProps['onTitleClick'],
  handleDelete: React.MouseEventHandler<HTMLButtonElement>,
) => TreeItemProps = (tree, selectedComponentId, handleSelectedComponent, handleDelete) => {
  if (typeof tree === 'string') {
    return {
      id: Math.random()
        .toString(36)
        .slice(2),
      title: 'string',
    };
  }
  return {
    onTitleClick: handleSelectedComponent,
    id: tree.uuid as string,
    title: {
      content: tree.displayName,
      styles: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: '2px 4px',
        ...(selectedComponentId === tree.uuid && {
          background: '#ffc65c',
          color: '#444',
        }),
      },
    },
    ...(selectedComponentId === tree.uuid && {
      renderItemTitle: (C, { content, ...props }) => {
        return (
          <C {...props}>
            <span style={{ flex: 1 }}>{content}</span>
            <TrashDebugButton onClick={handleDelete} title="Delete" />
          </C>
        );
      },
    }),
    expanded: true,
    items: tree.props?.children?.map(item =>
      jsonTreeToTreeItems(item, selectedComponentId, handleSelectedComponent, handleDelete),
    ),
  };
};

export const ComponentTree: React.FunctionComponent<ComponentTreeProps> = ({
  tree,
  selectedComponent,
  onSelectComponent,
  onDeleteComponent,
}) => {
  const handleSelectComponent = React.useCallback(
    (e, props: TreeItemProps) => {
      onSelectComponent?.(jsonTreeFindElement(tree, props.id));
    },
    [onSelectComponent, tree],
  );

  const handleDelete = React.useCallback(
    (e, ...args) => {
      onDeleteComponent?.();
      e.stopPropagation();
      e.preventDefault();
    },
    [onDeleteComponent],
  );

  const selectedComponentId = selectedComponent?.uuid as string;
  const items: TreeItemProps[] =
    tree.props?.children?.map(item =>
      jsonTreeToTreeItems(item, selectedComponentId, handleSelectComponent, handleDelete),
    ) ?? [];
  return <Tree items={items} />;
};
