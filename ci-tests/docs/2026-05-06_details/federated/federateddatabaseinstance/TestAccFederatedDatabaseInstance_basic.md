# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:46](#error-2026-04-11t0046520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 103.04s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 27 seconds
- 2026-04-08 PASS 16 seconds
- 2026-04-09 PASS 20 seconds
- 2026-04-10 PASS 16 seconds
- 2026-04-11

### Error 2026-04-11T00:46:52+00:00
```
2026-04-11T00:46:52.5696863Z === RUN   TestAccFederatedDatabaseInstance_basic
2026-04-11T00:46:52.5742369Z === CONT  TestAccFederatedDatabaseInstance_basic
2026-04-11T00:46:52.5800866Z === NAME  TestAccFederatedDatabaseInstance_basic
2026-04-11T00:46:52.5802047Z     resource_federated_database_instance_test.go:41: Step 1/3 error: Error running apply: exit status 1
2026-04-11T00:46:52.5802937Z         
2026-04-11T00:46:52.5803879Z         Error: error creating project: test-acc-tf-p-6079184905870458042
2026-04-11T00:46:52.5804708Z         
2026-04-11T00:46:52.5805243Z           with mongodbatlas_project.test,
2026-04-11T00:46:52.5806392Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-04-11T00:46:52.5807461Z           13: resource "mongodbatlas_project" "test" {
2026-04-11T00:46:52.5807997Z         
2026-04-11T00:46:52.5808864Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:46:52.5810084Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:46:52.5811190Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:46:52.5811992Z --- FAIL: TestAccFederatedDatabaseInstance_basic (103.37s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 15 seconds
- 2026-04-14 PASS 15 seconds
- 2026-04-15 PASS 11 seconds
- 2026-04-16 PASS 16 seconds
- 2026-04-17 PASS 17 seconds
- 2026-04-18 PASS 15 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 13 seconds
- 2026-04-21 PASS 15 seconds
- 2026-04-22 PASS 15 seconds
- 2026-04-23 PASS 15 seconds
- 2026-04-24 PASS 12 seconds
- 2026-04-25 PASS 14 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 14 seconds
- 2026-04-28 PASS 20 seconds
- 2026-04-29 PASS 17 seconds
- 2026-04-30 PASS 15 seconds
- 2026-05-01 PASS 13 seconds
- 2026-05-02 PASS 16 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 17 seconds
- 2026-05-05 PASS 18 seconds
- 2026-05-06 PASS 14 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 15 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 15 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 13 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 11 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 15 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 13 seconds
- 2026-05-04 PASS 15 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 14 seconds
