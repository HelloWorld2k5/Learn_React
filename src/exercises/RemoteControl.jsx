import { forwardRef, useImperativeHandle, useRef } from "react";

const VideoPlayer = forwardRef((props, ref) => {
    const videoRef = useRef(null);

    useImperativeHandle(ref, () => ({
        play: () => {
            videoRef.current.play();
        },
        pause: () => {
            videoRef.current.pause();
        },
        toggleMute: () => {
            videoRef.current.muted = !videoRef.current.muted;
        }
    }));

    return (
        <video ref={videoRef} src="../video.mp4"></video>
    );
});

function RemoteControl() {
    const controlRef = useRef(null);
    
    return (
        <>
            <VideoPlayer ref={controlRef}/>
            <div>
                <button onClick={() => controlRef.current.play()}>Play</button>
                <button onClick={() => controlRef.current.pause()}>Pause</button>
                <button onClick={() => controlRef.current.toggleMute()}>Toggle mute</button>
            </div>
        </>
    );
}

export default RemoteControl;