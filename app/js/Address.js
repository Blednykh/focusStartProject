

export class Address {
    constructor(){
        this.firstName = "";
        this.lastName = "";
        this.companyName = "";
        this.country = "";
        this.town = "";
        this.postcode = "";
        this.address = "";
        this.email = "";
        this.phone = "";
    }

    setFirstName(firstName){
        this.firstName = firstName;
    }

    setLastName(lastName){
        this.lastName = lastName;
    }
    setCompanyName(companyName){
        this.companyName = companyName;
    }
    setCountry(country){
        this.country = country;
    }
    setTown(town){
        this.town = town;
    }
    setPostcode(postcode){
        this.postcode = postcode;
    }
    setAddress(address){
        this.address = address;
    }
    setEmail(email){
        this.email = email;
    }
    setPhone(phone){
        this.phone = phone;
    }

   getAddress(){
       return {
           firstName: this.firstName,
           lastName: this.lastName,
           companyName: this.companyName,
           country: this.country,
           town: this.town,
           postcode: this.postcode,
           address: this.address,
           email: this.email,
           phone: this.phone
       }
   }






}