function Sauce(sauce: string) {
    return (constructor: Function) => {
        constructor.prototype.sauce = sauce;
    }
}

