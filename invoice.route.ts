import {Router} from 'express';
import invoices from "./invoice.data.ts";
import customers from './customer.data.ts';
const router = Router()

router.get("/", function (request, response) {
  const invoiceWithCustomers = invoices.map((invoice) => {
    const customer = customers.find((customer) => {
      return customer.id === invoice.customerId 
    })
    if (customer === undefined){
    return response.status(404).json({error:{message: 'Cliente nao encotrado'}})  
    }
    return {
      invoice,
      customer
    }   
  })
  response.status(200).json(invoiceWithCustomers);
});

router.get("/:id", function (request, response) {
  const invoice = invoices.find((invoice) => {
    return invoice.id === +request.params.id;
  });
  if (invoice === undefined){
    return response.status(404).json({
      error: {message: 'Fatura não encontrada.'}
    });
  }
  const customer = customers.find((customer)=>{
    return customer.id === invoice.customerId
  })
  if(customer === undefined){
    return response.status(404).json({error:{message: 'Cliente não encontrado'}})
  }

  response.status(200).json({
    invoice,
    customer
  });
});
export default router