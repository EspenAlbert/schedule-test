# stream/streamconnection/TestAccStreamRSStreamConnection_AWSLambda Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 44) FAIL(x 3)
Success rate: 93.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 00:45](#error-2025-09-14t0045380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67978809c57f200e59f19f6a/streams | qa | flaky_500 | 30.09s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67978809c57f200e59f19f6a/streams | qa | flaky_500 | 31.01s
[2025-09-30 15:25](#error-2025-09-30t1525090000) |  | qa |  | 6.00s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 3 seconds
- 2025-09-04 PASS 4 seconds
- 2025-09-05 PASS 4 seconds
- 2025-09-06 PASS 4 seconds
- 2025-09-07 PASS 36 seconds
- 2025-09-08
  - PASS 4 seconds
  - PASS 19 seconds
  - PASS 3 seconds
- 2025-09-09 PASS 3 seconds
- 2025-09-10 PASS 4 seconds
- 2025-09-11 PASS 4 seconds
- 2025-09-12
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-09-13 PASS 4 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.7899949Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-09-14T00:45:38.7901704Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-09-14T00:45:38.8035573Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-09-14T00:45:38.8036132Z     resource_stream_connection_test.go:345: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:45:38.8036543Z         
2025-09-14T00:45:38.8036818Z         Error: error creating resource
2025-09-14T00:45:38.8037077Z         
2025-09-14T00:45:38.8037387Z           with mongodbatlas_stream_instance.test,
2025-09-14T00:45:38.8038142Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-09-14T00:45:38.8038718Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-09-14T00:45:38.8039019Z         
2025-09-14T00:45:38.8039503Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67978809c57f200e59f19f6a/streams
2025-09-14T00:45:38.8040177Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:45:38.8040774Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:45:38.8041165Z         BadRequestDetail: 
2025-09-14T00:45:38.8051923Z   
2025-09-14T00:45:38.8058168Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (30.95s)
```

- 2025-09-15
  - PASS 3 seconds
  - PASS 4 seconds
  - FAIL 31 seconds

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0052793Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-09-15T06:36:28.0057615Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-09-15T06:36:28.0259928Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-09-15T06:36:28.0260641Z     resource_stream_connection_test.go:345: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:36:28.0261209Z         
2025-09-15T06:36:28.0261491Z         Error: error creating resource
2025-09-15T06:36:28.0261772Z         
2025-09-15T06:36:28.0262107Z           with mongodbatlas_stream_instance.test,
2025-09-15T06:36:28.0262896Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-09-15T06:36:28.0263491Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-09-15T06:36:28.0263806Z         
2025-09-15T06:36:28.0264314Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67978809c57f200e59f19f6a/streams
2025-09-15T06:36:28.0265010Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:36:28.0265868Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:36:28.0266410Z         BadRequestDetail: 
2025-09-15T06:36:28.0267166Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (31.12s)
```

- 2025-09-16 PASS 3 seconds
- 2025-09-17 PASS 4 seconds
- 2025-09-18 PASS 4 seconds
- 2025-09-19 PASS 3 seconds
- 2025-09-20 PASS 3 seconds
- 2025-09-21 PASS 4 seconds
- 2025-09-22 PASS 4 seconds
- 2025-09-23 PASS 3 seconds
- 2025-09-24 PASS 3 seconds
- 2025-09-25 PASS 4 seconds
- 2025-09-26 PASS 3 seconds
- 2025-09-27 PASS 4 seconds
- 2025-09-28 PASS 4 seconds
- 2025-09-29
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-09-30
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 5 seconds
  - PASS 42 seconds
  - FAIL 6 seconds

### Error 2025-09-30T15:25:09+00:00
```
2025-09-30T15:25:09.2056803Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-09-30T15:25:09.2058299Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-09-30T15:25:09.2068072Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-09-30T15:25:09.2068675Z     resource_stream_connection_test.go:344: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-09-30T15:25:09.2069117Z         
2025-09-30T15:25:09.2069720Z         Error: configuring Terraform AWS Provider: no valid credential sources for Terraform AWS Provider found.
2025-09-30T15:25:09.2070186Z         
2025-09-30T15:25:09.2070603Z         Please see https://registry.terraform.io/providers/hashicorp/aws
2025-09-30T15:25:09.2071113Z         for more information about providing credentials.
2025-09-30T15:25:09.2071421Z         
2025-09-30T15:25:09.2072617Z         AWS Error: failed to refresh cached credentials, no EC2 IMDS role found, operation error ec2imds: GetMetadata, failed to get API token, operation error ec2imds: getToken, http response error StatusCode: 400, request to EC2 IMDS failed
2025-09-30T15:25:09.2073433Z         
2025-09-30T15:25:09.2074369Z           with provider["registry.terraform.io/hashicorp/aws"],
2025-09-30T15:25:09.2074893Z           on terraform_plugin_test.tf line 14, in provider "aws":
2025-09-30T15:25:09.2075274Z           14: provider "aws" {}
2025-09-30T15:25:09.2075524Z         
2025-09-30T15:25:09.2075923Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (6.05s)
```

- 2025-10-01
  - PASS 46 seconds
  - PASS 40 seconds
  - PASS 41 seconds
  - PASS 43 seconds
  - PASS 45 seconds
  - PASS 44 seconds
  - PASS 42 seconds
  - PASS 47 seconds
- 2025-10-02 PASS 40 seconds