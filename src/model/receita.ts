export class Receita {
    private _nome?: string;
    private _descricao?: string;
    private _ingredientes?: string[];
    private _modoPreparo?: string;
    private _tempoPreparo?: number;
    private _porcoes?: number;
    private _foto?: string;
  

    public get nome(): string | undefined{
      return this._nome;
    }
  
    public get descricao(): string | undefined{
      return this._descricao;
    }
  
    public get ingredientes(): string[] | undefined{
      return this._ingredientes;
    }
  
    public get modoPreparo(): string | undefined{
      return this._modoPreparo;
    }
  
    public get tempoPreparo(): number | undefined{
      return this._tempoPreparo;
    }
  
    public get porcoes(): number | undefined{
      return this._porcoes;
    }
  
    public get foto(): string | undefined{
      return this._foto;
    }

    public set nome(value: string) {
      this._nome = value;
    }
  
    public set descricao(value: string) {
      this._descricao = value;
    }
  
    public set ingredientes(value: string[]) {
      this._ingredientes = value;
    }
  
    public set modoPreparo(value: string) {
      this._modoPreparo = value;
    }
  
    public set tempoPreparo(value: number) {
      this._tempoPreparo = value;
    }
  
    public set porcoes(value: number) {
      this._porcoes = value;
    }
  
    public set foto(value: string) {
      this._foto = value;
    }
  }
  