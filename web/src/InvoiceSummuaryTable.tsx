import {Invoice } from "./invoiceType"
import {formatCurrency, formatDate } from './utils'
interface InvoiceSummuaryTable {
    title: string;
    dataLabel: string;
    invoices: Invoice[];
    date: (invoice: Invoice) => string
}

export default function InvoiceSummuaryTable (props: InvoiceSummuaryTable){
    return <div>
        <h2>{props.title}</h2>
        <table>
            <thead>
                <tr>
                    <th>Cliente</th>
                    <th>Valor</th>
                    <th>{props.dataLabel}</th>
                </tr>
            </thead>
            <tbody>
                {props.invoices.map((invoice)=> {
                 return <tr>  
                    <td> { invoice.customer.name } </td>
                    <td> {formatCurrency(invoice.amount)} </td>
                    <td> {formatDate(props.date(invoice))} </td>
                </tr>
                }
                )}
            </tbody>
        </table>
    </div>
}