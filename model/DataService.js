class DataService {

    constructor() {
        
    }

    getAxiusData(url, callback) {
        axios.get(url)
            .then(function (response) {
                // handle success
                /* console.log(response);
                console.log(response.data); */
                callback(response.data);
            })
            .catch(function (error) {
                // handle error
                //console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    postAxiusData(url, obj) {
        axios.post(url, obj)
            .then(function (response) {
                console.log(response);
                location.reload()
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    deleteAxiusData(url, id) {
        axios.delete(url+'/'+id)
            .then(function (response) {
                console.log(response);
                location.reload()
            })
            .catch(function (error) {
                console.log(error);
            });
    }

} export default DataService