
interface Person{
    firstName: string;
    country: string;
    occupation: string;
    addHobby(hobby:string): void;
    addSkill(skill: string): void;
    addHobbies(hobbies: Array<string>): void;
    addSkills(skills: Array<string>): void;
}

// Implements Build Pattern
class MyUser implements Person{

    firstName: string;
    country: string;
    occupation: string;
    hobbies: string[] = [];
    skills: string[] = [];

    constructor(firstName: string, country: string, occupation: string) {
        this.firstName = firstName;
        this.country = country;
        this.occupation = occupation;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getOccupation(): string {
        return this.occupation;
    }

    getCountry(): string {
        return this.country;
    }

    setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    setOccupation(occupation: string): void {
        this.occupation = occupation;
    }

    setCountry(country: string): void {
        this.country = country;
    }

    addHobby(hobbie:string): void {
        this.hobbies?.push(hobbie);
    }

    addSkill(skills: string): void {
        this.skills?.push(skills);
    }

    addHobbies(hobbies: Array<string>): void {
        this.hobbies?.push(...hobbies);
    }

    addSkills(skills: Array<string>): void {
        this.skills?.push(...skills);
    }

    getHobby(index: number): string{
        return this.hobbies[index];
    }

    getSkill(index: number): string {
        return this.skills[index];
    }

    getHobbies(): Array<string> {
        return this.hobbies;
    }

    getSkills(): Array<string>{
        return this.skills;
    }

}

export { MyUser };