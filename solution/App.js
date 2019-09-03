import React from "react";
import PriceFilter from "./components/PriceFilter";
import DishList from "./components/DishList";

class App extends React.Component {
  state = {
    min: 0,
    max: 100
  }

  setPriceFilter = ([min, max]) => {
    this.setState({ min, max })
  }
  render() {
    const { min, max } = this.state

    return (
      <main>
        <section className="filters">
          <h1>Burger Place</h1>
          <h2>Filters</h2>
          <form>
            <PriceFilter
              min={min}
              max={max}
              setPriceFilter={this.setPriceFilter}
            />
          </form>
        </section>
        <section className="dishes">
          <h2>Dishes</h2>
          <DishList
            min={min}
            max={max} />
        </section>
      </main>
    );
  }
}

export default App;
