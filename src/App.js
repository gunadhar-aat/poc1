  import React from 'react'
  import data from './data';
  import "./App.css";

  function App() {
    const json={data:data}
    const animal=json?.data?.filter(item=>item?.group==="animal");
    const bird=json?.data?.filter(item=>item?.group==="bird");
    const fish=json?.data?.filter(item=>item?.group==="fish");
    const person=json?.data?.filter(item=>item?.group==="person");

    //counting fish visits
    const fishesh=fish?.map(item=>item.visitors);
    const fishCount=fishesh?.reduce((total,value,index,array)=>total+value);

    //counting person visits
    const persons=person?.map(item=>item.visitors);
    const personCount=persons?.reduce((total,value,index,array)=>total+value);

    //counting animal visits
    const animals=animal?.map(item=>item.visitors);
    const animalCount=animals?.reduce((total,value,index,array)=>total+value);

  //counting bird visitor
  const birds=bird?.map(item=>item.visitors);
    const birdCount=birds?.reduce((total,value,index,array)=>total+value);

    //indivisual rate count
    const totalVisitor=fishCount+personCount+birdCount+animalCount;
    const personRate=personCount/totalVisitor*100;

    //animal rate
    const animalRate=animalCount/totalVisitor*100;

    //bird rate
    const birdRate=birdCount/totalVisitor*100;

    //fish rate
    const fishRate=fishCount/totalVisitor*100;

    //calculating appearance in min
    const fishSec=fish?.map(item=>item.appearanceTimeInSecs)
    const fishMin=fishSec?.reduce((total,value,index,array)=>total+value);
    const fishMinAppr=fishMin/60;

    //Min Appr of person
    const personSec=person?.map(item=>item.appearanceTimeInSecs)
    const personMin=personSec?.reduce((total,value,index,array)=>total+value);
    const personMinAppr=personMin/60;

    //min apppr for bird
    const birdSec=bird?.map(item=>item.appearanceTimeInSecs)
    const birdMin=birdSec?.reduce((total,value,index,array)=>total+value);
    const birdMinAppr=birdMin/60;

    //min apppr for animal
    const animalSec=animal?.map(item=>item.appearanceTimeInSecs)
    const animalMin=animalSec?.reduce((total,value,index,array)=>total+value);
    const animalMinAppr=animalMin/60;
    

    //dates
    const dates=json?.data?.map(item=> item?.date);
    const min = dates.reduce((date1,date2)=>{return new Date(date1) < new Date(date2) ? date1 : date2 })
    const max = dates.reduce((date1,date2)=>{return new Date(date1) > new Date(date2) ? date1 : date2 })  

    return (
      <div className="App">
            <div className="table">
          <table border={2}>
            <h2>Date Range: {min} ~ {max}</h2>
            <tbody>
                <tr>
                  <td></td>
                  <td>Visitors</td>
                  <td>Rate</td>
                  <td>Appr(min)</td>
                </tr>
                <tr>
                  <td>Animal</td>
                  <td>{animalCount}</td>
                  <td>{animalRate}</td>
                  <td>{animalMinAppr}</td>
                </tr>
                <tr>
                  <td>Bird</td>
                  <td>{birdCount}</td>
                  <td>{birdRate}</td>
                  <td>{birdMinAppr}</td>
                </tr>
                <tr>
                  <td>Fish</td>
                  <td>{fishCount}</td>
                  <td>{fishRate}</td>
                  <td>{fishMinAppr}</td>
                </tr>
                <tr>
                  <td>Person</td>
                  <td>{personCount}</td>
                  <td>{personRate}</td>
                  <td>{personMinAppr}</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  export default App;

