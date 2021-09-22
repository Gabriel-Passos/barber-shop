import { Container, Hour } from './styles';

interface WorkingTimeProps {
  title: string;
  timetable: string;
  isClosed?: boolean;
}

export function WorkingTime ({ 
  title, 
  timetable, 
  isClosed = false 
}: WorkingTimeProps) {
  return (
    <Container>
      <strong>{title}</strong>
      
      <Hour closed={isClosed}>
        <strong>
          {timetable}
        </strong>
      </Hour>
    </Container>
  );
}