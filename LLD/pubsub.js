class PubSub{
    constructor(){
        this.topics = {}
    }

    subscribe(subscriber, topic){
        if(!this.topics[topic]){
            this.topics[topic] = []
        }
        this.topics[topic].push(subscriber)
        return;
    }

    publish(topic, message){
        if(!this.topics[topic]) return;
        let subscribers = this.topics[topic]
        subscribers.forEach(subscriber => {
            subscriber.notify(message)
        });
    }

    unsubscribe(subscriber, topic){
        if(!this.topics[topic]) return
        this.topics[topic].filter(eachSubscriber => eachSubscriber != subscriber)
    }
}

class Publisher{
    constructor(pubsub){
        this.pubsub = pubsub
    }

    publish(topic, message){
        console.log(`message is published to the topic ${message}`)
        this.pubsub.publish(topic, message)
    }
}

class Subscriber{
    constructor(name){
        this.name = name
    }

    subscribe(pubsub, topic){
        console.log(`${this.name} is subscribed to topic ${topic}`)
        pubsub.subscribe(this, topic)
    }

    notify(topic, message){
        console.log(`${this.name} received message : ${message} from topic : ${topic}`)
    }
    
}

const pubSub = new PubSub();

const publisher = new Publisher(pubSub);

const subscriber1 = new Subscriber('Subscriber 1');
const subscriber2 = new Subscriber('Subscriber 2');

subscriber1.subscribe(pubSub, 'news');
subscriber2.subscribe(pubSub, 'news');
subscriber2.subscribe(pubSub, 'sports');

publisher.publish('news', 'Breaking news: New JavaScript feature released!');
publisher.publish('sports', 'Sports update: Local team wins championship!');

// subscriber1.unsubscribe(pubSub, 'news');