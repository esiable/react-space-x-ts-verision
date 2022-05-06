import React from 'react';

type Props = {
  children: React.ReactNode;
};

const initialData = async () => {
  const res = await fetch(  'https://api.spacexdata.com/v4/launches/latest' );
  console.log(res.json());
  return res.json()
}

export default function RestApiProvider ({ children }: Props) {
  return (
    <div>{children}{initialData}</div>
  );
}