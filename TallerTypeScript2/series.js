"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.series = void 0;
var series = /** @class */ (function () {
    function series(id, name, channel, seasons, description, link, image) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }
    return series;
}());
exports.series = series;
