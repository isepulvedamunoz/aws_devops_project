import { Construct } from 'constructs';

import {
    aws_glue as glue
} from 'aws-cdk-lib';

export class GlueCatalogConstruct extends Construct {

    constructor(scope: Construct, id: string) {
        super(scope, id);

        new glue.CfnDatabase(this, 'GlueDatabase', {
            catalogId: '1234567890123',
            databaseInput: {
                name: 'my-glue-database',
                description: 'This is my Glue database'
            }
        });
    }
}
