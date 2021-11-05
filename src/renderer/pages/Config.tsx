import { Box } from '@material-ui/system';
import { Tab, Tabs } from '@material-ui/core';
import { useState } from 'react';

export default function Config() {
  const [value, setValue] = useState('one');

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
        value={value}
        // @ts-ignore
        onChange={(e: React.SyntheticEvent, newV: string) => setValue(newV)}
      >
        <Tab value="one" label="Integrations" />
        <Tab value="two" label="Interface" />
        <Tab value="three" label="Preferences" />
      </Tabs>
    </Box>
  );
}
