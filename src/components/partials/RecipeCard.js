import React from 'react';

class RecipeCard extends React.Component {
	formatRecipeData(detailType) {
		const currentRecipe = this.props.recipe;
		const removeWhiteSpaceRegex = /\r\n|\r|\n/g;

		if (Object.keys(currentRecipe).length !== 0) {
			if (detailType === 'ingredients') {
				return currentRecipe.ingredients.replace(removeWhiteSpaceRegex, '<br className="line-break"/>');
			}
			else if (detailType === 'directions') {
				return currentRecipe.directions.replace(removeWhiteSpaceRegex, '<br />');
			}
			else if (detailType === 'notes') {
				return currentRecipe.notes.replace(removeWhiteSpaceRegex, '<br />');
			}
			else {
				return currentRecipe[detailType];
			}
		}
	}
	render(){
		return (
			<div className="recipe-card">
				<div className="recipe-card__name">{this.formatRecipeData('title')}</div>
				<div className="recipe-card__details">
					<div className="recipe-card__details-detail"><span>Serves </span>{this.formatRecipeData('servings')}</div>
					<div className="recipe-card__details-detail"><span>Prep Time </span>{this.formatRecipeData('prepTime')}</div>
					<div className="recipe-card__details-detail"><span>Cook Time </span>{this.formatRecipeData('cookTime')}</div>
					<div className="recipe-card__details-detail"><span>Total Time </span>{this.formatRecipeData('totalTime')}</div>
				</div>
				<div className="row">
					<div className="col-12 col-sm-6">
						<div className="recipe-card__section recipe-card__section--ingredients">
							<div className="recipe-card__section-title">Ingredients</div>
							<div className="recipe-card__section-content" dangerouslySetInnerHTML={{__html: this.formatRecipeData('ingredients')}}></div>
						</div>
					</div>
					<div className="col-12 col-sm-6">
						<div className="recipe-card__section recipe-card__section--instructions">
							<div className="recipe-card__section-title">Instructions</div>
						<div className="recipe-card__section-content" dangerouslySetInnerHTML={{__html: this.formatRecipeData('directions')}}></div>
						</div>
					</div>
				</div>
				<div className="recipe-card__section recipe-card__section--notes">
					<div className="recipe-card__section-title">Notes</div>
					<div className="recipe-card__section-content" dangerouslySetInnerHTML={{__html: this.formatRecipeData('notes')}}></div>
				</div>
			</div>
		)
	}
}

module.exports = RecipeCard;
