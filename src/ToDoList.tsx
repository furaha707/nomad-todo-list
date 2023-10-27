import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./components/CreateToDo";
import ToDo from "./components/ToDo";
import { Categories, categoryState, toDoSelector, toDoState } from "./atoms";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  // const [ toDo, doing, done  ] = useRecoilValue(toDoSelector);
  // selector 에 따른 category 상태를 modify 하는 것
  const [ category, setCategory ] = useRecoilState(categoryState);
  const onInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any)
    console.log(category);
    console.log(toDos);
  }
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map(toDo => <ToDo key={toDo.id} {...toDo}/>)}
    </div>
  );
}

export default ToDoList;