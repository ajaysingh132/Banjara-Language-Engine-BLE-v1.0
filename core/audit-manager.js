/*
==========================================
BLE Audit Manager v1.0
Banjara Language Engine
GBSBFORYOU

Transparency • Accountability • Traceability
==========================================
*/

class BLEAuditManager {

    constructor() {

        this.logs = [];

    }

    // Add Audit Record
    record(data) {

        const entry = {

            auditId: "AUD-" + Date.now(),

            timestamp: new Date(),

            memberId: data.memberId || null,

            agent: data.agent || "System",

            action: data.action || "",

            module: data.module || "",

            caseId: data.caseId || "",

            status: data.status || "SUCCESS",

            details: data.details || ""

        };

        this.logs.push(entry);

        console.log(
            "[AUDIT]",
            entry.auditId,
            entry.action
        );

        return entry.auditId;

    }

    // Get All Logs
    getLogs() {

        return this.logs;

    }

    // Get Logs By Agent
    getByAgent(agent) {

        return this.logs.filter(
            item => item.agent === agent
        );

    }

    // Get Logs By Member
    getByMember(memberId) {

        return this.logs.filter(
            item => item.memberId === memberId
        );

    }

    // Get Logs By Case
    getByCase(caseId) {

        return this.logs.filter(
            item => item.caseId === caseId
        );

    }

    // Export JSON
    exportJSON() {

        return JSON.stringify(
            this.logs,
            null,
            2
        );

    }

    // Clear Logs
    clear() {

        this.logs = [];

    }

}

export default BLEAuditManager;
