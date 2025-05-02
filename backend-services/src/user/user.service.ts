import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { id: 1, username: 'owner', role: 'owner' },
    { id: 2, username: 'admin', role: 'admin' },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  create(user: { username: string; role: string }) {
    const newUser = { id: Date.now(), ...user };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, update: Partial<{ username: string; role: string }>) {
    const user = this.findOne(id);
    if (user) {
      Object.assign(user, update);
    }
    return user;
  }

  delete(id: number) {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}
