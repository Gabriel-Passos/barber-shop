import { ServicePrice } from '../../../components/ServicePrice';

import { Container } from './styles';

export function ServicePriceList() {
  return (
    <Container>
      <div>
        <ServicePrice 
          title="Cortes de cabelo"
          description="Lorem Ipsum is simply dummy"
          price="120,00"
        />  
        <ServicePrice 
          title="Cortes de cabelo"
          description="Lorem Ipsum is simply dummy"
          price="120,00"
        />  
        <ServicePrice 
          title="Cortes de cabelo"
          description="Lorem Ipsum is simply dummy"
          price="120,00"
        />  
      </div>

      <div>
        <ServicePrice 
          title="Cortes de cabelo"
          description="Lorem Ipsum is simply dummy"
          price="120,00"
        /> 
        <ServicePrice 
          title="Cortes de cabelo"
          description="Lorem Ipsum is simply dummy"
          price="120,00"
        /> 
        <ServicePrice 
          title="Cortes de cabelo"
          description="Lorem Ipsum is simply dummy"
          price="120,00"
        /> 
      </div>
    </Container>
  );
}