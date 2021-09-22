import { WorkingTime } from '../../../components/WorkingTime';

import { Container } from './styles';

export function TimeWorkingList() {
  return (
    <Container>
      <WorkingTime 
        title="Dias da semana"
        timetable="9AM To 9PM"
      />

      <WorkingTime 
        title="Sábado"
        timetable="9AM To 5PM"
      />

      <WorkingTime 
        title="Domingo"
        timetable="Fechado"
        isClosed
      />
    </Container>
  );
}