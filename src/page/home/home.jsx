import React from 'react'
import { Banner } from '../../components/banner'
import { Card } from '../../components/card/card'
import { data1, data2 } from '../../data/data'
import { SecBanner } from "../../components/section_banner";

export const Home = () => {
  return (
    <>
        <Banner/>
        <section>
          <div>
            <h1>Kategoriyalar</h1>
            <div>
              {data1.map((item) => (
                <Card key={item.id} {...item}/>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div ClassName="container">
            <h1>Eng ko’p sotilgan</h1>
            <div>
              {data2.map((item)=> (
                <Card key={item.id} {...item}/>
              ))}
            </div>
          </div>
        </section>
        <SecBanner/>
        <section>
          <div ClassName="container">
            <h1>Eng ommabop</h1>
            <div>
              {data2.map((item)=> (
                <Card key={item.id} {...item}/>
              ))}
            </div>
          </div>
        </section>
    </>
)
}
