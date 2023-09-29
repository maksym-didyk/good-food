import { client } from './fetchClient';

export const getArticles = () => client.get<string>('');
export const getFilteredArticles = (searchParams: string) => {
  return client.get<string>(searchParams);
};
