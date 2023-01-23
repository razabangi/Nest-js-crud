import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private itemService: ItemsService) {

    }

    @Get()
    findAll(): Item[] {
        return this.itemService.findAll();
    }

    @Get(":id")
    findOne(@Param('id') id): Item {
        return this.itemService.findOne(id);
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `name: ${createItemDto.name}, description: ${createItemDto.description}, quantity ${createItemDto.qty}`;
    }

    @Delete(":id")
    delete(@Param('id') id): string {
        return `Deleted Item: ${id}`;
    }

    @Put(":id")
    update(@Body() updateItemDto: CreateItemDto, @Param("id") id) {
        return `update item against id: ${id} and data's title: ${updateItemDto.name}`;
    }
}
