import { CommanderService } from './commander.service';
export declare class CommanderController {
    private readonly commanderService;
    constructor(commanderService: CommanderService);
    getCommanderById(id: string): Promise<any>;
    getCommanderByColor(color: string): Promise<any>;
    getRandomCommander(): Promise<any>;
}
