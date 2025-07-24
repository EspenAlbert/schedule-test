# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-29 00:34](#error-2025-06-29t0034190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686089c349709c3a5a3c9f01/limits | qa | flaky_500 | 61.07s
[2025-07-06 00:34](#error-2025-07-06t0034000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c44a7267b5775b683d74/limits | qa | flaky_500 | 46.08s
[2025-07-10 13:09](#error-2025-07-10t1309010000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb45006d8d55bb9e7650/limits | qa | flaky_500 | 36.01s
[2025-07-13 00:34](#error-2025-07-13t0034200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6872fec1006d8d55bbaa351e/limits | qa | flaky_500 | 35.00s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 21 seconds
- 2025-06-26 PASS 26 seconds
- 2025-06-27 PASS 32 seconds
- 2025-06-28 PASS 15 seconds
- 2025-06-29

### Error 2025-06-29T00:34:19+00:00
```
2025-06-29T00:34:19.1607616Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-06-29T00:34:19.1611153Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-06-29T00:34:19.1683461Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2025-06-29T00:34:19.1684051Z     resource_maintenance_window_test.go:42: Step 2/5 error: Error running pre-apply plan: exit status 1
2025-06-29T00:34:19.1684493Z         
2025-06-29T00:34:19.1684990Z         Error: error when getting project properties after create
2025-06-29T00:34:19.1685338Z         
2025-06-29T00:34:19.1685634Z           with mongodbatlas_project.test,
2025-06-29T00:34:19.1686244Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T00:34:19.1686798Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:34:19.1687080Z         
2025-06-29T00:34:19.1687514Z         error getting project (686089c349709c3a5a3c9f01): error getting project's
2025-06-29T00:34:19.1687957Z         limits (686089c349709c3a5a3c9f01):
2025-06-29T00:34:19.1688516Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089c349709c3a5a3c9f01/limits
2025-06-29T00:34:19.1689306Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:34:19.1689873Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:34:19.1690261Z         BadRequestDetail: 
2025-06-29T00:34:19.1690571Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (61.71s)
```

- 2025-06-30 PASS 26 seconds
- 2025-07-01
  - PASS 25 seconds
  - PASS 26 seconds
  - PASS 30 seconds
  - PASS 25 seconds
  - PASS 33 seconds
  - PASS 16 seconds
- 2025-07-02 PASS 15 seconds
- 2025-07-03 PASS 27 seconds
- 2025-07-04 PASS 20 seconds
- 2025-07-05 PASS 29 seconds
- 2025-07-06

### Error 2025-07-06T00:34:00+00:00
```
2025-07-06T00:34:00.2668783Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-07-06T00:34:00.2674786Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-07-06T00:34:00.2790016Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2025-07-06T00:34:00.2791088Z     resource_maintenance_window_test.go:42: Step 4/5 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:34:00.2791879Z         
2025-07-06T00:34:00.2792507Z         Error: error when getting project properties after create
2025-07-06T00:34:00.2793035Z         
2025-07-06T00:34:00.2793522Z           with mongodbatlas_project.test,
2025-07-06T00:34:00.2794523Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:34:00.2795614Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:34:00.2795965Z         
2025-07-06T00:34:00.2796389Z         error getting project (6869c44a7267b5775b683d74): error getting project's
2025-07-06T00:34:00.2796828Z         limits (6869c44a7267b5775b683d74):
2025-07-06T00:34:00.2797369Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c44a7267b5775b683d74/limits
2025-07-06T00:34:00.2798019Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:34:00.2798577Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:34:00.2798970Z         BadRequestDetail: 
2025-07-06T00:34:00.2799279Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (46.81s)
```

- 2025-07-07 PASS 25 seconds
- 2025-07-08 PASS 30 seconds
- 2025-07-09 PASS 31 seconds
- 2025-07-10
  - PASS 26 seconds
  - FAIL 36 seconds

### Error 2025-07-10T13:09:01+00:00
```
2025-07-10T13:09:01.7505272Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-07-10T13:09:01.7512901Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-07-10T13:09:01.7644122Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2025-07-10T13:09:01.7645151Z     resource_maintenance_window_test.go:42: Step 1/5 error: Error running apply: exit status 1
2025-07-10T13:09:01.7645906Z         
2025-07-10T13:09:01.7646776Z         Error: error when getting project properties after create
2025-07-10T13:09:01.7647352Z         
2025-07-10T13:09:01.7647872Z           with mongodbatlas_project.test,
2025-07-10T13:09:01.7648937Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:09:01.7649899Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:09:01.7650619Z         
2025-07-10T13:09:01.7651445Z         error getting project (686fbb45006d8d55bb9e7650): error getting project's
2025-07-10T13:09:01.7652253Z         limits (686fbb45006d8d55bb9e7650):
2025-07-10T13:09:01.7653292Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb45006d8d55bb9e7650/limits
2025-07-10T13:09:01.7654483Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:09:01.7655516Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:09:01.7656205Z         BadRequestDetail: 
2025-07-10T13:09:01.7656957Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (36.08s)
```

- 2025-07-11 PASS 32 seconds
- 2025-07-12 PASS 24 seconds
- 2025-07-13

### Error 2025-07-13T00:34:20+00:00
```
2025-07-13T00:34:20.7913811Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-07-13T00:34:20.7919251Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-07-13T00:34:20.7944997Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2025-07-13T00:34:20.7945996Z     resource_maintenance_window_test.go:42: Step 1/5 error: Error running apply: exit status 1
2025-07-13T00:34:20.7946730Z         
2025-07-13T00:34:20.7947395Z         Error: error when getting project properties after create
2025-07-13T00:34:20.7947959Z         
2025-07-13T00:34:20.7948469Z           with mongodbatlas_project.test,
2025-07-13T00:34:20.7949695Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-13T00:34:20.7950648Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-13T00:34:20.7951142Z         
2025-07-13T00:34:20.7951931Z         error getting project (6872fec1006d8d55bbaa351e): error getting project's
2025-07-13T00:34:20.7952746Z         limits (6872fec1006d8d55bbaa351e):
2025-07-13T00:34:20.7953783Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fec1006d8d55bbaa351e/limits
2025-07-13T00:34:20.7954969Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T00:34:20.7955994Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T00:34:20.7956681Z         BadRequestDetail: 
2025-07-13T00:34:20.7957227Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (35.03s)
```

- 2025-07-14 PASS 29 seconds
- 2025-07-15 PASS 26 seconds
- 2025-07-16 PASS 27 seconds
- 2025-07-17 PASS 23 seconds
- 2025-07-18 PASS 25 seconds
- 2025-07-19 PASS 24 seconds
- 2025-07-20 PASS 20 seconds
- 2025-07-21 PASS 30 seconds
- 2025-07-22 PASS 27 seconds
- 2025-07-23
  - PASS 18 seconds
  - PASS 35 seconds
  - PASS 54 seconds
- 2025-07-24 PASS 27 seconds