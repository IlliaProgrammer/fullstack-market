import { makeAutoObservable } from "mobx";


interface User {
  id: number;
  email:  string;
  password: string;
  role: string;
}

export default class UserStore {

  private _isAuth: boolean = false;
  private _user: User = {} as User;

  constructor() {
    makeAutoObservable(this);
  }


  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }

  setUser(user: User) {
    this._user = user;
  }

  get isAuth(): boolean {
    return this._isAuth;
  }

  get user(): User {
    return this._user;
  }
}