// src/controller.ts
import { JsonController, Get, Param, NotFoundError, Put, Body, HttpCode, Post, Authorized } from 'routing-controllers'
import Game from './entity'
import { checkKey} from './gameCheck'

@JsonController()
export default class GameController {

    /*@Put('/games/:id')
    async updateGame(
        @Param('id') id: number,
        @Body() update: Partial<Game>
    ) {
        const game = await Game.findOneById(id)
        // ... implement
    }*/

    @Get('/games/:id')
    getGame(
        @Param('id') id: number
    ) {
        console.log(`fetching game ${id}`)
        return Game.findOne(id)
    }

    @Get('/games')
    async allGames() {
        const games = await Game.find()
        return { games }
    }

    @Put('/games/:id')
    async updateGame(
        @Param('id') id: number,
        @Body() update: Partial<Game>
    ) {
        const game = await Game.findOne(id)
        
        if (isBoardChange(update, game.board)) {
            update.board = 
        }
        isBoardUpdate
        actionUpdate(update)
        const game = await Game.findOne(id)
        console.log(`updating game ${id} with ${Object.keys(update)}`)
        return Game.merge(game, update).save()
    }

    @Post('/games')
    async newGame(
        @Body() game: Game
    ) {
        console.log(`Creating new game ${game}`)
        return game.save()
    }
}