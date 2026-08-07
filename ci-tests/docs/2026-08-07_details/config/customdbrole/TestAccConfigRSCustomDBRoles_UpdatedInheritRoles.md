# config/customdbrole/TestAccConfigRSCustomDBRoles_UpdatedInheritRoles Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.04s
[2026-07-11 00:46](#error-2026-07-11t0046490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.04s
[2026-07-18 00:51](#error-2026-07-18t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.01s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.04s
[2026-07-23 00:48](#error-2026-07-23t0048140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7706249Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-07-09T00:58:00.7708315Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-07-09T00:58:00.7785425Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-07-09T00:58:00.7786453Z     resource_test.go:561: Step 1/2 error: Error running apply: exit status 1
2026-07-09T00:58:00.7787178Z         
2026-07-09T00:58:00.7787975Z         Error: error creating project: test-acc-tf-p-5929440410061391797
2026-07-09T00:58:00.7788654Z         
2026-07-09T00:58:00.7789282Z           with mongodbatlas_project.test,
2026-07-09T00:58:00.7790436Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T00:58:00.7791504Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T00:58:00.7792063Z         
2026-07-09T00:58:00.7792934Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:58:00.7794161Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:58:00.7795469Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7796335Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (69.40s)
```

- 2026-07-10 PASS 36 seconds
- 2026-07-11

### Error 2026-07-11T00:46:49+00:00
```
2026-07-11T00:46:49.6173119Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-07-11T00:46:49.6175124Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-07-11T00:46:49.6212762Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-07-11T00:46:49.6213398Z     resource_test.go:561: Step 1/2 error: Error running apply: exit status 1
2026-07-11T00:46:49.6213941Z         
2026-07-11T00:46:49.6214549Z         Error: error creating project: test-acc-tf-p-7414794713548328693
2026-07-11T00:46:49.6215099Z         
2026-07-11T00:46:49.6215478Z           with mongodbatlas_project.test,
2026-07-11T00:46:49.6216138Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:46:49.6216750Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:46:49.6217077Z         
2026-07-11T00:46:49.6217777Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:46:49.6218722Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:46:49.6219353Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:46:49.6219861Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (63.39s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 32 seconds
- 2026-07-14 PASS a minute
- 2026-07-15 PASS 35 seconds
- 2026-07-16 PASS 48 seconds
- 2026-07-17 PASS 31 seconds
- 2026-07-18

### Error 2026-07-18T00:51:48+00:00
```
2026-07-18T00:51:48.8117978Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-07-18T00:51:48.8119288Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-07-18T00:51:48.8161781Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-07-18T00:51:48.8163113Z     resource_test.go:561: Step 1/2 error: Error running apply: exit status 1
2026-07-18T00:51:48.8163798Z         
2026-07-18T00:51:48.8164279Z         Error: error creating project: test-acc-tf-p-2711102629406907526
2026-07-18T00:51:48.8164700Z         
2026-07-18T00:51:48.8165050Z           with mongodbatlas_project.test,
2026-07-18T00:51:48.8165725Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-18T00:51:48.8166348Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-18T00:51:48.8166688Z         
2026-07-18T00:51:48.8167204Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:51:48.8167905Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:51:48.8168550Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.8169082Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (76.12s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3968442Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-07-21T00:53:42.3969904Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-07-21T00:53:42.4001540Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-07-21T00:53:42.4001921Z     resource_test.go:561: Step 1/2 error: Error running apply: exit status 1
2026-07-21T00:53:42.4002192Z         
2026-07-21T00:53:42.4002482Z         Error: error creating project: test-acc-tf-p-8079482900239876606
2026-07-21T00:53:42.4002746Z         
2026-07-21T00:53:42.4002982Z           with mongodbatlas_project.test,
2026-07-21T00:53:42.4003401Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:53:42.4003797Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:53:42.4004026Z         
2026-07-21T00:53:42.4004351Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:53:42.4004798Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:53:42.4005204Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.4005542Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (64.42s)
```

- 2026-07-22 PASS 31 seconds
- 2026-07-23

### Error 2026-07-23T00:48:14+00:00
```
2026-07-23T00:48:14.9905658Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-07-23T00:48:14.9907153Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-07-23T00:48:14.9954726Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-07-23T00:48:14.9955301Z     resource_test.go:561: Step 1/2 error: Error running apply: exit status 1
2026-07-23T00:48:14.9955751Z         
2026-07-23T00:48:14.9956254Z         Error: error creating project: test-acc-tf-p-4569660667667898118
2026-07-23T00:48:14.9956659Z         
2026-07-23T00:48:14.9957038Z           with mongodbatlas_project.test,
2026-07-23T00:48:14.9957758Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:48:14.9958358Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:48:14.9958768Z         
2026-07-23T00:48:14.9959252Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:48:14.9959979Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:48:14.9960577Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:14.9961219Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (66.26s)
```

- 2026-07-24 PASS 33 seconds
- 2026-07-25 PASS 32 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 39 seconds
- 2026-07-28 PASS 30 seconds
- 2026-07-29 PASS 30 seconds
- 2026-07-30 PASS 29 seconds
- 2026-07-31 PASS 32 seconds
- 2026-08-01 PASS 28 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 28 seconds
- 2026-08-04 PASS 30 seconds
- 2026-08-05 PASS 28 seconds
- 2026-08-06 PASS 26 seconds
- 2026-08-07 PASS 34 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 29 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 29 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 30 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 28 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 26 seconds
  - PASS 26 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 34 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
