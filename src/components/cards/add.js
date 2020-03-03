import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {addCard} from '../../store/reducers/cards.js'

function Add() {

  const nameInput = useRef();
  const cardInput = useRef();
  const limitInput = useRef();

  const dispatch = useDispatch();

  return (
      <div>
        <h2>Add</h2>
        <div>
          <label>Name</label>
          <input ref={nameInput}></input>
        </div>
        <div>
          <label>Card number</label>
          <input ref={cardInput}></input>
        </div>
        <div>
          <label>Limit</label>
          <input ref={limitInput}></input>
        </div>
        <button onClick={() => dispatch(addCard(nameInput, cardInput, limitInput))}>Add</button>
      </div>)
}

export default Add
