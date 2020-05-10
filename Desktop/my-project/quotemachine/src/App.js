import React, { Component } from 'react';
import { Random } from 'lodash';
import 'typeface-roboto';
import { Grid, withStyles } from '@material-ui/core';
import QuoteMachine from './components./QuoteMachine';

const styles = {
container: { 
  
  display: 'flex',
  height: '100vh',
  alignItems: 'center',

}
}
};

class App extends React.Component {
 constructor (props) {
  super (props);
   this.state = {
    quotes: [],
     selectedQuoteIndex: null,
 }

this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
this.selectedQuoteIndex = this.selectQuoteindex.bind(this); 
}

componentDidMount() {
 fetch('https://github.com/yoscheherazade/the-office-quotes-json/blob/master/quotes.json')
   .then(data => data.json())
   .then (quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
   this.setState({ selectedQuoteIndex: this.selectQuoteindex() })
   };
}

get selectedQuote() { 

    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) 
    
    {
      // eslint-disable-next-line
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }
};


generateNewQuoteIndex() { 
  if (!this.state.quotes.length) {
   return undefined;
  }
  return Math.floor(Math.random() * this.state.quotes.length - 1) + 1;
}

assignNewQuoteIndex() {

this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
}
  render() {
     return ( 
      <Grid className={this.props.classes.container} id="quote-box" justify="center" container>
        <Grid xs={11} lg={8} item>
          <QuoteGenerator selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App)