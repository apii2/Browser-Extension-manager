import type { JSX } from "react";
import Data from '@/json/data.json';

interface DataInterface{
  logo: string,
  name: string,
  description: string,
  isActive?: boolean
}

const typedData: DataInterface[] = Data as DataInterface[];

export default function App():JSX.Element {
  return (
    <>
      {typedData.map((dat)=>(
        <h1 key={dat.name}>{dat.name} {dat.description}</h1>
      ))}
    </>
  )
}