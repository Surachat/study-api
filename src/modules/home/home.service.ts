import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex , Connection} from 'nestjs-knex';

@Injectable()
export class HomeService {
    constructor(
        @InjectKnex() private readonly knex: Knex,
    ) {}

    async testConnect(){
        if (!await this.knex.schema.hasTable('userst')) {
                await this.knex.schema.createTable('userst', table => {
                table.increments('id').primary();
                table.string('name');
            });
        }
        await this.knex.table('userst').insert({ name: 'Name' });
        const userst = await this.knex.table('userst');
        return { userst };
    }
}
