import type { JSX } from "react";
import Data from '@/json/data.json';

interface DataInterface{
  logo: string,
  name: string,
  description: string,
  isActive: boolean
}

const typedData: DataInterface[] = Data as DataInterface[];

export default function App():JSX.Element {
  return (
    <main className="pt-12 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-[2rem] font-bold text-neutral-900 dark:text-white">Extensions List</h1>
        <nav className="space-x-2.5">
          <button className="cursor-pointer bg-neutral-0 hover:bg-neutral-0/50 dark:bg-neutral-700 dark:hover:bg-neutral-600
          py-2 px-4 rounded-full ring-2 ring-neutral-100 dark:ring-neutral-600">
            All
          </button>

          <button className="cursor-pointer bg-neutral-0 hover:bg-neutral-0/50 dark:bg-neutral-700 dark:hover:bg-neutral-600
          py-2 px-4 rounded-full ring-2 ring-neutral-100 dark:ring-neutral-600">
            Active
          </button>

          <button className="cursor-pointer bg-neutral-0 hover:bg-neutral-0/50 dark:bg-neutral-700 dark:hover:bg-neutral-600
          py-2 px-4 rounded-full ring-2 ring-neutral-100 dark:ring-neutral-600">
            Inactive
          </button>
        </nav>
      </div>

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

            <div className="mt-6">
              <button className="ring-2 ring-neutral-100 dark:ring-neutral-700 text-sm rounded-full py-1 px-3">
                Remove
              </button>
              
            </div>
          </section>
        ))}
      </div>

    </main>
  )
}