import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education, experiences } from '../../data/constants';
import { Container, Wrapper, Title, Desc, TimelineSection } from './Education.js';
import { EducationCard } from '../EducationCard/EducationCard.jsx';


export const Education = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Educación</Title>
        <Desc>
          Mi educación ha sido un viaje de conocimientos y crecimiento. Mis datos educativos son los siguientes.
        </Desc>
        <TimelineSection>
          <Timeline>
            {education.map((education, index) => (
              <TimelineItem key={education.id}>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== experiences.length && <TimelineConnector style={{ background: '#854CE6' }} />}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>

        </TimelineSection>
      </Wrapper>
    </Container>
  )
}