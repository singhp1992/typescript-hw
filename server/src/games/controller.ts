import { JsonController, Get, Param, Post, Put, HttpCode, NotFoundError, Body, BadRequestError } from 'routing-controllers'
import Game from './entity'
import { validate } from 'class-validator';

const selectedColors = ['red', 'blue', 'magenta', 'green', 'yellow']

const defaultBoard = [
    ['o', 'o', 'o'],
    ['o', 'o', 'o'],
    ['o', 'o', 'o']
]

    const moves = (board1: string[][], board2:[][]) => {
         board1
            .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
            .reduce((a, b) => a.concat(b))
            .length
    }

@JsonController()
export default class GameController {


    @Get('/games/')
    async allGames() {
        const games = await Game.find()
        return { games }
    }

    @Get('/games/:id')
    getGame(
        @Param('id') id: number
    ) {
        return Game.findOne(id)
    }

    @Post('/games')
    @HttpCode(201)
    createGame(
        @Body() game: Game
    ) {
        game.color = selectedColors[Math.floor(Math.random() * selectedColors.length)]
        game.board = defaultBoard
        return game.save()
    }

    @Put('/games/:id')
    async updateGame(
        @Param('id') id: number,
        @Body() update: Partial<Game>
    ) {
        const game = await Game.findOne(id)
        if (!game) throw new NotFoundError('cant find game')

        //not working 
        if (update.board && moves > 1) throw new BadRequestError('not valid')
    }
     
    }


       return Game.merge(game, update).save()
    }


}
