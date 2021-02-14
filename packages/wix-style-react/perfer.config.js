const javascriptFiles = [
  ['Accordion.bundle.min.js', 51],
  ['AddItem.bundle.min.js', 44],
  ['AddressInput.bundle.min.js', 73],
  ['AnalyticsSummaryCard.bundle.min.js', 70],
  ['Animate.bundle.min.js', 5],
  ['AnnouncementModalLayout.bundle.min.js', 52],
  ['AreaChart.bundle.min.js', 87],
  ['AtlasAddressInput.bundle.min.js', 85],
  ['AudioPlayer.bundle.min.js', 57],
  ['AutoComplete.bundle.min.js', 71],
  ['AutoCompleteWithLabel.bundle.min.js', 74],
  ['Avatar.bundle.min.js', 55],
  ['Badge.bundle.min.js', 40],
  ['BadgeSelect.bundle.min.js', 63],
  ['BadgeSelectItemBuilder.bundle.min.js', 42],
  ['BarChart.bundle.min.js', 43],
  ['BaseModalLayout.bundle.min.js', 51],
  ['BounceAnimation.bundle.min.js', 10],
  ['BusinessDashboard_theme.bundle.min.js', 60],
  ['Box.bundle.min.js', 6],
  ['Breadcrumbs.bundle.min.js', 38],
  ['BrowserPreviewWidget.bundle.min.js', 8],
  ['Button.bundle.min.js', 40],
  ['Calendar.bundle.min.js', 125],
  ['CalendarPanel.bundle.min.js', 125],
  ['CalendarPanelFooter.bundle.min.js', 127],
  ['Card.bundle.min.js', 42],
  ['CardFolderTabs.bundle.min.js', 39],
  ['CardGalleryItem.bundle.min.js', 65],
  ['Carousel.bundle.min.js', 68],
  ['CarouselWIP.bundle.min.js', 50],
  ['Checkbox.bundle.min.js', 44],
  ['CheckToggle.bundle.min.js', 37],
  ['CircularProgressBar.bundle.min.js', 43],
  ['CloseButton.bundle.min.js', 15],
  ['Collapse.bundle.min.js', 11],
  ['ColorInput.bundle.min.js', 81],
  ['ColorPicker.bundle.min.js', 80],
  ['ComposerHeader.bundle.min.js', 42],
  ['ComposerSidebar.bundle.min.js', 44],
  ['ContactItemBuilder.bundle.min.js', 56],
  ['CopyClipboard.bundle.min.js', 10],
  ['CounterBadge.bundle.min.js', 38],
  ['CustomModalLayout.bundle.min.js', 51],
  ['DatePicker.bundle.min.js', 136],
  ['Divider.bundle.min.js', 4],
  ['Dropdown.bundle.min.js', 78],
  ['DropdownBase.bundle.min.js', 60],
  ['DropdownLayout.bundle.min.js', 57],
  ['Dropzone.bundle.min.js', 5],
  ['EditableSelector.bundle.min.js', 75],
  ['EditableTitle.bundle.min.js', 63],
  ['EmptyState.bundle.min.js', 38],
  ['EndorseContentLayout.bundle.min.js', 37],
  ['FacesRatingBar.bundle.min.js', 40],
  ['FeatureList.bundle.min.js', 37],
  ['FilePicker.bundle.min.js', 50],
  ['FileUpload.bundle.min.js', 3],
  ['FillButton.bundle.min.js', 52],
  ['FillPreview.bundle.min.js', 18],
  ['FloatingHelper.bundle.min.js', 49],
  ['FloatingNotification.bundle.min.js', 47],
  ['FontUpgrade.bundle.min.js', 3],
  ['FormField.bundle.min.js', 44],
  ['FunnelChart.bundle.min.js', 44],
  ['GenericModalLayout.bundle.min.js', 4],
  ['GoogleAddressInput.bundle.min.js', 80],
  ['GooglePreview.bundle.min.js', 39],
  ['Grid.bundle.min.js', 8],
  ['Heading.bundle.min.js', 35],
  ['Highlighter.bundle.min.js', 4],
  ['HorizontalTimeline.bundle.min.js', 42],
  ['IconButton.bundle.min.js', 14],
  ['Image.bundle.min.js', 5],
  ['ImageViewer.bundle.min.js', 58],
  ['InfoIcon.bundle.min.js', 41],
  ['Input.bundle.min.js', 62],
  ['InputArea.bundle.min.js', 46],
  ['InputWithLabel.bundle.min.js', 64],
  ['InputWithOptions.bundle.min.js', 71],
  ['Label.bundle.min.js', 8],
  ['LabelledElement.bundle.min.js', 40],
  ['Layout.bundle.min.js', 3],
  ['AnalyticsLayout.bundle.min.js', 8],
  ['LinearProgressBar.bundle.min.js', 47],
  ['ListItemAction.bundle.min.js', 42],
  ['ListItemEditable.bundle.min.js', 60],
  ['ListItemSection.bundle.min.js', 40],
  ['ListItemSelect.bundle.min.js', 45],
  ['Loader.bundle.min.js', 44],
  ['MarketingLayout.bundle.min.js', 44],
  ['MarketingPageLayout.bundle.min.js', 8],
  ['MarketingPageLayoutContent.bundle.min.js', 41],
  ['MediaOverlay.bundle.min.js', 14],
  ['MessageModalLayout.bundle.min.js', 51],
  ['MobilePreviewWidget.bundle.min.js', 8],
  ['Modal.bundle.min.js', 11],
  ['ModalMobileLayout.bundle.min.js', 9],
  ['ModalPreviewLayout.bundle.min.js', 46],
  ['ModalSelectorLayout.bundle.min.js', 90],
  ['MultiSelect.bundle.min.js', 100],
  ['MultiSelectCheckbox.bundle.min.js', 74],
  ['NestableList.bundle.min.js', 29],
  ['NoBorderInput.bundle.min.js', 63],
  ['Notification.bundle.min.js', 53],
  ['NumberInput.bundle.min.js', 63],
  ['Page.bundle.min.js', 61],
  ['PageFooter.bundle.min.js', 10],
  ['PageHeader.bundle.min.js', 53],
  ['Pagination.bundle.min.js', 10],
  ['Palette.bundle.min.js', 16],
  ['Popover.bundle.min.js', 29],
  ['PreviewWidget.bundle.min.js', 8],
  ['Proportion.bundle.min.js', 5],
  ['Radio.bundle.min.js', 40],
  ['RadioGroup.bundle.min.js', 40],
  ['Range.bundle.min.js', 36],
  ['RichTextInputArea.bundle.min.js', 145],
  ['Search.bundle.min.js', 74],
  ['SectionHelper.bundle.min.js', 43],
  ['SegmentedToggle.bundle.min.js', 43],
  ['SelectableAccordion.bundle.min.js', 57],
  ['Selector.bundle.min.js', 48],
  ['SelectorList.bundle.min.js', 84],
  ['Sidebar.bundle.min.js', 7],
  ['SidebarBackButton.bundle.min.js', 39],
  ['SidebarDivider.bundle.min.js', 7],
  ['SidebarHeader.bundle.min.js', 42],
  ['SidebarSectionItem.bundle.min.js', 40],
  ['SidebarSectionTitle.bundle.min.js', 37],
  ['SidePanel.bundle.min.js', 48],
  ['Skeleton.bundle.min.js', 5],
  ['SkeletonCircle.bundle.min.js', 8],
  ['SkeletonGroup.bundle.min.js', 4],
  ['SkeletonLine.bundle.min.js', 8],
  ['SkeletonRectangle.bundle.min.js', 8],
  ['Slider.bundle.min.js', 68],
  ['SocialButton.bundle.min.js', 42],
  ['SocialPreview.bundle.min.js', 39],
  ['SortableGrid.bundle.min.js', 32],
  ['SortableList.bundle.min.js', 30],
  ['SparklineChart.bundle.min.js', 62],
  ['StackedBarChart.bundle.min.js', 48],
  ['StarsRatingBar.bundle.min.js', 40],
  ['StatisticsWidget.bundle.min.js', 47],
  ['StatusIndicator.bundle.min.js', 44],
  ['Stepper.bundle.min.js', 41],
  ['Swatches.bundle.min.js', 86],
  ['StyledNestableList.bundle.min.js', 78],
  ['Table.bundle.min.js', 68],
  ['TableActionCell.bundle.min.js', 71],
  ['TableListItem.bundle.min.js', 48],
  ['TableToolbar.bundle.min.js', 38],
  ['Tabs.bundle.min.js', 42],
  ['Tag.bundle.min.js', 41],
  ['TagList.bundle.min.js', 45],
  ['TestimonialList.bundle.min.js', 37],
  ['Text.bundle.min.js', 36],
  ['TextButton.bundle.min.js', 38],
  ['ThemeProvider.bundle.min.js', 5],
  ['Thumbnail.bundle.min.js', 42],
  ['TimeInput.bundle.min.js', 84],
  ['TimeInputWip.bundle.min.js', 75],
  ['TimeTable.bundle.min.js', 74],
  ['Timeline.bundle.min.js', 37],
  ['ToggleButton.bundle.min.js', 43],
  ['ToggleSwitch.bundle.min.js', 17],
  ['Tooltip.bundle.min.js', 40],
  ['TrendIndicator.bundle.min.js', 38],
  ['VariableInput.bundle.min.js', 115],
  ['VerticalTabs.bundle.min.js', 40],
  ['VerticalTabsItem.bundle.min.js', 40],
  ['WarningIndicator.bundle.min.js', 40],
  ['WixStyleReactProvider.bundle.min.js', 10],
  ['PulseAnimation.bundle.min.js', 10],
];

