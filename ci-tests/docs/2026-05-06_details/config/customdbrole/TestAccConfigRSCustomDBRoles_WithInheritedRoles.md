# config/customdbrole/TestAccConfigRSCustomDBRoles_WithInheritedRoles Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 2)
Success rate: 94.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:40](#error-2026-04-09t0040560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.08s
[2026-04-11 00:45](#error-2026-04-11t0045440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS a minute
- 2026-04-08 PASS 41 seconds
- 2026-04-09

### Error 2026-04-09T00:40:56+00:00
```
2026-04-09T00:40:56.7079286Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-04-09T00:40:56.7085098Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-04-09T00:40:56.7106790Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-04-09T00:40:56.7107896Z     resource_test.go:215: Step 1/2 error: Error running apply: exit status 1
2026-04-09T00:40:56.7108549Z         
2026-04-09T00:40:56.7109256Z         Error: error creating project: test-acc-tf-p-2664242286319220141
2026-04-09T00:40:56.7109851Z         
2026-04-09T00:40:56.7110354Z           with mongodbatlas_project.test,
2026-04-09T00:40:56.7111393Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-04-09T00:40:56.7112349Z           13: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:40:56.7112853Z         
2026-04-09T00:40:56.7113653Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:40:56.7114737Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:40:56.7116033Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:56.7116821Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (67.80s)
```

- 2026-04-10 PASS 41 seconds
- 2026-04-11

### Error 2026-04-11T00:45:44+00:00
```
2026-04-11T00:45:44.5278669Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-04-11T00:45:44.5282048Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-04-11T00:45:44.5328380Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-04-11T00:45:44.5328879Z     resource_test.go:215: Step 1/2 error: Error running apply: exit status 1
2026-04-11T00:45:44.5329234Z         
2026-04-11T00:45:44.5329741Z         Error: error creating project: test-acc-tf-p-9128270791451702854
2026-04-11T00:45:44.5330080Z         
2026-04-11T00:45:44.5330389Z           with mongodbatlas_project.test,
2026-04-11T00:45:44.5330955Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-04-11T00:45:44.5331488Z           13: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:45:44.5331792Z         
2026-04-11T00:45:44.5332222Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:45:44.5332836Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:45:44.5333385Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:44.5333826Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (73.21s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 41 seconds
- 2026-04-14 PASS 57 seconds
- 2026-04-15 PASS 46 seconds
- 2026-04-16 PASS 59 seconds
- 2026-04-17 PASS 49 seconds
- 2026-04-18 PASS 49 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 47 seconds
- 2026-04-21 PASS a minute
- 2026-04-22 PASS 42 seconds
- 2026-04-23 PASS 50 seconds
- 2026-04-24 PASS 46 seconds
- 2026-04-25 PASS a minute
- 2026-04-26: MISSING
- 2026-04-27 PASS 43 seconds
- 2026-04-28 PASS a minute
- 2026-04-29 PASS 49 seconds
- 2026-04-30 PASS a minute
- 2026-05-01 PASS 42 seconds
- 2026-05-02 PASS 57 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 40 seconds
- 2026-05-05 PASS a minute
- 2026-05-06 PASS 45 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 43 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 39 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 40 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 37 seconds
  - PASS 40 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 40 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 42 seconds
- 2026-05-04 PASS 46 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 47 seconds
