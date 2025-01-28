import React from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getCompanies } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';
import CompanyTable from '@/app/components/company-table';

export interface PageProps {}

export default async function Page({}: PageProps) {
  //  отримуємо queryClient
  const queryClient = getQueryClient();

  //  завантажуємо компанії
  await queryClient.prefetchQuery({
    //  встановлюємо ключ
    queryKey: ['companies'],
    // функція, яка завантажує дані
    // в ф-ю передаємо параметер який визначає, що отримані дані не потрібно кешувати
    // сторінка при хбірці стає динамічною, а не статичною
    queryFn: () => getCompanies({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  // state із ReactQuery  перетворюється, щоб виконати гідратацію на клієнті та відновити їх в кеш
  const dehydratedState = dehydrate(queryClient);

  // ренедеремо клієнтські компоненти
  // під час рендерингу дані вже присутні
  return (
    <HydrationBoundary state={dehydratedState}>
      <CompanyTable />
    </HydrationBoundary>
  );
}
