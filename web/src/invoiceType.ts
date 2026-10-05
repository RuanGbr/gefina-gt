
export type InvoiceStatus = 'pending' | 'paid';
export interface Invoice {
  id: number;
  amount: number;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
  customerId: number;
}
interface Customer {
  id: number;
  name: string;
  email: string;
}