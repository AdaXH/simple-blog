import { request } from '@/util';

export async function getArticles() {
  return request<ArticleModel[]>('/api/getArticlesv2');
}

export async function queryArticleDetail(data: { _id: string }) {
  return request<ArticleModel>('/api/queryArticleByIdv2', 'POST', data);
}
