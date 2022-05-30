import React, {useState} from "react";
import axios from "axios";
import uuid from "uuid";


const useFlip = () => {
    const [state, setState] = useState(true);
    const flipCard = () => {
        setState(isUp => !isUp);
      };

    return [state, flipCard];
}

const useAxios = (url) => {
  const [state, setState] = useState([]);

  const fetchData = async (info=null) => {
    if(info) {
      const response = await axios.get(`${url}${info}`)
      setState(state => [...state, {...response.data, id: uuid()}])
    }
    else {
      const response = await axios.get(url)
      setState(state => [...state, {...response.data, id: uuid()}])
    }
    
  }

  return [state, fetchData];
}

export {useFlip, useAxios};