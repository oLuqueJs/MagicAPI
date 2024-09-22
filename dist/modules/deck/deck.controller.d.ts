import { DeckService } from './deck.service';
export declare class DeckController {
    private readonly deckService;
    constructor(deckService: DeckService);
    createDeck(commanderId: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/deck.schema").Deck> & import("./schemas/deck.schema").Deck & Required<{
        _id: unknown;
    }>>;
    getAllDecks(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/deck.schema").Deck> & import("./schemas/deck.schema").Deck & Required<{
        _id: unknown;
    }>)[]>;
    deleteDeck(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/deck.schema").Deck> & import("./schemas/deck.schema").Deck & Required<{
        _id: unknown;
    }>>;
    createRandomDeck(): Promise<import("mongoose").Document<unknown, {}, import("./schemas/deck.schema").Deck> & import("./schemas/deck.schema").Deck & Required<{
        _id: unknown;
    }>>;
    saveDeckAsJson(id: string): Promise<{
        message: string;
    }>;
}
