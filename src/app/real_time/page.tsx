"use client";

import useSWR from "swr";

const RealTime = () => {
  const getRandomMessage = () => {
    const messages = [
      "Hello, world!",
      "This is a random message.",
      "Lorem ipsum dolor sit amet.",
      "Random text here.",
      "Testing, testing, 1, 2, 3.",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  const { data, error, isLoading } = useSWR("randomMessage", getRandomMessage, {
    refreshInterval: 500,
  });

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div className="text-center">Loading...</div>;

  return (
    <div className="container">
      <h3>Real-time</h3>
      <br />

      <h4 className="text-center">Random message:</h4>
      <h3 className="text-center">{data}</h3>
    </div>
  );
};

export default RealTime;
