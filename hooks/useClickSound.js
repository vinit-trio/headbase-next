import { useCallback } from 'react';

export const useClickSound = () => {

    const playSound = useCallback(() => {

        const audio = new Audio('/click-sound.mp3');

        audio.volume = 0.5;

        audio.play().catch((error) => {
            console.warn("Audio playback failed:", error);
        });

    }, []);

    return playSound;

};