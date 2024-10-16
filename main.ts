/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Bain Liao
 * Created on: Sep 2024
 * This program calculates the distance of an object
*/

let objectDistance:number = 0

//setup
basic.showIcon(IconNames.Happy)

//find distance from sonar
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    objectDistance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(objectDistance)
    basic.showIcon(IconNames.Happy)
})
