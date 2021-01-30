input.onPinPressed(TouchPin.P0, function () {
    basic.clearScreen()
    music.playMelody("C5 C5 B A G F E F ", 120)
    music.playMelody("E E D D C C - - ", 120)
    music.playMelody("A A G F E D E D ", 120)
    music.playMelody("C C D D E E - - ", 120)
    music.playMelody("D D E E F F F F ", 120)
    music.playMelody("E E F F G G G G ", 120)
    music.playMelody("F F G G A A B B ", 120)
    music.playMelody("C5 C5 C5 C5 C5 C5 - - ", 120)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Duck)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C D E F G A B C5 ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . . # #
        # . # . #
        # # . # .
        # . # . .
        `)
    basic.pause(2000)
    basic.clearScreen()
})
