import {Controller,Module, Get,Post} from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

//decorater that informs nest that the class
//handles incoming requests
//1. create a root controller
// 2. create a module and mention the controller we defined in step 1
//3. define and invode bootstrap function to listen to our traffic
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
    const app = await NestFactory.create(AppModule) //instance of instance
    await app.listen(3000)
}
bootstrap();