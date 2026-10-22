import {Invoice } from "./invoiceType"
import {formatCurrency, formatDate } from './utils'
interface InvoiceSummuaryTable {
    title: string;
    dataLabel: string;
    invoices: Invoice[];
    date: (invoice: Invoice) => string
}

export default function InvoiceSummuaryTable (props: InvoiceSummuaryTable){
    return <div className='panel'>
        <h2>{props.title}</h2>
        <table>
            <thead>
                <tr>
                    <th >Cliente</th>
                    <th >Valor</th>
                    <th className="numeric-date">{props.dataLabel}</th>
                </tr>
            </thead>
            <tbody>
                {props.invoices.map((invoice)   => {
                 return <tr key={invoice.id}>  
                    <td> { invoice.customer.name } </td>
                    <td className="numeric"> {formatCurrency(invoice.amount)} </td>
                    <td className="numeric numeric-date"> {formatDate(props.date(invoice))} </td>
                </tr>
                }
                )}
            </tbody>
        </table>
    </div>
}