namespace SpriteKind {
    export const Logo = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    char.say("Avoid the lava!")
    info.changeLifeBy(-1)
})
let char: Sprite = null
info.setLife(1)
char = sprites.create(img`
    ...6ffffffffffffffff
    .661f55555555555555f
    6111f55555555555555f
    6111f55555555555555f
    6111f5555f5555f5555f
    6111f5555f5555f5555f
    6111f5555f5555f5555f
    6111f55555555555555f
    6111f55555555555555f
    6111f55f55555555f55f
    6111f555f555555f555f
    6111f5555ffffff5555f
    6111f55555555555555f
    2666f55555555555555f
    5222f55555555555555f
    5555ffffffffffffffff
    5.5.................
    `, SpriteKind.Player)
char.setPosition(18, 68)
info.setScore(0)
tiles.setTilemap(tilemap`level2`)
controller.moveSprite(char, 100, 100)
scene.cameraFollowSprite(char)
char.startEffect(effects.starField)
info.changeScoreBy(30)
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(-1)
    if (info.score() == 0) {
        game.over(false)
    }
})
