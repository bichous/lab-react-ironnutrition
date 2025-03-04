import React, { Component } from "react";
import foods from "../foods.json";
import CreateNewFood from "./CreateNewFood.js";

export default class FoodBox extends Component {
  state = {
    foods
  };

  createNewFood = (food) => {
    this.setState(prevState => {
      return {
        foods: [...prevState.foods, food]
      }
    })
  }
  render() {
    return (
      <div className="box">
        <button onClick={<CreateNewFood createNewFood={this.createNewFood}/>}>CREATE</button>        
        {this.state.foods.map((food, index) => {
          return (
            <article className="media" key={index}>
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={food.image} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong> {food.name} </strong> <br />
                    <small> {food.calories} cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" value="1" />
                  </div>
                  <div className="control">
                    <button className="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    );
  }
}
