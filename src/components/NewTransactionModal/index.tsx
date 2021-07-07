import Modal from 'react-modal';

import { Container } from './styles';

interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionProps) {
  return (
    <Container>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <h2>Cadastrar transação</h2>
      </Modal>
    </Container>
  )
}