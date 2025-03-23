import { ParseClassification, ClassificationData } from "./ClassificationParsing"

interface ClassificationProps {
    position: string;
    level: string;
    caveats?: string;
}

//Return the classification bar component.
export default function Classification(props: ClassificationProps) {
    const classify: ClassificationData = ParseClassification({ position: props.position, level: props.level, caveats: props.caveats });
    if (classify.caveats == undefined) {
        return (
            <div className={classify.classes}>
                <p>HIGHEST POSSIBLE CLASSIFICATION: {classify.classification}</p>
            </div>
        );
    }
    return (
        <div className={classify.classes}>
            <p>HIGHEST POSSIBLE CLASSIFICATION: {classify.classification}//{classify.caveats}</p>
        </div>
    );
}