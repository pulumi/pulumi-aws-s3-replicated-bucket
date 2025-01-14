// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export * from "./provider";
export * from "./replicatedBucket";

// Import resources to register:
import { ReplicatedBucket } from "./replicatedBucket";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "aws-s3-replicated-bucket:index:ReplicatedBucket":
                return new ReplicatedBucket(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("aws-s3-replicated-bucket", "index", _module)

import { Provider } from "./provider";

pulumi.runtime.registerResourcePackage("aws-s3-replicated-bucket", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:aws-s3-replicated-bucket") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
