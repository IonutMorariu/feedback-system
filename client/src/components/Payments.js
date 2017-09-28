import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import StripeImage from '../stripe-image.png';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        image={StripeImage}
        name="Emaily"
        description="$5 for for 5 survey credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <a className="btn credits-button">Add credits</a>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
