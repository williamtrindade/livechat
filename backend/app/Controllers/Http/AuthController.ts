import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { schema, rules, validator } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
  /**
   * Login
   * @param request
   * @param auth
   */
  public async login ({ request, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const token = await auth.use('api').attempt(email, password, { expiresIn: '5 days' })
    return token.toJSON()
  }

  /**
   * Register
   * @param request
   */
  public async register ({ request }: HttpContextContract) {
    /**
     * Validate user details
     */
    const validationSchema = schema.create({
      name: schema.string({ trim: true }, [
        rules.minLength(3),
        rules.maxLength(255),
      ]),
      email: schema.string({ trim: true }, [
        rules.email(),
        rules.unique({ table: 'users', column: 'email' }),
      ]),
      password: schema.string({ trim: true }, [
        rules.confirmed(),
      ]),
    })

    const userDetails = await request.validate({
      schema: validationSchema
    })

    /**
     * Create a new user
     */
    const user = new User()
    user.name = userDetails.name
    user.email = userDetails.email
    user.password = userDetails.password
    await user.save()

    return { message: 'Your account has been created' }
  }
}
