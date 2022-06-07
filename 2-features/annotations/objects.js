"use strict";
var profile = {
    name: "alex",
    age: 20,
    coords: {
        lat: 0,
        lng: 15,
    },
    setAge: function (age) {
        this.age = age;
    },
};
// const age = profile.age;
// with destructuring you still have to write out the expected structure of arg
var age = profile.age;
var _a = profile.coords, lat = _a.lat, lng = _a.lng;
