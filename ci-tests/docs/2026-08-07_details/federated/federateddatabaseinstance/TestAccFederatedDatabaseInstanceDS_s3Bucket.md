# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDS_s3Bucket Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:20](#error-2026-07-09t0120510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 112.05s
[2026-07-11 01:08](#error-2026-07-11t0108050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.10s
[2026-07-21 01:08](#error-2026-07-21t0108150000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 14.01s
[2026-07-23 01:51](#error-2026-07-23t0151590000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:20:51+00:00
```
2026-07-09T01:20:51.4033395Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-07-09T01:20:51.4045292Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-07-09T01:20:51.4119198Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-07-09T01:20:51.4119919Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2026-07-09T01:20:51.4120434Z         
2026-07-09T01:20:51.4120879Z         Error: error creating project: test-acc-tf-p-5161615633528341240
2026-07-09T01:20:51.4121272Z         
2026-07-09T01:20:51.4121720Z           with mongodbatlas_project.test,
2026-07-09T01:20:51.4122409Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-07-09T01:20:51.4123028Z           68: resource "mongodbatlas_project" "test" {
2026-07-09T01:20:51.4123349Z         
2026-07-09T01:20:51.4123838Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T01:20:51.4124525Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T01:20:51.4125148Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:20:51.4125639Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (112.50s)
```

- 2026-07-10 PASS 57 seconds
- 2026-07-11

### Error 2026-07-11T01:08:05+00:00
```
2026-07-11T01:08:05.8131423Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-07-11T01:08:05.8141283Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-07-11T01:08:05.8205810Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-07-11T01:08:05.8206458Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2026-07-11T01:08:05.8206930Z         
2026-07-11T01:08:05.8207355Z         Error: error creating project: test-acc-tf-p-7326343866370136979
2026-07-11T01:08:05.8207720Z         
2026-07-11T01:08:05.8208045Z           with mongodbatlas_project.test,
2026-07-11T01:08:05.8208640Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-07-11T01:08:05.8209182Z           68: resource "mongodbatlas_project" "test" {
2026-07-11T01:08:05.8209525Z         
2026-07-11T01:08:05.8210004Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T01:08:05.8210623Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T01:08:05.8211180Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:08:05.8212569Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (74.97s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 50 seconds
- 2026-07-14 PASS 50 seconds
- 2026-07-15 PASS 53 seconds
- 2026-07-16 PASS 52 seconds
- 2026-07-17 PASS 48 seconds
- 2026-07-18 PASS a minute
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:08:15+00:00
```
2026-07-21T01:08:15.1971533Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-07-21T01:08:15.1982433Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-07-21T01:08:15.2055511Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-07-21T01:08:15.2056167Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2026-07-21T01:08:15.2056666Z         
2026-07-21T01:08:15.2057195Z         Error: error creating project: test-acc-tf-p-3847599716570580115
2026-07-21T01:08:15.2057688Z         
2026-07-21T01:08:15.2058023Z           with mongodbatlas_project.test,
2026-07-21T01:08:15.2058629Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-07-21T01:08:15.2059195Z           68: resource "mongodbatlas_project" "test" {
2026-07-21T01:08:15.2059529Z         
2026-07-21T01:08:15.2060010Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-21T01:08:15.2060665Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-21T01:08:15.2061309Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-21T01:08:15.2062096Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-21T01:08:15.2062534Z         BadRequestDetail: 
2026-07-21T01:08:15.2070473Z   
2026-07-21T01:08:15.2079663Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (14.09s)
```

- 2026-07-22 PASS 47 seconds
- 2026-07-23

### Error 2026-07-23T01:51:59+00:00
```
2026-07-23T01:51:59.1629894Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-07-23T01:51:59.1644242Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-07-23T01:51:59.1695013Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-07-23T01:51:59.1695875Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2026-07-23T01:51:59.1696515Z         
2026-07-23T01:51:59.1697055Z         Error: error creating project: test-acc-tf-p-6654493270001789884
2026-07-23T01:51:59.1697515Z         
2026-07-23T01:51:59.1697897Z           with mongodbatlas_project.test,
2026-07-23T01:51:59.1698683Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-07-23T01:51:59.1699589Z           68: resource "mongodbatlas_project" "test" {
2026-07-23T01:51:59.1699982Z         
2026-07-23T01:51:59.1700609Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T01:51:59.1701441Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T01:51:59.1702202Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T01:51:59.1702998Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (78.14s)
```

- 2026-07-24 PASS 43 seconds
- 2026-07-25 PASS 48 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 45 seconds
- 2026-07-28 PASS 42 seconds
- 2026-07-29 PASS 49 seconds
- 2026-07-30 PASS 49 seconds
- 2026-07-31 PASS 46 seconds
- 2026-08-01 PASS 47 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 41 seconds
- 2026-08-04 PASS 47 seconds
- 2026-08-05 PASS 55 seconds
- 2026-08-06 PASS 45 seconds
- 2026-08-07 PASS 49 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 49 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 54 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 51 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 53 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 49 seconds
  - PASS 53 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 52 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
