# config/maintenancewindow/TestAccConfigDSMaintenanceWindow_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:43](#error-2026-04-09t0043440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.06s
[2026-04-11 00:48](#error-2026-04-11t0048250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.00s
[2026-04-30 01:01](#error-2026-04-30t0101180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.07s
[2026-05-05 00:55](#error-2026-05-05t0055080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.07s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 17 seconds
- 2026-04-08 PASS 7 seconds
- 2026-04-09

### Error 2026-04-09T00:43:44+00:00
```
2026-04-09T00:43:44.7704150Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2026-04-09T00:43:44.7708180Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2026-04-09T00:43:44.7722245Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2026-04-09T00:43:44.7723290Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-04-09T00:43:44.7724059Z         
2026-04-09T00:43:44.7724766Z         Error: error creating project: test-acc-tf-p-8652317965344580190
2026-04-09T00:43:44.7725382Z         
2026-04-09T00:43:44.7725874Z           with mongodbatlas_project.test,
2026-04-09T00:43:44.7726909Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:43:44.7727966Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:43:44.7728446Z         
2026-04-09T00:43:44.7729214Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:43:44.7730316Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:43:44.7731322Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:43:44.7732018Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (67.58s)
```

- 2026-04-10 PASS 10 seconds
- 2026-04-11

### Error 2026-04-11T00:48:25+00:00
```
2026-04-11T00:48:25.0684190Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2026-04-11T00:48:25.0686954Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2026-04-11T00:48:25.0719074Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2026-04-11T00:48:25.0719668Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-04-11T00:48:25.0720095Z         
2026-04-11T00:48:25.0720549Z         Error: error creating project: test-acc-tf-p-7911827594999752635
2026-04-11T00:48:25.0720939Z         
2026-04-11T00:48:25.0721313Z           with mongodbatlas_project.test,
2026-04-11T00:48:25.0722173Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:48:25.0722858Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:48:25.0723159Z         
2026-04-11T00:48:25.0723650Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:48:25.0724484Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:48:25.0725051Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:25.0725474Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (82.02s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 10 seconds
- 2026-04-14 PASS 10 seconds
- 2026-04-15 PASS 10 seconds
- 2026-04-16 PASS 11 seconds
- 2026-04-17 PASS 11 seconds
- 2026-04-18 PASS 10 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 12 seconds
- 2026-04-21 PASS 12 seconds
- 2026-04-22 PASS 8 seconds
- 2026-04-23 PASS 10 seconds
- 2026-04-24 PASS 11 seconds
- 2026-04-25 PASS 11 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 11 seconds
- 2026-04-28 PASS 11 seconds
- 2026-04-29 PASS 13 seconds
- 2026-04-30

### Error 2026-04-30T01:01:18+00:00
```
2026-04-30T01:01:18.1152540Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2026-04-30T01:01:18.1155193Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2026-04-30T01:01:18.1235193Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2026-04-30T01:01:18.1237126Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-04-30T01:01:18.1238834Z         
2026-04-30T01:01:18.1240341Z         Error: error creating project: test-acc-tf-p-3017119853717133321
2026-04-30T01:01:18.1241895Z         
2026-04-30T01:01:18.1243979Z           with mongodbatlas_project.test,
2026-04-30T01:01:18.1244988Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-30T01:01:18.1249332Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-30T01:01:18.1250648Z         
2026-04-30T01:01:18.1251403Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T01:01:18.1255016Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T01:01:18.1255703Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:18.1256183Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (85.67s)
```

- 2026-05-01 PASS 8 seconds
- 2026-05-02 PASS 11 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 10 seconds
- 2026-05-05

### Error 2026-05-05T00:55:08+00:00
```
2026-05-05T00:55:08.8404574Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2026-05-05T00:55:08.8407220Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2026-05-05T00:55:08.8419633Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2026-05-05T00:55:08.8420972Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-05-05T00:55:08.8422059Z         
2026-05-05T00:55:08.8422854Z         Error: error creating project: test-acc-tf-p-2201199730236311018
2026-05-05T00:55:08.8423531Z         
2026-05-05T00:55:08.8424081Z           with mongodbatlas_project.test,
2026-05-05T00:55:08.8424861Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-05T00:55:08.8425471Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-05T00:55:08.8425793Z         
2026-05-05T00:55:08.8426288Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T00:55:08.8426946Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T00:55:08.8427553Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:55:08.8427993Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (69.70s)
```

- 2026-05-06 PASS 11 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 9 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 6 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 7 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 10 seconds
  - PASS 9 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 7 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 7 seconds
- 2026-05-04 PASS 9 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 11 seconds
