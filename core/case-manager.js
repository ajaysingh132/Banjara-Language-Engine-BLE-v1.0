/*
==========================================
BLE Case Manager v1.0
Banjara Language Engine
GBSBFORYOU

Every Proposal is a Case
==========================================
*/

class BLECaseManager {

    constructor() {

        this.cases = new Map();

        this.counter = 1;

    }

    // Generate Case ID

    generateCaseId() {

        const year = new Date().getFullYear();

        return `BLE-${year}-${String(this.counter++).padStart(6,"0")}`;

    }

    // Create Case

    createCase(data) {

        const caseId = this.generateCaseId();

        const item = {

            caseId,

            title : data.title,

            type : data.type,

            description : data.description,

            submittedBy : data.submittedBy,

            assignedAgents : [],

            evidence : [],

            comments : [],

            status : "OPEN",

            createdAt : new Date(),

            updatedAt : new Date()

        };

        this.cases.set(caseId,item);

        return item;

    }

    // Get Case

    getCase(caseId){

        return this.cases.get(caseId);

    }

    // Assign Agent

    assignAgent(caseId,agent){

        const item=this.getCase(caseId);

        if(!item) return false;

        item.assignedAgents.push(agent);

        item.updatedAt=new Date();

        return true;

    }

    // Add Evidence

    addEvidence(caseId,evidence){

        const item=this.getCase(caseId);

        if(!item) return false;

        item.evidence.push(evidence);

        item.updatedAt=new Date();

        return true;

    }

    // Add Comment

    addComment(caseId,comment){

        const item=this.getCase(caseId);

        if(!item) return false;

        item.comments.push(comment);

        item.updatedAt=new Date();

        return true;

    }

    // Update Status

    updateStatus(caseId,status){

        const item=this.getCase(caseId);

        if(!item) return false;

        item.status=status;

        item.updatedAt=new Date();

        return true;

    }

    // Close Case

    closeCase(caseId,decision){

        const item=this.getCase(caseId);

        if(!item) return false;

        item.status="CLOSED";

        item.finalDecision=decision;

        item.closedAt=new Date();

        return true;

    }

    // List Cases

    listCases(){

        return Array.from(this.cases.values());

    }

}

export default BLECaseManager;
