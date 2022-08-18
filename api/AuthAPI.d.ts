declare global {
  export namespace AuthAPI {
    export interface SIGN_IN {
      req: IAuthAPI.SignInRequestBody;
      res: IAuthAPI.SignInResponseBody;
      query: undefined;
    }
  }
}

// ------------ SIGN_IN ------------

export namespace IAuthAPI {
  interface SignInRequestBody {
    email: string;
    password: string;
    name: string;
  }

  interface SignInResponseBody {
    message: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpiry: string;
    refreshTokenExpiry: string;
  }
}

export {};
