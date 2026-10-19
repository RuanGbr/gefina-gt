interface SummaryCardProps{
    label: string;
    value: string;
}

export default function SummaryCardProps(props:SummaryCardProps){
    return <div>
        <p>{props.label} </p>
        <p>{props.value} </p>

    </div>
}