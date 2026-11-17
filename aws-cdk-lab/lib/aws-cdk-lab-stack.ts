
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DataLakeConstruct } from './constructs/data-lake';
import { GlueCatalogConstruct } from './constructs/glue-catalog';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkLabStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new DataLakeConstruct(this, 'DataLakeConstruct');
    new GlueCatalogConstruct(this, 'GlueCatalog');

  }
}
