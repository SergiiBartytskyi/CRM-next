import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${params.id})`}</p>
    </div>
  );
}

// 'use client';

// import React, { useEffect } from 'react';
// import Header from '@/app/components/header';
// import { notFound } from 'next/navigation';

// export interface PageProps {
//   // params: { id: string };
//   params: Promise<{ id: string }>;
// }

// export default function Page({ params }: PageProps) {
//   const { id } = React.use(params);

//   useEffect(() => {
//     const parsedId = Number.parseInt(id);
//     if (Number.isNaN(parsedId)) {
//       notFound();
//     }
//   }, [id]);

//   return (
//     <>
//       <Header>Company ({id})</Header>
//     </>
//   );
// }

// export default function Page({ params }: PageProps) {
//   useEffect(() => {
//     const id = Number.parseInt(params.id);
//     if (Number.isNaN(id)) {
//       notFound();
//     }
//   }, [params.id]);

//   return (
//     <>
//       <Header>Company ({params.id})</Header>
//     </>
//   );
// }
