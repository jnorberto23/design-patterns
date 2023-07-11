export interface DesktopBuilderInterface{
    addCase: (caseType: string) => string;
    addMotherBoard: (motherBoard: string) => string;
    addCpu: (cpu: string) => string;
    addRam: (ram: string) => string;
    addStorage: (storage: string) => string;
    addPowerSupply: (powerSupply: string) => string;
    addGpu: (gpu: string) => string;
}