async function uploadDoc(files) {
    const formData = new FormData();
    formData.append('files', files[0]);
    formData.append("BUSP", "HR");
    console.log("sending thje filee.....");
    fetch("http://localhost:8080/upload", {
        method: 'POST',
        data: formData
    }).then(res => res.json());
}
async function search(keyword) {
    const formData = new FormData();
    formData.append("keyword", keyword);
    console.log(`keyword got ${keyword}`)
    const response = await fetch("http://localhost:8080/search", {
        method: 'POST',
        body: formData
    });
    const data = await response.json();
    console.log(data);
    return data;
}
export { uploadDoc, search }