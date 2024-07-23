import SpringyLetter from "./SpringyLetter";
import { twMerge } from "tailwind-merge";

const SpringyText = ({ text, className }) => {
    const springyTextParentClass = twMerge(`
    ${className}
    flex 
    flex-wrap 
    gap-x-3 
    md:justify-start
  `);

    const words = text.split(" ");

    const getSpringyLetters = (word) => {
        const letters = word.split("");

        return letters.map((letter, i) => (
            <SpringyLetter key={letter + i} letter={letter} />
        ));
    };

    const springyText = words.map((word, i) => (
        <div key={word}>{getSpringyLetters(word)}</div>
    ));

    return <h1 className={springyTextParentClass}>{springyText}</h1>;
};

export default SpringyText;
