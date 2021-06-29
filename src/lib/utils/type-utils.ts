export function isClass(object) {
    const isClass = object.constructor
        && object.constructor.toString().substring(0, 5) === 'class';

    if(object.prototype === undefined)
        return isClass;

    const isProtoClass = object.prototype.constructor
        && object.prototype.constructor.toString
        && object.prototype.constructor.toString().substring(0, 5) === 'class';
    return isClass || isProtoClass
}
