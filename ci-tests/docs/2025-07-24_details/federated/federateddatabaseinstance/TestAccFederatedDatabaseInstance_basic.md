# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_basic Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 34) FAIL(x 3)
Success rate: 91.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:46](#error-2025-07-06t0046420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c400690ae45e168bcc72/limits | qa | flaky_500 | 34.09s
[2025-07-10 13:21](#error-2025-07-10t1321490000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbafb006d8d55bb9e6125/dataFederation | qa | flaky_500 | 129.03s
[2025-07-20 00:47](#error-2025-07-20t0047580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3935426db7026b5b1590/limits | qa | flaky_500 | 33.00s

## Timeline
- 2025-06-24: MISSING
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
- 2025-07-10
  - PASS 12 seconds
  - FAIL 2 minutes

### Error 2025-07-10T13:21:49+00:00
```
2025-07-10T13:21:49.2107274Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-07-10T13:21:49.2111505Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-07-10T13:21:49.2223698Z === NAME  TestAccFederatedDatabaseInstance_basic
2025-07-10T13:21:49.2224312Z     resource_federated_database_instance_test.go:37: Step 1/3 error: Error running apply: exit status 1
2025-07-10T13:21:49.2224760Z         
2025-07-10T13:21:49.2226690Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbafb006d8d55bb9e6125/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-10T13:21:49.2228120Z         
2025-07-10T13:21:49.2228524Z           with mongodbatlas_federated_database_instance.test,
2025-07-10T13:21:49.2229365Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-07-10T13:21:49.2230137Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-07-10T13:21:49.2230587Z         
2025-07-10T13:21:49.2244776Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T13:21:49.2245311Z         
2025-07-10T13:21:49.2245600Z         Error: error when destroying resource
2025-07-10T13:21:49.2245937Z         
2025-07-10T13:21:49.2246315Z         error deleting project (686fbafb006d8d55bb9e6125):
2025-07-10T13:21:49.2247035Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbafb006d8d55bb9e6125
2025-07-10T13:21:49.2247569Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-10T13:21:49.2248137Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_DATA_LAKES") Detail: Cannot close group
2025-07-10T13:21:49.2248829Z         while it has active federated database instances; please terminate all
2025-07-10T13:21:49.2249589Z         federated database instances. Reason: Conflict. Params: [], BadRequestDetail:
2025-07-10T13:21:49.2250171Z --- FAIL: TestAccFederatedDatabaseInstance_basic (129.28s)
```

- 2025-07-11 PASS 12 seconds
- 2025-07-12 PASS 10 seconds
- 2025-07-13 PASS 11 seconds
- 2025-07-14 PASS 16 seconds
- 2025-07-15 PASS 13 seconds
- 2025-07-16 PASS 17 seconds
- 2025-07-17 PASS 12 seconds
- 2025-07-18 PASS 18 seconds
- 2025-07-19 PASS 12 seconds
- 2025-07-20

### Error 2025-07-20T00:47:58+00:00
```
2025-07-20T00:47:58.8011520Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-07-20T00:47:58.8018033Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-07-20T00:47:58.8047490Z === NAME  TestAccFederatedDatabaseInstance_basic
2025-07-20T00:47:58.8048702Z     resource_federated_database_instance_test.go:37: Step 1/3 error: Error running apply: exit status 1
2025-07-20T00:47:58.8049535Z         
2025-07-20T00:47:58.8050202Z         Error: error when getting project properties after create
2025-07-20T00:47:58.8050771Z         
2025-07-20T00:47:58.8051292Z           with mongodbatlas_project.test,
2025-07-20T00:47:58.8052352Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-07-20T00:47:58.8053317Z           13: resource "mongodbatlas_project" "test" {
2025-07-20T00:47:58.8053824Z         
2025-07-20T00:47:58.8054619Z         error getting project (687c3935426db7026b5b1590): error getting project's
2025-07-20T00:47:58.8055429Z         limits (687c3935426db7026b5b1590):
2025-07-20T00:47:58.8056624Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3935426db7026b5b1590/limits
2025-07-20T00:47:58.8057817Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:47:58.8058837Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:47:58.8059725Z         BadRequestDetail: 
2025-07-20T00:47:58.8060273Z --- FAIL: TestAccFederatedDatabaseInstance_basic (33.03s)
```

- 2025-07-21 PASS 14 seconds
- 2025-07-22 PASS 14 seconds
- 2025-07-23
  - PASS 18 seconds
  - PASS 17 seconds
- 2025-07-24 PASS 13 seconds