import React, {useState} from "react";


const useFlip = () => {
    const [state, setState] = useState(true);
    const flipCard = () => {
        setState(isUp => !isUp);
      };

    return [state, flipCard];
}

export {useFlip};