// Buscar os Links salvos
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key);

    let linksSaves = JSON.parse(myLinks) || [];
    
    return linksSaves;
}

// Salvar um link no storage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    const hasLink = linksStored.some( Link => Link.id === newLink.id)

    if(hasLink){
        console.log("ESSE LINK JÁ EXISTE NA SUA LISTA");
        return;
    }

    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log("LINK SALVO COM SUCESSO!");
}

// Deletar algum link Salvo
export function deleteLink(Links, id){

    let myLinks = Links.filter( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks) );
    console.log("LINK DELETADO COM SUCESSO!");

    return myLinks;
    
}