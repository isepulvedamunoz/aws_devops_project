import { Construct } from 'constructs';

import {
    aws_s3 as s3,
    RemovalPolicy
} from 'aws-cdk-lib';

export class DataLakeConstruct extends Construct {

    public readonly bucket: s3.Bucket;

    constructor(scope: Construct, id: string) {
        super(scope, id);
        this.bucket = new s3.Bucket(this, 'DataLakeBucket', {
            versioned: true,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            encryption: s3.BucketEncryption.S3_MANAGED,
            enforceSSL: true,
            removalPolicy: RemovalPolicy.DESTROY
            
            }
        );
    }
}