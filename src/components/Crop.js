
import Cropdetail from './Cropdetail'
import Cropname from './Cropname'
import React, { useState } from 'react';
import Null from './Null';

export default function Crop(props) {
const array=[
  [{
    id:"0",
    name:"Maize",
    condition:"Maize cannot tolerate frost and hence it is a Kharif crop sown just before the monsoons arrive in India. It requires about 70 mm of rainfall. Alternate spells of sunshine and rainfall is optimal for maize production. It can tolerate temperature up to 35⁰C.",
    dis:"The most common disease affecting maize crop is downy mildew. Leaf spot and blight is the next major disease. Spraying half Kg of Mancozeb per acre 20 days after sowing takes care of both these diseases even in high intensity. However, in severe cases, it is advisable to remove the affected plant and destroy it completely.",
    water:"Maize is both sensitive to less water and more water. Hence a well-drained soil that lets water drain off while holding back adequate amount of moisture is preferred. In other words, irrigation must be regulated as per requirement. Moisture levels must be maintained at optimum during the flowering stage since it is a critical stage for maximum yield production. Drip irrigation once in every 2 days is the most preferred method of irrigation as it ensures moisture retention to optimal levels.",
    harvesting:"Harvesting is done when the outer cover of the cobs start turning from green to white. Although hand harvesting is easy to do, in case of large areas of plantation, machine harvesting is better as it save manual labor."
  }]
  ,
[{
  id:"1",
  name:"Bannana",
    condition:"Banana grows at an altitude of 1200 meters from sea level in a warm and humid climate. 20⁰C- 35⁰C is the most favorable temperature range along with a high level of humidity for banana farming in India. The growth gets retarded below 20⁰C and above 35⁰C. They take longer time to mature in cooler climates while the growth and yield is reduced at lower humidity and temperature. An average annual rainfall of 1700 mm distributed evenly throughout the year favors good growth and satisfactory yield.",
    dis:"Panama Wilt, Mycosphaerella leaf spot, Bacterial wil",
    water:"For the entire life cycle of banana it needs 900-1200mm of water. This is generally met through rainfall and whatever extra is needed it is provided through irrigation. It is important to maintain the moisture level at optimum during all growth stages and also drain out the excess water from the root zone. This is important from the point of view of growth and productivity of banana tree. Irrigation is done once a week when the climate is cool and once in every 3 days under hot conditions. Drip irrigation, trench irrigation and flood are some of the common irrigation systems followed for cultivation of banana. Each of them have their own merits and demerits. However, the most economical and popular one is drip irrigation. This is because they ensure water being dispensed at the root zone",
    harvesting:"Banana cultivation in very profitable and viable agribusiness if planned well. The yield as per research is approximately 25 tonnes per acre. Sometimes the yield can be higher."
  }]
  ,
[{
  id:"2",
  name:"chilli",
    condition:"Chilli is a tropical and sub-tropical plant requiring a combination of warm, humid yet dry weather. During the growth stage it needs a warm and humid weather. However, a dry weather is suitable for fruit maturity. Temperature range of 20⁰-25⁰C is ideal for chilli growth. At 37⁰C or higher the fruit development is affected. Similarly in case of heavy rain the plant defoliates and starts rotting. However, in case of low moisture conditions during fruiting period the bud does not develop properly. Hence, the flower and fruit may drop off. In other words, a high temperature and relatively low humidity level would lead to deflowering and fruits if developed would be very small.",
    dis:"Chillies suffer from a variety of diseases like anthracnose, fruit rot, dieback, bacterial wilt, mosaic diseases, powdery mildew, leaf spot, etc. The best way to check the development and spread is to use resistant strains for sowing and conduct regular manual inspection. The affected plants must be removed immediately as soon as the disease is detected. In addition, spraying Trichoderma and Pseudomonas species would help prevent disease spread.",
    water:"Chillies are crops that cannot withstand a lot of water. Heavy rainfall and stagnated water would result in rotting of the plants. In case of irrigated crops, watering should be only when it is necessary. A frequent watering would result in shedding of flowers and a spurt of vegetative growth. The amount of water to be irrigated, the number of irrigations and its frequency highly depends on the climatic conditions and the soil type. If the leaves start drooping during day time it is an indication of water requirement. Similarly, if the flowers seem weak or exhibit not enough vigor, irrigating the crop would help. Some farmers irrigate the field once the soil moisture content drops below 25%.",
    harvesting:"Chilli harvesting is done according to the intended use of chillies. For making chilli powders and dry chilli, the fruits are harvested when the chilli turns dark red in color. The green fruit is plucked for preparing chilli pickles. However, ripe fruits must be plucked at regular intervals. Retaining them in the plant for a longer period of time can cause color fading and wrinkles. Green chillies can be plucked 8-10 times while ripe ones are plucked 5-6 times."
  }]
  ,
[{
  id:"3",
    name:"tomato",
    condition:"Being a warm season crop, tomato crop requires an ideal temperature of 21⁰ to 23⁰C. Tomatoes are highly sensitive to climatic changes. For ideal growth and yield, tomatoes need a diverse set of climatic conditions at every stage of growth such as seed germination, flowering, fruiting, etc. Tomato farming needs a warm and cool climate with medium amount of sunlight. A high amount of humidity and frost cannot be tolerated. Similarly, both heavy rainfall and a prolonged dry spell affect the growth of tomato plants.",
    dis:"Tomatoes suffer from different diseases caused by fungus, virus as well as bacteria. Some of them include Fusarium wilt, powdery mildew, leaf blight, mold rot, mosaic virus and damping off.  One of the best ways of disease management is selection of resistant varieties. The soil must be solarized or partially sterilized to destroy the disease causing microorganisms. Partial sterilization can be done by either burning the crop debris or by treating the soil with Dithane M-45. Dipping the seeds in 2g carbendazim is also recommended. Tomato crop must be rotated with leguminous crops after one year of tomato cultivation. In addition to these, the fields must have efficient water drainage systems. At the time of watering, care must be taken to avoid wetting the leaves and flowers. Water must be dispensed only at the roots to avoid fungal contamination and spread. Heavily infected plants must be uprooted and destroyed immediately. Occasional spraying of crops with 200 ppm of Streptocycline also gives a good control over the disease.",
    water:"Tomatoes are sensitive to both excess water as well as very little water. A major challenge in tomato cultivation is maintain an even moisture supply. During summer it is necessary to irrigate the crop once a week while irrigating it once in every two weeks is sufficient. Care should be taken to prevent any drought period after a heavy watering dose. It may affect the crop produce. In addition, drought followed by an abrupt watering during the fruiting phase would cause cracking in tomatoes.",
    harvesting:"Tomatoes can be harvested within 2-3 months of plantation. Depending on the market demand, 8-10 harvesting of tomato is done on yearly basis. The average tomato crop yield per acre in India is about 10 tonnes although the yield varies from 15-20 tonnes per acre in case of irrigated crops."
  }]
  ,
[{
    id:"4",
    name:"Cotton",
    condition:"Cotton, a semi-xerophyte, is grown in tropical & sub tropical conditions. Aminimum temperature of 15oC is required for better germination at field conditions. The optimum temperature for vegetative growth is 21-27oC & it can tolerate temperature to the extent of 43oC but temperature below 21oC is detrimental to the crop. Warm days of cool nights with large diurnal variations during the period of fruiting are conducive to good boll & fibre development",
    dis:"Leaf spot,Black root rot,Anthracnose,Areolate mildew,Fusarium wilt",
    water:"Depending upon the climate & crop-growing period, cotton needs 700-1,200 mm water to meet its maximum water requirement. The water requirement is low during first 60-70 days after sowing & highest during flowering & boll development.",
    harvesting:"Cotton is fully mature and ready for harvesting approximately 160 days after being planted. Once the bolls have burst open, the farmers can prepare the cotton plants for harvesting. This occurs in mid-July for the southern parts of Texas, and in early September for the northern parts of the cotton belt."
  }],
[{
    id:"5",
      name:"Potato",
      condition:"Being a cool season crop, the best place for potato farming are places with a cool climate, fertile soil and good moisture. Temperature, light, soil type, moisture content and nutrients influence the growth of potatoes in a great way. Tubers stop developing at a temperature above 30⁰C. This is because, as the temperature increases, the rate of respiration increases. In the process, carbohydrates produced through photosynthesis get consumed instead of getting stored in the tubers. Thus, tuber formation gets affected at higher temperature. Soil temperature of 17-19⁰C is ideal for potato tuber formation. Bright sunshine during day and cool nights are optimal for potato growing.",
      dis:"Epilachna Beetle , Cutworms,Aphids,White Grub,Potato Tuber Moth"
      ,
      water:"For potato, the daily crop water requirement is 4-5mm a day. For a better yield, irrigation must be done immediately after sowing. This allows for proper seed germination. The irrigation frequency varies with the place. For example, it is irrigated once a week in Punjab since the tuberization period coincides with the cool weather and thus low evaporative rate in the place. On an average, they need 4-5 mm water per day- just enough to maintain the moisture level, temperature and thus promote uniform tuber formation. The last lot of irrigation is done about fifteen days prior to harvesting. This promotes hardening of tuber skin before harvesting potatoes.",
      harvesting:"The harvesting time of potato is usually dependent on the weather and market prospects. In case of high demand in the market, harvesting is done slightly early. Irrigation of the plants is stopped at least a week before harvesting potatoes. Harvesting is done once the soil is completely dry. Some farmers kill the vines using Gramoxone Extra. This ensures a good skin set for the tubers. The treatment is done a week before harvesting. In order to avoid bruising or any other damage to the tubers, they are carefully dug using potato digger manually. There is no universal time for harvesting potatoes. The schedule for harvest according to the place of cultivation is as below:"
  }]
    ,
[{
      id:"6",
      name:"Chickpeas",
      condition:"Climate Required for Chickpea Farming:- Chickpea crop grows well under good moisture conditions with ideal temperatures between 24ºC and 30ºC . Chickpeas are cultivated under both irrigated and rainfed conditions. Basically this crop is winter season crop.",
      dis:"Some diseases are persistent problems in chickpea production in wide geographical areas, notably, ascochyta blight, fusarium wilt, dry root rot, stunt [caused by bean (pea) leaf roll virus], botrytis gray mold, collar rot, black root rot, phytophthora root rot, and pythium root and seed rot",
      water:"Water deeply once a week. Never allow the soil to dry out totally or you'll drastically reduce pea production. The critical time for watering is when the plants are blossoming and producing pods. When pods are maturing in hot weather, water daily if needed to maintain pod quality.", 
      harvesting:"the major kabuli chickpea growing state of Madhya Pradesh saw continuous rains from mid-October into the first week of November, resulting in planting delays of 20 to 25 days. This will see the bulk of the harvest take place in the second half of March, whereas normally it would begin in late February."
  }]
  ,
[{
      id:"7",
      name:"onion",
      condition:"Although it is a temperate crop, onion cultivation can be possible under sub-tropical, temperate or tropical climate. A mild, gentle weather that is not too rainy, too cold or too hot is ideal for onion growing. However, it can withstand extreme weather conditions at younger stage. Short day onions that need 10-12 hours of day length are grown in Although it is a temperate crop, onion cultivation can be possible under sub-tropical, temperate or tropical climate. A mild, gentle weather that is not too rainy, too cold or too hot is ideal for onion growing. However, it can withstand extreme weather conditions at younger stage. Short day onions that need 10-12 hours of day length are grown in plains while long day onions requiring 13-14 hours of day length are grown in the hilly areas",
      dis:"Damping off,Purple blotch,Stemphylium leaf blight,Colletotrichum blight/anthracnose/twister disease,Fusarium basal rot/basal rot,White rot (Sclerotial rot),Pink root rot,Black mould",
      water:"Onion crop irrigation depends on the season of planting, type of soil, irrigation method and age of the crop. Generally, irrigation is done at the time of seedling plantation, during transplantation period, 3 days after transplantation and subsequently at regular intervals depending on the moisture content in soil. The last irrigation is done 10 days before harvesting onion. Being a shallow-rooted crop, onions need small amounts of irrigation at regular intervals. This helps maintain optimal soil temperature and moisture for growth and bulb development. Excess irrigation followed by dry spell would result in bolter formation and splitting of outer scales. Modern irrigation techniques like drip and sprinkler irrigation are used as they help prevent excess water loss. These techniques help maintain the ideal moisture level in soil. In addition, dispensing water through drip or sprinkler emitter would ensure water at the root of the plant. It prevents water seepage into the soil and thus water loss to a great extent.",
      harvesting:"Onion harvesting is done when the still green tops start drooping. The plants are gently pulled out from the soil. However, 10-15 days before harvesting irrigation of the field is stopped. The crop is also sprayed with 1000 ppm carbendazim 30 days before harvest. This helps increase the shelf-life of the crop. The bulbs are cleaned and dried in shade for 4 days."
  }]
    ,
[{
      id:"8",
      name:"Rice",
      condition:"Rice is a tropical climate crop that can grow from sea level to an altitude of 3000 meters. Paddy cultivation can also be done in temperate and sub-tropical climate under humid conditions. A high temperature, humidity and sufficient rainfall with irrigation facilities are the primary requirements of paddy cultivation. It also needs bright sunshine with temperature ranging between 20 and 40⁰C. It can tolerate temperature upto 42⁰C.",
      dis:"Rice leaf blast, rice false smut, rice neck blast, rice sheath blight, rice bacterial stripe, and rice brown spot are common diseases during the growth of rice.",
      water:"Bund farming system is followed in case of rice cultivation wherein the fields are flooded continuously upto 7-10 days before harvesting. To produce a kilogram of rice the crop on an average needs about 1500 liters of water. In other words, rice needs a huge amount of water for cultivation. This continuous flooding practice is followed to ensure weed control and sufficient water supply.", 
      harvesting:"One of the essential factors in rice cultivation is in-time rice harvesting otherwise the grains would shed. Irrigation of the field is completely stopped about a week before harvesting. This dehydration process helps in grain ripening. It also hastens maturity. In case of early and medium maturing varieties, harvesting should be carried out 25- 30 days after flowering. The late maturing varieties are harvested 40 days after flowering. They are generally harvested when the moisture content is about 25%. Post harvesting, drying is carried out gradually under shade."
  }]
    
] 
const [temp, settemp] = useState(null);

const croparray=[
  {
    img:"./images/corn.jpg",
       desc:"Know more",
       name:"Maize",
       id:"0"
   },
   {
    img:"./images/bannana.jpg",
       desc:"Know more",
       name:"Bannana",
       id:"1"
   },
   {
    img:"./images/chilli.jfif",
       desc:"Know more",
       name:"Chilli",
       id:"2"
   },
   {
    img:"./images/tomato.jfif",
       desc:"Know more",
       id:"3",
       name:"Tomato",
       
   }
   ,
    {
     img:"./images/cotton.jpg",
        desc:"Know more",
        name:"Cotton",
        id:"4"
    },
    {
     img:"./images/allu.jfif",
        desc:"Know more",
        name:"Potato",
        id:"5"
    },
    {
     img:"./images/kabuli-chnna.jpg",
        desc:"Know more",
        name:"Chickpeas",
        id:"6"
    },
    {
     img:"./images/onion.jfif",
        desc:"Know more",
        name:"Onion",
        id:"7"
    },
    {
     img:"./images/rice.jfif",
        desc:"Know more",
        name:"Rice",
        id:"8"
    },
     

]
console.log(temp);
 
const handleCallback=(value)=>{
  settemp(value);
}
 

  return(
  <>
    <div className={` cropitem row`}>
        <div className='' style={{width:'20%',}}>        
        <div id='list-example' className="list-group ScrollStyle">
               {croparray.map((element)=>{
                 return  <button  className=" cropitem list-group-item list-group-item-action" href="#list-item-1"><Cropname  parentCallback = {handleCallback} title={element.name} value={element.id}  desc={element.desc} img={element.img} /></button>
                })}
            </div>
        </div> 
      <div className=' container' style={{width:'80%',}}> 
        <div id='list-example' className=" mb-5 list-group Stylescroll">
          { array[0].map((data)=>{
            if( temp===null) 
            return <Null/>
          })}
          { array[0].map((data)=>{
            if(data.id===temp) 
            return  <Cropdetail  tittle={data.name} dis={data.dis} water={data.water} harvesting={data.harvesting} condition={data.condition}/>
            
          })}
          { array[1].map((data)=>{
            if(data.id===temp) 
            return  <Cropdetail  tittle={data.name} dis={data.dis} water={data.water} harvesting={data.harvesting} condition={data.condition}/>
            
          })}
          { array[2].map((data)=>{
            if(data.id===temp)
            return  <Cropdetail  tittle={data.name} dis={data.dis} water={data.water} harvesting={data.harvesting} condition={data.condition}/>
            
          })}
          { array[3].map((data)=>{
            if(data.id===temp) 
            return  <Cropdetail  tittle={data.name} dis={data.dis} water={data.water} harvesting={data.harvesting} condition={data.condition}/>
            
          })}
          { array[4].map((data)=>{
            if(data.id===temp) 
            return  <Cropdetail  tittle={data.name} dis={data.dis} water={data.water} harvesting={data.harvesting} condition={data.condition}/>
            
          })}
          { array[4].map((data)=>{
            if(data.id===temp) 
            return  <Cropdetail  tittle={data.name} dis={data.dis} water={data.water} harvesting={data.harvesting} condition={data.condition}/>
            
          })}
          { array[5].map((data)=>{
            if(data.id===temp) 
            return  <Cropdetail  tittle={data.name} dis={data.dis} water={data.water} harvesting={data.harvesting} condition={data.condition}/>
            
          })}
          { array[6].map((data)=>{
            if(data.id===temp) 
            return  <Cropdetail  tittle={data.name} dis={data.dis} water={data.water} harvesting={data.harvesting} condition={data.condition}/>
            
          })}
          { array[7].map((data)=>{
            if(data.id===temp) 
            return  <Cropdetail  tittle={data.name} dis={data.dis} water={data.water} harvesting={data.harvesting} condition={data.condition}/>
            
          })}
          { array[8].map((data)=>{
            if(data.id===temp) 
            return  <Cropdetail  tittle={data.name} dis={data.dis} water={data.water} harvesting={data.harvesting} condition={data.condition}/>
            
          })}

        </div>
      </div>
    </div>
 
  </>
  )
}


 

 