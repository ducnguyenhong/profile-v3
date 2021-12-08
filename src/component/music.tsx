import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const animationMusic = keyframes`
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    -ms-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }

  30%, 50%, 70%, 90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%, 60%, 80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
`;

const MusicStyle = styled.div`
  .music-icon {
    animation: ${animationMusic} 5s ease-in-out infinite alternate;
  }
`;

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const onToggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return { playing, onToggle };
};

const Music = () => {
  const { playing, onToggle } = useAudio(`${process.env.PUBLIC_URL}/assets/audio/Lam-Gi-Phai-Hot.mp3`);

  return (
    <MusicStyle className="fixed bottom-10 left-10">
      <button onClick={onToggle} className="outline-none" title="Music">
        <img
          src={`${process.env.PUBLIC_URL}/assets/home/music-${playing ? 'play' : 'pause'}.png`}
          className="w-12 music-icon"
          alt="music"
        />
      </button>
    </MusicStyle>
  );
};

export default Music;
