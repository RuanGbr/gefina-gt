import {Router} from 'express';
import invoices from "./invoice.data.ts";

const router = Router()

router.get("/", function (request, response) {
  response.status(200).json(invoices);
});

router.get("/:id", function (request, response) {
  const invoice = invoices.find((invoice) => {
    return invoice.id === +request.params.id;
  });
  if (invoice === undefined){
    return response.status(404).json({error: {message: 'Fatura não encontrada.'}})
  }
  response.status(200).json(invoice);
});
export default router