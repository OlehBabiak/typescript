import {Party} from "./Party";
import {Deputy} from "./Deputy";
class Parlament {
    country: string;
    city: string;
    partyes: Party[]
    constructor(country: string, city: string, partyes: Party[]) {
        this.country= country
        this.city=city
        this.partyes =partyes
    }
}

const UkraineParlament = new Parlament('Ukraine', 'Kyiv', [])

// - додати\видалити фракцію
// - вивести всі фракції
// - вивести конкретну фракцію