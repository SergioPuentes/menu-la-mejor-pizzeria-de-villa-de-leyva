const returnItem = (data)=>{
    if(data.price){
        return `<div class="item-info">
        <h3>${data.name}</h3>
        <p>${data.ingredients}</p>
        <span>$ ${data.price}</span>
    </div>`
    }
    else{
        return `<div class="item-info">
        <h3>${data.name}</h3>
        <p>${data.ingredients}</p>
    </div>`
    }

}
export default returnItem;