# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDS_s3Bucket Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:25](#error-2026-05-09t0125020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.05s
[2026-05-28 01:32](#error-2026-05-28t0132160000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 13.05s
[2026-05-30 01:22](#error-2026-05-30t0122090000) |  | dev | flaky_500 | 66.03s
[2026-06-02 01:12](#error-2026-06-02t0112440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 90.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 53 seconds
- 2026-05-08 PASS 48 seconds
- 2026-05-09

### Error 2026-05-09T01:25:02+00:00
```
2026-05-09T01:25:02.4907184Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-05-09T01:25:02.4917550Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-05-09T01:25:02.4954362Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-05-09T01:25:02.4954978Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2026-05-09T01:25:02.4955428Z         
2026-05-09T01:25:02.4955834Z         Error: error creating project: test-acc-tf-p-3671590449445195322
2026-05-09T01:25:02.4956171Z         
2026-05-09T01:25:02.4956457Z           with mongodbatlas_project.test,
2026-05-09T01:25:02.4957100Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-05-09T01:25:02.4957634Z           68: resource "mongodbatlas_project" "test" {
2026-05-09T01:25:02.4957926Z         
2026-05-09T01:25:02.4958377Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T01:25:02.4958970Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T01:25:02.4959527Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:02.4969757Z    test_terraform_path=/home/runner/work/_temp/1f9a4954-939d-4d72-af09-d0f7756a574a/terraform test_working_directory=/tmp/plugintest1679767825 test_step_number=1 test_name=TestAccFederatedDatabaseInstanceDSPlural_basic
2026-05-09T01:25:02.4976509Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (75.46s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 56 seconds
- 2026-05-12 PASS 49 seconds
- 2026-05-13 PASS 47 seconds
- 2026-05-14 PASS 48 seconds
- 2026-05-15 PASS 49 seconds
- 2026-05-16 PASS 56 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 55 seconds
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 54 seconds
- 2026-05-21 PASS 50 seconds
- 2026-05-22 PASS 52 seconds
- 2026-05-23 PASS 52 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 52 seconds
- 2026-05-26 PASS 53 seconds
- 2026-05-27 PASS 51 seconds
- 2026-05-28

### Error 2026-05-28T01:32:16+00:00
```
2026-05-28T01:32:16.3937554Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-05-28T01:32:16.3948341Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-05-28T01:32:16.4010949Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-05-28T01:32:16.4011634Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2026-05-28T01:32:16.4012285Z         
2026-05-28T01:32:16.4012734Z         Error: error creating project: test-acc-tf-p-6228735855739871826
2026-05-28T01:32:16.4013120Z         
2026-05-28T01:32:16.4013444Z           with mongodbatlas_project.test,
2026-05-28T01:32:16.4014080Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-05-28T01:32:16.4014673Z           68: resource "mongodbatlas_project" "test" {
2026-05-28T01:32:16.4014993Z         
2026-05-28T01:32:16.4015495Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-05-28T01:32:16.4016201Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-05-28T01:32:16.4017169Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-05-28T01:32:16.4017836Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-05-28T01:32:16.4018289Z         BadRequestDetail: 
2026-05-28T01:32:16.4019133Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (13.47s)
```

- 2026-05-29 PASS 50 seconds
- 2026-05-30

### Error 2026-05-30T01:22:09+00:00
```
2026-05-30T01:22:09.1207304Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-05-30T01:22:09.1220108Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-05-30T01:22:09.1257990Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-05-30T01:22:09.1258889Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2026-05-30T01:22:09.1259558Z         
2026-05-30T01:22:09.1260272Z         Error: error creating project: test-acc-tf-p-2196015446432912775
2026-05-30T01:22:09.1260828Z         
2026-05-30T01:22:09.1261657Z           with mongodbatlas_project.test,
2026-05-30T01:22:09.1262473Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-05-30T01:22:09.1274345Z           68: resource "mongodbatlas_project" "test" {
2026-05-30T01:22:09.1274733Z         
2026-05-30T01:22:09.1275266Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-05-30T01:22:09.1275761Z         type
2026-05-30T01:22:09.1282029Z    test_terraform_path=/home/runner/work/_temp/599d7613-6183-4073-81d6-446b96dac6b5/terraform
2026-05-30T01:22:09.1288618Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (66.25s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 53 seconds
- 2026-06-02

### Error 2026-06-02T01:12:44+00:00
```
2026-06-02T01:12:44.2192038Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-06-02T01:12:44.2250957Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-06-02T01:12:44.2282728Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2026-06-02T01:12:44.2283423Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2026-06-02T01:12:44.2283929Z         
2026-06-02T01:12:44.2284376Z         Error: error creating project: test-acc-tf-p-8073240862260822398
2026-06-02T01:12:44.2284759Z         
2026-06-02T01:12:44.2285093Z           with mongodbatlas_project.test,
2026-06-02T01:12:44.2285742Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-06-02T01:12:44.2286330Z           68: resource "mongodbatlas_project" "test" {
2026-06-02T01:12:44.2286656Z         
2026-06-02T01:12:44.2287153Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:12:44.2287834Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:12:44.2288458Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:44.2300384Z   
2026-06-02T01:12:44.2307318Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (90.89s)
```

- 2026-06-03 PASS 52 seconds
- 2026-06-04 PASS 50 seconds
- 2026-06-05 PASS 53 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 54 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 55 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 52 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 52 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
