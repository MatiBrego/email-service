export class SignUpInput{
    email: string
    username: string
    password: string

    constructor(input: SignUpInput) {
        this.email = input.email
        this.username = input.username
        this.password = input.password
    }
}

export class SignInInput{
    username: string
    password: string

    constructor(input: SignUpInput) {
        this.username = input.username
        this.password = input.password
    }
}