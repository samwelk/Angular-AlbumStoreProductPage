import { Injectable } from '@angular/core';
import { Http,Response  } from '@angular/http';

@Injectable()
export class ProductService {
  private _albumUrl: string ="../assets/album.json";
  
  constructor(private _http: Http ) { }

  getAlbum(id:number){
    return this._http.get(this._albumUrl).Map((res:Response) => res.json());;

  }
}