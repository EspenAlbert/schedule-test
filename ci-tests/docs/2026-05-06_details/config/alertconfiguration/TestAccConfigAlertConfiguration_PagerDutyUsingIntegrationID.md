# config/alertconfiguration/TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:46](#error-2026-04-07t0046210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.08s
[2026-04-09 00:40](#error-2026-04-09t0040120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 97.00s
[2026-04-11 00:44](#error-2026-04-11t0044210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.03s
[2026-05-05 00:52](#error-2026-05-05t0052570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:46:21+00:00
```
2026-04-07T00:46:21.9822148Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-04-07T00:46:21.9841931Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-04-07T00:46:21.9877350Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-04-07T00:46:21.9877978Z     resource_test.go:546: Step 1/1 error: Error running apply: exit status 1
2026-04-07T00:46:21.9878364Z         
2026-04-07T00:46:21.9878810Z         Error: error creating project: test-acc-tf-p-8348287112032366859
2026-04-07T00:46:21.9879184Z         
2026-04-07T00:46:21.9879493Z           with mongodbatlas_project.test,
2026-04-07T00:46:21.9880131Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-07T00:46:21.9880718Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-07T00:46:21.9881027Z         
2026-04-07T00:46:21.9881503Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-07T00:46:21.9882296Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-07T00:46:21.9882905Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:46:21.9883419Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (69.83s)
```

- 2026-04-08 PASS 29 seconds
- 2026-04-09

### Error 2026-04-09T00:40:12+00:00
```
2026-04-09T00:40:12.9868273Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-04-09T00:40:12.9883944Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-04-09T00:40:12.9924191Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-04-09T00:40:12.9925048Z     resource_test.go:546: Step 1/1 error: Error running apply: exit status 1
2026-04-09T00:40:12.9925693Z         
2026-04-09T00:40:12.9926406Z         Error: error creating project: test-acc-tf-p-6086890935216606262
2026-04-09T00:40:12.9926985Z         
2026-04-09T00:40:12.9927448Z           with mongodbatlas_project.test,
2026-04-09T00:40:12.9928080Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:40:12.9928673Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:40:12.9928989Z         
2026-04-09T00:40:12.9929483Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:40:12.9930354Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:40:12.9930963Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:12.9931490Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (97.05s)
```

- 2026-04-10 PASS 20 seconds
- 2026-04-11

### Error 2026-04-11T00:44:21+00:00
```
2026-04-11T00:44:21.8805570Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-04-11T00:44:21.8832273Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-04-11T00:44:21.8865467Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-04-11T00:44:21.8866061Z     resource_test.go:546: Step 1/1 error: Error running apply: exit status 1
2026-04-11T00:44:21.8866434Z         
2026-04-11T00:44:21.8866846Z         Error: error creating project: test-acc-tf-p-5664571300641571839
2026-04-11T00:44:21.8867187Z         
2026-04-11T00:44:21.8867607Z           with mongodbatlas_project.test,
2026-04-11T00:44:21.8868190Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:44:21.8868734Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:44:21.8869041Z         
2026-04-11T00:44:21.8869578Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:44:21.8870182Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:44:21.8870741Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:44:21.8871223Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (77.33s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 30 seconds
- 2026-04-14 PASS 43 seconds
- 2026-04-15 PASS 19 seconds
- 2026-04-16 PASS 17 seconds
- 2026-04-17 PASS 19 seconds
- 2026-04-18 PASS a minute
- 2026-04-19: MISSING
- 2026-04-20 PASS 18 seconds
- 2026-04-21 PASS a minute
- 2026-04-22 PASS 29 seconds
- 2026-04-23 PASS 15 seconds
- 2026-04-24 PASS 18 seconds
- 2026-04-25 PASS 26 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 28 seconds
- 2026-04-28 PASS 50 seconds
- 2026-04-29 PASS 20 seconds
- 2026-04-30 PASS 53 seconds
- 2026-05-01 PASS 32 seconds
- 2026-05-02 PASS a minute
- 2026-05-03: MISSING
- 2026-05-04 PASS 30 seconds
- 2026-05-05

### Error 2026-05-05T00:52:57+00:00
```
2026-05-05T00:52:57.2715644Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-05T00:52:57.2737212Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-05T00:52:57.2778385Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-05-05T00:52:57.2779058Z     resource_test.go:579: Step 1/1 error: Error running apply: exit status 1
2026-05-05T00:52:57.2779455Z         
2026-05-05T00:52:57.2779884Z         Error: error creating project: test-acc-tf-p-5758013398875311513
2026-05-05T00:52:57.2780269Z         
2026-05-05T00:52:57.2780574Z           with mongodbatlas_project.test,
2026-05-05T00:52:57.2781204Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-05T00:52:57.2782147Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-05T00:52:57.2782638Z         
2026-05-05T00:52:57.2783122Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T00:52:57.2783786Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T00:52:57.2784389Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:52:57.2784915Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (77.50s)
```

- 2026-05-06 PASS 16 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 19 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 29 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 29 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 20 seconds
  - PASS 30 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 32 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 29 seconds
- 2026-05-04 PASS 30 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 24 seconds
