# project/projectinvitation/TestAccProjectDSProjectInvitation_basic Test Details
# Found 37 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 32) FAIL(x 5)
Success rate: 86.49%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:01](#error-2026-07-09t0101390000) |  | dev | flaky_500 | 54.00s
[2026-07-11 00:54](#error-2026-07-11t0054380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s
[2026-07-14 00:43](#error-2026-07-14t0043190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.10s
[2026-07-16 00:45](#error-2026-07-16t0045140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.07s
[2026-07-18 00:49](#error-2026-07-18t0049470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:01:39+00:00
```
2026-07-09T01:01:39.8801395Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-07-09T01:01:39.8811581Z   
2026-07-09T01:01:39.8812107Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-07-09T01:01:39.8812596Z         
2026-07-09T01:01:39.8813040Z         Error: error creating project: test-acc-tf-p-2099566477708769051
2026-07-09T01:01:39.8813588Z         
2026-07-09T01:01:39.8813926Z           with mongodbatlas_project.test,
2026-07-09T01:01:39.8814578Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-07-09T01:01:39.8815194Z           13: 		resource "mongodbatlas_project" "test" {
2026-07-09T01:01:39.8815522Z         
2026-07-09T01:01:39.8816018Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-07-09T01:01:39.8816461Z         type
2026-07-09T01:01:39.8816787Z --- FAIL: TestAccProjectDSProjectInvitation_basic (54.02s)
```

- 2026-07-10 PASS 9 seconds
- 2026-07-11

### Error 2026-07-11T00:54:38+00:00
```
2026-07-11T00:54:38.5762358Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-07-11T00:54:38.5773341Z    test_terraform_path=/home/runner/work/_temp/dce4fb13-314b-4087-8e22-7e2b5b89b3c2/terraform test_working_directory=/tmp/plugintest3398524278 test_step_number=1 test_name=TestAccProjectDSProjectInvitation_basic
2026-07-11T00:54:38.5774547Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-07-11T00:54:38.5775034Z         
2026-07-11T00:54:38.5775472Z         Error: error creating project: test-acc-tf-p-786424147239025500
2026-07-11T00:54:38.5775863Z         
2026-07-11T00:54:38.5776307Z           with mongodbatlas_project.test,
2026-07-11T00:54:38.5776957Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-07-11T00:54:38.5777699Z           13: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:54:38.5778033Z         
2026-07-11T00:54:38.5778530Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:54:38.5779218Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:54:38.5779843Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:38.5780311Z --- FAIL: TestAccProjectDSProjectInvitation_basic (64.84s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 10 seconds
- 2026-07-14

### Error 2026-07-14T00:43:19+00:00
```
2026-07-14T00:43:19.7897611Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-07-14T00:43:19.7913997Z   
2026-07-14T00:43:19.7914699Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-07-14T00:43:19.7915218Z         
2026-07-14T00:43:19.7915677Z         Error: error creating project: test-acc-tf-p-1548017823604813239
2026-07-14T00:43:19.7916322Z         
2026-07-14T00:43:19.7916832Z           with mongodbatlas_project.test,
2026-07-14T00:43:19.7917507Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-07-14T00:43:19.7918135Z           13: 		resource "mongodbatlas_project" "test" {
2026-07-14T00:43:19.7918474Z         
2026-07-14T00:43:19.7919163Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-14T00:43:19.7919864Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-14T00:43:19.7920501Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:43:19.7920983Z --- FAIL: TestAccProjectDSProjectInvitation_basic (62.97s)
```

- 2026-07-15 PASS 10 seconds
- 2026-07-16

### Error 2026-07-16T00:45:14+00:00
```
2026-07-16T00:45:14.1805862Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-07-16T00:45:14.1820520Z   
2026-07-16T00:45:14.1821046Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-07-16T00:45:14.1822023Z         
2026-07-16T00:45:14.1822480Z         Error: error creating project: test-acc-tf-p-7042529930658174145
2026-07-16T00:45:14.1822882Z         
2026-07-16T00:45:14.1823403Z           with mongodbatlas_project.test,
2026-07-16T00:45:14.1824101Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-07-16T00:45:14.1824707Z           13: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:45:14.1825032Z         
2026-07-16T00:45:14.1825522Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:45:14.1826195Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:45:14.1826805Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:45:14.1827277Z --- FAIL: TestAccProjectDSProjectInvitation_basic (81.71s)
```

- 2026-07-17 PASS 10 seconds
- 2026-07-18

### Error 2026-07-18T00:49:47+00:00
```
2026-07-18T00:49:47.1078671Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-07-18T00:49:47.1090041Z    test_name=TestAccProjectDSProjectInvitation_basic test_terraform_path=/home/runner/work/_temp/65291edf-7368-4b73-b148-6bdcd32dac8f/terraform test_working_directory=/tmp/plugintest4203917534 test_step_number=1
2026-07-18T00:49:47.1091502Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-07-18T00:49:47.1092013Z         
2026-07-18T00:49:47.1092463Z         Error: error creating project: test-acc-tf-p-467473727960009671
2026-07-18T00:49:47.1092861Z         
2026-07-18T00:49:47.1093192Z           with mongodbatlas_project.test,
2026-07-18T00:49:47.1093847Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-07-18T00:49:47.1094473Z           13: 		resource "mongodbatlas_project" "test" {
2026-07-18T00:49:47.1094810Z         
2026-07-18T00:49:47.1095453Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:49:47.1096159Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:49:47.1096794Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:47.1097277Z --- FAIL: TestAccProjectDSProjectInvitation_basic (71.67s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS a minute
- 2026-07-22 PASS 11 seconds
- 2026-07-23 PASS a minute
- 2026-07-24 PASS 9 seconds
- 2026-07-25 PASS 7 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 9 seconds
- 2026-07-28 PASS 8 seconds
- 2026-07-29 PASS 5 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31
  - PASS 6 seconds
  - PASS 9 seconds
  - PASS 6 seconds
- 2026-08-01 PASS 6 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 5 seconds
  - PASS 6 seconds
- 2026-08-04 PASS 7 seconds
- 2026-08-05 PASS 6 seconds
- 2026-08-06 PASS 7 seconds
- 2026-08-07 PASS 5 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 7 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 6 seconds
  - PASS 7 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 7 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 8 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 8 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 7 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
