import { CardService } from './card.service';
export declare class CardController {
    private readonly cardService;
    constructor(cardService: CardService);
    getCardById(id: string): Promise<any>;
}
