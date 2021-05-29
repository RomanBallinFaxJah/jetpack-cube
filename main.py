@namespace
class SpriteKind:
    Logo = SpriteKind.create()

def on_overlap_tile(sprite, location):
    game.over(True)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_closed,
    on_overlap_tile)

def on_overlap_tile2(sprite, location):
    char.say("Avoid the lava!")
    info.change_life_by(-1)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava1,
    on_overlap_tile2)

char: Sprite = None
info.set_life(1)
char = sprites.create(img("""
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
    """),
    SpriteKind.player)
char.set_position(18, 68)
info.set_score(0)
tiles.set_tilemap(tilemap("""
    level2
"""))
controller.move_sprite(char, 100, 100)
scene.camera_follow_sprite(char)
char.start_effect(effects.star_field)
info.change_score_by(30)

def on_update_interval():
    info.change_score_by(-1)
    if info.score() == 0:
        game.over(False)
game.on_update_interval(1000, on_update_interval)
