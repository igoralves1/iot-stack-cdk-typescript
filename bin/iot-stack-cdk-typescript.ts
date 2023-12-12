#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { IotStackCdkTypescriptStack } from '../lib/iot-stack-cdk-typescript-stack';

const app = new cdk.App();
new IotStackCdkTypescriptStack(app, 'IotStackCdkTypescriptStack', {

});