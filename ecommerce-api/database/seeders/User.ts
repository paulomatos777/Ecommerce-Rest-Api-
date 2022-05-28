import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'email'
    // Write your database queries inside the run method
    await User.updateOrCreateMany(uniqueKey, [
      {
        email: 'rodrigolira@gmail.com',
        password: '12354',
      },
      {
        email: 'andersonoliveira@gmail.com',
        password: '552245',
      },
      {
        email: 'claraandrade@gmail.com',
        password: '745874',
      },
    ])
  }
}
