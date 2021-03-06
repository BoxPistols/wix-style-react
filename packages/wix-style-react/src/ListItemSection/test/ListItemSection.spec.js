import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import ListItemSection from '../ListItemSection';
import { listItemSectionPrivateDriverFactory } from './ListItemSection.private.uni.driver';

describe('ListItemSection', () => {
  const renderListItemSection = (props = {}) => <ListItemSection {...props} />;
  const render = createRendererWithUniDriver(
    listItemSectionPrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(renderListItemSection());

    expect(await driver.exists()).toBe(true);
  });

  it('should not have elements: title, suffix', async () => {
    const { driver } = render(renderListItemSection({}));

    expect(await driver.getTitle()).toBe('');
    expect(await driver.getSuffix().exists()).toBe(false);
  });

  it('should render title when provided', async () => {
    const { driver } = render(
      renderListItemSection({
        title: 'ListItemSection title',
      }),
    );

    expect(await driver.getTitle()).toBe('ListItemSection title');
  });

  describe('suffix', () => {
    it('should render suffix when provided', async () => {
      const suffix = 'suffix';
      const { driver } = render(
        renderListItemSection({
          title: 'ListItemSection title',
          suffix,
        }),
      );

      expect(await driver.getSuffix().exists()).toBe(true);
    });

    it('should render provided `suffix` node', async () => {
      const suffix = <div>Suffix</div>;
      const { driver } = render(
        renderListItemSection({
          title: 'ListItemSection title',
          suffix,
        }),
      );

      expect(await driver.getSuffix().exists()).toBe(true);
    });

    it('should call onClick when clicking suffix text button', async () => {
      const onClick = jest.fn();
      const suffix = 'suffix';
      const { driver } = render(
        renderListItemSection({
          title: 'ListItemSection title',
          suffix,
          onClick,
        }),
      );

      expect(onClick).not.toBeCalled();
      await driver.getSuffix().click();
      expect(onClick).toBeCalled();
    });

    it('should call onClick when clicking suffix node', async () => {
      const onClick = jest.fn();
      const suffix = <div>Suffix</div>;
      const { driver } = render(
        renderListItemSection({
          title: 'ListItemSection title',
          suffix,
          onClick,
        }),
      );

      expect(onClick).not.toBeCalled();
      await driver.getSuffix().click();
      expect(onClick).toBeCalled();
    });
  });

  it('should not call onClick when clicking elsewhere', async () => {
    const onClick = jest.fn();
    const suffix = 'suffix';
    const { driver } = render(
      renderListItemSection({
        title: 'ListItemSection title',
        suffix,
        onClick,
      }),
    );

    expect(onClick).not.toBeCalled();
    await driver.click();
    expect(onClick).not.toBeCalled();
  });

  it('should stop propagation when clicking on a divider and whitespace', async () => {
    const onClick = jest.fn();
    const { driver } = render(
      <div onClick={onClick}>
        <ListItemSection type="divider" dataHook="dh1" />
        <ListItemSection type="whitespace" dataHook="dh2" />
      </div>,
    );

    expect(onClick).not.toBeCalled();
    await (await driver.element()).querySelector('[data-hook="dh1"]').click();
    await (await driver.element()).querySelector('[data-hook="dh2"]').click();
    expect(onClick).not.toBeCalled();
  });
});
