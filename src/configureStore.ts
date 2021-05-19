import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { IApplicationState, rootReducer, rootEpic } from './store';

export default function configureStore(): Store<IApplicationState> {
  const epicMiddleware = createEpicMiddleware();

  const middlewares = [
    epicMiddleware,
  ];

  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(...middlewares),
    ),
  );

  epicMiddleware.run(rootEpic);

  return store;
}
