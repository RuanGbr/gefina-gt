import InvoiceRow from './InvoiceRow';
import type { Invoice } from './invoiceType';

interface InvoiceTableProps {
  invoices: Invoice[];
  edit: (invoice: Invoice) => void;
}
export default function InvoiceTable(props: InvoiceTableProps) {

  const theaderStyle='text-left text-sm font-medium p-3 border-b border-border text-text-muted'
  return (
    <table className='w-full border-collapse'>
      <thead>
        <tr>
          <th className={`${theaderStyle} text-left`}>Cliente</th>
          <th className={`${theaderStyle} text-left`}>Valor</th>
          <th className={theaderStyle}>Data de Emissão</th>
          <th className={theaderStyle}>Data de Vencimento</th>
          <th className={theaderStyle}>Situação</th>
          <th className={theaderStyle}></th>
        </tr>
      </thead>
      <tbody>
        {props.invoices.map((invoice) => (
          <InvoiceRow
            key={invoice.id}
            invoice={invoice}
            edit={props.edit}
          />
        ))}
      </tbody>
    </table>
  );
}
