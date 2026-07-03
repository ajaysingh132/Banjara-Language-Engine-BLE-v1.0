/*
==========================================
BLE Dictionary Agent v1.0
Banjara Language Engine

AI Representative of
Language Expert

GBSBFORYOU
==========================================
*/

class DictionaryAgent {

    constructor() {

        this.name = "Dictionary Agent";

        this.version = "1.0";

        this.status = "Active";

        this.authority = "Language Expert";

    }

    // Start Agent

    start() {

        console.log("BLE Dictionary Agent Started...");

    }

    // Read Dictionary

    loadDictionary(dictionary) {

        this.dictionary = dictionary;

        return true;

    }

    // Find Word

    findWord(word) {

        return this.dictionary.find(item =>

            item.word === word

        );

    }

    // Duplicate Check

    isDuplicate(word) {

        return this.findWord(word) != null;

    }

    // Suggest Category

    detectCategory(word) {

        return "Pending";

    }

    // Add New Word

    addWord(newWord) {

        if (this.isDuplicate(newWord.word)) {

            return {

                success:false,

                message:"Duplicate Word"

            };

        }

        newWord.status="Pending";

        this.dictionary.push(newWord);

        return {

            success:true,

            message:"Added Successfully"

        };

    }

    // Verify Word

    verifyWord(word, reviewer){

        let item=this.findWord(word);

        if(!item) return false;

        item.status="Verified";

        item.reviewer=reviewer;

        item.reviewDate=new Date();

        return true;

    }

    // Reject Word

    rejectWord(word){

        let item=this.findWord(word);

        if(!item) return false;

        item.status="Rejected";

        return true;

    }

    // Export JSON

    exportDictionary(){

        return JSON.stringify(

            this.dictionary,

            null,

            2

        );

    }

}

export default DictionaryAgent;
