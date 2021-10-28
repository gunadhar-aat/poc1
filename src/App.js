
function App() {
  const json={data:[
    {
      date: '2019-12-13',
      group: 'person',
      type: 'domain',
      visitors: 48,
      appearanceTimeInSecs: 986,
    },
    {
      date: '2019-12-13',
      group: 'person',
      type: 'domain',
      visitors: 98,
      appearanceTimeInSecs: 734,
    },
    {
      date: '2019-12-13',
      group: 'person',
      type: 'domain',
      visitors: 146,
      appearanceTimeInSecs: 817,
    },
    {
      date: '2019-12-13',
      group: 'person',
      type: 'domain',
      visitors: 12,
      appearanceTimeInSecs: 669,
    },
    {
      date: '2019-11-27',
      group: 'person',
      type: 'domain',
      visitors: 153,
      appearanceTimeInSecs: 904,
    },
    {
      date: '2019-11-27',
      group: 'person',
      type: 'domain',
      visitors: 7,
      appearanceTimeInSecs: 1058,
    },
    {
      date: '2019-11-27',
      group: 'person',
      type: 'domain',
      visitors: 115,
      appearanceTimeInSecs: 856,
    },
    {
      date: '2019-11-27',
      group: 'person',
      type: 'domain',
      visitors: 38,
      appearanceTimeInSecs: 1049,
    },
    {
      date: '2019-11-28',
      group: 'animal',
      type: 'domain',
      visitors: 74,
      appearanceTimeInSecs: 510,
    },
    {
      date: '2019-11-28',
      group: 'animal',
      type: 'domain',
      visitors: 2,
      appearanceTimeInSecs: 269,
    },
    {
      date: '2019-11-28',
      group: 'animal',
      type: 'domain',
      visitors: 19,
      appearanceTimeInSecs: 564,
    },
    {
      date: '2019-11-28',
      group: 'animal',
      type: 'domain',
      visitors: 55,
      appearanceTimeInSecs: 491,
    },
    {
      date: '2019-11-27',
      group: 'animal',
      type: 'domain',
      visitors: 14,
      appearanceTimeInSecs: 1188,
    },
    {
      date: '2019-11-27',
      group: 'bird',
      type: 'domain',
      visitors: 65,
      appearanceTimeInSecs: 478,
    },
    {
      date: '2019-11-27',
      group: 'bird',
      type: 'domain',
      visitors: 79,
      appearanceTimeInSecs: 604,
    },
    {
      date: '2019-11-27',
      group: 'bird',
      type: 'domain',
      visitors: 2,
      appearanceTimeInSecs: 2405,
    },
    {
      date: '2019-12-02',
      group: 'bird',
      type: 'domain',
      visitors: 23,
      appearanceTimeInSecs: 729,
    },
    {
      date: '2019-12-02',
      group: 'bird',
      type: 'domain',
      visitors: 122,
      appearanceTimeInSecs: 652,
    },
    {
      date: '2019-12-02',
      group: 'bird',
      type: 'domain',
      visitors: 99,
      appearanceTimeInSecs: 635,
    },
    {
      date: '2019-12-13',
      group: 'animal',
      type: 'domain',
      visitors: 101,
      appearanceTimeInSecs: 519,
    },
    {
      date: '2019-12-13',
      group: 'animal',
      type: 'domain',
      visitors: 5,
      appearanceTimeInSecs: 200,
    },
    {
      date: '2019-12-13',
      group: 'animal',
      type: 'domain',
      visitors: 21,
      appearanceTimeInSecs: 407,
    },
    {
      date: '2019-12-13',
      group: 'animal',
      type: 'domain',
      visitors: 80,
      appearanceTimeInSecs: 548,
    },
    {
      date: '2019-12-01',
      group: 'person',
      type: 'domain',
      visitors: 90,
      appearanceTimeInSecs: 1448,
    },
    {
      date: '2019-12-01',
      group: 'person',
      type: 'domain',
      visitors: 128,
      appearanceTimeInSecs: 1406,
    },
    {
      date: '2019-12-01',
      group: 'fish',
      type: 'domain',
      visitors: 4,
      appearanceTimeInSecs: 2186,
    },
    {
      date: '2019-12-01',
      group: 'person',
      type: 'domain',
      visitors: 38,
      appearanceTimeInSecs: 1306,
    },
    {
      date: '2019-11-29',
      group: 'person',
      type: 'domain',
      visitors: 200,
      appearanceTimeInSecs: 1164,
    },
    {
      date: '2019-11-29',
      group: 'fish',
      type: 'domain',
      visitors: 7,
      appearanceTimeInSecs: 1221,
    },
    {
      date: '2019-11-29',
      group: 'fish',
      type: 'domain',
      visitors: 155,
      appearanceTimeInSecs: 1258,
    },
    {
      date: '2019-11-29',
      group: 'fish',
      type: 'domain',
      visitors: 45,
      appearanceTimeInSecs: 840,
    },
    {
      date: '2019-12-14',
      group: 'animal',
      type: 'domain',
      visitors: 55,
      appearanceTimeInSecs: 444,
    },
  ]}
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

  //total visitor count 
  const totalVisitor=fishCount+personCount+birdCount+animalCount;
  const personRate=personCount/totalVisitor*100;

  //animal rate
  const animalRate=animalCount/totalVisitor*100;

  //bird rate
  const birdRate=birdCount/totalVisitor*100;

  //fish rate
  const fishRate=fishCount/totalVisitor*100;

  const fishSec=fish?.map(item=>item.appearanceTimeInSecs)
  const fishMin=fishSec?.reduce((total,value,index,array)=>total+value);
  const fishMinAppr=fishMin/60;

  //Min Appr of person
  const personSec=person?.map(item=>item.appearanceTimeInSecs)
  const personMin=personSec?.reduce((total,value,index,array)=>total+value);
  const personMinAppr=personMin/60;

  //min apppr for bird
   //Min Appr of person
   const birdSec=bird?.map(item=>item.appearanceTimeInSecs)
   const birdMin=birdSec?.reduce((total,value,index,array)=>total+value);
   const birdMinAppr=birdMin/60;

   //min apppr for animal
    //Min Appr of person
  const animalSec=animal?.map(item=>item.appearanceTimeInSecs)
  const animalMin=animalSec?.reduce((total,value,index,array)=>total+value);
  const animalMinAppr=animalMin/60;
  

  //dates
  const dates=json?.data?.filter(item=> item?.date==="date");
  console.log("dates",dates);

  

  return (
    <div className="App">
      <div style={tableStyle}>
   <table border={2}>
     <thead></thead>
     <tbody>
     <tr><td></td><td>Visitors</td><td>Rate</td><td>Appr(min)</td></tr>
     <tr><td>Animal</td><td>{animalCount}</td><td>{animalRate}</td><td>{animalMinAppr}</td></tr>
     <tr><td>Bird</td><td>{birdCount}</td><td>{birdRate}</td><td>{birdMinAppr}</td></tr>
     <tr><td>Fish</td><td>{fishCount}</td><td>{fishRate}</td><td>{fishMinAppr}</td></tr>
     <tr><td>Person</td><td>{personCount}</td><td>{personRate}</td><td>{personMinAppr}</td></tr>
     </tbody>
   </table>
   </div>
    </div>
  );
}

const tableStyle={
  display:"flex",
  "justifyContent":"center",
  "alignContent":"center",
  'alignItems': 'stretch',
}

export default App;

