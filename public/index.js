init();

async function init() {
    if (location.search.split("=")[1] === undefined) {
        const workout = await API.getLastWorkout();
        console.log("LAST WORKOUT: ", workout.id);

        if (workout) {
            // location.search = "?id=" + workout._id;
            location.href = "?id=" + workout._id;
        } else {
            document.querySelector("#continue-btn").classList.add("d-none")
        }
    }
}