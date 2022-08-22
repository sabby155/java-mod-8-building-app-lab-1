import { User } from "./user.model";

export class Conversation {
    constructor(public id: number, public users: User[]) { }
}

//If we wanted to add a new property to the User type, we would simply modify it in user.model.ts file we created earlier, and our Conversation type would automatically have access to the new properties.