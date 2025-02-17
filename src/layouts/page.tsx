import React, { FC, PropsWithChildren } from 'react';

const page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="container flex flex-col gap-2 text-black mx auto">
      {children}
    </main>
  );
};
export default page;
