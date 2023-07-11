import { DesktopBuilder } from "./DesktopBuilder";

export class Diretor{
    buildDesktop(builder: DesktopBuilder){
        builder.addCase("Gabinete Gamer Pichau Apus Black, Mid-Tower, Lateral de Vidro Temperado, Com 3 Fans, Preto");
        builder.addMotherBoard("Placa Mae Mancer H610M-DA, DDR4, Socket LGA1700, M-ATX, Chipset Intel H610, MCR-H610M-DA");
        builder.addCpu("Processador Intel Core I5-13400F, 10-Core, 16-Threads, 2.5GHz (4.6GHz Turbo), Cache 20MB, LGA1700");
        builder.addRam("Memoria Team Group T-Force Vulcan Pichau, 8GB (1x8), DDR4, 3200MHz, C16, Branca RTB,");
        builder.addStorage("SSD Pichau Kepler L, 512GB, M.2 2280, PCIe NVMe, Leitura 3200MB/s, Gravacao 2000MB/s");
        builder.addPowerSupply("Fonte Mancer Thunder 600W, 80 Plus Bronze, MCR-THR600-BL01-OEM");
        builder.addGpu("Placa de Video PNY Geforce RTX 3060, 12GB, GDDR6, 192-Bit");
  
    }
}