import { useAxiosInstance } from './axios';
import type { AxiosRequestConfig } from 'axios';

export class ApiClass {
  private async axiosCall<T>(config: AxiosRequestConfig): Promise<T> {
    const { data } = await useAxiosInstance().request<T>(config);
    return data;
  }

  tree = {
    get: async () => {
      return await this.axiosCall<Types.Tree.Response[]>({ url: '/tree/items' });
    },
    getById: async (id: string) => {
      return await this.axiosCall<Types.Tree.Response>({ url: `/tree/items/${id}` });
    },
  };
}
