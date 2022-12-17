import './App.css'
import PProduct from './PProduct/PProduct'
// import Header from './header/Header'
// import Article from './Article/Article'
// import Product from './Prodaoct/Product'
import User from './users/User'
function App(){
  const allProducts =[
    {id:'1',price:'295',count:'12',model:'somsungA52',caption:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nesciuntperspiciatis voluptas quod? Obcaecati deserunt officiis ratione asperioresnulla minus. Quam error eligendi cupiditate necessitatibus nobis iure officiis aspernatur quae?'},
    {id:'2',image:'images/13promax.PNG',price:'380',count:'1',model:'iphon13promax',caption:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nesciuntperspiciatis voluptas quod? Obcaecati deserunt officiis ratione asperioresnulla minus. Quam error eligendi cupiditate necessitatibus nobis iure officiis aspernatur quae?'},
    {id:'3',image:'images/Xiaomi13pro.PNG',price:'200',count:'10',model:'Xiaomi13pro',caption:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nesciuntperspiciatis voluptas quod? Obcaecati deserunt officiis ratione asperioresnulla minus. Quam error eligendi cupiditate necessitatibus nobis iure officiis aspernatur quae?'},
    {id:'4',image:'images/a52.PNG',price:'295',count:'15',model:'somsungA52',caption:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nesciuntperspiciatis voluptas quod? Obcaecati deserunt officiis ratione asperioresnulla minus. Quam error eligendi cupiditate necessitatibus nobis iure officiis aspernatur quae?'},
    {id:'5',image:'images/13promax.PNG',price:'380',count:'16',model:'iphon13promax',caption:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nesciuntperspiciatis voluptas quod? Obcaecati deserunt officiis ratione asperioresnulla minus. Quam error eligendi cupiditate necessitatibus nobis iure officiis aspernatur quae?'},
    {id:'6',price:'200',count:'17',model:'Xiaomi13pro',caption:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nesciuntperspiciatis voluptas quod? Obcaecati deserunt officiis ratione asperioresnulla minus. Quam error eligendi cupiditate necessitatibus nobis iure officiis aspernatur quae?'},
  ]
  return(
    <div>
                      <h1>phones</h1>

    <div className="container">

<PProduct  {...allProducts[0]}>
<button>off (40%)</button>

</PProduct>

<PProduct  {...allProducts[1]}>
  <button>off (10%)</button>
</PProduct>
     <PProduct {...allProducts[2]}>
<h2>off (25%)</h2>
     </PProduct>
     <PProduct {...allProducts[3]}/>
<PProduct  {...allProducts[4]}/>
     <PProduct  {...allProducts[5]}/>

</div>
</div>

  )
}
export default App
//<Modal header={Allmodal[0].header}/>

// <PProduct image={<img src="images/a52.PNG" alt="phone" />}  price={30000000} count={12} model="somsungA52" caption="Lorem ipsum dolor sit,"/>
// <PProduct image={<img src="images/13promax.PNG" alt="phone" />} price={1000000000} count={5} model="iphon13promax" caption="Lorem ipsum d" />
//      <PProduct image={<img src="images/Xiaomi13pro.PNG" alt="phone" />} price={250000000} count={31} model="Xiaomi13pro" caption="Lorem ipsum " />
//      <PProduct image={<img src="images/a52.PNG" alt="phone" />} price={300000000} count={12} model="somsungA52" caption="Lorem ipsum dolo" />
// <PProduct image={<img src="images/13promax.PNG" alt="phone" />} price={1000000000} count={5} model="iphon13promax" caption="Lorem ipsum dol" />
//      <PProduct image={<img src="images/Xiaomi13pro.PNG" alt="phone" />} price={250000000} count={31} model="Xiaomi13pro" caption="Lorem ip" />
