import { useEffect, useState } from "react";

export const useTypeWriter = sequence => {
    const [turn, setTurn] = useState(0);
    const [inSequence, setInSequence]= useState(false);
    const [announcerMessage, setAnnouncerMessage] = useState(''); 

    useEffect(() => {
        const { mode, turn } = sequence;

        if (mode) {
            
        }
    });

    return {
        turn, 
        inSequence, 
        announcerMessage
    }
};