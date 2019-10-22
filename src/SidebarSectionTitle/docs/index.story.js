import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

import SidebarSectionTitle from '..';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'SidebarSectionTitle',

  component: SidebarSectionTitle,
  componentPath: '..',

  componentProps: {
    children: 'Some title',
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/SidebarSectionTitle/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text: 'A title for the section within the sidebar.',
            }),
          ]),

          columns([
            importExample(
              "import SidebarSectionTitle from 'wix-style-react/SidebarSectionTitle';",
            ),
          ]),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Plain Example',
              text: 'A simple example for section title',
            }),

            code({
              compact: true,
              source: examples.plain,
            }),
          ]),

          columns([
            description({
              title: 'Title with Ellipsis',
              text: 'A simple example for an ellipsis in case of long text',
            }),

            code({
              compact: true,
              source: examples.ellipsis,
            }),
          ]),

          columns([
            description({
              title: 'Light Skin',
              text:
                'This example uses the `<Sidebar/>` to demonstrate the "light" skin design. Notice that when `<SidebarSectionTitle/>` is contained inside `<Sidebar/>`, it affected by the `skin` prop accordingly',
            }),

            code({
              compact: true,
              source: examples.lightSkin,
            }),
          ]),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
