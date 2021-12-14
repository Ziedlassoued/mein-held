import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <NavBar />
      <div>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Was ist Mein Held
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Du fragst dich, was Mein Held ist? Das sagen wir dir gerne.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              suscipit excepturi numquam quibusdam distinctio fugiat delectus
              cupiditate voluptas aspernatur aperiam earum, inventore
              doloremque? Magni veniam distinctio, voluptatem cumque nam ab!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Funktion
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Wie funktioniert Mein Held?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              at incidunt natus aut vel, itaque exercitationem possimus
              adipisci, culpa soluta quo, deleniti tenetur veritatis. Molestiae
              dolore suscipit molestias expedita beatae.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Hinweis
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Was Sie beachten müssen
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              sit explicabo veniam repudiandae eius, ducimus numquam asperiores
              officia fugit amet nobis ea, autem natus consequuntur, eaque
              ipsam. Tempora, maiores rem?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Hilfe für Partner
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              nostrum qui culpa repellendus expedita similique porro quo
              voluptas, dolore veritatis explicabo corrupti, neque alias cumque
              recusandae, saepe aliquam perspiciatis pariatur!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
}
