import debug from 'debug';
import React from 'react';
import Tappable from 'react-tappable';


import Store from '../Store';

import {default_ingredients} from '../defaults'

import {switchView} from '../actions'

import {LeftPage} from './../components/Page';
import Button from './../components/Button';
import Footer from './../components/Footer';

const log = debug("Kiosk:NutritionScreen");

require('./NutritionScreen.scss');

export default class NutritionScreen extends LeftPage {
  render(){
    const {props} = this;
    return (
      <div key="NutritionScreen-Body" className="col-full-9 NutritionScreen">
        <section className="NutritionContent">
          <NutritionHeader {...props}/>
          {/*Eventually support multiple items of a meal etc.*/}
          {/*Currently only supports props.product*/}
          <div className="NutritionWrapper">
            <NutritionCard {...props}/>
          </div>
        </section>
        <NutritionFooter {...props}/>
      </div>
    )
  }
}

const NutritionHeader = (props)=>{
  return(
    <header className="NutritionHeader">
      <img src='/public/images/Icons/Nutrition.svg' className="col-1"/>
      <h1 className="col-6">Nutrition</h1>
      <p>Unless noted, all information reflects items before customization.</p>
    </header>
  )
}

const NutritionCard = (props) =>{
  let self = {};
  const {product, allergenAlerts} = props;
  const {name,image,img} = product;

  product.alertSettings= allergenAlerts;
  return (
    <div className={`col-full-6`} key={`ingredient-${name}`}>

      <article className="NutritionCard col-full-6" ref={(ref)=>{self.card = ref;}}>
        <section>
          <img src={image || img}/>
          <article>
            <p>{name}</p>
            {/*Check for Allergen Alert*/}
            {product.bHasAllergenMatch?( <p className="allergens">This item contains: {product.allergenAlertString}</p>):null}
          </article>
        </section>
        <NutritionTable {...props} />

        <footer>
          <p>View Ingredients</p>
          <Button onTap={(e)=>{

            self.card.className = self.card.className.indexOf("show") >-1 ? "NutritionCard col-full-6" : "NutritionCard col-full-6 show"
            self.ingredients.className = self.ingredients.className.indexOf("show")>-1? "ingredients" : "ingredients show";
            e.target.className = e.target.className.indexOf("show")>-1 ? e.target.className.replace(" show", "") : e.target.className+" show";

          }}/>
        </footer>
      </article>
      <ProductIngredients  self={self} product={product} className="col-6 ingredients" />

    </div>
  )
}
const ProductIngredients = (props) => {
  const {self,product,className} = props;
  const {ingredients=default_ingredients} = product;
  log(ingredients)
  return(
    <article ref={(ref)=>{self.ingredients = ref }} className={className}>
      {ingredients.map(ing=><p>{ing.name}</p>)}
    </article>)

}

const NutritionTable = (props) => {
  return(
    <article className="table">
      <ul>
        <li>
          <p>Calories</p>
          <h1>527</h1>
          <p></p>
        </li>
        <li>
          <p>Saturated Fats</p>
          <h1>200</h1>
          <p>(42%)</p>
        </li>

        <li>
          <p>Sodium</p>
          <h1>24g</h1>
          <p>(46%)</p>
        </li>
        <li>
          <p>Lorem</p>
          <h1>24g</h1>
          <p>(46%)</p>
        </li>
        <li>
          <p>Lorem</p>
          <h1>24g</h1>
          <p>(46%)</p>
        </li>
      </ul>
    </article>
  )
}

const NutritionFooter = (props) => {
  return (
    <footer key="footer" className="col-full-9" >
      <section className="col-full-9 footer-content">
        <Button className="cancel col-6" onTap={Store.dispatch.bind(Store, switchView(props.nextView.currentView) )}>Back</Button>
      </section>
      <Footer/>
    </footer>
  )
}
