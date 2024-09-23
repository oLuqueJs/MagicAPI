import { Model } from 'mongoose';
import { Deck } from './schemas/deck.schema';
export declare class DeckService {
    private readonly deckModel;
    private readonly SCRYFALL_API_BASE_URL;
    constructor(deckModel: Model<Deck>);
    createDeck(commanderId: string): Promise<import("mongoose").Document<unknown, {}, Deck> & Deck & Required<{
        _id: unknown;
    }>>;
    getAllDecks(): Promise<(import("mongoose").Document<unknown, {}, Deck> & Deck & Required<{
        _id: unknown;
    }>)[]>;
    deleteDeck(id: string): Promise<import("mongoose").Document<unknown, {}, Deck> & Deck & Required<{
        _id: unknown;
    }>>;
    createRandomDeck(): Promise<import("mongoose").Document<unknown, {}, Deck> & Deck & Required<{
        _id: unknown;
    }>>;
    saveDeckAsJson(id: string): Promise<{
        message: string;
    }>;
    private getCommanderById;
    private getRandomCommander;
}
