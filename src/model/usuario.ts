export class Usuario {
    private _nome?: string;
    private _email?: string;
    private _senha?: string;
  
    public get nome(): string | undefined {
      return this._nome;
    }
  
    public set nome(value: string | undefined) {
      this._nome = value;
    }
  
    public get email(): string | undefined {
      return this._email;
    }
  
    public set email(value: string | undefined) {
      this._email = value;
    }
  
    public get senha(): string | undefined {
      return this._senha;
    }
  
    public set senha(value: string | undefined) {
      this._senha = value;
    }
  }