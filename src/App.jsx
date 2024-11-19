import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Developer } from "./components/Developer/Developer";
import { About } from "./components/About/About";

function App() {
  return(
    <div className={styles.App}>
      <Navbar />
      <Developer />
      <About />
    </div>
  )
}

export default App