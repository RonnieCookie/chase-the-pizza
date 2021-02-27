/**
 * When player and pizza touch other
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
    info.changeScoreBy(1)
    info.startCountdown(timer)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
    info.changeScoreBy(-1)
    info.startCountdown(timer)
})
let timer = 0
scene.setBackgroundColor(9)
let prson_named_prson = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 f f 2 f f f . . . 
    . . f f f e e f f e e f f f . . 
    . . f f e 2 f 2 2 f 2 e e f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . . f e 4 d d d d 4 e f e . . 
    . . f e f 2 2 2 2 e d d 4 e . . 
    . . e 4 f 2 2 2 2 e d d e . . . 
    . . . . f 4 4 5 5 f e e . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(prson_named_prson, 150, 100)
let myPiZZa = sprites.create(img`
    . . . . . . . . . . b b b . . . 
    . . . . . . . . b e e 3 3 b . . 
    . . . . . . b b e 3 2 e 3 a . . 
    . . . . b b 3 3 e 2 2 e 3 3 a . 
    . . b b 3 3 3 3 3 e e 3 3 3 a . 
    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    b 3 3 3 d d d d 3 3 3 3 3 d d a 
    b b b b b b b 3 d d d d d d 3 a 
    b d 5 5 5 5 d b b b a a a a a a 
    b 3 d d 5 5 5 5 5 5 5 d d d d a 
    b 3 3 3 3 3 3 d 5 5 5 d d d d a 
    b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
    b b b 3 d 5 5 5 5 5 5 5 d d b a 
    . . . b b b 3 d 5 5 5 5 d d 3 a 
    . . . . . . b b b b 3 d d d b a 
    . . . . . . . . . . b b b a a . 
    `, SpriteKind.Food)
myPiZZa.setPosition(randint(0, 160), randint(0, 120))


timer = 3
info.startCountdown(timer)
prson_named_prson.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
let myROCK = sprites.create(img`
    . . . . . . c c c c c c . . . . 
    . . . . c c b b d d d d c . . . 
    . . . c c b b d d d d d d c . . 
    . . c b b d b d d d d d d b c . 
    . c b b b d b b d d d d d b c . 
    . c b b b d d b d d d d b b c . 
    c b c b b b d d b b b b b c c . 
    c b c c b b b b d d d b c c c . 
    c b b c c c c c c c c c c c c . 
    c c b b b b b b c c b d d d b c 
    c c c c c c c c c d d d d d d c 
    c c c c c c c b c b d d d d d b 
    c b b b c c c b c c b d d d c b 
    c c b b b c c b b c c c c b b c 
    c c c c c c c c b b b b b b c c 
    c c c c c c c c c c c c c c c c 
    `, SpriteKind.Enemy)
    myROCK.setPosition(randint(0, 160), randint(0, 120))	
myROCK.lifespan = 2000
})

