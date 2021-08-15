import HomePage from "../components/home page/homePage.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Category from "../components/category/category";
import Cart from "../components/cart/cart";
import Payment from "../components/payment/payment";
import NavbarPage from "../components/nav bar/NavBar";
import BigItem from "../components/big image/bigImage";
import FAQ from "../components/FAQ/FAQ";
import ScrollToTopBtn from "../components/scroll to rtop/scrollToTop";
import AboutUs from "../components/about us/aboutUs";
import "./App.css";
import Forum from "../components/forum/forum";
import For from "../components/forum/for";
import Departments from "../components/department/department";
import Opinion from "../components/opinion/opinion";
import Pay from "../components/pay/pay";


const upStock = async (item, category) => {
  console.log(item._id);
  await fetch(`http://localhost:3080/${category}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
};

const addUser = async (user) => {
  await fetch(`http://localhost:4000/${user}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

function App() {
  const [list, setList] = useState([]);
  const [payment, setPayment] = useState(0);
  const [Art, setArt]=useState();
  const [Judaica,setJudaica]=useState();
  const [Stamps, setStamps]=useState();
  const [Coins, setCoins]=useState();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("usera"))
      ? JSON.parse(localStorage.getItem("usera"))
      : {
          FirstName: "",
          LastName: "",
          Phone: "",
          Email: "",
          Password: "",
          _id:""
        }
  );
  const getProducts = async (category,res) => {
    let ProductList;
    await fetch(`http://localhost:3080/` + category, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    })
      .then((res) => res.json())
      .then((res) => {
        ProductList = res;
      });
    return ProductList;
  };
async function fetchData() {
    let OpinionList = await getProducts("Art");
    setArt(OpinionList)
    OpinionList = await getProducts("Stamp");
    setStamps(OpinionList)
    OpinionList = await getProducts("Judaica");
    setJudaica(OpinionList)
    OpinionList = await getProducts("Coin");
    setCoins(OpinionList)
  }
  useEffect(() => {
    fetchData();
  }, []);

  
  function changeList(item) {
    setPayment(payment + 1 * item.price);
    console.log(item.price);
    setList((list) => [...list, item]);
  }

  function updateStock() {
    fetchData();
    list.map((item) => {
      Art.map((art) => {
        if (item.name == art.name) {
          art.buy = "true";
          upStock(art, "Art");
        }
      });
      Judaica.map((judaica) => {
        if (item.name == judaica.name) {
          judaica.buy = "true";
          upStock(judaica, "Judaica");
        }
      });
      Stamps.map((stamp) => {
        if (item.name == stamp.name) {
          stamp.buy = "true";
          upStock(stamp, "Stamp");
        }
      });
      Coins.map((coin) => {
        if (item.name == coin.name) {
          coin.buy = "true";
          upStock(coin, "Coin");
        }
      });
    });
    setList([]);
    setPayment(0);
  }

  function reduceProduct(item) {
    setList(
      list.filter((_item) => {
        if (item.name !== _item.name) return true;
      })
    );

    setPayment(payment - 1 * item.price);
  }

  function changeName(newUser) {
    setUser(newUser);
    setList([]);
    setPayment(0);
    localStorage.setItem("usera", JSON.stringify(newUser));
    console.log(newUser);
  }

  return (
    <div>
      <Router>
        <NavbarPage
          list={list}
          payment={payment}
          reduce={reduceProduct}
          changeName={changeName}
          name={user && user.FirstName}
        />
        <Switch>
          <Route path="/" exact>
            <HomePage key="home" />
          </Route>
          <Route path="/Art">
            <Category
              onClick={changeList}
              category="Art"
              key="Art"
              list={list}
            ></Category>
          </Route>
          <Route path="/Judaica">
            <Category
              category="Judaica"
              onClick={changeList}
              key="Judaica"
              list={list}
            ></Category>
          </Route>
          <Route path="/Stamps">
            <Category
              category="Stamp"
              onClick={changeList}
              key="Stamps"
              list={list}
            ></Category>
          </Route>
          <Route path="/Coins">
            <Category
              category="Coin"
              onClick={changeList}
              key="Coins"
              list={list}
            ></Category>
          </Route>
          <Route path="/forum">
            <Forum user={user && user.FirstName} />
          </Route>
          <Route path="/cart">
            <Cart list={list} payment={payment} reduce={reduceProduct} />
          </Route>
          <Route path="/payment">
            <Payment
              user={user}
              payment={payment}
              updateStock={updateStock}
              changeName={changeName}
            />
          </Route>
          <Route path="/bigItem">
            <BigItem onClick={changeList} />
          </Route>
          <Route path="/FAQ">
            <FAQ />
          </Route>
          <Route path="/for">
            <For
              name={user && user.FirstName}
              email={user && user.Email}
              key="for"
            />
          </Route>
          <Route path="/department">
            <Departments />
          </Route>{" "}
          <Route path="/opinion">
            <Opinion key="opinion" />
          </Route>
          <Route path="/Pay">
            <Pay key="pay" payment={payment} updateStock={updateStock} />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
        </Switch>
      </Router>
      <ScrollToTopBtn />
    </div>
  );
}

export default App;
