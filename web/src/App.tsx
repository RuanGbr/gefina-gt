import InvoiceTable from "./InvoiceTable.tsx";
import { Invoice } from "./invoiceType.ts";

const invoices: Invoice[] = [
  {
    id: 1,
    amount: 125000,
    status: 'pending',
    issueDate: '2026-06-01',
    dueDate: '2026-06-15',
    customerId: 1,
  },
  {
    id: 2,
    amount: 348000,
    status: 'paid',
    issueDate: '2026-05-12',
    dueDate: '2026-06-11',
    customerId: 1,
  },
  {
    id: 3,
    amount: 96500,
    status: 'pending',
    issueDate: '2026-06-20',
    dueDate: '2026-07-20',
    customerId: 2,
  },
];

export default function App(){
    return  <InvoiceTable invoices={invoices} />
}