const cssFiles = [
  ['Accordion.min.css', 2],
  ['CalendarPanel.min.css', 5],
  ['CalendarPanelFooter.min.css', 5],
  ['Carousel.min.css', 10],
  ['Collapse.min.css', 3],
  ['ContactItemBuilder.min.css', 1],
  ['EditableSelector.min.css', 7],
  ['EditableTitle.min.css', 6],
  ['EndorseContentLayout.min.css', 1],
  ['FloatingNotification.bundle.min.css', 2],
  ['GenericModalLayout.min.css', 1],
  ['GoogleAddressInput.min.css', 12],
  ['Grid.min.css', 4],
  ['ModalSelectorLayout.min.css', 9],
  ['MultiSelect.min.css', 8],
  ['MultiSelectCheckbox.min.css', 7],
  ['Notification.min.css', 2],
  ['Page.min.css', 3],
  ['PageHeader.min.css', 2],
  ['Range.min.css', 8],
  ['SelectableAccordion.min.css', 1],
  ['Selector.min.css', 3],
  ['SelectorList.min.css', 3],
  ['Table.min.css', 3],
  ['TableToolbar.min.css', 1],
];

const getJS = () =>
  javascriptFiles.map(([name, size]) => ({
    maxSize: `${size}kb`,
    glob: `.perfer/dist/statics/${name}`,
  }));

const getCSS = () =>
  cssFiles.map(([name, size]) => ({
    maxSize: `${size}kb`,
    glob: `.perfer/dist/statics/${name}`,
  }));

module.exports = {
  bundleSize: {
    files: [...getJS(), ...getCSS()],
  },
};
