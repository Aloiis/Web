interface ButtonProps {
  text?: string
}

function Button(props: ButtonProps){
  
  return <button className="bg-orange-500 px-4 h-10 rounded hover:bg-orange-900 transition-colors">{props.text}</button>
}


function App() {

  return (
    <div className="flex gap-2">
      <Button text="Enviar" />
      <Button text="OK" />
    </div> 
  )
}

export default App
