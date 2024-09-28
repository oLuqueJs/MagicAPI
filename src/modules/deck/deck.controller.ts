import { Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { DeckService } from './deck.service';
import { CacheKey, CacheTTL } from '@nestjs/cache-manager';

@ApiTags('decks')
@Controller('decks')
export class DeckController {
    constructor(private readonly deckService: DeckService) { }

    @Post('create/:commanderId')
    @ApiParam({ name: 'commanderId', description: 'ID do comandante' })
    @ApiOperation({ summary: 'Criar um deck baseado em um comandante' })
    @ApiResponse({ status: 201, description: 'Deck criado com sucesso.' })
    async createDeck(@Param('commanderId') commanderId: string) {
        return this.deckService.createDeck(commanderId);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os decks criados' })
    @ApiResponse({ status: 200, description: 'Lista de todos os decks criados.' })
    async getAllDecks() {
        return this.deckService.getAllDecks();
    }

    @Get()
    @CacheKey('deck-list')
    @CacheTTL(60) // Cache por 60 segundos
    async getDeckList() {
        return await this.deckService.getAllDecks();
    }

    @Delete(':id')
    @ApiParam({ name: 'id', description: 'ID do deck' })
    @ApiOperation({ summary: 'Deletar um deck' })
    @ApiResponse({ status: 200, description: 'Deck deletado com sucesso.' })
    async deleteDeck(@Param('id') id: string) {
        return this.deckService.deleteDeck(id);
    }

    @Post('random')
    @ApiOperation({ summary: 'Criar um deck aleatório com base no comandante' })
    @ApiResponse({ status: 201, description: 'Deck aleatório criado com sucesso.' })
    async createRandomDeck() {
        return this.deckService.createRandomDeck();
    }

    @Get('save-json/:id')
    @ApiParam({ name: 'id', description: 'ID do deck' })
    @ApiOperation({ summary: 'Salvar deck como JSON' })
    @ApiResponse({ status: 200, description: 'Deck salvo como JSON.' })
    async saveDeckAsJson(@Param('id') id: string) {
        return this.deckService.saveDeckAsJson(id);
    }

    @Get('player/:playerId')
    @ApiParam({ name: 'playerId', description: 'ID do jogador' })
    @ApiOperation({ summary: 'Listar todos os decks de um jogador específico' })
    @ApiResponse({ status: 200, description: 'Lista de decks do jogador retornada com sucesso.' })
    async getDecksByPlayer(@Param('playerId') playerId: string) {
        return this.deckService.getDecksByPlayer(playerId);
    }
}
