import List from "../components/List";
import TrainerListItem from "../components/TrainerListItem";

export default function Trainers() {
  return (
    <>
      <h1 className="text-4xl font-bold my-5 text-center">Treinadores</h1>
      <div className="flex justify-center w-full">
        <List
          items={[
            { id: 1, name: "Ash", badges: 8, money: 1500 },
            { id: 2, name: "Blue", badges: 8, money: 2000 },
            { id: 3, name: "Red", badges: 8, money: 2500 },
            { id: 4, name: "Green", badges: 8, money: 1800 },
            { id: 5, name: "Ethan", badges: 8, money: 1200 },
            { id: 6, name: "Brendan", badges: 8, money: 1600 },
            { id: 7, name: "May", badges: 8, money: 1400 },
          ]}
          ListItem={TrainerListItem}
        />
      </div>
    </>
  );
}
