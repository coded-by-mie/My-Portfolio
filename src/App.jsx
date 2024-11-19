import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Developer } from "./components/Developer/Developer";

function App() {
  return(
    <div className={styles.App}>
      <Navbar />
      <Developer />
    </div>
  )
}

export default App