// let persona = 'Miguel'

// * Typescript es fuertemente tipado es decir que identifica los diferentes tipos de variables
// persona = 2 // ! En este caso genera un error ya que se le intenta dar un valor 'number' cuando fue declarado como String (Esto lo identifica de forma automática)

// const objeto = {
//   name: 'pepe',
//   age: 30
// }

// * Ts infiere en el código es decir que es capas de observar como es el objeto y decir cual es su forma indicando cual es su tipo, valor y si existe
// objeto.name
// objeto.age

// ? se puede declarar de forma manual el tipo de la variable (hacer la anotación) pero no es necesario hacerlo ya que ts lo hace de forma automática (esto es también por la inferencia de datos)

//TODO: haciendo la anotación
// const n: number = 2
// const s: string = 'letras'
// const nl: null = null
// const u: undefined = undefined

//TODO: por inferencia de datos
// const numero = 2
// const letras = 'letras'
// const nulo = null
// const indefinido = undefined

// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

//? Que pasa cuando ts no sabe inferir un tipo
// let a // no se establece cual es el tipo de forma automática lo infiere como any

// let b: any = 'hola' // * al establecer un valor como any no solo se le dice a ts que sera de cualquiertipo sino que realmente se le dice es que IGNORE el tipado

//TODO: Funciones
// cuando una función recibe parámetros (sin contexto) ts no infiere en ellos asi que de forma automática su tipo es ANY
// function saludar(name) {
//   console.log(`Hola ${name}`)
// }

// saludar('pepe')
// saludar(2)

// lo recomendado es hacer la anotación para evitar errores o que reciba cualquier tipo como el anterior
// function saludar1(name: string) {
//   name.toLowerCase()
//   console.log(`Hola ${name}`)
// }

// saludar1('pepe')
// saludar1(2) //! genera un error ya que al estar anotado como un string no recibirá un numero

//TODO: Funciones / objeto como parámetro
// function saludar2({ name, age }) {
//   console.log(`Hola ${name}, tienes ${age} años`)
// }

// saludar2({ name: 12, age: 'pepe' })
// saludar2({ name: 'pepe', age: 12 })

//TODO: Formas de tipar
//* 1º
// function saludar3({ name, age }: { name: string; age: number }) {
//   console.log(`Hola ${name}, tienes ${age} años`)
// }

// saludar3({ name: 12, age: 'pepe' })
// saludar3({ name: 'pepe', age: 12 })

//* 2º
// function saludar4(persona: { name: string; age: number }) {
//   const { name, age } = persona
//   console.log(`Hola ${name}, tienes ${age} años`)
// }

// saludar4({ name: 12, age: 'pepe' })
// saludar4({ name: 'pepe', age: 12 })

//! no solo se puede anotar los tipos de los parámetros también se le puede hacer a lo que devuelve

//TODO: Cuando ts infiere
// function saludar5({ name, age }: { name: string; age: number }) {
//   console.log(`Hola ${name}, tienes ${age} años`)
//   return age //* ts infiere que es un number
// }

// let username: string
// username = saludar5({ name: 'ales', age: 24 })

// cuando se hace la anotación
// function saludar6({ name, age }: { name: string; age: number }): number {
//   console.log(`Hola ${name}, tienes ${age} años`)
//   return age
// }

// let username1: string
// username1 = saludar6({ name: 'ales', age: 24 })

//TODO: Funciones como parámetros... (callbacks)

// const sayHiFromFunction = (fn: Function) => { // esta anotación es como si fuera el any de las funciones
// const sayHiFromFunction = (fn: (name: string) => void) => {
//   // void es cuando una función no devuelve nada, cuando no tiene un return
//   return fn('Ales')
// }

// sayHiFromFunction((name: string) => {
//   console.log(`Hola ${name}`)
// })

//TODO: Tipar con arrow functions
//* 1º

// const sumar = (a: number, b: number): number => {
//   // tipar el resultado no es necesario mientras ts pueda inferir de forma automática
//   return a + b
// }

//* 2º

// const restar: (a: number, b: number) => number = (a, b) => {
//   return a - b
// }

// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

// function throwError(message: string): never {
//   // never son para funciones que nunca van a devolver algo
//   throw new Error(message)
// }

