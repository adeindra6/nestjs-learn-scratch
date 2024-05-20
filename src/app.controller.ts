import { Controller, Get } from '@nestjs/common';

@Controller("/app")
export class AppController {
    @Get("/")
    getRootRoute() {
        return "Hi There!";
    }

    @Get("/bye")
    getByeThere() {
        return "Bye There!";
    }
}