# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 109) FAIL(x 4)
Success rate: 96.46%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029590000) |  | qa |  | 1.05s
[2025-06-05 00:32](#error-2025-06-05t0032200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 4.05s
[2025-06-22 00:46](#error-2025-06-22t0046590000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574eeaab82446d9bfb054a/limits | qa | flaky_500 | 33.09s
[2025-07-06 00:46](#error-2025-07-06t0046420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c400690ae45e168bcc72/limits | qa | flaky_500 | 34.09s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 12 seconds
- 2025-04-13 PASS 9 seconds
- 2025-04-14 PASS 17 seconds
- 2025-04-15 PASS 13 seconds
- 2025-04-16
  - PASS 17 seconds
  - PASS 17 seconds
- 2025-04-17 PASS 14 seconds
- 2025-04-18 PASS 14 seconds
- 2025-04-19 PASS 11 seconds
- 2025-04-20 PASS 12 seconds
- 2025-04-21 PASS 12 seconds
- 2025-04-22 PASS 16 seconds
- 2025-04-23 PASS 13 seconds
- 2025-04-24 PASS 13 seconds
- 2025-04-25 PASS 14 seconds
- 2025-04-26 PASS 35 seconds
- 2025-04-27 PASS 18 seconds
- 2025-04-28 PASS 13 seconds
- 2025-04-29 PASS 16 seconds
- 2025-04-30
  - PASS 12 seconds
  - PASS 17 seconds
- 2025-05-01
  - PASS 14 seconds
  - PASS 16 seconds
  - PASS 16 seconds
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 15 seconds
  - PASS 10 seconds
- 2025-05-02 PASS 15 seconds
- 2025-05-03 PASS 16 seconds
- 2025-05-04 PASS 14 seconds
- 2025-05-05 PASS 10 seconds
- 2025-05-06 PASS 14 seconds
- 2025-05-07 PASS 11 seconds
- 2025-05-08 PASS 10 seconds
- 2025-05-09 PASS 11 seconds
- 2025-05-10 PASS 17 seconds
- 2025-05-11

### Error 2025-05-11T00:29:59+00:00
```
2025-05-11T00:29:59.9926895Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-05-11T00:29:59.9943060Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-05-11T00:29:59.9953499Z === NAME  TestAccFederatedDatabaseInstance_basic
2025-05-11T00:29:59.9954112Z     resource_federated_database_instance_test.go:37: Step 1/3 error: Error running apply: exit status 1
2025-05-11T00:29:59.9954567Z         
2025-05-11T00:29:59.9954982Z         Error: error creating project: test-acc-tf-p-2369744012544216550
2025-05-11T00:29:59.9955328Z         
2025-05-11T00:29:59.9955622Z           with mongodbatlas_project.test,
2025-05-11T00:29:59.9956212Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:59.9956746Z           13: resource "mongodbatlas_project" "test" {
2025-05-11T00:29:59.9957032Z         
2025-05-11T00:29:59.9957497Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:59.9957892Z         type
2025-05-11T00:29:59.9958183Z --- FAIL: TestAccFederatedDatabaseInstance_basic (1.51s)
```

- 2025-05-12 PASS 13 seconds
- 2025-05-13
  - PASS 11 seconds
  - PASS 16 seconds
- 2025-05-14 PASS 16 seconds
- 2025-05-15 PASS 13 seconds
- 2025-05-16 PASS 10 seconds
- 2025-05-17 PASS 11 seconds
- 2025-05-18 PASS 10 seconds
- 2025-05-19 PASS 9 seconds
- 2025-05-20 PASS 10 seconds
- 2025-05-21 PASS 12 seconds
- 2025-05-22 PASS 11 seconds
- 2025-05-23 PASS 11 seconds
- 2025-05-24 PASS 14 seconds
- 2025-05-25 PASS 12 seconds
- 2025-05-26 PASS 16 seconds
- 2025-05-27 PASS 14 seconds
- 2025-05-28
  - PASS 15 seconds
  - PASS 12 seconds
- 2025-05-29 PASS 14 seconds
- 2025-05-30 PASS 13 seconds
- 2025-05-31 PASS 13 seconds
- 2025-06-01
  - PASS 11 seconds
  - PASS 12 seconds
  - PASS 15 seconds
  - PASS 11 seconds
  - PASS 16 seconds
  - PASS 11 seconds
- 2025-06-02
  - PASS 11 seconds
  - PASS 12 seconds
  - PASS 14 seconds
- 2025-06-03 PASS 14 seconds
- 2025-06-04 PASS 12 seconds
- 2025-06-05

### Error 2025-06-05T00:32:20+00:00
```
2025-06-05T00:32:20.9993463Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-06-05T00:32:20.9999036Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-06-05T00:32:21.0012068Z === NAME  TestAccFederatedDatabaseInstance_basic
2025-06-05T00:32:21.0012698Z     resource_federated_database_instance_test.go:37: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:32:21.0013153Z         
2025-06-05T00:32:21.0013574Z         Error: error creating project: test-acc-tf-p-1248257880811109070
2025-06-05T00:32:21.0013922Z         
2025-06-05T00:32:21.0014221Z           with mongodbatlas_project.test,
2025-06-05T00:32:21.0015031Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-06-05T00:32:21.0015593Z           13: resource "mongodbatlas_project" "test" {
2025-06-05T00:32:21.0015894Z         
2025-06-05T00:32:21.0016354Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:32:21.0016978Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:32:21.0017540Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:21.0018018Z --- FAIL: TestAccFederatedDatabaseInstance_basic (4.49s)
```

- 2025-06-06 PASS 12 seconds
- 2025-06-07 PASS 16 seconds
- 2025-06-08 PASS 12 seconds
- 2025-06-09 PASS 17 seconds
- 2025-06-10 PASS 11 seconds
- 2025-06-11
  - PASS 12 seconds
  - PASS 18 seconds
- 2025-06-12 PASS 15 seconds
- 2025-06-13 PASS 13 seconds
- 2025-06-14 PASS 12 seconds
- 2025-06-15 PASS 15 seconds
- 2025-06-16 PASS 18 seconds
- 2025-06-17 PASS 14 seconds
- 2025-06-18 PASS 15 seconds
- 2025-06-19 PASS 17 seconds
- 2025-06-20 PASS 17 seconds
- 2025-06-21 PASS 17 seconds
- 2025-06-22

### Error 2025-06-22T00:46:59+00:00
```
2025-06-22T00:46:59.2955647Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-06-22T00:46:59.2961310Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-06-22T00:46:59.2985824Z === NAME  TestAccFederatedDatabaseInstance_basic
2025-06-22T00:46:59.2986518Z     resource_federated_database_instance_test.go:37: Step 1/3 error: Error running apply: exit status 1
2025-06-22T00:46:59.2986972Z         
2025-06-22T00:46:59.2987345Z         Error: error when getting project properties after create
2025-06-22T00:46:59.2987670Z         
2025-06-22T00:46:59.2987958Z           with mongodbatlas_project.test,
2025-06-22T00:46:59.2988541Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-06-22T00:46:59.2989066Z           13: resource "mongodbatlas_project" "test" {
2025-06-22T00:46:59.2989345Z         
2025-06-22T00:46:59.2989792Z         error getting project (68574eeaab82446d9bfb054a): error getting project's
2025-06-22T00:46:59.2990254Z         limits (68574eeaab82446d9bfb054a):
2025-06-22T00:46:59.2990826Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574eeaab82446d9bfb054a/limits
2025-06-22T00:46:59.2991483Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:46:59.2992057Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:46:59.2992643Z         BadRequestDetail: 
2025-06-22T00:46:59.2992960Z --- FAIL: TestAccFederatedDatabaseInstance_basic (33.92s)
```

- 2025-06-23 PASS 14 seconds
- 2025-06-24 PASS 11 seconds
- 2025-06-25 PASS 17 seconds
- 2025-06-26 PASS 12 seconds
- 2025-06-27 PASS 17 seconds
- 2025-06-28 PASS 11 seconds
- 2025-06-29 PASS 12 seconds
- 2025-06-30 PASS 13 seconds
- 2025-07-01
  - PASS 11 seconds
  - PASS 13 seconds
  - PASS 17 seconds
  - PASS 14 seconds
  - PASS 12 seconds
  - PASS 12 seconds
- 2025-07-02 PASS 12 seconds
- 2025-07-03 PASS 17 seconds
- 2025-07-04 PASS 16 seconds
- 2025-07-05 PASS 13 seconds
- 2025-07-06

### Error 2025-07-06T00:46:42+00:00
```
2025-07-06T00:46:42.9597339Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-07-06T00:46:42.9603846Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-07-06T00:46:42.9650527Z === NAME  TestAccFederatedDatabaseInstance_basic
2025-07-06T00:46:42.9651604Z     resource_federated_database_instance_test.go:37: Step 1/3 error: Error running apply: exit status 1
2025-07-06T00:46:42.9652379Z         
2025-07-06T00:46:42.9653034Z         Error: error when getting project properties after create
2025-07-06T00:46:42.9653578Z         
2025-07-06T00:46:42.9654081Z           with mongodbatlas_project.test,
2025-07-06T00:46:42.9655105Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-07-06T00:46:42.9656034Z           13: resource "mongodbatlas_project" "test" {
2025-07-06T00:46:42.9656518Z         
2025-07-06T00:46:42.9657288Z         error getting project (6869c400690ae45e168bcc72): error getting project's
2025-07-06T00:46:42.9658073Z         limits (6869c400690ae45e168bcc72):
2025-07-06T00:46:42.9659209Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c400690ae45e168bcc72/limits
2025-07-06T00:46:42.9660355Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:46:42.9661340Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:46:42.9662010Z         BadRequestDetail: 
2025-07-06T00:46:42.9662553Z --- FAIL: TestAccFederatedDatabaseInstance_basic (34.90s)
```

- 2025-07-07 PASS 12 seconds
- 2025-07-08 PASS 13 seconds
- 2025-07-09 PASS 18 seconds
- 2025-07-10 PASS 12 seconds