//TODO: Funciones que ts puede inferir por el contexto
// const avengers = ['Spider', 'Hulk', 'Avengers']

// avengers.forEach(function (avenger) {
//   console.log(avenger.toUpperCase())
// })

//TODO: Objetos
//* los objetos tienen inferencia de datos

// let hero = {
//   name: 'Thor',
//   age: 1500
// }

// hero.name
// hero.power

// function createHero(name: string, age: number) {
//   return { name, age }
// }

// const thor = createHero('Thor', 1500) // no sabemos si esta tipado igual que hero

// //TODO: Type Alias
// type Hero = {
//   /**
//    * Name for the hero
//    */
//   name: string
//   /**
//    * Age for the hero
//    */
//   age: number
// }

// let hero2: Hero = {
//   name: 'Iron-man',
//   age: 32
// }

// function createHero1(hero: Hero): Hero {
//   const { name, age } = hero
//   return { name, age }
// }

// const Hulk = createHero1({ name: 'Banner', age: 45 })

//TODO: Opcional properties
// type Hero2 = {
//   readonly id?: string //* ? -> optional chaining
//   name: string
//   age: number
//   isActive?: boolean
// }

// let hero3: Hero2 = {
//   name: 'Iron-man',
//   age: 32
// }

// function createHero2(hero: Hero2): Hero2 {
//   const { name, age } = hero
//   return {
//     id: crypto.randomUUID(), //* crypto.randomUUID() es nativo de la plataforma web
//     name,
//     age,
//     isActive: true
//   }
// }

// const Hulk2 = createHero2({ name: 'Banner', age: 45 })
// console.log(Hulk2.isActive) // --> true

// Hulk2.id = '213123211231' // En el tipeo al ser readonly solo lo deja como lectura pero no lo deja inmutable

// const Hulk3 = Object.freeze(createHero2({ name: 'Banner', age: 45 }))
// console.log(Hulk2.isActive) // --> true

// Hulk3.age = 213123211231 // Al usar un método js (Object.freeze) al momento de la ejecución ahora si se vuelve inmutable

//TODO: Template union types
//* 1º

// type HeroId = `${string}-${string}-${string}-${string}-${string}`

// type Hero3 = {
//   readonly id?: HeroId
//   name: string
//   age: number
//   isActive?: boolean
// }

// let hero4: Hero2 = {
//   name: 'Iron-man',
//   age: 32
// }

// function createHero3(hero: Hero3): Hero3 {
//   const { name, age } = hero
//   return {
//     id: '2133',
//     name,
//     age,
//     isActive: true
//   }
// }

// function createHero4(hero: Hero3): Hero3 {
//   const { name, age } = hero
//   return {
//     id: '123-123-123-123-123',
//     name,
//     age,
//     isActive: true
//   }
// }

// function createHero5(hero: Hero3): Hero3 {
//   const { name, age } = hero
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true
//   }
// }

//* 2º

// const color = '0033ff'
// const color2 = '#0033ff'
// // A futuro se pueden olvidar cual de los dos se están usando y esta seria la solución ↓

// type HexadecimalColor = `#${string}` // se establece que este tipo siempre ira con #

// const color3: HexadecimalColor = '0033ff'
// const color4: HexadecimalColor = '#0033ff'

//TODO: Union Types
// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' //!  | => es un tipo de union simbolizando ó (OR)

// //* Ejemplo del uso de → |
// let ann: number | string
// ann = 21
// ann = 'Hola'
// ann = true

// let enn: 25 | 'String especifico'
// enn = 25
// enn = 'String especifico'
// enn = 22
// enn = 'String diferente'

// type Hero = {
//   readonly id?: HeroId
//   name: string
//   age: number
//   isActive?: boolean,
//   powerScale?: HeroPowerScale
// }

// let hero: Hero = {
//   name: 'thor',
//   age: 1500
// }

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true
//   }
// }

// const ironMan = createHero({ name: 'Iron-man', age: 35 })
// ironMan.powerScale = 'galactic'

//TODO: Intersections types
// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' //!  | => es un tipo de union simbolizando ó (OR)
// type HeroBasicInfo = {
//   name: string
//   age: number
// }

// type HeroProperties = {
//   readonly id?: HeroId
//   isActive?: boolean,
//   powerScale?: HeroPowerScale
// }

