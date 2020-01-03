import { modalPreviewLayoutDriverFactory as publicDriverFactory } from '../ModalPreviewLayout.uni.driver';
import { dataHooks } from '../constants';

export const modalPreviewLayoutPrivateDriverFactory = base => {
  const rightArrow = base.$(
    `[data-hook="${dataHooks.modalPreviewRightArrow}"]`,
  );
  const leftArrow = base.$(`[data-hook="${dataHooks.modalPreviewLeftArrow}"]`);

  return {
    ...publicDriverFactory(base),
    clickRightNavigationButton: rightArrow.click,
    clickLeftNavigationButton: leftArrow.click,
  };
};