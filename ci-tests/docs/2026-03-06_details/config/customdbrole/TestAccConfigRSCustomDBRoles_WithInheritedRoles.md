# config/customdbrole/TestAccConfigRSCustomDBRoles_WithInheritedRoles Test Details
# Found 39 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-03-05 00:42](#error-2026-03-05t0042020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.00s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 44 seconds
- 2026-02-06 PASS 38 seconds
- 2026-02-07 PASS 51 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 47 seconds
- 2026-02-10 PASS 45 seconds
- 2026-02-11 PASS 46 seconds
- 2026-02-12 PASS 44 seconds
- 2026-02-13 PASS 42 seconds
- 2026-02-14 PASS 43 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 46 seconds
- 2026-02-17 PASS 47 seconds
- 2026-02-18 PASS 48 seconds
- 2026-02-19 PASS 50 seconds
- 2026-02-20 PASS 46 seconds
- 2026-02-21 PASS 47 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 44 seconds
- 2026-02-24
  - PASS 45 seconds
  - PASS 41 seconds
- 2026-02-25 PASS 41 seconds
- 2026-02-26 PASS 50 seconds
- 2026-02-27 PASS 50 seconds
- 2026-02-28 PASS 47 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 43 seconds
- 2026-03-03 PASS a minute
- 2026-03-04 PASS 49 seconds
- 2026-03-05

### Error 2026-03-05T00:42:02+00:00
```
2026-03-05T00:42:02.4226760Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-03-05T00:42:02.4229333Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-03-05T00:42:02.4244729Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-03-05T00:42:02.4245271Z     resource_test.go:215: Step 1/2 error: Error running apply: exit status 1
2026-03-05T00:42:02.4245655Z         
2026-03-05T00:42:02.4246228Z         Error: error creating project: test-acc-tf-p-6774423024190301234
2026-03-05T00:42:02.4246595Z         
2026-03-05T00:42:02.4246893Z           with mongodbatlas_project.test,
2026-03-05T00:42:02.4247522Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-03-05T00:42:02.4248102Z           13: 		resource "mongodbatlas_project" "test" {
2026-03-05T00:42:02.4248414Z         
2026-03-05T00:42:02.4248884Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-03-05T00:42:02.4249543Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-03-05T00:42:02.4250143Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-05T00:42:02.4250616Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (63.03s)
```

- 2026-03-06 PASS 45 seconds

## QA Environment
### Timeline
- 2026-02-04
  - PASS 45 seconds
  - PASS 37 seconds
  - PASS 45 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 38 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 40 seconds
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 50 seconds
  - PASS 40 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20 PASS 39 seconds
- 2026-02-21: MISSING
- 2026-02-22 PASS 38 seconds
- 2026-02-23: MISSING
- 2026-02-24 PASS 36 seconds
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 38 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 44 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