// type Hero = HeroBasicInfo & HeroProperties //! & => AND se unen las propiedades

// let hero: Hero = {
//   name: 'thor',
//   age: 1500
// }

// function createHero(input: HeroBasicInfo): Hero {
//   const { name, age } = hero

//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true
//   }
// }

// const ironMan = createHero({ name: 'Iron-man', age: 35 })
// ironMan.powerScale = 'galactic'

//TODO: Type indexing

// type HeroProperties ={
//   isActive: boolean
//   address: {
//     planet: string
//     city: string
//   }
// }

// const addressHero: HeroProperties['address'] = {
//   planet: 'Earth',
//   city: 'Madrid'
// }

//TODO: Type from value

// const address = {
//   planet: 'Earth',
//   city: 'Madrid'
// }

// type Address = typeof address

// //! el typeof espera que su valor(objeto) se establezca igual que su "padre" es decir que tenga todas las propiedades, permitiendo la creación de nuevos tipos con el código que ya estaba escrito 
// const addressTwitch: Address = {
//   planet: 'Mars',
//   city: 'Twitch'
// }

//TODO: Type from function return

// function createAddress() {
//   return {
//     planet: 'Tierra',
//     city: 'Barcelona'
//   }
// }

// type Address = ReturnType<typeof createAddress> // Recupera/extrae los typos que retorna la función

//TODO: Arrays
//* never[]
// const languages = [] // que siempre esta vació declarándolo de forma automática como never[]
// languages.push('JavaScript')

//* type[]
// Un types
// const languages: string[] = []
// languages.push('JavaScript')
// languages.push('Java')
// languages.push('Python')
// languages.push(2) // con la anotación establecida como string no va a recibir números

// Varios types
// const languages: (string | number)[] = []
// languages.push('JavaScript')
// languages.push('Java')
// languages.push('Python')
// languages.push(2)

//* Array<type>
// Un types
// const languages: Array<string> = []
// languages.push('JavaScript')
// languages.push('Java')
// languages.push('Python')
// languages.push(2)

// Varios types
// const languages: Array<string | number> = []
// languages.push('JavaScript')
// languages.push('Java')
// languages.push('Python')
// languages.push(2)

//* Otros ejemplos
//1º
type HeroId = `${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' //!  | => es un tipo de union simbolizando ó (OR)
type HeroBasicInfo = {
  name: string
  age: number
}

const herosWithBasicInfo: HeroBasicInfo[] = []

//2º (tres en raya)
/*
[
  ['X', 'O', 'X'], // string[]
  ['O', 'X', 'O'], // string[]
  ['X', '', 'O'] // string[]
]
*/

// const gameBoard: string[][] = [
//   ['X', 'O', 'X'],
//   ['O', 'X', 'O'],
//   ['X', '', 'O']
// ]

// gameBoard[0][1] = '35125153613561' //! recibe cualquier dato se puede solucionar con CellValue ↓

// -*-*-*-*-*-*-*-*-*

// type CellValue = 'X' | 'O' | ''
// const gameBoard: CellValue[][] = [
//   ['X', 'O', 'X', 'O'], //! No esta establecido de que sea un 3x3
//   ['O', 'X', 'O'],
//   ['X', '', 'O']
// ]

// gameBoard[0][1] = '35125153613561'
// gameBoard[0][1] = 'X'

// -*-*-*-*-*-*-*-*-*

// type CellValue = 'X' | 'O' | ''
// type GameBoard = [ //! el error se soluciona con una tuple
//   [CellValue, CellValue, CellValue],
//   [CellValue, CellValue, CellValue],
//   [CellValue, CellValue, CellValue]
// ]

// const gameBoard: GameBoard = [
//   ['X', 'O', 'X', 'O'],
//   ['O', 'X', 'O'],
//   ['X', '', 'O']
// ]

// gameBoard[0][1] = '35125153613561'
// gameBoard[0][1] = 'X'

//* Ejemplos de tuples

// 1º
// con react la creación de un estado es:
// const [hero, setHero] = useState('thor')

// si se quiere tipar se haría asi ↓
// type State = [string, (newName: string) => void]
// const [hero, setHero]: State = useState('thor')

// 1º
// const RGB = [255, 255, 0] //0-255


// para tipar
// type RGBType = [number, number, number]

// const rgb: RGBType = [2, 5, 2]