
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DataLakeConstruct } from './constructs/data-lake';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkLabStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new DataLakeConstruct(this, 'DataLakeConstruct');

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsCdkLabQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
