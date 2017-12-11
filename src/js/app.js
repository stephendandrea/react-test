
import React from 'react';
import ReactDOM from 'react-dom';
import model from './model';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {};
  };

  componentWillMount = () => this.setState({ ...model });

	render() {

    const { product = {}, reviews = [] } = this.state;
    const review = reviews[0] || {} ;

		return !!this.state && (
      
      <div className="review-component">

        <h1> { product.name } </h1>
        <img src={product.image} />
        
        <div className="flex flex-justify-space-around m-1">
          <div className="flex">
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <button className="btn">Submit</button>
          </div>
        </div>

        <div className="reviews">
          <h1> Reviews </h1>
          <div className="review flex">
            <img className="avatar" src={ review.avatar } alt="" />
            <div>
              <h3>{ review.username }</h3>
              <h4>{`Rating: ${ review.rating }` }</h4>
            </div>
          </div>
        </div>

      </div>
		);
	}

}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
