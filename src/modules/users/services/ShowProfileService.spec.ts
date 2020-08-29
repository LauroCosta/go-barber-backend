import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowProfileService from './ShowProfileService';

describe('UpdateUserAvatar', () => {
  let fakeUsersRepository: FakeUsersRepository;
  let showProfile: ShowProfileService;

  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    showProfile = new ShowProfileService(fakeUsersRepository);
  });

  it('should be able to show profile of the user', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Lauro Costa',
      email: 'lauro@gmail.com',
      password: '123456',
    });

    const profile = await showProfile.execute({
      user_id: user.id,
    });

    expect(profile.name).toBe('Lauro Costa');
    expect(profile.email).toBe('lauro@gmail.com');
  });

  it('should not be able to show the profile non-existing user', async () => {
    expect(
      showProfile.execute({
        user_id: 'non-existing-user-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
