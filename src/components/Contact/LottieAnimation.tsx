'use client';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
// Custom components/libs

const LottieAnimation = () => {
  return (
    <DotLottiePlayer
      src={'/animation_llqd7ey4.lottie'}
      autoplay={true}
      loop={true}
    ></DotLottiePlayer>
  );
};

export default LottieAnimation;
