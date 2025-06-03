import { useState, type JSX } from "react";
import ExtensionList from "./ExtensionList";

export default function App():JSX.Element {

  interface ButtonInterface{
    name: string,
    selected: boolean
  }

  const [buttonList, setButtonList] = useState<ButtonInterface[]>([
    {
      name: 'All',
      selected: true
    },
    {
      name: 'Active',
      selected: false
    },
    {
      name: 'Inactive',
      selected: false
    }
  ])

  function handleClick(name: string){
    setButtonList(prev=>(
      prev.map(item=>(
        {...item, selected: item.name === name}
      ))
    ))
  }

  function getSelectedActivationMode(): string{
    const selected: ButtonInterface|undefined = buttonList.find(item => item.selected)
    return selected?.name ?? 'All'
  }

  return (
    <main className="pt-12 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-[2rem] font-bold text-neutral-900 dark:text-white">Extensions List</h1>
        <nav className="space-x-2.5">

          {buttonList.map(item=>(
            <button key={item.name} 
              className={`cursor-pointer bg-neutral-0 hover:bg-neutral-0/50 dark:bg-neutral-700 dark:hover:bg-neutral-600
              py-2 px-4 rounded-full border-2 border-neutral-100 dark:border-neutral-600 
              focus-visible:outline-2 focus-visible:outline-red-700 dark:focus-visible:border-neutral-900 focus-visible:border-neutral-0
              ${item.selected && '!bg-red-500 dark:!text-neutral-900 !text-neutral-0 !border-red-500 dark:focus-visible:!border-neutral-900 focus-visible:!border-neutral-0'}`}
              onClick={()=>handleClick(item.name)}>
              {item.name}
            </button>
          ))}
          
        </nav>
      </div>

      <ExtensionList getSelectedActivationMode={getSelectedActivationMode}/>
    </main>
  )
}