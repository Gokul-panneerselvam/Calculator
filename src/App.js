
import './App.css';
import Calculator from './components/calculator';
import Display from './components/display';
import ButtonBox from './components/buttonbox';
import Button from './components/button';
import CalcProviver from './context/calcontext';
 
const btnValues =[
  ["C","+-","%","/"],
  [7,8,9,"x"],
  [4,5,6,"-"],
  [1,2,3,"+"],
  [0,".","="]
];


function App() {
  return (
    <CalcProviver>
      <Calculator>
        <p className="appname">Calculator</p>
        <Display/>
        <ButtonBox>
          {btnValues.flat().map((btn , i)=>(
            <Button
              value ={btn} 
              key ={i}
              />
          ))}

        </ButtonBox>
      </Calculator>
    </CalcProviver>
  );
}

export default App;
