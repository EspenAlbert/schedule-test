# config/alertconfiguration/TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.04s
[2026-07-11 00:45](#error-2026-07-11t0045540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 95.06s
[2026-07-16 00:44](#error-2026-07-16t0044100000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.04s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s
[2026-07-23 00:46](#error-2026-07-23t0046480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7266426Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-07-09T00:58:00.7456930Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-07-09T00:58:00.7471308Z   
2026-07-09T00:58:00.7471731Z     resource_test.go:579: Step 1/1 error: Error running apply: exit status 1
2026-07-09T00:58:00.7472132Z         
2026-07-09T00:58:00.7472582Z         Error: error creating project: test-acc-tf-p-8644588340641631847
2026-07-09T00:58:00.7472975Z         
2026-07-09T00:58:00.7473306Z           with mongodbatlas_project.test,
2026-07-09T00:58:00.7473961Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T00:58:00.7474685Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T00:58:00.7475018Z         
2026-07-09T00:58:00.7475706Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-09T00:58:00.7476429Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-09T00:58:00.7477137Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-09T00:58:00.7477808Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-09T00:58:00.7478264Z         BadRequestDetail: 
2026-07-09T00:58:00.7478698Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (1.41s)
```

- 2026-07-10 PASS 23 seconds
- 2026-07-11

### Error 2026-07-11T00:45:54+00:00
```
2026-07-11T00:45:54.1660469Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-07-11T00:45:54.1684569Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-07-11T00:45:54.1730650Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-07-11T00:45:54.1731529Z     resource_test.go:579: Step 1/1 error: Error running apply: exit status 1
2026-07-11T00:45:54.1731960Z         
2026-07-11T00:45:54.1732420Z         Error: error creating project: test-acc-tf-p-5827636216699729269
2026-07-11T00:45:54.1732812Z         
2026-07-11T00:45:54.1733145Z           with mongodbatlas_project.test,
2026-07-11T00:45:54.1733807Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:45:54.1734482Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:45:54.1734948Z         
2026-07-11T00:45:54.1735460Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:45:54.1736341Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:45:54.1736972Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:54.1737521Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (95.64s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 16 seconds
- 2026-07-14 PASS a minute
- 2026-07-15 PASS 21 seconds
- 2026-07-16

### Error 2026-07-16T00:44:10+00:00
```
2026-07-16T00:44:10.3636767Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-07-16T00:44:10.3673335Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-07-16T00:44:10.3705829Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-07-16T00:44:10.3708088Z     resource_test.go:579: Step 1/1 error: Error running apply: exit status 1
2026-07-16T00:44:10.3708705Z         
2026-07-16T00:44:10.3709346Z         Error: error creating project: test-acc-tf-p-9006328558900328725
2026-07-16T00:44:10.3709953Z         
2026-07-16T00:44:10.3710448Z           with mongodbatlas_project.test,
2026-07-16T00:44:10.3711586Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:44:10.3712420Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:44:10.3712771Z         
2026-07-16T00:44:10.3713301Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:44:10.3714017Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:44:10.3714644Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:10.3715837Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (76.42s)
```

- 2026-07-17 PASS 33 seconds
- 2026-07-18 PASS 35 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3755122Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-07-21T00:53:42.3867710Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-07-21T00:53:42.3876365Z   
2026-07-21T00:53:42.3876660Z     resource_test.go:579: Step 1/1 error: Error running apply: exit status 1
2026-07-21T00:53:42.3876937Z         
2026-07-21T00:53:42.3877254Z         Error: error creating project: test-acc-tf-p-6674093055312546908
2026-07-21T00:53:42.3877528Z         
2026-07-21T00:53:42.3877760Z           with mongodbatlas_project.test,
2026-07-21T00:53:42.3878191Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:53:42.3878678Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:53:42.3878902Z         
2026-07-21T00:53:42.3879226Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-21T00:53:42.3879666Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-21T00:53:42.3880160Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-21T00:53:42.3880590Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-21T00:53:42.3880902Z         BadRequestDetail: 
2026-07-21T00:53:42.3881205Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (0.73s)
```

- 2026-07-22 PASS 31 seconds
- 2026-07-23

### Error 2026-07-23T00:46:48+00:00
```
2026-07-23T00:46:48.4078720Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-07-23T00:46:48.4099271Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-07-23T00:46:48.4143563Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2026-07-23T00:46:48.4144173Z     resource_test.go:579: Step 1/1 error: Error running apply: exit status 1
2026-07-23T00:46:48.4144528Z         
2026-07-23T00:46:48.4144917Z         Error: error creating project: test-acc-tf-p-1101005460939428484
2026-07-23T00:46:48.4145406Z         
2026-07-23T00:46:48.4145711Z           with mongodbatlas_project.test,
2026-07-23T00:46:48.4146241Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:46:48.4146782Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:46:48.4147123Z         
2026-07-23T00:46:48.4147625Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:46:48.4148185Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:46:48.4148692Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:48.4149214Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (64.58s)
```

- 2026-07-24 PASS 27 seconds
- 2026-07-25 PASS 13 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 21 seconds
- 2026-07-28 PASS 13 seconds
- 2026-07-29 PASS 23 seconds
- 2026-07-30 PASS 11 seconds
- 2026-07-31 PASS 30 seconds
- 2026-08-01 PASS 15 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 24 seconds
- 2026-08-04 PASS 11 seconds
- 2026-08-05 PASS 26 seconds
- 2026-08-06 PASS 15 seconds
- 2026-08-07 PASS 24 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 22 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 32 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 29 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 23 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 15 seconds
  - PASS 32 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 33 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
