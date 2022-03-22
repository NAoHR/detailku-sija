import Job from "../containers/Job";
import {useEffect,useState} from "react";
import Loader from "../components/Loader";

export default function Home() {
  const [data,setData] = useState(null);
  useEffect(()=>{
    setTimeout(()=>{
      setData([
        {
          _id: "62355b7fb3fd4797e3929f5b",
          title: 'Jaksel Language Translator',
          description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui',
          reqruiter: 'PT Aku Kamu Kita',
          region: 'Jakarta',
          category: 'category',
          salary: { from: 10000, to: 999999999 },
          more: 'more',
          __v: 0
        },
        {
          _id: "62355ec5b3fd4797e3929f66",
          title: 'Rust Backend Engineer',
          description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui',
          reqruiter: 'PT Aku Kamu Kita',
          region: 'Jakarta',
          category: 'category',
          salary: { from: 10000, to: 999999999 },
          more: 'more',
          __v: 0
        },
        {
          _id: "62355edeb3fd4797e3929f69",
          title: 'Jaksel Language Translator',
          description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui',
          reqruiter: 'PT Aku Kamu Kita',
          region: 'Jakarta',
          category: 'category',
          salary: { from: 10000, to: 999999999 },
          more: 'more',
          __v: 0
        },
        {
          _id: "62355b7fb3fd4797e3929f5b",
          title: 'Jaksel Language Translator',
          description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui',
          reqruiter: 'PT Aku Kamu Kita',
          region: 'Jakarta',
          category: 'category',
          salary: { from: 10000, to: 999999999 },
          more: 'more',
          __v: 0
        },
        {
          _id: "62355ec5b3fd4797e3929f66",
          title: 'Rust Backend Engineer',
          description: 'zamnn',
          reqruiter: 'PT Aku Kamu Kita',
          region: 'Jakarta',
          category: 'category',
          salary: { from: 10000, to: 999999999 },
          more: 'more',
          __v: 0
        },
        {
          _id: "62355edeb3fd4797e3929f69",
          title: 'Jaksel Language Translator',
          description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui',
          reqruiter: 'PT Aku Kamu Kita',
          region: 'Jakarta',
          category: 'category',
          salary: { from: 10000, to: 999999999 },
          more: 'more',
          __v: 0
        }
      ])
    },4000)
  },[])
  return (
    <>
      {data !== null && <Job data={data}/>}
      <Loader status={data !== null && true}/>
    </>
  )
}
