import {Invoice} from './invoiceType.ts'
import situatonLabel from './situationLabel.ts'
interface InvoiceRowProps{
    invoice: Invoice
}

export default function InvoiceRow(props: InvoiceRowProps){
    const invoice = props.invoice
    return <tr>
    <td>{invoice.customer.name}</td>
    <td>{invoice.amount}</td>
    <td>{invoice.issueDate}</td>
    <td>{invoice.dueDate}</td>
    <td>{situatonLabel(invoice.situation)}</td>
    </tr>
}