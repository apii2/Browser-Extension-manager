import { useState, type JSX } from "react";
import Data from '@/json/data.json';
import { Switch } from "@/components/ui/switch"

export default function ExtensionList():JSX.Element {
  interface DataInterface{
    logo: string,
    name: string,
    description: string,
    isActive: boolean
  }

  const [typedData, setTypedData] = useState<DataInterface[]>(Data);

  function handleChange(name: string){
    setTypedData(prev=>(
      prev.map(item=>(
        name===item.name? {...item, isActive: !item.isActive}: item
      ))
    ));
    console.log(typedData);
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {typedData.map((dat)=>(
        <section key={dat.name}
          className="h-auto bg-white dark:bg-neutral-800 p-4 rounded-xl ring-2 ring-neutral-100 dark:ring-neutral-700" >
          <div className="flex items-start gap-4">
            <img src={dat.logo} alt={`${dat.name} logo`} />

            <div>
              <h1 className="text-lg font-bold mb-1 text-neutral-900 dark:text-neutral-0">{dat.name}</h1>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{dat.description}</p>
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button className="border-2 border-neutral-100 hover:border-red-500 dark:border-neutral-700 dark:hover:border-red-500 
              focus-visible:outline-2 focus-visible:outline-red-700 dark:focus-visible:border-neutral-900 focus-visible:border-neutral-0
              hover:bg-red-500 text-neutral-900 dark:text-neutral-0 dark:hover:text-neutral-900 hover:text-neutral-0 
              text-sm font-semibold rounded-full py-1 px-3 cursor-pointer">
              Remove
            </button>

            <Switch id="activation-mode" checked={dat.isActive?true:false} onCheckedChange={()=>handleChange(dat.name)}/>
          </div>
        </section>
      ))}
    </div>
  )
}
