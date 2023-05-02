

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/"> 
          {/* index */}
          <Route index element={<Home />} />
          {/* login */}
          <Route path="login" element={<Login />} />
          {/* users */}
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userID" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          {/* products */}
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productID" element={<Single />} />
            <Route path="new" element={<New />} />
            </Route>

        </Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
