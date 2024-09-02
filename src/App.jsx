import { Environment, OrbitControls, ScrollControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import MacContainer from "./MacContainer"

const App = () => {
   
  

  return (
    <div className="w-full h-screen bg-zinc-900">
     <div className="absolute flex flex-col items-center text-white top-14 left-1/2 -translate-x-1/2 font-['arial']">
     <h1 className="masked text-5xl tracking-tighter font-[700]">Noman The Dev.</h1>
     <h5>Oh so pro !</h5>
     <p className="w-3/4 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quia commodi voluptas distin</p>
     </div>
   <Canvas camera={{fov:20 , position:[0,-1,120]}}>
    {/* <OrbitControls/> */}
    <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']}/>
    <ScrollControls>
       <MacContainer pages={3}/>
    </ScrollControls>
   </Canvas>
    </div>
  )
}

export default App
