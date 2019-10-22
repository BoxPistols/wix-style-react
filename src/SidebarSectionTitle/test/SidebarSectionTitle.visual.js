import React from 'react';
import { storiesOf } from '@storybook/react';

import SidebarSectionTitle from '../SidebarSectionTitle';
import Sidebar from '../../Sidebar';
import Box from '../../Box';

const skins = ['dark', 'light'];

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: 'Should display with text',
        props: {
          children: 'Some Text',
        },
      },
      {
        it: 'Should display an ellipsis for long text',
        props: {
          children:
            'This is a very long text which exceeds the maximum width of its container',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) =>
  storiesOf(`SidebarSectionTitle`, module).add(describe, () => (
    <React.Fragment>
      {its.map(({ props }) => (
        <Box backgroundColor="D70">
          {skins.map(skin => (
            <Box direction="vertical" marginBottom={5} marginRight={5}>
              <Sidebar skin={skin}>
                <SidebarSectionTitle {...props} />
              </Sidebar>
            </Box>
          ))}
        </Box>
      ))}
    </React.Fragment>
  )),
);
