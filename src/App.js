import React, { useState, useEffect } from "react";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import Items from "./components/global/Items";
import Categories from "./components/global/Categories";
import ShowFullItem from "./components/global/ShowFullItem";
import axios from "axios";

export default function App() {
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState([]); // Начальное значение пустое []
  const [items, setItems] = useState([]);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  useEffect(() => {
    axios
        .get("http://localhost:3001/items")
        .then((response) => {
          setItems(response.data);
          chooseCategory("all");
          setCurrentItems(response.data); // Устанавливаем текущие элементы сразу после загрузки
        })
        .catch((error) => {
          console.error("Ошибка при загрузке данных:", error);
        });
  }, []);

  // Функция по добавлению вещей в корзину
  const addToOrder = (item) => {
    if (!orders.some((el) => el.id === item.id)) {
      setOrders([...orders, item]);
    }
  };

  // Функция по удалению вещей из корзины
  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
  };

  // Функция для выбора категории
  const chooseCategory = (category) => {
    if (category === "all") {
      setCurrentItems(items);
    } else {
      setCurrentItems(items.filter((el) => el.category === category));
    }
  };

  // Функция для отображения полной информации об элементе
  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };

  return (
      <div className={"wrapper"}>
        <Header orders={orders} onDelete={deleteOrder} />
        <Categories chooseCategory={chooseCategory} />
        <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder} />

        {showFullItem && (
            <ShowFullItem onAdd={addToOrder} onShowItem={onShowItem} item={fullItem} />
        )}
        <Footer />
      </div>
  );
}

