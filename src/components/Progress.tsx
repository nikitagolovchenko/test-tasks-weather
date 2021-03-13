import { Box, LinearProgress } from '@material-ui/core';
import React from 'react';

interface ProgressProps {
  loading: boolean;
}

const Progress: React.FC<ProgressProps> = ({ loading }) => {
  return loading ? (
    <Box position='absolute' top='0' left='0' width='100%' zIndex='modal'>
      <LinearProgress color='secondary' />
    </Box>
  ) : null;
};

export default Progress;
