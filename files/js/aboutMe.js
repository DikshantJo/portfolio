const aboutMe = (()=> {

    const c = async function loadUsers() {
        const response = await fetch("files/js/aboutMe.json");
        const me = await response.json();
       /*  console.log(me) */
        try {
            // console.log(me)
            return me
        }
        catch{
            console.log(users);
        }
    }
    return {
      data: c()
    }

})();


export default aboutMe