export declare class CommanderService {
    private readonly SCRYFALL_API_BASE_URL;
    getCommanderById(id: string): Promise<any>;
    getCommanderByColor(color: string): Promise<any>;
    getRandomCommander(): Promise<any>;
}
