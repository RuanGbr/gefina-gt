interface SummaryCardProps{
    label: string;
    value: string;
}

export default function SummaryCardProps(props:SummaryCardProps){
    return <div>
        <p>{props.label} </p>
        <p className="numeric">{props.value} </p>

    </div>;
}