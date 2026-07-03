/*
==========================================
BLE Permission Manager v1.0
Banjara Language Engine
GBSBFORYOU

Role Based Access Control (RBAC)

Every Permission belongs
to a Verified Human Authority.
==========================================
*/

class BLEPermissionManager {

    constructor() {

        this.roles = new Map();

    }

    // Create Role
    createRole(roleName, permissions = []) {

        this.roles.set(roleName, permissions);

    }

    // Add Permission
    addPermission(roleName, permission) {

        if (!this.roles.has(roleName)) {

            this.roles.set(roleName, []);

        }

        let list = this.roles.get(roleName);

        if (!list.includes(permission)) {

            list.push(permission);

        }

    }

    // Remove Permission
    removePermission(roleName, permission) {

        if (!this.roles.has(roleName)) return;

        let list = this.roles.get(roleName);

        this.roles.set(
            roleName,
            list.filter(item => item !== permission)
        );

    }

    // Check Permission
    hasPermission(member, permission) {

        let list = this.roles.get(member.role);

        if (!list) return false;

        return list.includes(permission);

    }

    // List Role Permissions
    getPermissions(roleName) {

        return this.roles.get(roleName) || [];

    }

    // List Roles
    getRoles() {

        return Array.from(this.roles.keys());

    }

}

export default BLEPermissionManager;
