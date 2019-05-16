# wp-import-helper
A tool for importing pages from old-jazel to rocket-jazel CMS.

React App Steps:
1. Install 'Create-React-App' package
2. Create Components
3. Create Actions
4. Install 'Redux'
5. Install 'React-Redux'
6. Build Actions
7. Build Reducers
8. Create Store
   -> (index.js)
   -> Import createStore from 'redux'
   -> const store = createStore(reducer);
9. Connect the Reducers to your app using 'Provider' from react-redux
   -> (index.js)
   -> Import Provider from 'react-redux'
   -> <Provider store={store}><App /></Provider>
10. Connect the Actions to your app using 'connect'
   -> (app.js)
   -> Import 'connect' from 'react-redux'
   -> export default connect(mapStateToProps, mapDispatchToProps)(App)
   -> mapStateToProps - takes in a state and returns an updated object as props
   -> mapDispatchToProps - takes in a dispatch and returns an object of actions mapped through dispatch