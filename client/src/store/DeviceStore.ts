import { makeAutoObservable } from "mobx";

interface Device {

  id: number;
  name: string;
  img: string;
  rating: number;
  price: number;
  

}

export default class DeviceStore {

  private _types: any[] = [];
  private _brands: any[] = [];
  private _devices: Device[] = [];
  private _selectedType: Device = {} as Device;
  private _selectedBrand: Device = {} as Device;
  private _page: number = 1;
  private _totalCount: number = 0;
  private _limit: number = 3;

  constructor() {
    makeAutoObservable(this);
  }

  
  setTypes(types: string[]) {
    this._types = types;
  }
  setBrands(brands: string[]) {
    this._brands = brands;
  }
  setDevices(devices: Device[]) {
    this._devices = devices;
  }

  setSelectedType(type: Device) {
    this.setPage(1);
    this._selectedType = type;
  }
  setSelectedBrand(brand: Device) {
    this.setPage(1);
    this._selectedBrand = brand;
  }
  setPage(page: number) {
    this._page = page;
  }
  setTotalCount(count: number) {
    this._totalCount = count;
  }
  get types(): string[] {
    return this._types;
  }
  get brands(): string[] {
    return this._brands;
  }
  get devices(): Device[] {
    return this._devices;
  }
  get selectedType(): Device {
    return this._selectedType;
  }
  get selectedBrand(): Device {
    return this._selectedBrand;
  }
  get totalCount(): number {
    return this._totalCount;
  }
  get page(): number {
    return this._page;
  }
  get limit(): number {
    return this._limit;
  }
}