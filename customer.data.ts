interface Customer {
  id: number;
  name: string;
  email: string;
}

const customers: Customer[] = [
  {
    id: 1,
    name: 'Construtora Meridiano',
    email: 'contato@meridiano.com.br',
  },
  {
    id: 2,
    name: 'Gráfica Aurora',
    email: 'contato@graficaaurora.com.br',
  },
];

export default customers;
