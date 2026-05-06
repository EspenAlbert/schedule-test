# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_autoDeferActivated Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3)
Success rate: 91.43%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:43](#error-2026-04-09t0043440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.02s
[2026-04-11 00:48](#error-2026-04-11t0048250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 113.07s
[2026-04-30 01:01](#error-2026-04-30t0101180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 95.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 20 seconds
- 2026-04-08 PASS 7 seconds
- 2026-04-09

### Error 2026-04-09T00:43:44+00:00
```
2026-04-09T00:43:44.7706550Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-04-09T00:43:44.7708665Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-04-09T00:43:44.7751437Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-04-09T00:43:44.7752422Z     resource_maintenance_window_test.go:80: Step 1/1 error: Error running apply: exit status 1
2026-04-09T00:43:44.7753136Z         
2026-04-09T00:43:44.7753760Z         Error: error creating project: test-acc-tf-p-7694003723637760432
2026-04-09T00:43:44.7754272Z         
2026-04-09T00:43:44.7754767Z           with mongodbatlas_project.test,
2026-04-09T00:43:44.7755849Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:43:44.7756579Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:43:44.7756905Z         
2026-04-09T00:43:44.7757872Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:43:44.7758911Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:43:44.7760140Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:43:44.7760993Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (69.22s)
```

- 2026-04-10 PASS 7 seconds
- 2026-04-11

### Error 2026-04-11T00:48:25+00:00
```
2026-04-11T00:48:25.0686034Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-04-11T00:48:25.0687529Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-04-11T00:48:25.0736531Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-04-11T00:48:25.0737115Z     resource_maintenance_window_test.go:80: Step 1/1 error: Error running apply: exit status 1
2026-04-11T00:48:25.0739354Z         
2026-04-11T00:48:25.0739786Z         Error: error creating project: test-acc-tf-p-5106475485513868394
2026-04-11T00:48:25.0740141Z         
2026-04-11T00:48:25.0740448Z           with mongodbatlas_project.test,
2026-04-11T00:48:25.0741014Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:48:25.0741559Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:48:25.0741859Z         
2026-04-11T00:48:25.0742302Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:48:25.0742910Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:48:25.0743454Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:25.0743930Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (113.74s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 9 seconds
- 2026-04-14 PASS 11 seconds
- 2026-04-15 PASS 9 seconds
- 2026-04-16 PASS 11 seconds
- 2026-04-17 PASS 11 seconds
- 2026-04-18 PASS 10 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 12 seconds
- 2026-04-21 PASS 10 seconds
- 2026-04-22 PASS 8 seconds
- 2026-04-23 PASS 12 seconds
- 2026-04-24 PASS 10 seconds
- 2026-04-25 PASS 10 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 9 seconds
- 2026-04-28 PASS 10 seconds
- 2026-04-29 PASS 13 seconds
- 2026-04-30

### Error 2026-04-30T01:01:18+00:00
```
2026-04-30T01:01:18.1154254Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-04-30T01:01:18.1155683Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-04-30T01:01:18.1369240Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-04-30T01:01:18.1370351Z     resource_maintenance_window_test.go:80: Step 1/1 error: Error running apply: exit status 1
2026-04-30T01:01:18.1370996Z         
2026-04-30T01:01:18.1371643Z         Error: error creating project: test-acc-tf-p-8401166220825784237
2026-04-30T01:01:18.1372042Z         
2026-04-30T01:01:18.1372495Z           with mongodbatlas_project.test,
2026-04-30T01:01:18.1373520Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-30T01:01:18.1374217Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-30T01:01:18.1374535Z         
2026-04-30T01:01:18.1375140Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T01:01:18.1375908Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T01:01:18.1376639Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:18.1377249Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (95.28s)
```

- 2026-05-01 PASS 8 seconds
- 2026-05-02 PASS 11 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 7 seconds
- 2026-05-05 PASS a minute
- 2026-05-06 PASS 11 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 9 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 7 seconds
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
  - PASS 8 seconds
  - PASS 9 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 8 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 8 seconds
- 2026-05-04 PASS 9 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 10 seconds
