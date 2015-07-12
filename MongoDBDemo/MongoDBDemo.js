IngredientDB = new Mongo.Collection('ingredients')
RecipeDB = new Mongo.Collection("recipes")

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.ingredient_datalist.helpers({
    ingredients: function () {
      return IngredientDB.find({});
    }
  });

  Template.ingredientlist.helpers({
    ingredients: function () {
      return IngredientDB.find({});
    }
  });

  Template.ingredientlisthigh.helpers({
    ingredients: function () {
      return IngredientDB.find({calories : {$gt : 0}}, {sort: {calories:1}});
    }
  });

  Template.recipelist.helpers({
    recipe: function () {
      return RecipeDB.find({});
    }
  });


  Template.recipe.events({
    'click button': function (e) {
      e.preventDefault()
      var name = e.target.form['recipeName'].value
      var Ingredients = e.target.form['recipeIngredients'].value
      var Instructions = e.target.form['recipeInstructions'].value
      console.log(name)
      console.log(Ingredients)
      console.log(Instructions)
      // Insert these into the database
    }
  });

  Template.ingredient.events({
    'click button': function(e) {
      //e.preventDefault()
      var name = e.target.form['ingName'].value
      var cal = e.target.form['ingCal'].value
      IngredientDB.insert({name : name, calories : Number(cal)})
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if (IngredientDB.findOne() == null) {
      console.log("no ingredients db")
      var ings = JSON.parse(Assets.getText('testIngredients.json'))
      _.each(ings, function(ing) {
        IngredientDB.insert(ing);
      });
    }
    if (RecipeDB.findOne() == null) {
      console.log("no recipe db")
      var recips = JSON.parse(Assets.getText('testRecipeDB.json'))
      _.each(recips, function(recip) {
        RecipeDB.insert(recip);
      });
    }
  });
}
