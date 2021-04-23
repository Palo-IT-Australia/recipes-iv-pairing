
class Account {
	private readonly accountId: string;
}

class Recipe {
	private readonly _recipeId: string;

	private readonly description: string;

	private static counter = 0

	private _reviews: Review[] = []

	constructor(description: string) {
	  this.description = description;
	  this._recipeId = Recipe.counter.toString();
	  Recipe.counter++;
	}

	get recipeId(): string {
	  return this._recipeId;
	}

	get reviews(): Review[] {
	  return this._reviews;
	}

	set reviews(value: Review[]) {
	  this._reviews = value;
	}
}

class Review {
	private comment: string;

	private rating: number

	constructor(comment: string, rating: number) {
	  this.comment = comment;
	  this.rating = rating;
	}
}
