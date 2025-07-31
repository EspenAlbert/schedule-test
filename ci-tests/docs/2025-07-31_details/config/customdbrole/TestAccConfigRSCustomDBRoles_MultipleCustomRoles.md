# config/customdbrole/TestAccConfigRSCustomDBRoles_MultipleCustomRoles Test Details
# Found 33 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:33](#error-2025-07-06t0033170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4027267b5775b682a3c/limits | qa | flaky_500 | 55.03s
[2025-07-10 13:08](#error-2025-07-10t1308210000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb05006d8d55bb9e68f6/limits | qa | flaky_500 | 62.04s
[2025-07-20 00:35](#error-2025-07-20t0035100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c393b426db7026b5b188f/limits | qa | flaky_500 | 54.06s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 28 seconds
- 2025-07-03 PASS 32 seconds
- 2025-07-04 PASS 28 seconds
- 2025-07-05 PASS 34 seconds
- 2025-07-06

### Error 2025-07-06T00:33:17+00:00
```
2025-07-06T00:33:17.8237666Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-06T00:33:17.8240850Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-06T00:33:17.8390098Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-06T00:33:17.8391117Z     resource_custom_db_role_test.go:367: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-07-06T00:33:17.8391828Z         
2025-07-06T00:33:17.8392433Z         Error: error when getting project properties after create
2025-07-06T00:33:17.8392956Z         
2025-07-06T00:33:17.8393435Z           with mongodbatlas_project.test,
2025-07-06T00:33:17.8394430Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:33:17.8397100Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:33:17.8397779Z         
2025-07-06T00:33:17.8398685Z         error getting project (6869c4027267b5775b682a3c): error getting project's
2025-07-06T00:33:17.8399589Z         limits (6869c4027267b5775b682a3c):
2025-07-06T00:33:17.8400532Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4027267b5775b682a3c/limits
2025-07-06T00:33:17.8401812Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:33:17.8402754Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:33:17.8403549Z         BadRequestDetail: 
2025-07-06T00:33:17.8424754Z    test_working_directory=/tmp/plugintest2041085861 test_step_number=2
2025-07-06T00:33:17.8437848Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (55.34s)
```

- 2025-07-07 PASS 28 seconds
- 2025-07-08 PASS 35 seconds
- 2025-07-09 PASS 34 seconds
- 2025-07-10
  - PASS 28 seconds
  - FAIL a minute

### Error 2025-07-10T13:08:21+00:00
```
2025-07-10T13:08:21.1102987Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-10T13:08:21.1132512Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-10T13:08:21.1387717Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-10T13:08:21.1388882Z     resource_custom_db_role_test.go:367: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-07-10T13:08:21.1389661Z         
2025-07-10T13:08:21.1390269Z         Error: error when getting project properties after create
2025-07-10T13:08:21.1390794Z         
2025-07-10T13:08:21.1391280Z           with mongodbatlas_project.test,
2025-07-10T13:08:21.1392301Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:08:21.1393235Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:08:21.1393730Z         
2025-07-10T13:08:21.1394731Z         error getting project (686fbb05006d8d55bb9e68f6): error getting project's
2025-07-10T13:08:21.1395518Z         limits (686fbb05006d8d55bb9e68f6):
2025-07-10T13:08:21.1416020Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb05006d8d55bb9e68f6/limits
2025-07-10T13:08:21.1417501Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:08:21.1418504Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:08:21.1419194Z         BadRequestDetail: 
2025-07-10T13:08:21.1419811Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (62.41s)
```

- 2025-07-11 PASS 31 seconds
- 2025-07-12 PASS 32 seconds
- 2025-07-13 PASS 27 seconds
- 2025-07-14 PASS 40 seconds
- 2025-07-15 PASS 33 seconds
- 2025-07-16 PASS 36 seconds
- 2025-07-17 PASS 31 seconds
- 2025-07-18 PASS 34 seconds
- 2025-07-19 PASS 31 seconds
- 2025-07-20

### Error 2025-07-20T00:35:10+00:00
```
2025-07-20T00:35:10.2459325Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-20T00:35:10.2461579Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-20T00:35:10.2513388Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-20T00:35:10.2514025Z     resource_custom_db_role_test.go:367: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-20T00:35:10.2514473Z         
2025-07-20T00:35:10.2514838Z         Error: error when getting project properties after create
2025-07-20T00:35:10.2515154Z         
2025-07-20T00:35:10.2515445Z           with mongodbatlas_project.test,
2025-07-20T00:35:10.2516026Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-20T00:35:10.2516557Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-20T00:35:10.2516833Z         
2025-07-20T00:35:10.2517272Z         error getting project (687c393b426db7026b5b188f): error getting project's
2025-07-20T00:35:10.2517716Z         limits (687c393b426db7026b5b188f):
2025-07-20T00:35:10.2518267Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393b426db7026b5b188f/limits
2025-07-20T00:35:10.2518912Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:35:10.2519479Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:35:10.2519855Z         BadRequestDetail: 
2025-07-20T00:35:10.2520200Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (54.56s)
```

- 2025-07-21 PASS 39 seconds
- 2025-07-22 PASS 36 seconds
- 2025-07-23
  - PASS 29 seconds
  - PASS 30 seconds
  - PASS 35 seconds
- 2025-07-24 PASS 30 seconds
- 2025-07-25 PASS 30 seconds
- 2025-07-26 PASS 30 seconds
- 2025-07-27 PASS 51 seconds
- 2025-07-28 PASS 36 seconds
- 2025-07-29 PASS 29 seconds
- 2025-07-30 PASS 30 seconds
- 2025-07-31 PASS 44 seconds