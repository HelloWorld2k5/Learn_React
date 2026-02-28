import { useState, useRef, useEffect } from "react";

function SimpleAudioPlayer() {
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        isPlaying ? audio.play() : audio.pause();
    }, [isPlaying]);

    return (
        <>
            <p>Thời gian hiện tại của bài hát: {currentTime}s</p>
            <audio
                ref={audioRef}
                src="../audio.m4a"
                controls
                onTimeUpdate={(e) => setCurrentTime(Math.floor(e.target.currentTime))}>
            </audio>
            <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Dừng nhạc' : 'Phát nhạc'}</button>
        </>
    );
}

export default SimpleAudioPlayer;