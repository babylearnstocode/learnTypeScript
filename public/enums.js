"use strict";
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["BOOKMARK"] = 2] = "BOOKMARK";
    ResourceType[ResourceType["FILM"] = 3] = "FILM";
    ResourceType[ResourceType["PHOTO"] = 4] = "PHOTO";
})(ResourceType || (ResourceType = {}));
const docEnum1 = {
    uid: 1,
    type: ResourceType.BOOK,
    data: 'hello'
};
console.log(docEnum1);
