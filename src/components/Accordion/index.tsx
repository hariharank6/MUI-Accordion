import * as React from 'react';
import MuiAccordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface AccordionProps extends Omit<React.ComponentProps<typeof MuiAccordion>, 'children'> {
  title: string;
  content: string;
  color?: "red" | "green" | "blue";
}

const Accordion = ({ title, content, expanded, color = "red", ...rest }: AccordionProps) => {
  // Convert color name to rgba for opacity
  const getColorWithOpacity = (colorName: string, opacity: number) => {
    const colorMap: Record<string, string> = {
      red: `rgba(255, 0, 0, ${opacity})`,
      green: `rgba(0, 255, 0, ${opacity})`,
      blue: `rgba(0, 0, 255, ${opacity})`,
    };
    return colorMap[colorName] || colorName;
  };

  return (
    <MuiAccordion
      expanded={expanded}
      sx={{
        [`&.${accordionClasses.root}`]: {
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
          marginY: '0px',
        },
        [`& .${accordionSummaryClasses.root}`]: {
          backgroundColor: getColorWithOpacity(color, 0.5), // 50% opacity
        },
      }}
      {...rest}
    >
      <AccordionSummary
        expandIcon={expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      >
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: getColorWithOpacity(color, 0.2), // 20% opacity
        }}
      >
        <Typography>
          {content}
        </Typography>
      </AccordionDetails>
    </MuiAccordion>
  );
};

export default Accordion;
