import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "What are the components of StandRe?", value: "What are the components of StandRe?" },
    { text: "What is migration risk and how does it affect credit risk?", value: "What is migration risk and how does it affect credit risk?" },
    { text: "How should a fixed income bond be modeled in the SST?", value: "How should a fixed income bond be modeled in the SST?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
