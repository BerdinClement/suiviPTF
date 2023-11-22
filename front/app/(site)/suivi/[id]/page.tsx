export default function SuiviPage({ params }: { params: { id: string } }) {
    return (
        <div>Mon Suivi : {params.id}</div>
    )
}