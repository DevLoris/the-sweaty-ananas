export function authCheckMiddleware() {
    return function(req, res, next) {
        if (req.isAuthenticated()) {
            next()
        } else {
            res.json({
                status: 401,
                message: "Error: User not logged in."
            })
        }
    }
}

export function visitorCheckMiddleware() {
    return function(req, res, next) {
        if (!req.isAuthenticated()) {
            next()
        } else {
            res.json({
                status: 401,
                message: "Error: User logged in."
            })
        }
    }
}
