// src/controller.ts
import { JsonController, Get, Param, BadRequestError, Put, Body, Post } from 'routing-controllers'
import Game from './entity'
import { Column } from 'typeorm'
import { randomColor, validColors, isMoveValid} from './gameCheck'
import { IsIn, ValidateIf} from 'class-validator'
const defaultBoard = [
    ['o', 'o', 'o'],
    ['o', 'o', 'o'],
    ['o', 'o', 'o']
]

class Update {
    @Column('text', { nullable: false })
    name: string

    @ValidateIf(o => o.color)
    @IsIn(validColors)
    @Column('text', { nullable: false })
    color: string

    @Column('json', { nullable: false })
    board: object
}

@JsonController()
export default class GameController {

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
        @Body() { name, color, board }: Update
    ) {
        const game = await Game.findOne(id)

        if (isMoveValid(board, game) === false) 
        {
            console.log("Should be doing something!")
            throw new BadRequestError('Move not valid!')
        }

        console.log(`updating game ${id} with ${Object.keys({ name, color, board })}`)

        return Game.merge(game, { name, color, board }).save()
    }

    @Post('/games')
    async newGame(
        @Body() game: Game
    ) {
        game.board = defaultBoard
        game.color = randomColor()
        return game.save()
    }
}