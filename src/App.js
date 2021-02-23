//imports
import Animal from './Animal'
import Human from './Human'

function App() {
  return (
    <div>
      <h1>Title</h1>
      <Animal animal="dog" name="Rocco"/>
      <Animal animal="cat"/>
      <Animal animal="tiger"/>
      <Animal animal="eagle"/>
      <Animal animal="lion"/>
      <Human name="Swatz" location="Sea-Town"/>
    </div>
  );
}

export default App;
