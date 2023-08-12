
namespace Bio {
    export class Name {
        protected name: string;

        constructor (name: string){
            this.name = name
        }

  
    }


    export class FatherName {
        protected name: string;
        
        constructor (name: string){
            this.name = name
        }

        getFatherName() {
            console.log(`father name is ${this.name}`)
        }
    }

    export class Age {
        protected age: number;
        
        constructor (age: number){
            this.age = age
        }

        getAge() {
            console.log(`age is ${this.age}`)
        }
    }


    export interface Data {
        bio(): string;
    } 

}