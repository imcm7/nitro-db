/**
 * @file
 */

import {
  BaseEntity,
  BeforeCreate,
  BeforeUpdate,
  BigIntType,
  Cascade,
  Collection,
  DateType,
  Entity,
  EntityRepositoryType,
  ManyToMany,
  OneToMany,
  PrimaryKey,
  Property
} from '@mikro-orm/core';
import * as bcrypt from 'bcrypt';

import { UserRepository } from '~/server/repositories/user.repository';

/**
*  @swagger
*  components:
*    schemas:
*      User:
*        type: object
*        properties:
*          email:
*            type: string
*            example: email@example.com
*          password:
*            type: string
*            example: 123
*          id:
*            type: integer
*            example: 1
*        required:
*          - email
*/
@Entity({ collection: 'user', customRepository: () => UserRepository, tableName: 'user' })
export class User extends BaseEntity<User, 'id'> {
  [EntityRepositoryType]?: UserRepository;

  @Property({ lazy: true, length: 320, nullable: false, unique: true, type: 'string' })
  email: string;

  @PrimaryKey({ type: BigIntType })
  id: number;

  @Property({ hidden: true, lazy: true, length: 250, nullable: false, type: 'string' })
  password: string;

  @BeforeCreate()
  @BeforeUpdate()
  async hashPassword () {
    this.password = await bcrypt.hash(this.password, 8);
  }

  // constructor(email: string) {
  //   super();
  //   this.email = email;
  // }

}
