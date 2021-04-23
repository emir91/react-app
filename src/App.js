const labelText = 'First name';
const style = {
  backgroundColor: 'blue',
  color: 'white'
}

const App = () =>  {
  return (
    <div>
      <div>
        <label htmlFor="name" className="label">{labelText}</label>
        <input type="text" id="name"/>
        <button style={style}>Submit</button>
      </div>
    </div>
  );
}

export default App;
