import { Photo } from '../types/Photo';
import { storage } from '../libs/firebase'
import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage'
import { v4 as createId } from 'uuid';

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

export const insert = async (file: File) => {
    if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
        let randomName = createId();
        let newFile = ref(storage,`Images/${randomName}`);

        let upload = await uploadBytes(newFile, file);
        let photoUrl = await getDownloadURL(upload.ref);
        
        return {name: upload.ref.name, url: photoUrl} as Photo;

    }else {
        return new Error('Tipo de arquivo não permitido')
    }
}