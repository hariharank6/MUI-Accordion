'use client';

import React from 'react';
import Accordion from '../components/Accordion';
import { Box, Button, Stack, Typography } from '@mui/material';

const Home = () => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Stack direction="column" rowGap={2} maxWidth={600} mx="auto" mb={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection="row">
        <Typography variant="h4">Steps</Typography>
        <Button variant="text" color="primary" onClick={() => setExpanded(!expanded)}>{expanded ? "Collapse" : "Expand"} All</Button>
      </Box>
      <Accordion title="1. Create Shipment" content="Create a shipment for a new order." expanded={expanded} onChange={() => setExpanded(!expanded)} />
      <Accordion color="green" title="2. Repacking & Consolidation" content="Create a shipment for a new order." expanded={expanded} onChange={() => setExpanded(!expanded)} />
      <Accordion color="blue" title="3. Create Shipment" content="Create a shipment for a new order." expanded={expanded} onChange={() => setExpanded(!expanded)} />
    </Stack>
  );
};

export default Home;
