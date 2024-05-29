export {};

declare global {
  export namespace Types {
    export namespace Tree {
      export type Response = {
        id: string;
        title: string;
        parent_id: string | null;
      };

      export type Item = Types.Tree.Response & { children: Types.Tree.Item[] };
    }
  }
}
