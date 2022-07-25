//Enter your code here..


async function Promise_me ()
{
    try{
        let res = await fetch ("https://jsonplaceholder.typicode.com/users")
        let result = await res.json()
        console.log(result)
        let player = document.createElement('h2')
        player.innerText="List of Users"
        let main_body = document.getElementById('message')
        main_body.append(player)
        result.forEach(display_player = (user) => {
        let new_div = document.createElement('div')
        new_div.className="player"
        let name = document.createElement('div')
        name.className="strength"
        name.innerText="Name : "+user.name
        new_div.append(name)
        let email = document.createElement('div')
        email.innerText="Email : "+user.email
        new_div.append(email)
        let phone = document.createElement('div')
        phone.innerText="Phone : "+user.phone
        new_div.append(phone)
        let website = document.createElement('div')
        website.innerText="Website : "+user.website
        new_div.append(website)
        let company = document.createElement('div')
        company.innerText="Company : "+user.company.name
        new_div.append(company)
        let city = document.createElement('div')
        city.innerText="City : "+user.address.city
        new_div.append(city)
        let zipcode = document.createElement('div')
        zipcode.innerText="Zipcode : "+user.address.zipcode
        new_div.append(zipcode)
        main_body.append(new_div)
        });
    }
    catch (error){
        console.log("Promise rejected.");
        console.log(error.message)
    }
}


document.getElementById('btnGet').onclick =()=>{
    Promise_me()
}