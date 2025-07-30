# config/maintenancewindow/TestAccConfigDSMaintenanceWindow_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:34](#error-2025-07-06t0034000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c44a7267b5775b683d75/limits | qa | flaky_500 | 39.03s
[2025-07-10 13:09](#error-2025-07-10t1309010000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb45fd583001f9eec5c2/limits | qa | flaky_500 | 34.08s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 13 seconds
  - PASS 10 seconds
  - PASS 13 seconds
  - PASS 8 seconds
- 2025-07-02 PASS 8 seconds
- 2025-07-03 PASS 12 seconds
- 2025-07-04 PASS 10 seconds
- 2025-07-05 PASS 13 seconds
- 2025-07-06

### Error 2025-07-06T00:34:00+00:00
```
2025-07-06T00:34:00.2666358Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2025-07-06T00:34:00.2672896Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2025-07-06T00:34:00.2756551Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2025-07-06T00:34:00.2757708Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:34:00.2758494Z         
2025-07-06T00:34:00.2759134Z         Error: error when getting project properties after create
2025-07-06T00:34:00.2759668Z         
2025-07-06T00:34:00.2760166Z           with mongodbatlas_project.test,
2025-07-06T00:34:00.2761169Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:34:00.2762086Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:34:00.2762559Z         
2025-07-06T00:34:00.2763310Z         error getting project (6869c44a7267b5775b683d75): error getting project's
2025-07-06T00:34:00.2764089Z         limits (6869c44a7267b5775b683d75):
2025-07-06T00:34:00.2765036Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c44a7267b5775b683d75/limits
2025-07-06T00:34:00.2766339Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:34:00.2767327Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:34:00.2768020Z         BadRequestDetail: 
2025-07-06T00:34:00.2768549Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (39.28s)
```

- 2025-07-07 PASS 9 seconds
- 2025-07-08 PASS 14 seconds
- 2025-07-09 PASS 14 seconds
- 2025-07-10
  - PASS 8 seconds
  - FAIL 34 seconds

### Error 2025-07-10T13:09:01+00:00
```
2025-07-10T13:09:01.7500848Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2025-07-10T13:09:01.7510263Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2025-07-10T13:09:01.7573132Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2025-07-10T13:09:01.7574173Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-07-10T13:09:01.7574929Z         
2025-07-10T13:09:01.7575596Z         Error: error when getting project properties after create
2025-07-10T13:09:01.7576162Z         
2025-07-10T13:09:01.7576864Z           with mongodbatlas_project.test,
2025-07-10T13:09:01.7577928Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:09:01.7578886Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:09:01.7579405Z         
2025-07-10T13:09:01.7580208Z         error getting project (686fbb45fd583001f9eec5c2): error getting project's
2025-07-10T13:09:01.7581026Z         limits (686fbb45fd583001f9eec5c2):
2025-07-10T13:09:01.7582247Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb45fd583001f9eec5c2/limits
2025-07-10T13:09:01.7583451Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:09:01.7584484Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:09:01.7585167Z         BadRequestDetail: 
2025-07-10T13:09:01.7606658Z    test_terraform_path=/home/runner/work/_temp/4d88fbfe-d7c1-4ace-8448-f77c49f7b3e7/terraform test_step_number=1 test_working_directory=/tmp/plugintest501416194 test_name=TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-07-10T13:09:01.7620225Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (34.75s)
```

- 2025-07-11 PASS 12 seconds
- 2025-07-12 PASS 9 seconds
- 2025-07-13 PASS 21 seconds
- 2025-07-14 PASS 13 seconds
- 2025-07-15 PASS 8 seconds
- 2025-07-16 PASS 11 seconds
- 2025-07-17 PASS 7 seconds
- 2025-07-18 PASS 8 seconds
- 2025-07-19 PASS 8 seconds
- 2025-07-20 PASS 18 seconds
- 2025-07-21 PASS 11 seconds
- 2025-07-22 PASS 10 seconds
- 2025-07-23
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 51 seconds
- 2025-07-24 PASS 11 seconds
- 2025-07-25 PASS 8 seconds
- 2025-07-26 PASS 9 seconds
- 2025-07-27 PASS 9 seconds
- 2025-07-28 PASS 12 seconds
- 2025-07-29 PASS 10 seconds
- 2025-07-30 PASS 11 seconds