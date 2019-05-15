import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import InputText from '../components/InputText';
import InputMedia from '../components/InputMedia';
import InputList from '../components/InputList';

const excludedPages = [
   {name:'page1',value:true},
   {name:'page2',value:true},
   {name:'page3',value:true},
]

const slugUpdates = [
   {name:'schedule-service -> service-appointment',value:true},
   {name:'value-trade -> trade-in',value:true},
   {name:'apply-for-financing -> finance-application',value:true},
]

class App extends Component {

   constructor() {
      super();
      this.state = {
         stagUrl : '',
         livePages : '',
         liveMedia : ''
      }
   }

   componentDidMount() {

      console.log(this.props.store.getState());
   }
   
   render() {
      return (
         <article className="App">
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <h1>Wordpress Import Helper</h1>
            </header>
            <section className="step step-1">
               <h2>Fill-in required information:</h2>
               <InputText label='Staging URL' name='url-stag' />
               <InputMedia label='Live Pages Import File' name='live-pages-file' />
               <InputMedia label='Live Images Import File' name='live-images-file' />
            </section>
            <section className="step step-2">
               <h2>Set clean-up settings:</h2>
               <section>
                  <h3>Pages to exclude:</h3>            
                  <div className="list-pages grid-autofill">
                     <InputList list={excludedPages} />
                  </div>
               </section>
               <section>
                  <h3>Slugs to udpate:</h3>
                  <div className="list-slugs grid-autofill">
                     <InputList list={slugUpdates} />
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

export default App;