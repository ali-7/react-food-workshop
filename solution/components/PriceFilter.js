import React from "react";

const PriceFilter = ({ min, max, setPriceFilter }) => {
  return (
    <fieldset>
      <legend>Price</legend>
      <label htmlFor="min-price">
        Min price
        <input
          type="range"
          id="min-price"
          min="0.5"
          max="9"
          step="0.25"
          value={min}
          onChange={e => setPriceFilter([e.target.value, max])}
        />
      </label>
      <label htmlFor="max-price">
        Max price
        <input
          type="range"
          id="max-price"
          min="0.5"
          max="9"
          step="0.25"
          value={max}
          onChange={e => setPriceFilter([min, e.target.value])}
        />
      </label>
    </fieldset>
  );
}

export default PriceFilter;
