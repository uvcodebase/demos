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

  Template.recipe.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.ingredient.events({
    'click button': function(e) {
      var name = e.target.form['ingName'].value
      var cal = e.target.form['ingCal'].value
      IngredientDB.insert({_id : name, calories : cal})
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if (IngredientDB.findOne() == null) {
      console.log("no db")
      //var ing = JSON.parse(Asset.getText('testIngredients.json'))
      //console.log(ing)
    }
  });
}
