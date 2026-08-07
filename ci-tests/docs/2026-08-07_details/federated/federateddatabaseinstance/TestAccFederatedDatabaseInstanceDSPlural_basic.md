# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDSPlural_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:20](#error-2026-07-09t0120510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.01s
[2026-07-11 01:08](#error-2026-07-11t0108050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.09s
[2026-07-21 01:08](#error-2026-07-21t0108150000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 13.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:20:51+00:00
```
2026-07-09T01:20:51.4035324Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2026-07-09T01:20:51.4047743Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2026-07-09T01:20:51.4082187Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2026-07-09T01:20:51.4083030Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-07-09T01:20:51.4083556Z         
2026-07-09T01:20:51.4084001Z         Error: error creating project: test-acc-tf-p-3907894742602460924
2026-07-09T01:20:51.4084390Z         
2026-07-09T01:20:51.4084721Z           with mongodbatlas_project.test,
2026-07-09T01:20:51.4085374Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-07-09T01:20:51.4085976Z           68: resource "mongodbatlas_project" "test" {
2026-07-09T01:20:51.4086301Z         
2026-07-09T01:20:51.4086800Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T01:20:51.4087483Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T01:20:51.4088105Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:20:51.4088844Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (74.11s)
```

- 2026-07-10 PASS 55 seconds
- 2026-07-11

### Error 2026-07-11T01:08:05+00:00
```
2026-07-11T01:08:05.8132449Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2026-07-11T01:08:05.8143305Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2026-07-11T01:08:05.8189547Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2026-07-11T01:08:05.8190190Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-07-11T01:08:05.8190659Z         
2026-07-11T01:08:05.8191081Z         Error: error creating project: test-acc-tf-p-7119997210651874564
2026-07-11T01:08:05.8191448Z         
2026-07-11T01:08:05.8191767Z           with mongodbatlas_project.test,
2026-07-11T01:08:05.8192360Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-07-11T01:08:05.8192998Z           68: resource "mongodbatlas_project" "test" {
2026-07-11T01:08:05.8193316Z         
2026-07-11T01:08:05.8193888Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T01:08:05.8194578Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T01:08:05.8195146Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:08:05.8205250Z    test_working_directory=/tmp/plugintest1799648127 test_name=TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-07-11T01:08:05.8212102Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (74.94s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 53 seconds
- 2026-07-14 PASS 52 seconds
- 2026-07-15 PASS 48 seconds
- 2026-07-16 PASS a minute
- 2026-07-17 PASS 48 seconds
- 2026-07-18 PASS a minute
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:08:15+00:00
```
2026-07-21T01:08:15.1973119Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2026-07-21T01:08:15.1984603Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2026-07-21T01:08:15.2028810Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2026-07-21T01:08:15.2035122Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-07-21T01:08:15.2035725Z         
2026-07-21T01:08:15.2036261Z         Error: error creating project: test-acc-tf-p-386578608371495852
2026-07-21T01:08:15.2036716Z         
2026-07-21T01:08:15.2037284Z           with mongodbatlas_project.test,
2026-07-21T01:08:15.2038013Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-07-21T01:08:15.2038691Z           68: resource "mongodbatlas_project" "test" {
2026-07-21T01:08:15.2039093Z         
2026-07-21T01:08:15.2039679Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-21T01:08:15.2040462Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-21T01:08:15.2041357Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-21T01:08:15.2042140Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-21T01:08:15.2042667Z         BadRequestDetail: 
2026-07-21T01:08:15.2055213Z   
2026-07-21T01:08:15.2078113Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (13.76s)
```

- 2026-07-22 PASS 47 seconds
- 2026-07-23 PASS a minute
- 2026-07-24 PASS 43 seconds
- 2026-07-25 PASS 50 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 45 seconds
- 2026-07-28 PASS 43 seconds
- 2026-07-29 PASS 48 seconds
- 2026-07-30 PASS 48 seconds
- 2026-07-31 PASS 46 seconds
- 2026-08-01 PASS 47 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 41 seconds
- 2026-08-04 PASS 47 seconds
- 2026-08-05 PASS 54 seconds
- 2026-08-06 PASS 46 seconds
- 2026-08-07 PASS 51 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 48 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 55 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 50 seconds
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
  - PASS a minute
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 51 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
