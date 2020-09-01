module.exports = {
    app: {
        app_port: process.env.PORT
    },
    db: {
        connection_String: process.env.CONNECTION_STRING
    },
    session: {
        expiresIn: process.env.JWT_EXPIRES_IN,
        secret: process.env.JWT_SECRET_KEY
    }
}