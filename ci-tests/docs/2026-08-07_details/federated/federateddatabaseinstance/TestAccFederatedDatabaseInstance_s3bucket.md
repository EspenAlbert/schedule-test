# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_s3bucket Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:20](#error-2026-07-09t0120510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.05s
[2026-07-11 01:08](#error-2026-07-11t0108050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.03s
[2026-07-21 01:08](#error-2026-07-21t0108150000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 14.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:20:51+00:00
```
2026-07-09T01:20:51.4038897Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2026-07-09T01:20:51.4045776Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2026-07-09T01:20:51.4100737Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2026-07-09T01:20:51.4101421Z     resource_federated_database_instance_test.go:85: Step 1/2 error: Error running apply: exit status 1
2026-07-09T01:20:51.4102082Z         
2026-07-09T01:20:51.4102534Z         Error: error creating project: test-acc-tf-p-7638360611958680710
2026-07-09T01:20:51.4102918Z         
2026-07-09T01:20:51.4103231Z           with mongodbatlas_project.test,
2026-07-09T01:20:51.4103874Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-07-09T01:20:51.4104654Z           68: resource "mongodbatlas_project" "test" {
2026-07-09T01:20:51.4104982Z         
2026-07-09T01:20:51.4105485Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T01:20:51.4106173Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T01:20:51.4106794Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:20:51.4107269Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (87.50s)
```

- 2026-07-10 PASS a minute
- 2026-07-11

### Error 2026-07-11T01:08:05+00:00
```
2026-07-11T01:08:05.8134386Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2026-07-11T01:08:05.8141668Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2026-07-11T01:08:05.8173451Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2026-07-11T01:08:05.8174383Z     resource_federated_database_instance_test.go:85: Step 1/2 error: Error running apply: exit status 1
2026-07-11T01:08:05.8174855Z         
2026-07-11T01:08:05.8175275Z         Error: error creating project: test-acc-tf-p-8666744080447724501
2026-07-11T01:08:05.8175646Z         
2026-07-11T01:08:05.8175979Z           with mongodbatlas_project.test,
2026-07-11T01:08:05.8176568Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-07-11T01:08:05.8177118Z           68: resource "mongodbatlas_project" "test" {
2026-07-11T01:08:05.8177437Z         
2026-07-11T01:08:05.8177897Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T01:08:05.8178505Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T01:08:05.8179070Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:08:05.8189239Z   
2026-07-11T01:08:05.8211634Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (74.32s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a minute
- 2026-07-14 PASS a minute
- 2026-07-15 PASS a minute
- 2026-07-16 PASS a minute
- 2026-07-17 PASS a minute
- 2026-07-18 PASS 2 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:08:15+00:00
```
2026-07-21T01:08:15.1975941Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2026-07-21T01:08:15.1982918Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2026-07-21T01:08:15.2070758Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2026-07-21T01:08:15.2071425Z     resource_federated_database_instance_test.go:85: Step 1/2 error: Error running apply: exit status 1
2026-07-21T01:08:15.2071911Z         
2026-07-21T01:08:15.2072335Z         Error: error creating project: test-acc-tf-p-7381434994796178565
2026-07-21T01:08:15.2072721Z         
2026-07-21T01:08:15.2073048Z           with mongodbatlas_project.test,
2026-07-21T01:08:15.2073653Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-07-21T01:08:15.2074214Z           68: resource "mongodbatlas_project" "test" {
2026-07-21T01:08:15.2074539Z         
2026-07-21T01:08:15.2075014Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-21T01:08:15.2075753Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-21T01:08:15.2076395Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-21T01:08:15.2077091Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-21T01:08:15.2077713Z         BadRequestDetail: 
2026-07-21T01:08:15.2079186Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (14.06s)
```

- 2026-07-22 PASS a minute
- 2026-07-23 PASS 2 minutes
- 2026-07-24 PASS 55 seconds
- 2026-07-25 PASS a minute
- 2026-07-26: MISSING
- 2026-07-27 PASS 58 seconds
- 2026-07-28 PASS 57 seconds
- 2026-07-29 PASS a minute
- 2026-07-30 PASS a minute
- 2026-07-31 PASS a minute
- 2026-08-01 PASS a minute
- 2026-08-02: MISSING
- 2026-08-03 PASS 52 seconds
- 2026-08-04 PASS a minute
- 2026-08-05 PASS a minute
- 2026-08-06 PASS a minute
- 2026-08-07 PASS a minute

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS a minute
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS a minute
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS a minute
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS a minute
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a minute
  - PASS a minute
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS a minute
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
