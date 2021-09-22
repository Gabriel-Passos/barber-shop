import { dataServiceFirstColumn, dataServiceSecondColumn } from '../../../data/dataServices';

import { BarberService } from '../../../components/BarberService';

import barberTools from '../../../assets/images/single-image.png';

import { Container } from './styles';

export function OurServices() {
  return (
    <Container>
      <article>
        {dataServiceFirstColumn.map(dataItem => (
          <BarberService
            key={dataItem.id} 
            title={dataItem.serviceName}
            description={dataItem.serviceDescription}
            iconName={dataItem.iconName}
          />
        ))}
      </article>

      <div>
        <img src={barberTools} alt="" loading="lazy"/>
      </div>

      <article>
        {dataServiceSecondColumn.map(dataItem => (
          <BarberService
            key={dataItem.id} 
            title={dataItem.serviceName}
            description={dataItem.serviceDescription}
            iconName={dataItem.iconName}
            leftIcon
          />
        ))}
      </article>
    </Container>
  );
}