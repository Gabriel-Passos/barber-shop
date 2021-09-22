import { FaWhatsapp } from 'react-icons/fa';

import { Button } from './styles';

export function WhatsAppButton() {
  const message = "Olá barber shop, estou entrando em contato pois gostaria de esclarecer algumas dúvidas.";

  return (
    <Button
      href={`https://api.whatsapp.com/send?phone=${5514991663957}&text=${message}`}
      target="_blank"
    >
      <FaWhatsapp size={28} color="#fff" />
    </Button>
  );
}