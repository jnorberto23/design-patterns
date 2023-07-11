export default class Desktop {
    public caseType: string;
    public motherBoard: string;
    public cpu: string;
    public ram: string;
    public storage: string;
    public powerSupply: string;
    public gpu: string;
  constructor(
  ) {
    this.caseType = "";
    this.motherBoard = "";
    this.cpu = "";
    this.ram = "";
    this.storage = "";
    this.powerSupply = "";
    this.gpu = "";
  }

  getCaseType(): string {
    return this.caseType;
  }

  setCaseType(caseType: string): void {
    this.caseType = caseType;
  }

  getMotherBoard(): string {
    return this.motherBoard;
  }

  setMotherBoard(motherBoard: string): void {
    this.motherBoard = motherBoard;
  }

  getCpu(): string {
    return this.cpu;
  }

  setCpu(cpu: string): void {
    this.cpu = cpu;
  }

  getRam(): string {
    return this.ram;
  }

  setRam(ram: string): void {
    this.ram = ram;
  }

  getStorage(): string {
    return this.storage;
  }

  setStorage(storage: string): void {
    this.storage = storage;
  }

  getPowerSupply(): string {
    return this.powerSupply;
  }

  setPowerSupply(powerSupply: string): void {
    this.powerSupply = powerSupply;
  }

  getGpu(): string {
    return this.gpu;
  }

  setGpu(gpu: string): void {
    this.gpu = gpu;
  }
}
