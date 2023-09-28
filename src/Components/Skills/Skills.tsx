import SkillsHeading from "./SkillsHeading";
import SkillList from "./SkillList";

import { MySkills }  from "../../assets/Skills.json";

type SkillType = {
    Title: string,
    Skills: SkillsItemType[]
}

type SkillsItemType = {
    Item: string,
    Progress: number
}


export default function Skills() {   

    return (
        <div className="flex flex-wrap justify-evenly">
            {
                
                 MySkills.map((skill: SkillType) => {
                    return (
                        <div className="w-1/3 flex flex-col items-center">
                            <SkillsHeading title={skill.Title} />
                            <SkillList skills={skill.Skills} />
                        </div>
                    )
                })
            }
        </div>
    )
}
