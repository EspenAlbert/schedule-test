# config/customdbrole/TestAccConfigRSCustomDBRoles_UpdatedInheritRoles Test Details
# Found 39 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-03-03 00:42](#error-2026-03-03t0042300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.00s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 31 seconds
- 2026-02-06 PASS 28 seconds
- 2026-02-07 PASS 39 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 36 seconds
- 2026-02-10 PASS 32 seconds
- 2026-02-11 PASS 34 seconds
- 2026-02-12 PASS 33 seconds
- 2026-02-13 PASS 32 seconds
- 2026-02-14 PASS 33 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 33 seconds
- 2026-02-17 PASS 36 seconds
- 2026-02-18 PASS 35 seconds
- 2026-02-19 PASS 37 seconds
- 2026-02-20 PASS 33 seconds
- 2026-02-21 PASS 33 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 31 seconds
- 2026-02-24
  - PASS 34 seconds
  - PASS 30 seconds
- 2026-02-25 PASS 32 seconds
- 2026-02-26 PASS 40 seconds
- 2026-02-27 PASS 37 seconds
- 2026-02-28 PASS 35 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 31 seconds
- 2026-03-03

### Error 2026-03-03T00:42:30+00:00
```
2026-03-03T00:42:30.1043859Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-03-03T00:42:30.1045328Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-03-03T00:42:30.1075170Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-03-03T00:42:30.1075679Z     resource_test.go:561: Step 1/2 error: Error running apply: exit status 1
2026-03-03T00:42:30.1076056Z         
2026-03-03T00:42:30.1076448Z         Error: error creating project: test-acc-tf-p-8027628243124476830
2026-03-03T00:42:30.1076789Z         
2026-03-03T00:42:30.1077092Z           with mongodbatlas_project.test,
2026-03-03T00:42:30.1077652Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-03-03T00:42:30.1078198Z           12: 		resource "mongodbatlas_project" "test" {
2026-03-03T00:42:30.1078492Z         
2026-03-03T00:42:30.1078930Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-03-03T00:42:30.1079546Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-03-03T00:42:30.1080197Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-03T00:42:30.1080691Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (66.03s)
```

- 2026-03-04 PASS 36 seconds
- 2026-03-05 PASS 55 seconds
- 2026-03-06 PASS 34 seconds

## QA Environment
### Timeline
- 2026-02-04
  - PASS 28 seconds
  - PASS 29 seconds
  - PASS 33 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 27 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 31 seconds
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 40 seconds
  - PASS 30 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20 PASS 29 seconds
- 2026-02-21: MISSING
- 2026-02-22 PASS 29 seconds
- 2026-02-23: MISSING
- 2026-02-24 PASS 25 seconds
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 27 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 34 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
