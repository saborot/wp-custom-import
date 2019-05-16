import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import './App.css';
import InputText from '../components/InputText';
import InputMedia from '../components/InputMedia';
import InputList from '../components/InputList';
import { setStagUrl } from '../actions';

const mapStateToProps = (state)  => {

   return {

      stagUrl: state.stagUrl,
      livePagesFile : state.livePagesFile,
      liveMediaFile : state.liveMediaFile,
      excludedPages: state.excludedPages,
      slugsToUpdate: state.slugsToUpdate
   }
}

const mapDispatchToProps = (dispatch) => {

   return {
      onSetStagUrl: (event) => dispatch(setStagUrl(event.target.value))
      }
}

const excludedPageList = ['page1','page2','page3']

const slugUpdateList = [
   'schedule-service -> service-appointment',
   'value-trade -> trade-in',
   'apply-for-financing -> finance-application'
]

class App extends Component {
   
   render() {

      const { stagUrl } = this.props;

      return (
         <article className="App">
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <h1>Wordpress Import Helper</h1>
            </header>
            <section className="step step-1">
               <h2>Fill-in required information:</h2>
               <InputText label='Staging URL' name='url-stag' value={stagUrl} />
               <InputMedia label='Live Pages Import File' name='live-pages-file' />
               <InputMedia label='Live Images Import File' name='live-images-file' />
            </section>
            <section className="step step-2">
               <h2>Set clean-up settings:</h2>
               <section>
                  <h3>Pages to exclude:</h3>            
                  <div className="list-pages grid-autofill">
                     <InputList list={excludedPageList} excluded={this.props.excludedPages} />
                  </div>
               </section>
               <section>
                  <h3>Slugs to udpate:</h3>
                  <div className="list-slugs grid-autofill">
                     <InputList list={slugUpdateList} excluded={this.props.slugsToUpdate} />
                  </div>
               </section>
               <button>START</button>            
            </section>
            <section className="step step-3">
               <textarea readOnly className="console-window">console</textarea>
            </section>
            <section className="step step-4">
               <h2>Download assets:</h2>
               <button>Import File (pages.xml)</button>
               <button>Images (no. of images)</button>
            </section>         
         </article>
      );
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);