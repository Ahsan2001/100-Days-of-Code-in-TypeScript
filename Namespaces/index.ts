/// <reference path="./utils.ts" />

namespace App {

    export class Detail extends Bio.Name implements Bio.Data {
    
        getName() {
            console.log(`name is ${this.name}`)
        }


        bio(): string {
            return `Name: ${this.getName()} `;
        }
    }

    const a = new App.Detail("Ahsan");
    console.log(a.bio()); 
}
