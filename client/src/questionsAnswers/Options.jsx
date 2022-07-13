import React from 'react';
import { Stack, Divider } from '@mui/material';

function Options({ children }) {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={1.5}
      fontSize="14px"
      color="#77787a"
      padding="10px 0"
    >
      {children}
    </Stack>
  );
}

export default Options;
