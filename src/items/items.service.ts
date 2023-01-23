import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "1",
            name: "Item one",
            qty: 100,
            description: "bala bala bala"
        },
        {
            id: "2",
            name: "Item two",
            qty: 150,
            description: "bala bala bala"
        }
    ];

    findAll(): Item[] {
        return this.items;
    }

    findOne(id: string): Item {
        return this.items.find(e => e.id == id);
    }
}
