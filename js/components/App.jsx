var React       = require('react');
var Header      = require('./header');
var SpeechList  = require('./speech-list');
var Speech      = require('./speech');
var Search      = require('./search');
var About       = require('./about');
var Footer      = require('./footer');


var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <main id="content">
          <Search />
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
});


module.exports = App;
