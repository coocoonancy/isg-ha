declare module '@/api/api' {
  interface TreeDataRequest {
    [key: string]: string;
  }
  interface LanguageFileResponse {
    [key: string]: string;
  }
  interface TreeDataResponse {
    [key: string]: any;
  }

  export const getLangeuageFile: (
    lang: string
  ) => Promise<LanguageFileResponse>;

  export const queryTreeData: (
    params: TreeDataRequest
  ) => Promise<TreeDataResponse>;
}
