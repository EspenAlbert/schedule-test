# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_s3bucket Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:25](#error-2026-05-09t0125020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 125.05s
[2026-05-28 01:32](#error-2026-05-28t0132160000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 13.02s
[2026-05-30 01:22](#error-2026-05-30t0122090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 104.04s
[2026-06-02 01:12](#error-2026-06-02t0112440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS a minute
- 2026-05-08 PASS a minute
- 2026-05-09

### Error 2026-05-09T01:25:02+00:00
```
2026-05-09T01:25:02.4910954Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2026-05-09T01:25:02.4919093Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2026-05-09T01:25:02.4987641Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2026-05-09T01:25:02.4988565Z     resource_federated_database_instance_test.go:85: Step 1/2 error: Error running apply: exit status 1
2026-05-09T01:25:02.4989321Z         
2026-05-09T01:25:02.4989969Z         Error: error creating project: test-acc-tf-p-2576272198438153674
2026-05-09T01:25:02.4990673Z         
2026-05-09T01:25:02.4991153Z           with mongodbatlas_project.test,
2026-05-09T01:25:02.4992293Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-05-09T01:25:02.4993063Z           68: resource "mongodbatlas_project" "test" {
2026-05-09T01:25:02.4993370Z         
2026-05-09T01:25:02.4993816Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T01:25:02.4994426Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T01:25:02.4994971Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:02.4995408Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (125.45s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS a minute
- 2026-05-12 PASS a minute
- 2026-05-13 PASS 52 seconds
- 2026-05-14 PASS 54 seconds
- 2026-05-15 PASS 54 seconds
- 2026-05-16 PASS a minute
- 2026-05-17: MISSING
- 2026-05-18 PASS a minute
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 59 seconds
- 2026-05-21 PASS 54 seconds
- 2026-05-22 PASS 58 seconds
- 2026-05-23 PASS 58 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 58 seconds
- 2026-05-26 PASS a minute
- 2026-05-27 PASS 58 seconds
- 2026-05-28

### Error 2026-05-28T01:32:16+00:00
```
2026-05-28T01:32:16.3941768Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2026-05-28T01:32:16.3950934Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2026-05-28T01:32:16.3995149Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2026-05-28T01:32:16.3995823Z     resource_federated_database_instance_test.go:85: Step 1/2 error: Error running apply: exit status 1
2026-05-28T01:32:16.3996328Z         
2026-05-28T01:32:16.3997018Z         Error: error creating project: test-acc-tf-p-6215076519930213073
2026-05-28T01:32:16.3997421Z         
2026-05-28T01:32:16.3997748Z           with mongodbatlas_project.test,
2026-05-28T01:32:16.3998385Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-05-28T01:32:16.3998982Z           68: resource "mongodbatlas_project" "test" {
2026-05-28T01:32:16.3999308Z         
2026-05-28T01:32:16.3999820Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-05-28T01:32:16.4000525Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-05-28T01:32:16.4001206Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-05-28T01:32:16.4001866Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-05-28T01:32:16.4002318Z         BadRequestDetail: 
2026-05-28T01:32:16.4010663Z   
2026-05-28T01:32:16.4018659Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (13.22s)
```

- 2026-05-29 PASS 59 seconds
- 2026-05-30

### Error 2026-05-30T01:22:09+00:00
```
2026-05-30T01:22:09.1212810Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2026-05-30T01:22:09.1220523Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2026-05-30T01:22:09.1300439Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2026-05-30T01:22:09.1301149Z     resource_federated_database_instance_test.go:85: Step 1/2 error: Error running apply: exit status 1
2026-05-30T01:22:09.1301854Z         
2026-05-30T01:22:09.1302316Z         Error: error creating project: test-acc-tf-p-7168177236637833667
2026-05-30T01:22:09.1302710Z         
2026-05-30T01:22:09.1303045Z           with mongodbatlas_project.test,
2026-05-30T01:22:09.1303681Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-05-30T01:22:09.1304271Z           68: resource "mongodbatlas_project" "test" {
2026-05-30T01:22:09.1304599Z         
2026-05-30T01:22:09.1305098Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:22:09.1305804Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:22:09.1306427Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:22:09.1306907Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (104.43s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 59 seconds
- 2026-06-02

### Error 2026-06-02T01:12:44+00:00
```
2026-06-02T01:12:44.2195948Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2026-06-02T01:12:44.2251787Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2026-06-02T01:12:44.2300673Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2026-06-02T01:12:44.2301346Z     resource_federated_database_instance_test.go:85: Step 1/2 error: Error running apply: exit status 1
2026-06-02T01:12:44.2301870Z         
2026-06-02T01:12:44.2302317Z         Error: error creating project: test-acc-tf-p-6806854539478290842
2026-06-02T01:12:44.2302703Z         
2026-06-02T01:12:44.2303033Z           with mongodbatlas_project.test,
2026-06-02T01:12:44.2303666Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-06-02T01:12:44.2304577Z           68: resource "mongodbatlas_project" "test" {
2026-06-02T01:12:44.2304919Z         
2026-06-02T01:12:44.2305415Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:12:44.2306188Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:12:44.2306828Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:44.2307787Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (91.79s)
```

- 2026-06-03 PASS 59 seconds
- 2026-06-04 PASS 58 seconds
- 2026-06-05 PASS 59 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS a minute
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a minute
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 58 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 56 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
