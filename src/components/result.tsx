import Image from "next/image"
import { ResultData } from "@/lib/types"

export default function Result({ data }: { data: ResultData }) {
  return (
    <div className="mt-8 p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Disease Detection Result</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{data.prediction}</h3>
        <p className="mt-2">{data.content}</p>
      </div>
    </div>
  )
}