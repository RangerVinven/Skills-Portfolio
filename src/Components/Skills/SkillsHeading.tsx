type Props = {
    title: string;
}

export default function SkillsHeading(props: Props) {
    return (
        <h1 className="text-2xl mb-2">{props.title}</h1>
    )
}
