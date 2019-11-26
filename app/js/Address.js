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