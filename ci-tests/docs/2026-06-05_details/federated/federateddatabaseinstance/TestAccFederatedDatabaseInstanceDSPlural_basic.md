# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDSPlural_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 3)
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:25](#error-2026-05-09t0125020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.05s
[2026-05-30 01:22](#error-2026-05-30t0122090000) |  | dev | flaky_500 | 66.02s
[2026-06-02 01:12](#error-2026-06-02t0112440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.10s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 53 seconds
- 2026-05-08 PASS 48 seconds
- 2026-05-09

### Error 2026-05-09T01:25:02+00:00
```
2026-05-09T01:25:02.4908430Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2026-05-09T01:25:02.4919841Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2026-05-09T01:25:02.4970792Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2026-05-09T01:25:02.4971550Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-05-09T01:25:02.4972016Z         
2026-05-09T01:25:02.4972416Z         Error: error creating project: test-acc-tf-p-7170341345881272094
2026-05-09T01:25:02.4972768Z         
2026-05-09T01:25:02.4973067Z           with mongodbatlas_project.test,
2026-05-09T01:25:02.4973650Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-05-09T01:25:02.4974200Z           68: resource "mongodbatlas_project" "test" {
2026-05-09T01:25:02.4974500Z         
2026-05-09T01:25:02.4974934Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T01:25:02.4975531Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T01:25:02.4976079Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:02.4976970Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (76.49s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 55 seconds
- 2026-05-12 PASS 49 seconds
- 2026-05-13 PASS 48 seconds
- 2026-05-14 PASS 49 seconds
- 2026-05-15 PASS 47 seconds
- 2026-05-16 PASS 55 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 54 seconds
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 54 seconds
- 2026-05-21 PASS 49 seconds
- 2026-05-22 PASS 52 seconds
- 2026-05-23 PASS 53 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 53 seconds
- 2026-05-26 PASS 52 seconds
- 2026-05-27 PASS 51 seconds
- 2026-05-28 PASS 47 seconds
- 2026-05-29 PASS 51 seconds
- 2026-05-30

### Error 2026-05-30T01:22:09+00:00
```
2026-05-30T01:22:09.1209913Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2026-05-30T01:22:09.1221623Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2026-05-30T01:22:09.1282599Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2026-05-30T01:22:09.1283342Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-05-30T01:22:09.1283868Z         
2026-05-30T01:22:09.1284322Z         Error: error creating project: test-acc-tf-p-2212434041454418833
2026-05-30T01:22:09.1284712Z         
2026-05-30T01:22:09.1285040Z           with mongodbatlas_project.test,
2026-05-30T01:22:09.1285678Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-05-30T01:22:09.1286272Z           68: resource "mongodbatlas_project" "test" {
2026-05-30T01:22:09.1286600Z         
2026-05-30T01:22:09.1287098Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-05-30T01:22:09.1287542Z         type
2026-05-30T01:22:09.1287899Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (66.23s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 53 seconds
- 2026-06-02

### Error 2026-06-02T01:12:44+00:00
```
2026-06-02T01:12:44.2193493Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2026-06-02T01:12:44.2252214Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2026-06-02T01:12:44.2264140Z   
2026-06-02T01:12:44.2264692Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-06-02T01:12:44.2265210Z         
2026-06-02T01:12:44.2265788Z         Error: error creating project: test-acc-tf-p-754900529124128194
2026-06-02T01:12:44.2266364Z         
2026-06-02T01:12:44.2266710Z           with mongodbatlas_project.test,
2026-06-02T01:12:44.2267363Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2026-06-02T01:12:44.2267965Z           68: resource "mongodbatlas_project" "test" {
2026-06-02T01:12:44.2268293Z         
2026-06-02T01:12:44.2268807Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:12:44.2269682Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:12:44.2270308Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:44.2270990Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (74.99s)
```

- 2026-06-03 PASS 51 seconds
- 2026-06-04 PASS 51 seconds
- 2026-06-05 PASS 52 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 55 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 54 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 50 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 50 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
