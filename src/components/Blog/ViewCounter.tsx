'use client';
import { useEffect, useState } from 'react';
// Custom components/libs

interface ViewCounterType {
  slug: string;
  noCount: boolean;
  showCount: boolean;
}

const ViewCounter = ({
  slug,
  noCount = false,
  showCount = true,
}: ViewCounterType) => {
  const [view, setView] = useState(0);

  useEffect(() => {
    const randomView = Math.ceil(Math.random() * 1000000);
    setView(randomView);
  }, []);

  return <div>{showCount && `${view} views`}</div>;
};

export default ViewCounter;
