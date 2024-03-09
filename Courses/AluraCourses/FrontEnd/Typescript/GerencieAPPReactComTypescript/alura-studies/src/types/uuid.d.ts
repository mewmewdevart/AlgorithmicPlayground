declare module 'uuid' {
    export function v1(options?: any, buffer?: any, offset?: number): string;
    export function v3(options?: any, buffer?: any, offset?: number): string;
    export function v4(options?: any, buffer?: any, offset?: number): string;
    export function v5(options?: any, buffer?: any, offset?: number): string;
    export function parse(id: string, buffer?: any, offset?: number): Buffer;
    export function stringify(id: Buffer, buffer?: any, offset?: number): string;
    export const NIL: string;
  }
  