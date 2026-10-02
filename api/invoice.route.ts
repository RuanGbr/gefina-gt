import { Router } from 'express';
import customers from './customer.data.ts';
import invoices from './invoice.data.ts';

const router = Router();

router.get('/', (_request, response) => {
  const invoiceWithCustomers = invoices.map((invoice) => {
    const customer = customers.find((customer) => {
      return customer.id === invoice.customerId;
    });
    if (customer === undefined) {
      return response
        .status(404)
        .json({ error: { message: 'Cliente nao encotrado' } });
    }
    return {
      invoice,
      customer,
    };
  });
  response.status(200).json(invoiceWithCustomers);
});

router.get('/:id', (request, response) => {
  const invoice = invoices.find((invoice) => {
    return invoice.id === +request.params.id;
  });
  if (invoice === undefined) {
    return response.status(404).json({
      error: { message: 'Fatura não encontrada.' },
    });
  }
  const customer = customers.find((customer) => {
    return customer.id === invoice.customerId;
  });
  if (customer === undefined) {
    return response
      .status(404)
      .json({ error: { message: 'Cliente não encontrado' } });
  }

  response.status(200).json({
    invoice,
    customer,
  });
});
export default router;
