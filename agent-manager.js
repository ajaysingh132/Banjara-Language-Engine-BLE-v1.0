/*
==========================================
BLE Agent Manager v1.0
Banjara Language Engine
GBSBFORYOU
==========================================
*/

class BLEAgentManager {

    constructor() {

        this.agents = new Map();

    }

    // Register Agent
    register(agent) {

        if (this.agents.has(agent.name)) {

            console.log("Agent already registered.");

            return false;

        }

        this.agents.set(agent.name, agent);

        console.log("Registered :", agent.name);

        return true;

    }

    // Remove Agent
    unregister(name) {

        if (!this.agents.has(name)) {

            return false;

        }

        this.agents.delete(name);

        console.log("Removed :", name);

        return true;

    }

    // Get Agent
    get(name) {

        return this.agents.get(name);

    }

    // Start All Agents
    startAll() {

        this.agents.forEach(agent => {

            if (agent.start) {

                agent.start();

            }

        });

    }

    // Stop All Agents
    stopAll() {

        this.agents.forEach(agent => {

            if (agent.stop) {

                agent.stop();

            }

        });

    }

    // Broadcast Message
    broadcast(message) {

        this.agents.forEach(agent => {

            if (agent.receiveMessage) {

                agent.receiveMessage("AgentManager", message);

            }

        });

    }

    // List Registered Agents
    list() {

        return Array.from(this.agents.keys());

    }

    // Agent Status
    status() {

        let result = [];

        this.agents.forEach(agent => {

            result.push({

                name: agent.name,

                version: agent.version,

                status: agent.status

            });

        });

        return result;

    }

}

export default BLEAgentManager;
