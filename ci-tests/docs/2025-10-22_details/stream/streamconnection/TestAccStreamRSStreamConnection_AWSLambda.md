# stream/streamconnection/TestAccStreamRSStreamConnection_AWSLambda Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 41) FAIL(x 3)
Success rate: 93.18%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-30 15:25](#error-2025-09-30t1525090000) |  | qa |  | 6.00s
[2025-10-05 00:49](#error-2025-10-05t0049210000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68e1bbfafec65822ddfc9b5c/streams/test-acc-tf-s-1634441574459024561/connections | qa | flaky_500 | 57.07s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections | qa |  | 25.05s

## Timeline
- 2025-09-22: MISSING
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
- 2025-10-03 PASS 40 seconds
- 2025-10-04 PASS 44 seconds
- 2025-10-05

### Error 2025-10-05T00:49:21+00:00
```
2025-10-05T00:49:21.9117051Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-10-05T00:49:21.9121114Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-10-05T00:49:21.9145728Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-10-05T00:49:21.9146437Z     resource_stream_connection_test.go:344: Step 1/2 error: Error running apply: exit status 1
2025-10-05T00:49:21.9146923Z         
2025-10-05T00:49:21.9147225Z         Error: error creating resource
2025-10-05T00:49:21.9147522Z         
2025-10-05T00:49:21.9147877Z           with mongodbatlas_stream_connection.test,
2025-10-05T00:49:21.9148560Z           on terraform_plugin_test.tf line 53, in resource "mongodbatlas_stream_connection" "test":
2025-10-05T00:49:21.9149298Z           53: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-05T00:49:21.9149638Z         
2025-10-05T00:49:21.9150580Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbfafec65822ddfc9b5c/streams/test-acc-tf-s-1634441574459024561/connections
2025-10-05T00:49:21.9151478Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-10-05T00:49:21.9152204Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-05T00:49:21.9152618Z         BadRequestDetail: 
2025-10-05T00:49:21.9152976Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (57.72s)
```

- 2025-10-06 PASS 45 seconds
- 2025-10-07 PASS 40 seconds
- 2025-10-08 PASS 44 seconds
- 2025-10-09 PASS 43 seconds
- 2025-10-10 PASS 46 seconds
- 2025-10-11 PASS 42 seconds
- 2025-10-12 PASS 41 seconds
- 2025-10-13 PASS 38 seconds
- 2025-10-14 PASS 44 seconds
- 2025-10-15 PASS 42 seconds
- 2025-10-16 PASS 44 seconds
- 2025-10-17 PASS 42 seconds
- 2025-10-18 PASS 40 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1476553Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-10-19T00:50:12.1482680Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-10-19T00:50:12.1669352Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-10-19T00:50:12.1669944Z     resource_stream_connection_test.go:476: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:50:12.1670383Z         
2025-10-19T00:50:12.1670665Z         Error: error creating resource
2025-10-19T00:50:12.1670946Z         
2025-10-19T00:50:12.1671280Z           with mongodbatlas_stream_connection.test,
2025-10-19T00:50:12.1672112Z           on terraform_plugin_test.tf line 53, in resource "mongodbatlas_stream_connection" "test":
2025-10-19T00:50:12.1672872Z           53: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-19T00:50:12.1673209Z         
2025-10-19T00:50:12.1674128Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections
2025-10-19T00:50:12.1675177Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1675886Z         Detail: Stream instance for project 68f43174353f113dafd15147 and name
2025-10-19T00:50:12.1676766Z         test-acc-tf-s-3100645711005476142 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1677521Z         [68f43174353f113dafd15147 test-acc-tf-s-3100645711005476142],
2025-10-19T00:50:12.1678032Z         BadRequestDetail: 
2025-10-19T00:50:12.1678382Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (25.47s)
```

- 2025-10-20
  - PASS 44 seconds
  - PASS 38 seconds
- 2025-10-21 PASS 40 seconds
- 2025-10-22
  - PASS 43 seconds
  - PASS 44 seconds