# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:20](#error-2026-07-09t0120510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.04s
[2026-07-11 01:08](#error-2026-07-11t0108050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.03s
[2026-07-18 01:05](#error-2026-07-18t0105550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 90.07s
[2026-07-21 01:08](#error-2026-07-21t0108150000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.01s
[2026-07-23 01:51](#error-2026-07-23t0151590000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:20:51+00:00
```
2026-07-09T01:20:51.4037127Z === RUN   TestAccFederatedDatabaseInstance_basic
2026-07-09T01:20:51.4046690Z === CONT  TestAccFederatedDatabaseInstance_basic
2026-07-09T01:20:51.4063758Z === NAME  TestAccFederatedDatabaseInstance_basic
2026-07-09T01:20:51.4064428Z     resource_federated_database_instance_test.go:43: Step 1/3 error: Error running apply: exit status 1
2026-07-09T01:20:51.4064942Z         
2026-07-09T01:20:51.4065393Z         Error: error creating project: test-acc-tf-p-9040289624413262846
2026-07-09T01:20:51.4065795Z         
2026-07-09T01:20:51.4066122Z           with mongodbatlas_project.test,
2026-07-09T01:20:51.4066771Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-07-09T01:20:51.4067368Z           13: resource "mongodbatlas_project" "test" {
2026-07-09T01:20:51.4067687Z         
2026-07-09T01:20:51.4068185Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T01:20:51.4068868Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T01:20:51.4069489Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:20:51.4069961Z --- FAIL: TestAccFederatedDatabaseInstance_basic (64.37s)
```

- 2026-07-10 PASS 18 seconds
- 2026-07-11

### Error 2026-07-11T01:08:05+00:00
```
2026-07-11T01:08:05.8133375Z === RUN   TestAccFederatedDatabaseInstance_basic
2026-07-11T01:08:05.8142904Z === CONT  TestAccFederatedDatabaseInstance_basic
2026-07-11T01:08:05.8156998Z === NAME  TestAccFederatedDatabaseInstance_basic
2026-07-11T01:08:05.8157621Z     resource_federated_database_instance_test.go:43: Step 1/3 error: Error running apply: exit status 1
2026-07-11T01:08:05.8158100Z         
2026-07-11T01:08:05.8158528Z         Error: error creating project: test-acc-tf-p-6942029813340963848
2026-07-11T01:08:05.8158911Z         
2026-07-11T01:08:05.8159242Z           with mongodbatlas_project.test,
2026-07-11T01:08:05.8159842Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-07-11T01:08:05.8160397Z           13: resource "mongodbatlas_project" "test" {
2026-07-11T01:08:05.8160720Z         
2026-07-11T01:08:05.8161184Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T01:08:05.8161810Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T01:08:05.8162377Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:08:05.8162821Z --- FAIL: TestAccFederatedDatabaseInstance_basic (71.30s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 14 seconds
- 2026-07-14 PASS 16 seconds
- 2026-07-15 PASS 37 seconds
- 2026-07-16 PASS 45 seconds
- 2026-07-17 PASS 14 seconds
- 2026-07-18

### Error 2026-07-18T01:05:55+00:00
```
2026-07-18T01:05:55.6497000Z === RUN   TestAccFederatedDatabaseInstance_basic
2026-07-18T01:05:55.6507873Z === CONT  TestAccFederatedDatabaseInstance_basic
2026-07-18T01:05:55.6536528Z === NAME  TestAccFederatedDatabaseInstance_basic
2026-07-18T01:05:55.6537210Z     resource_federated_database_instance_test.go:43: Step 1/3 error: Error running apply: exit status 1
2026-07-18T01:05:55.6537721Z         
2026-07-18T01:05:55.6538171Z         Error: error creating project: test-acc-tf-p-7359856621551489588
2026-07-18T01:05:55.6538563Z         
2026-07-18T01:05:55.6538888Z           with mongodbatlas_project.test,
2026-07-18T01:05:55.6539531Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-07-18T01:05:55.6540311Z           13: resource "mongodbatlas_project" "test" {
2026-07-18T01:05:55.6540648Z         
2026-07-18T01:05:55.6541414Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T01:05:55.6542161Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T01:05:55.6542783Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:05:55.6543249Z --- FAIL: TestAccFederatedDatabaseInstance_basic (90.73s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:08:15+00:00
```
2026-07-21T01:08:15.1974574Z === RUN   TestAccFederatedDatabaseInstance_basic
2026-07-21T01:08:15.1983396Z === CONT  TestAccFederatedDatabaseInstance_basic
2026-07-21T01:08:15.2001538Z === NAME  TestAccFederatedDatabaseInstance_basic
2026-07-21T01:08:15.2002342Z     resource_federated_database_instance_test.go:43: Step 1/3 error: Error running apply: exit status 1
2026-07-21T01:08:15.2002938Z         
2026-07-21T01:08:15.2003470Z         Error: error creating project: test-acc-tf-p-3331669354023245602
2026-07-21T01:08:15.2003939Z         
2026-07-21T01:08:15.2004344Z           with mongodbatlas_project.test,
2026-07-21T01:08:15.2005088Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-07-21T01:08:15.2005792Z           13: resource "mongodbatlas_project" "test" {
2026-07-21T01:08:15.2006199Z         
2026-07-21T01:08:15.2006791Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-21T01:08:15.2007871Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-21T01:08:15.2008651Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-21T01:08:15.2009411Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-21T01:08:15.2010043Z         BadRequestDetail: 
2026-07-21T01:08:15.2010480Z --- FAIL: TestAccFederatedDatabaseInstance_basic (1.09s)
```

- 2026-07-22 PASS 15 seconds
- 2026-07-23

### Error 2026-07-23T01:51:59+00:00
```
2026-07-23T01:51:59.1632087Z === RUN   TestAccFederatedDatabaseInstance_basic
2026-07-23T01:51:59.1645217Z === CONT  TestAccFederatedDatabaseInstance_basic
2026-07-23T01:51:59.1663590Z === NAME  TestAccFederatedDatabaseInstance_basic
2026-07-23T01:51:59.1664425Z     resource_federated_database_instance_test.go:43: Step 1/3 error: Error running apply: exit status 1
2026-07-23T01:51:59.1665040Z         
2026-07-23T01:51:59.1665586Z         Error: error creating project: test-acc-tf-p-6388181134255261328
2026-07-23T01:51:59.1666055Z         
2026-07-23T01:51:59.1666458Z           with mongodbatlas_project.test,
2026-07-23T01:51:59.1667271Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-07-23T01:51:59.1667996Z           13: resource "mongodbatlas_project" "test" {
2026-07-23T01:51:59.1668391Z         
2026-07-23T01:51:59.1669191Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-23T01:51:59.1670077Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-23T01:51:59.1670925Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-23T01:51:59.1671887Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-23T01:51:59.1672439Z         BadRequestDetail: 
2026-07-23T01:51:59.1672864Z --- FAIL: TestAccFederatedDatabaseInstance_basic (0.89s)
```

- 2026-07-24 PASS 14 seconds
- 2026-07-25 PASS 12 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 14 seconds
- 2026-07-28 PASS 10 seconds
- 2026-07-29 PASS 12 seconds
- 2026-07-30 PASS 13 seconds
- 2026-07-31 PASS 14 seconds
- 2026-08-01 PASS 11 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 11 seconds
- 2026-08-04 PASS 13 seconds
- 2026-08-05 PASS 18 seconds
- 2026-08-06 PASS 11 seconds
- 2026-08-07 PASS 16 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 15 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 18 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 12 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 16 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 13 seconds
  - PASS 29 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 14 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
