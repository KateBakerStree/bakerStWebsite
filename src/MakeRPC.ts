import { any } from "prop-types";
import { EchoServiceClient } from "./gRPC/EchoServiceClientPb"
import { EchoRequest, EchoResponse } from "./gRPC/echo_pb.d"

var greet: string = "Greetings";
var geeks: string = "Geeks For Geeks";
console.log(greet + " from " + geeks); 

export class HeroService {
   
    public getHero(name: string): string {

        var client: EchoServiceClient = new EchoServiceClient("localhost", { "index": "asd" }, { "options": "asd" });
        var eRequest: EchoRequest = new EchoRequest();
        eRequest.setMessage("Hello World")
        client.echo(eRequest, metaData, callback)
        return "asdasd";
    }
    
}

var hs: HeroService = new HeroService();
hs.getHero("hjjs");
