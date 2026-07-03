/*
==========================================
BLE Event Bus v1.0
Banjara Language Engine

Inter-Agent Communication System

GBSBFORYOU
==========================================
*/

class BLEEventBus {

    constructor() {

        this.listeners = new Map();

        this.history = [];

    }

    // Register Event Listener

    subscribe(eventName, agentName, callback) {

        if (!this.listeners.has(eventName)) {

            this.listeners.set(eventName, []);

        }

        this.listeners.get(eventName).push({

            agent: agentName,

            callback: callback

        });

        console.log(agentName + " subscribed to " + eventName);

    }

    // Remove Listener

    unsubscribe(eventName, agentName) {

        if (!this.listeners.has(eventName)) return;

        let list = this.listeners.get(eventName);

        this.listeners.set(

            eventName,

            list.filter(item => item.agent !== agentName)

        );

    }

    // Publish Event

    publish(eventName, payload = {}, sender = "System") {

        const event = {

            event: eventName,

            sender: sender,

            payload: payload,

            time: new Date()

        };

        this.history.push(event);

        if (!this.listeners.has(eventName)) {

            return;

        }

        this.listeners.get(eventName).forEach(listener => {

            listener.callback(event);

        });

    }

    // Event History

    getHistory() {

        return this.history;

    }

    // Clear History

    clearHistory() {

        this.history = [];

    }

    // List Registered Events

    events() {

        return Array.from(this.listeners.keys());

    }

}

export default BLEEventBus;
