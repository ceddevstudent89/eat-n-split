import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Fermer" : "Ajouter un ami"}
        </Button>
      </div>

      <FormSplitBill />
    </div>
  );
}

function FriendsList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          Vous devez {Math.abs(friend.balance)}€ à {friend.name}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} vous doit {Math.abs(friend.balance)}€
        </p>
      )}

      {friend.balance === 0 && <p>Vous et {friend.name} êtes égales</p>}

      <Button>Selectionner</Button>
    </li>
  );
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>👦🏻 Nom de l'ami</label>
      <input type="text" />

      <label>🖼️ URL</label>
      <input type="text" />

      <Button>Ajouter</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Diviser une facture avec X</h2>

      <label>💰 Valeur de la facture</label>
      <input type="text" />

      <label>👦🏻 votre dépense</label>
      <input type="text" />

      <label>👨🏻‍🤝‍👩🏻 Les dépenses de X</label>
      <input type="text" disabled />

      <label>🤑 Qui paie la facture</label>
      <select>
        <option value="user">Vous</option>
        <option value="friend">X</option>
      </select>

      <Button>Facture partagée</Button>
    </form>
  );
}
