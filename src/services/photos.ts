import { Photo } from '../types/Photo';
import { storage } from '../libs/firebase'
import { ref, listAll, getDownloadURL } from 'firebase/storage'


export const getAll = async () => {
    let list: Photo[] = [];

    const imagesFolder = ref(storage,'Images'); /* Cria referencia da pasta */
    const photoList = await listAll(imagesFolder); /* Lista todos os arquivos da pasta */

    for(let i in photoList.items) {
        let photoUrl = await getDownloadURL(photoList.items[i]); /* Gera todos as URLS de download para o Firebase*/

        /* Monta o Array */
        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        })
    }
    console.log(list)

    /* Retorna o Array */
    return list;
}