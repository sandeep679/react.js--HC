import './App.css'
import Card from './components/Card'



function App() {

 let obj={
  name:"hitesh",
  age:21,
 }

 let arr=[3,6,7,3]

  return (
    <>

    <h1 className='bg-green-400 text-yellow-400'>Tailwind class</h1>
    
    
    <Card username ="chaiaurcode" someobj={obj}  one={arr} btn="visit chai"></Card>         {/* props ka variable ka name same hona chaiye for passing props*/ }                       
    
    
    <Card username="samay"  btn="visit samay"></Card>

   
    </>
  )
}

export default App
