import clsx from 'clsx';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const anmMusicStart = keyframes`
  from{transform: rotate(-45deg) translateX(-50px); opacity: 0.7;}
  to{transform: rotate(0deg) translateX(0); opacity: 1;}
`;

const anmMusicEnd = keyframes`
  0% {transform: scale3d(1, 1, 1);}

  10%, 20% {transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);}

  30%, 50%, 70%, 90% {transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);}

  40%, 60%, 80% {transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);}

  100% {transform: scale3d(1, 1, 1);}
`;

const MusicStyle = styled.div`
  .anm-start {
    animation: ${anmMusicStart} 1.5s ease-in-out forwards;
    animation-delay: 5s;
  }

  .anm-end {
    animation: ${anmMusicEnd} 5s ease-in-out infinite alternate;
  }
`;

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState<boolean>(false);

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

const Music: React.FC = () => {
  const [showAnmMusicEnd, setShowAnmMusicEnd] = useState<boolean>(false);
  const { playing, onToggle } = useAudio(`${process.env.PUBLIC_URL}/assets/audio/Tiec-Tra-Sao.mp3`);

  useEffect(() => {
    const x = setTimeout(() => setShowAnmMusicEnd(true), 7000);

    return () => clearTimeout(x);
  }, []);

  return (
    <MusicStyle className="fixed bottom-7 left-7 lg:bottom-10 lg:left-10">
      <button onClick={onToggle} className="outline-none" title="Music">
        <img
          src={`${process.env.PUBLIC_URL}/assets/home/music-${playing ? 'play' : 'pause'}.png`}
          className={clsx({
            'w-8 lg:w-12 music-icon': true,
            'anm-start opacity-0': !showAnmMusicEnd,
            'anm-end': showAnmMusicEnd,
          })}
          alt="music"
        />
      </button>
    </MusicStyle>
  );
};

export default Music;
