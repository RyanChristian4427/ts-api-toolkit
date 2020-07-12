export class AuthStorageService {
    private tokenKey = 'jwt';

    public changeTokenKey(tokenKey: string): void {
        this.tokenKey = tokenKey;
    }

    /**
     * @deprecated Deprecated since v2.0.7. Will be removed in v3.0.0. Use `changeTokenKey()` instead.
     */
    public updateTokenKey(tokenKey: string): void {
        this.changeTokenKey(tokenKey);
    }

    public getToken(): string {
        return window.localStorage.getItem(this.tokenKey) || '';
    }

    public saveToken(token: string): void {
        window.localStorage.setItem(this.tokenKey, token);
    }

    public destroyToken(): void {
        window.localStorage.removeItem(this.tokenKey);
    }
}
