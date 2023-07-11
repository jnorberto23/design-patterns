import Desktop from "./Desktop";
import { DesktopBuilderInterface } from "./interface/DesktopBuilderInterface";

export class DesktopBuilder implements DesktopBuilderInterface {
  private desktop: Desktop;

  constructor() {
    this.desktop = new Desktop();
  }

  addCase(caseType: string): string {
    this.desktop.caseType = caseType;
    return "Case added";
  }

  addMotherBoard(motherBoard: string): string {
    this.desktop.motherBoard = motherBoard;
    return "MotherBoard added";
  }

  addCpu(cpu: string): string {
    this.desktop.cpu = cpu;
    return "Cpu added";
  }

  addRam(ram: string): string {
    this.desktop.ram = ram;
    return "Ram added";
  }

  addStorage(storage: string): string {
    this.desktop.storage = storage;
    return "Storage added";
  }

  addPowerSupply(powerSupply: string): string {
    this.desktop.powerSupply = powerSupply;
    return "PowerSupply added";
  }
  
  addGpu (gpu: string) {
    this.desktop.gpu = gpu;
    return "Gpu added";
  };

  getDesktop(): Desktop {
    return this.desktop;
  }
}
