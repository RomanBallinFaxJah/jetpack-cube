// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthEast1], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`3200080001010101010101050404040405010101010101010101030404040404040403010101010101030301010101010103040404040101010101010105040404040501010101010101010103030303030303030301010101010103030101010101010304040404010101010101010503030303050101050303030501010303010101010101010101050501010101010105050101030404040401010101010101010101010101010105040404050101030301010101010101010105050101010101010505010105050505050101010101010101010101010101010504040405010101010101030301010101010505030303030303050501010101010101010101010101010503030303050101050404040501010101010103030101010101050404040404040404050101010101060102020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
.......2....2.....................................
.......2....2.....................................
.......2....2..2...2.............22......22.......
...............2...2.............22......22..22222
...............2...2.............22......22.......
.......2....2..2...2.............2........2.......
22222222222222222222222222222222222222222222222222
........2222......................................
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.floorLight0,sprites.dungeon.hazardLava1,sprites.dungeon.floorDark2,sprites.dungeon.floorMixed,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.