import './App.css';
import BoxColor from './components/BoxColor';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import CreditCard from './components/CreditCard';

function App() {
  return (
    <div className="App">
      {/* Iteration 1 */}
      <IdCard
        firstName="John"
        lastName="Doe"
        gender="Male"
        height="1.78m"
        birth={new Date('1992-14-07')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        firstName="Obrien"
        lastName="Dolores"
        gender="Female"
        height="1.72m"
        birth={new Date('1988-11-05')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      {/* Iteration 2 */}
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      {/* Iteration 3 */}
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      {/* Iteration 4 */}
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      {/* Iteration 5 */}
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />

      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
    </div>
  );
}

export default App;
