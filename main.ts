cbit_IR.onPressEvent(RemoteButton.NUM7, function () {
    makerobo.rgb().showColor(neopixel.colors(NeoPixelColors.Black))
    basic.showNumber(400)
    for (let index = 0; index < 3; index++) {
        basic.showArrow(ArrowNames.North)
        basic.pause(50)
        basic.clearScreen()
        basic.pause(50)
        basic.showArrow(ArrowNames.North)
    }
    for (let index = 0; index < 5; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.pause(100)
    }
    makerobo.MotorRunDelay(makerobo.Motors.Left, 80, 1.5)
    makerobo.MotorRunDelay(makerobo.Motors.Centre, 220, 1)
    makerobo.Servo(makerobo.Servos.S1, 100)
    makerobo.MotorRunDelay(makerobo.Motors.Right, 90, 1)
    makerobo.rgb().showColor(neopixel.colors(NeoPixelColors.Red))
    basic.showIcon(IconNames.No)
})
cbit_IR.onPressEvent(RemoteButton.NUM5, function () {
    makerobo.rgb().showColor(neopixel.colors(NeoPixelColors.Black))
    basic.showNumber(200)
    for (let index = 0; index < 3; index++) {
        basic.showArrow(ArrowNames.South)
        basic.pause(50)
        basic.clearScreen()
        basic.pause(50)
        basic.showArrow(ArrowNames.South)
    }
    for (let index = 0; index < 5; index++) {
        music.playTone(988, music.beat(BeatFraction.Quarter))
        basic.pause(100)
    }
    makerobo.MotorRunDelay(makerobo.Motors.Right, -56, 1)
    makerobo.Servo(makerobo.Servos.S1, 0)
    makerobo.rgb().showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showIcon(IconNames.Yes)
})
cbit_IR.onPressEvent(RemoteButton.NUM2, function () {
    makerobo.rgb().showColor(neopixel.colors(NeoPixelColors.Black))
    basic.showNumber(100)
    for (let index = 0; index < 3; index++) {
        basic.showArrow(ArrowNames.South)
        basic.pause(50)
        basic.clearScreen()
        basic.pause(50)
        basic.showArrow(ArrowNames.South)
    }
    for (let index = 0; index < 5; index++) {
        music.playTone(988, music.beat(BeatFraction.Quarter))
        basic.pause(100)
    }
    makerobo.MotorRunDelay(makerobo.Motors.Left, -75, 1.5)
    makerobo.rgb().showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.A, function () {
    rkSensorExt.MP3_assign_song(1)
})
cbit_IR.onPressEvent(RemoteButton.NUM4, function () {
    makerobo.rgb().showColor(neopixel.colors(NeoPixelColors.Black))
    basic.showNumber(200)
    for (let index = 0; index < 3; index++) {
        basic.showArrow(ArrowNames.North)
        basic.pause(50)
        basic.clearScreen()
        basic.pause(50)
        basic.showArrow(ArrowNames.North)
    }
    for (let index = 0; index < 5; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.pause(100)
    }
    makerobo.MotorRunDelay(makerobo.Motors.Right, 90, 1)
    makerobo.Servo(makerobo.Servos.S1, 100)
    makerobo.rgb().showColor(neopixel.colors(NeoPixelColors.Red))
    basic.showIcon(IconNames.No)
})
cbit_IR.onPressEvent(RemoteButton.NUM1, function () {
    makerobo.rgb().showColor(neopixel.colors(NeoPixelColors.Black))
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.showNumber(100)
    for (let index = 0; index < 3; index++) {
        basic.showArrow(ArrowNames.North)
        basic.pause(50)
        basic.clearScreen()
        basic.pause(50)
        basic.showArrow(ArrowNames.North)
    }
    for (let index = 0; index < 5; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.pause(100)
    }
    makerobo.MotorRunDelay(makerobo.Motors.Left, 90, 1.5)
    makerobo.rgb().showColor(neopixel.colors(NeoPixelColors.Red))
    basic.showIcon(IconNames.No)
})
cbit_IR.onPressEvent(RemoteButton.NUM8, function () {
    makerobo.rgb().showColor(neopixel.colors(NeoPixelColors.Black))
    basic.showNumber(400)
    for (let index = 0; index < 3; index++) {
        basic.showArrow(ArrowNames.South)
        basic.pause(50)
        basic.clearScreen()
        basic.pause(50)
        basic.showArrow(ArrowNames.South)
    }
    for (let index = 0; index < 5; index++) {
        music.playTone(988, music.beat(BeatFraction.Quarter))
        basic.pause(100)
    }
    makerobo.MotorRunDelay(makerobo.Motors.Left, -65, 1.5)
    makerobo.MotorRunDelay(makerobo.Motors.Centre, -130, 1)
    makerobo.Servo(makerobo.Servos.S1, 0)
    makerobo.MotorRunDelay(makerobo.Motors.Right, -66, 1)
    makerobo.rgb().showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showIcon(IconNames.Yes)
})
cbit_IR.init(Pins.P8)
rkSensorExt.MP3_init(SerialPin.P2, SerialPin.P1)
rkSensorExt.MP3_volume_set(30)
