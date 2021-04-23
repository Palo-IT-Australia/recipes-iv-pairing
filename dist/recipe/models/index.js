class Account {
}
class Recipe {
    constructor(description) {
        this._reviews = [];
        this.description = description;
        this._recipeId = Recipe.counter.toString();
        Recipe.counter++;
    }
    get recipeId() {
        return this._recipeId;
    }
    get reviews() {
        return this._reviews;
    }
    set reviews(value) {
        this._reviews = value;
    }
}
Recipe.counter = 0;
class Review {
    constructor(comment, rating) {
        this.comment = comment;
        this.rating = rating;
    }
}
//# sourceMappingURL=index.js.map