import "./style.scss"
import Product from "./domain/Product"
import Client from "./domain/Client"
import Order from "./domain/Order"

let product = new Product("Product1",["image/1.jpg"],{amount: 10.00, currency: "MDL"})
let client = new Client("c1","Client",true)
let order = new Order("o1",product,2,{amount: 20.00, currency: "MDL"},client)

console.log(order)

// Respuns:
// Daca vorbim despre Interface si Class atunci Interface ar fi mai mult asemanator cu o Class-a de tip Abstract, adica Class-a de la care nu este posibil sa obtii instante doar ai dreptul sa te mostenesti si-n acelasi tip sa executi toate metodele care sunt declarate ca abstracte. Insa diferenta consta in:
// 1. Inteface-ul reprezinta o tipizare a metodelor si proprietatilor, ele sunt declarate dar niciodata asignate si executate,
// 2. Inteface-ul nu poate crea instante cu ajutorul lui "new" la fel ca classa abstracta,
// 3. In timpul transpilarii, Interface-ul se sterge in versiune de JS,
// 4. Si ce-a mai mare deosebire consta in faptul ca poti sa te mostenesti de la o singura classa, dar ai posibilitatea sa te mostenesti de la mai multe Interface cu ajutorul cuvintului cheie "implements" apoi enumeri Interface-urile.