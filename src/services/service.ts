import { Http } from "./http";

export class ServicePro extends Http {
  static async getSubCategory(param: any) {
    return await Http.get(`/professionalization/sub-categories`, param);
  }
  static async getService(url: any) {
    return await Http.get(`/professionalization/${url}`);
  }
  static async getFilter() {
    return await Http.get(`categories`);
  }
}
