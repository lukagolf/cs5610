import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";
import AuthContext from "./tuiter/services/auth-context";
import authReducer from "./tuiter/reducers/auth-reducer";
import whoReducer from "./tuiter/reducers/who-reducer";
import tuitsReducer from "./tuiter/reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    who: whoReducer, tuits: tuitsReducer,
    user: authReducer
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthContext>
          <div className="container">
            <Routes>
              <Route path="/" element={<Navigate to="/labs" />} />
              <Route path="/labs/*" element={<Labs />} />
              <Route path="/hello" element={<HelloWorld />} />
              <Route path="/tuiter/*" element={<Tuiter />} />
            </Routes>
          </div>
        </AuthContext>
      </BrowserRouter>
    </Provider>
  );
}
export default App;