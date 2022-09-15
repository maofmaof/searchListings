const baseUrl = "http://localhost:8080/";

function fetchJobListings(setJobs, setIsLoading) {
    fetch(baseUrl + "fromDb", {
        method: "GET",
        headers: { "Content": "application/json" },
    }).then(res => res.json())
        .then(data => {
            setJobs(data)

        }).then(() => setIsLoading(false))
        .catch(err => alert(err))
};

function deleteJobListingDB(id) {

    fetch(baseUrl + id, {
        method: "DELETE",
    })

}

export {
    fetchJobListings,
    deleteJobListingDB
}

export default fetchJobListings;

