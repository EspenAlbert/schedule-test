# config/customdbrole/TestAccConfigRSCustomDBRoles_WithInheritedRoles Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.08s
[2026-07-11 00:46](#error-2026-07-11t0046490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.08s
[2026-07-18 00:51](#error-2026-07-18t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 113.04s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s
[2026-07-23 00:48](#error-2026-07-23t0048140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7704363Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-07-09T00:58:00.7707436Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-07-09T00:58:00.7752622Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-07-09T00:58:00.7753902Z     resource_test.go:215: Step 1/2 error: Error running apply: exit status 1
2026-07-09T00:58:00.7754615Z         
2026-07-09T00:58:00.7755605Z         Error: error creating project: test-acc-tf-p-3840717581233387991
2026-07-09T00:58:00.7756284Z         
2026-07-09T00:58:00.7756847Z           with mongodbatlas_project.test,
2026-07-09T00:58:00.7757997Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-07-09T00:58:00.7759081Z           13: 		resource "mongodbatlas_project" "test" {
2026-07-09T00:58:00.7759647Z         
2026-07-09T00:58:00.7760716Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:58:00.7761955Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:58:00.7763065Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7763934Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (68.79s)
```

- 2026-07-10 PASS 49 seconds
- 2026-07-11

### Error 2026-07-11T00:46:49+00:00
```
2026-07-11T00:46:49.6169725Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-07-11T00:46:49.6175556Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-07-11T00:46:49.6191049Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-07-11T00:46:49.6191676Z     resource_test.go:215: Step 1/2 error: Error running apply: exit status 1
2026-07-11T00:46:49.6192090Z         
2026-07-11T00:46:49.6192545Z         Error: error creating project: test-acc-tf-p-3399357856059338744
2026-07-11T00:46:49.6193092Z         
2026-07-11T00:46:49.6193425Z           with mongodbatlas_project.test,
2026-07-11T00:46:49.6194081Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-07-11T00:46:49.6194786Z           13: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:46:49.6195404Z         
2026-07-11T00:46:49.6195972Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:46:49.6196826Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:46:49.6197566Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:46:49.6198248Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (62.80s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 44 seconds
- 2026-07-14 PASS a minute
- 2026-07-15 PASS 47 seconds
- 2026-07-16 PASS a minute
- 2026-07-17 PASS 42 seconds
- 2026-07-18

### Error 2026-07-18T00:51:48+00:00
```
2026-07-18T00:51:48.8116195Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-07-18T00:51:48.8118857Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-07-18T00:51:48.8184493Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-07-18T00:51:48.8185658Z     resource_test.go:215: Step 1/2 error: Error running apply: exit status 1
2026-07-18T00:51:48.8186308Z         
2026-07-18T00:51:48.8187171Z         Error: error creating project: test-acc-tf-p-7704311805733168129
2026-07-18T00:51:48.8187707Z         
2026-07-18T00:51:48.8188369Z           with mongodbatlas_project.test,
2026-07-18T00:51:48.8189277Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-07-18T00:51:48.8190212Z           13: 		resource "mongodbatlas_project" "test" {
2026-07-18T00:51:48.8190553Z         
2026-07-18T00:51:48.8191287Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:51:48.8192164Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:51:48.8193194Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.8193897Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (113.37s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3967166Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-07-21T00:53:42.3969613Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-07-21T00:53:42.3980584Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-07-21T00:53:42.3980967Z     resource_test.go:215: Step 1/2 error: Error running apply: exit status 1
2026-07-21T00:53:42.3981239Z         
2026-07-21T00:53:42.3981553Z         Error: error creating project: test-acc-tf-p-1438307321266315797
2026-07-21T00:53:42.3981824Z         
2026-07-21T00:53:42.3982064Z           with mongodbatlas_project.test,
2026-07-21T00:53:42.3982500Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-07-21T00:53:42.3982907Z           13: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:53:42.3983135Z         
2026-07-21T00:53:42.3983466Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:53:42.3983923Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:53:42.3984329Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.3989222Z   
2026-07-21T00:53:42.3993552Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (63.14s)
```

- 2026-07-22 PASS 44 seconds
- 2026-07-23

### Error 2026-07-23T00:48:14+00:00
```
2026-07-23T00:48:14.9903787Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-07-23T00:48:14.9906609Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-07-23T00:48:14.9918926Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-07-23T00:48:14.9919481Z     resource_test.go:215: Step 1/2 error: Error running apply: exit status 1
2026-07-23T00:48:14.9919954Z         
2026-07-23T00:48:14.9920409Z         Error: error creating project: test-acc-tf-p-9025812933727326916
2026-07-23T00:48:14.9920962Z         
2026-07-23T00:48:14.9921370Z           with mongodbatlas_project.test,
2026-07-23T00:48:14.9922012Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-07-23T00:48:14.9922608Z           13: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:48:14.9923026Z         
2026-07-23T00:48:14.9923521Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:48:14.9924189Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:48:14.9924797Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:14.9925349Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (61.77s)
```

- 2026-07-24 PASS 45 seconds
- 2026-07-25 PASS 41 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 51 seconds
- 2026-07-28 PASS 42 seconds
- 2026-07-29 PASS 40 seconds
- 2026-07-30 PASS 39 seconds
- 2026-07-31 PASS 45 seconds
- 2026-08-01 PASS 37 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 37 seconds
- 2026-08-04 PASS 41 seconds
- 2026-08-05 PASS 41 seconds
- 2026-08-06 PASS 37 seconds
- 2026-08-07 PASS 48 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 42 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 40 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 41 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 41 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 37 seconds
  - PASS 36 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 45 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
