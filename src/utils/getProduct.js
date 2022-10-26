import getHash from "../utils/getHash"
import returnItem from "../components/item"
import entradas from "../products/entradas";
import ensaladas from "../products/ensaladas";
import carnesPescadosYPicadas from "../products/carnesPescadosYPicadas";
import platosTipicos from "../products/platosTipicos"
import pastasYRaviolis from "../products/pastasYRaviolis"
import pizzasYHamburguesas from "../products/pizzasYHamburguesas"
import menuInfantil from "../products/menuInfantil"
import postres from "../products/postres"
import bebidasCalientes from "../products/bebidasCalientes"
let title = ""
const data = ()=>{
    let hash = getHash()
    if(hash == "menu-selected1"){
        title = "Pizzas"
        return entradas
    }else if(hash == "menu-selected2"){
        title = "Hamburguesas"
        return ensaladas
    }else if(hash == "menu-selected3"){
        title = "Adiciones"
        return carnesPescadosYPicadas
    }else if(hash == "menu-selected4"){
        title = "Bebidas"
        return platosTipicos
    }else if(hash == "menu-selected5"){
        title = "Pastas y Raviolis"
        return pastasYRaviolis
    }else if(hash == "menu-selected6"){
        title = "Pizzas y Hamburguesas"
        return pizzasYHamburguesas
    }else if(hash == "menu-selected7"){
        title = "Menú Infantil"
        return menuInfantil
    }else if(hash == "menu-selected8"){
        title = "Postres"
        return postres
    }
}
const menu = async ()=>{
        const info = await data()
        return `<div class="menu-selected" id="${getHash()+"*"}"> 
                <div class="item-container">
                <div class="close-icon"><a href="/#specialty"><img rel="icon" src="https://icon-library.com/images/svg-close-icon/svg-close-icon-4.jpg" width="20px"></a></div>
        <div>
        <h2>${title}</h2>
        <div>
        ${info.map(item =>returnItem(item))}
        </div>
        </div>
        </div>
        </div>`
}
export default menu;