/* importar los estilos y el componente InfoCard */
import { InfoCard } from "./components/InfoCard"
import { UserCard } from "./components/UserCard"
import { BooksGil } from "./components/BooksGil"
import "./App.css"


export function App () {
  return (
    <div>
    <h1>App</h1>
    <InfoCard />
    <UserCard 
    image="https://rickandmortyapi.com/api/character/avatar/508.jpeg" 
    userName="Tedy Bear"
    />

     <UserCard 
    image="https://rickandmortyapi.com/api/character/avatar/121.jpeg" 
    userName="Eyehole Man"
    />

     <UserCard 
    image="https://rickandmortyapi.com/api/character/avatar/784.jpeg" 
    userName="Memory Rick"
    />

     <UserCard 
    image="https://rickandmortyapi.com/api/character/avatar/1.jpeg" 
    userName="Rick Sanchéz"
    />

    <BooksGil
    libro="https://b2clibrerianacional.vtexassets.com/arquivos/ids/354091-1200-auto?v=638949449213770000&width=1200&height=auto&aspect=true"
    nombre="Anatomía del poder ilegal"
    descri="Este libro es el resultado de más de una década de entrevistas, viajes, reuniones, conferencias, intercambios intelectuales, profesionales y personales con cientos de latinoamericanos que viven preocupados por el aumento de las violencias y la inseguridad."
     />

    <BooksGil
    libro="https://b2clibrerianacional.vtexassets.com/arquivos/ids/353943-1200-auto?v=638944992759970000&width=1200&height=auto&aspect=true"
    nombre="El círculo de los días"
    descri="un extractor de sílex con un talento único, recorre la Gran Llanura en pleno calor estival para presenciar los rituales que señalan el comienzo de un nuevo año. Está allí para intercambiar sus piedras en las celebraciones del solsticio y encontrarse con Neen."
     /> 

    <BooksGil
    libro="https://b2clibrerianacional.vtexassets.com/arquivos/ids/354036-1200-auto?v=638948415731800000&width=1200&height=auto&aspect=true"
    nombre="Byung Chul Hand"
    descri="Simone Weil es, en palabras de Byung-Chul Han, la figura intelectual más brillante del siglo XX. En este ensayo breve y visionario, el filósofo surcoreano reinterpreta la obra de la filósofa francesa como una brújula ética y espiritual para nuestro tiempo. "
     />

     <BooksGil
    libro="https://b2clibrerianacional.vtexassets.com/arquivos/ids/354197-1200-auto?v=638951906045170000&width=1200&height=auto&aspect=true"
    nombre="Manojo de recuerdos"
    descri="Lo dicho en estas páginas no es producto de la ficción, sino de múltiples episodios de la trayectoria pública del doctor Jaime Castro, y de distintos momentos clave de la historia política del país, como la toma del Palacio de Justicia, la Asamblea Nacional Constituyente y su llegada a la Alcaldía de Bogotá."
     />

    </div>
  )
}