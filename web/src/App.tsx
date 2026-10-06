import { useState, useEffect } from "react";
import InvoiceTable from "./InvoiceTable.tsx";
import { Invoice } from "./invoiceType.ts";

export default function App(){
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true)
useEffect(() =>{
  async function getInvoices() {
    try{
      const response = await fetch('/api/invoices');
      if(!response.ok){
        setError('Não foi possivel carregar faturas.')}
        const data = await response.json();
        setInvoices(data);
    }catch{
      setError('Não foi possivel carregar faturas.')
    }
    setLoading(false)
  }
  getInvoices();
},[]);
  if(loading) return <p>Carregando Faturas....</p>
  if(error){
    return <p>{error}</p>
  }
  return <> <InvoiceTable invoices={invoices}/> </>
}