



const storageService = firebase.storage();
const storageRef = storageService.ref();

document.querySelector('.file-submit-main').addEventListener('submit', handleFileUploadSubmit);


$("#newLaptop").on("submit", function (event) {

    event.preventDefault();

    var file_data = $(".file-select-main").prop('files')[0]
    storageRef.put(file_data);

    console.log(newLaptop);





