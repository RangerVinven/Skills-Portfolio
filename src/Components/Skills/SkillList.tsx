import { Progress } from "@chakra-ui/react"

type Props = {
    skills: SkillsType[]
}

type SkillsType = {
    Item: string,
    Progress: number
}

export default function SkillList(props: Props) {

    return (
        props.skills.map((skill: SkillsType) => {
            return (
                <div className="w-48 mb-5">
                    <h3 className="text-center text-lg"> {skill.Item} </h3>
                    <Progress value={skill.Progress} colorScheme="green" height="3" />
                </div>
            )
        })
    )
}