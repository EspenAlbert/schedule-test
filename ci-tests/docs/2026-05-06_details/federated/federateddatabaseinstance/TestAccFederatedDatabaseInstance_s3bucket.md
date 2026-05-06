# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_s3bucket Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 01:03](#error-2026-04-09t0103010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 117.00s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 2 minutes
- 2026-04-08 PASS a minute
- 2026-04-09

### Error 2026-04-09T01:03:01+00:00
```
2026-04-09T01:03:01.3611657Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2026-04-09T01:03:01.3617002Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2026-04-09T01:03:01.3642525Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2026-04-09T01:03:01.3643197Z     resource_federated_database_instance_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-04-09T01:03:01.3643857Z         
2026-04-09T01:03:01.3644305Z         Error: error creating project: test-acc-tf-p-8311629891956188813
2026-04-09T01:03:01.3644685Z         
2026-04-09T01:03:01.3645005Z           with mongodbatlas_project.test,
2026-04-09T01:03:01.3645634Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-04-09T01:03:01.3646363Z           68: resource "mongodbatlas_project" "test" {
2026-04-09T01:03:01.3646677Z         
2026-04-09T01:03:01.3647166Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T01:03:01.3647823Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T01:03:01.3648430Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:03:01.3648899Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (117.01s)
```

- 2026-04-10 PASS a minute
- 2026-04-11 PASS 2 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS a minute
- 2026-04-14 PASS a minute
- 2026-04-15 PASS a minute
- 2026-04-16 PASS a minute
- 2026-04-17 PASS a minute
- 2026-04-18 PASS a minute
- 2026-04-19: MISSING
- 2026-04-20 PASS a minute
- 2026-04-21 PASS a minute
- 2026-04-22 PASS a minute
- 2026-04-23 PASS a minute
- 2026-04-24 PASS a minute
- 2026-04-25 PASS a minute
- 2026-04-26: MISSING
- 2026-04-27 PASS a minute
- 2026-04-28 PASS a minute
- 2026-04-29 PASS a minute
- 2026-04-30 PASS a minute
- 2026-05-01 PASS a minute
- 2026-05-02 PASS a minute
- 2026-05-03: MISSING
- 2026-05-04 PASS a minute
- 2026-05-05 PASS a minute
- 2026-05-06 PASS a minute

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS a minute
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS a minute
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS a minute
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS a minute
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS a minute
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS a minute
- 2026-05-04 PASS a minute
- 2026-05-05: MISSING
- 2026-05-06 PASS a minute
