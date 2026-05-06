# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDS_s3Bucket Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:46](#error-2026-04-11t0046520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS a minute
- 2026-04-08 PASS 51 seconds
- 2026-04-09 PASS a minute
- 2026-04-10 PASS 54 seconds
- 2026-04-11

### Error 2026-04-11T00:46:52+00:00
```
2026-04-11T00:46:52.5694382Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-04-11T00:46:52.5741989Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-04-11T00:46:52.5755611Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-04-11T00:46:52.5756292Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2026-04-11T00:46:52.5756789Z         
2026-04-11T00:46:52.5757367Z         Error: error creating project: test-acc-tf-p-3235681296777049992
2026-04-11T00:46:52.5757747Z         
2026-04-11T00:46:52.5758058Z           with mongodbatlas_project.test,
2026-04-11T00:46:52.5758693Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-04-11T00:46:52.5759277Z           68: resource "mongodbatlas_project" "test" {
2026-04-11T00:46:52.5759586Z         
2026-04-11T00:46:52.5760071Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:46:52.5760784Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:46:52.5761404Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:46:52.5761879Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (74.50s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 51 seconds
- 2026-04-14 PASS 52 seconds
- 2026-04-15 PASS 47 seconds
- 2026-04-16 PASS 49 seconds
- 2026-04-17 PASS 53 seconds
- 2026-04-18 PASS 52 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 49 seconds
- 2026-04-21 PASS 54 seconds
- 2026-04-22 PASS 52 seconds
- 2026-04-23 PASS 49 seconds
- 2026-04-24 PASS 49 seconds
- 2026-04-25 PASS 51 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 48 seconds
- 2026-04-28 PASS 50 seconds
- 2026-04-29 PASS 53 seconds
- 2026-04-30 PASS 51 seconds
- 2026-05-01 PASS 48 seconds
- 2026-05-02 PASS 53 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 53 seconds
- 2026-05-05 PASS 56 seconds
- 2026-05-06 PASS 51 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 52 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 53 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 49 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 46 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 48 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 52 seconds
- 2026-05-04 PASS 50 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 49 seconds
