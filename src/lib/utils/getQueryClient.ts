import { cache } from 'react';
import { QueryClient } from '@tanstack/react-query';

// ф-я яка використовується на сервері і створює Query-client один раз на запит;
// гарантує, що дані не будуть розподілятися між різними користувачами і запитами

const getQueryClient = cache(() => new QueryClient()) as () => QueryClient;
export default getQueryClient;
