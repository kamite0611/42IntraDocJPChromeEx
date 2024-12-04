import { Stack, Typography, Button } from '@mui/material';
import { useState } from 'react';

const Welcome = () => {
  const [count, setCount] = useState(2);

  return (
    <Stack width={400} p={3} alignItems="center" m="auto">
      <Typography variant="h6" paragraph mb={0}>
        welcome to omusubi ver.{count} 🎉
      </Typography>
      <Stack direction="row" justifyContent="center">
        <Button variant="contained" onClick={() => setCount((prev) => prev + 1)}>
          +
        </Button>
        <Button variant="contained" onClick={() => setCount((prev) => prev + -1)}>
          -
        </Button>
      </Stack>
    </Stack>
  );
};

export default Welcome;
