"use client";

import Lottie from "lottie-react";

type MyAnimationProps = {
  animationData: unknown; // Replace 'unknown' with the correct type if known (e.g., object)
};

export default function MyAnimation({ animationData }: MyAnimationProps) {
  return <Lottie animationData={animationData} loop={true} />;
}
