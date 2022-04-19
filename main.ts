basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.showString("T=")
        basic.showArrow(input.temperature())
        basic.showString("DEGRES")
    } else {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
