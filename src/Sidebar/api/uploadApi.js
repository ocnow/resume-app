async function uploadDoc(files,BUSP) {

    console.log("got the files:"+files[0]);
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('BUSP', BUSP);

    //const boundary = Math.random().toString().substr(2);

    console.log("sending thje filee.....");
    const response = fetch(`http://localhost:8080/upload`, {
        method: 'POST',
        body: formData,
        // headers: {
        //     'Content-Type': `multipart/form-data;  boundary=${boundary}`
        // }
    });

    const data = (await response).json();
    return data;
}

async function search(keyword,BC) {
    //const formData = new FormData();
    //formData.append("keyword", keyword);
    console.log(`keyword got ${keyword}`)
    const body1 = {
        'keyword' : keyword,
        'busp': BC,
    }

    const response = await fetch("http://localhost:8080/search", {
        method: 'POST',
        body: JSON.stringify(body1),
        headers:{
            'Content-Type': 'application/json'
        }
    });
    const data = await response.text();
    console.log(data);
    return data;
}
export { uploadDoc, search }