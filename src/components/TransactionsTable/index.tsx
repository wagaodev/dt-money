import { useEffect } from 'react';
import { Container } from './styles';

export function TransactionsTable() {

  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Salário</td>
            <td className='deposit'> R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>06/07/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>- R$ 3.000</td>
            <td>Desenvolvimento</td>
            <td>05/07/2021</td>
          </tr>
         
        </tbody>
      </table>
    </Container>
  )
}