import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectKnex, Knex , Connection} from 'nestjs-knex';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectKnex() private readonly knex: Knex,
  ) {}

  @Get()
  async getHello() {
    // return this.appService.getHello();

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
