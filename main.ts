radio.onReceivedNumber(function (receivedNumber) {
    SonCode = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    MonCode += 1
    if (MonCode == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (MonCode == 2) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showString("?")
        MonCode = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    if (SonCode == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (SonCode == 2) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showString("?")
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(MonCode)
})
let SonCode = 0
let MonCode = 0
basic.showIcon(IconNames.Yes)
MonCode = 0
radio.setGroup(1)
