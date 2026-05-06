# project/project/TestAccProject_withInvalidLimitNameOnUpdate Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:51](#error-2026-04-07t0051420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.02s
[2026-04-11 00:48](#error-2026-04-11t0048380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.05s
[2026-04-21 00:50](#error-2026-04-21t0050450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.10s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:51:42+00:00
```
2026-04-07T00:51:42.3956111Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-04-07T00:51:42.3961434Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-04-07T00:51:42.4052892Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-04-07T00:51:42.4053943Z     resource_project_test.go:1021: Step 1/2 error: Error running apply: exit status 1
2026-04-07T00:51:42.4054691Z         
2026-04-07T00:51:42.4055460Z         Error: error creating project: test-acc-tf-p-8955620487457954862
2026-04-07T00:51:42.4056116Z         
2026-04-07T00:51:42.4056651Z           with mongodbatlas_project.test,
2026-04-07T00:51:42.4057962Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-07T00:51:42.4059038Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-07T00:51:42.4059573Z         
2026-04-07T00:51:42.4060443Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-07T00:51:42.4061701Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-07T00:51:42.4062810Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:51:42.4063631Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (65.19s)
```

- 2026-04-08 PASS 14 seconds
- 2026-04-09 PASS a minute
- 2026-04-10 PASS 13 seconds
- 2026-04-11

### Error 2026-04-11T00:48:38+00:00
```
2026-04-11T00:48:38.3778417Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-04-11T00:48:38.3784913Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-04-11T00:48:38.3970156Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-04-11T00:48:38.3970720Z     resource_project_test.go:1021: Step 1/2 error: Error running apply: exit status 1
2026-04-11T00:48:38.3971144Z         
2026-04-11T00:48:38.3971569Z         Error: error creating project: test-acc-tf-p-8215944064331217472
2026-04-11T00:48:38.3971937Z         
2026-04-11T00:48:38.3972246Z           with mongodbatlas_project.test,
2026-04-11T00:48:38.3972980Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:48:38.3973571Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:48:38.3973884Z         
2026-04-11T00:48:38.3974356Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:48:38.3975019Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:48:38.3975623Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:38.3976082Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (76.50s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 18 seconds
- 2026-04-14 PASS 53 seconds
- 2026-04-15 PASS 12 seconds
- 2026-04-16 PASS a minute
- 2026-04-17 PASS 13 seconds
- 2026-04-18 PASS 57 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 13 seconds
- 2026-04-21

### Error 2026-04-21T00:50:45+00:00
```
2026-04-21T00:50:45.8479511Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-04-21T00:50:45.8483119Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-04-21T00:50:45.8520157Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-04-21T00:50:45.8520723Z     resource_project_test.go:1021: Step 1/2 error: Error running apply: exit status 1
2026-04-21T00:50:45.8521142Z         
2026-04-21T00:50:45.8521560Z         Error: error creating project: test-acc-tf-p-7306873739938373151
2026-04-21T00:50:45.8521929Z         
2026-04-21T00:50:45.8522229Z           with mongodbatlas_project.test,
2026-04-21T00:50:45.8522851Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-21T00:50:45.8523459Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-21T00:50:45.8523761Z         
2026-04-21T00:50:45.8524232Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-21T00:50:45.8525034Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-21T00:50:45.8525633Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-21T00:50:45.8526098Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (64.96s)
```

- 2026-04-22 PASS 12 seconds
- 2026-04-23 PASS a minute
- 2026-04-24 PASS 12 seconds
- 2026-04-25 PASS 59 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 12 seconds
- 2026-04-28 PASS a minute
- 2026-04-29 PASS 12 seconds
- 2026-04-30 PASS 35 seconds
- 2026-05-01 PASS 13 seconds
- 2026-05-02 PASS a minute
- 2026-05-03: MISSING
- 2026-05-04 PASS 11 seconds
- 2026-05-05 PASS a minute
- 2026-05-06 PASS 16 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 12 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 10 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 10 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 10 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 16 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 10 seconds
- 2026-05-04 PASS 11 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 12 seconds
