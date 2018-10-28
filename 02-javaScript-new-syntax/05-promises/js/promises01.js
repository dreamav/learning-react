"use strict";

var getFakeMembers = function getFakeMembers(count) {
    return new Promise(function (resolves, rejects) {
        debugger;
        var api = "https://api.randomuser.me/?nat=US&results=" + count;
        var request = new XMLHttpRequest();
        request.open('GET', api);
        request.onload = function () {
            return request.status === 200 ? resolves(JSON.parse(request.response).results) : rejects(Error(request.statusText));
        };
        request.onerror = function (err) {
            return rejects(err);
        };
        request.send();
    });
};

getFakeMembers(5).then(function (members) {
    return console.log(members);
}, function (err) {
    return console.error(new Error("cannot load members from randomuser.me"));
});