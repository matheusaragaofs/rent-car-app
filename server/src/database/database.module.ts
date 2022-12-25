import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormconfig } from 'ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig as any),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(connection: DataSource) {
    if (connection.isInitialized) {
      console.log('DB Connected Successfuly!');
    }
  }
}
