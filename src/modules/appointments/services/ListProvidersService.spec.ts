import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

describe('Listproviders', () => {
  let fakeUsersRepository: FakeUsersRepository;
  let listProviders: ListProvidersService;

  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    listProviders = new ListProvidersService(fakeUsersRepository);
  });

  it('should be able to list the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'Jonh Trê',
      email: 'jonhtre@gmail.com',
      password: '123456',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Lauro Costa',
      email: 'laurocosta@gmail.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
