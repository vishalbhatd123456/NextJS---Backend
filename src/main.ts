import {Controller,Module, Get,Post} from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

//decorater that informs nest that the class
//handles incoming requests
@Controller()
class AppController{
    @Get()
    getRootRoute(){
        return 'Hi There, howdy!'
    }

}

@Module({
    controllers:[AppController]
})
class AppModule{

}

//runs every time
async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    await app.listen(3000)
}
bootstrap();