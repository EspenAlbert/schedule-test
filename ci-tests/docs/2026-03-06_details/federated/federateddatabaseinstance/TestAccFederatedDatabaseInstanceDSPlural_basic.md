# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDSPlural_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-03-03 01:02](#error-2026-03-03t0102270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.01s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 51 seconds
- 2026-02-06 PASS 54 seconds
- 2026-02-07 PASS 53 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 52 seconds
- 2026-02-10 PASS 56 seconds
- 2026-02-11 PASS 56 seconds
- 2026-02-12 PASS 55 seconds
- 2026-02-13 PASS 57 seconds
- 2026-02-14 PASS 53 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 54 seconds
- 2026-02-17 PASS 55 seconds
- 2026-02-18 PASS 53 seconds
- 2026-02-19 PASS 54 seconds
- 2026-02-20 PASS 53 seconds
- 2026-02-21 PASS 56 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 56 seconds
- 2026-02-24 PASS 53 seconds
- 2026-02-25 PASS 53 seconds
- 2026-02-26 PASS 52 seconds
- 2026-02-27 PASS 55 seconds
- 2026-02-28 PASS 57 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 56 seconds
- 2026-03-03

### Error 2026-03-03T01:02:27+00:00
```
2026-03-03T01:02:27.0955413Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2026-03-03T01:02:27.0965341Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2026-03-03T01:02:27.0984717Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2026-03-03T01:02:27.0985424Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-03-03T01:02:27.0985932Z         
2026-03-03T01:02:27.0986359Z         Error: error creating project: test-acc-tf-p-3457130004676965549
2026-03-03T01:02:27.0986726Z         
2026-03-03T01:02:27.0987028Z           with mongodbatlas_project.test,
2026-03-03T01:02:27.0987647Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-03-03T01:02:27.0988223Z           68: resource "mongodbatlas_project" "test" {
2026-03-03T01:02:27.0988522Z         
2026-03-03T01:02:27.0988998Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-03-03T01:02:27.0989670Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-03-03T01:02:27.0990278Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-03T01:02:27.0990766Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (78.10s)
```

- 2026-03-04 PASS 53 seconds
- 2026-03-05 PASS 50 seconds
- 2026-03-06 PASS 54 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 52 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 50 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 56 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 47 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 47 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 52 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 55 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
