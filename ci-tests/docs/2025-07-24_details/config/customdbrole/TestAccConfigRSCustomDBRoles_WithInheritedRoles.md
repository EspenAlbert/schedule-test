# config/customdbrole/TestAccConfigRSCustomDBRoles_WithInheritedRoles Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:33](#error-2025-07-06t0033170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4027267b5775b682a24/limits | qa | flaky_500 | 63.08s
[2025-07-20 00:35](#error-2025-07-20t0035100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c393b823af9166ef9135a/limits | qa | flaky_500 | 33.07s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 41 seconds
- 2025-06-26 PASS 39 seconds
- 2025-06-27 PASS 46 seconds
- 2025-06-28 PASS 38 seconds
- 2025-06-29 PASS 37 seconds
- 2025-06-30 PASS 44 seconds
- 2025-07-01
  - PASS 37 seconds
  - PASS 41 seconds
  - PASS 46 seconds
  - PASS 37 seconds
  - PASS 45 seconds
  - PASS 37 seconds
- 2025-07-02 PASS 37 seconds
- 2025-07-03 PASS 46 seconds
- 2025-07-04 PASS 39 seconds
- 2025-07-05 PASS 52 seconds
- 2025-07-06

### Error 2025-07-06T00:33:17+00:00
```
2025-07-06T00:33:17.8236122Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-07-06T00:33:17.8316425Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-07-06T00:33:17.8425904Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-07-06T00:33:17.8426943Z     resource_custom_db_role_test.go:176: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-07-06T00:33:17.8427837Z         
2025-07-06T00:33:17.8428459Z         Error: error when getting project properties after create
2025-07-06T00:33:17.8428993Z         
2025-07-06T00:33:17.8429475Z           with mongodbatlas_project.test,
2025-07-06T00:33:17.8430474Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-07-06T00:33:17.8431373Z           13: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:33:17.8431840Z         
2025-07-06T00:33:17.8432580Z         error getting project (6869c4027267b5775b682a24): error getting project's
2025-07-06T00:33:17.8433325Z         limits (6869c4027267b5775b682a24):
2025-07-06T00:33:17.8434280Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4027267b5775b682a24/limits
2025-07-06T00:33:17.8435549Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:33:17.8436551Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:33:17.8437229Z         BadRequestDetail: 
2025-07-06T00:33:17.8438664Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (63.78s)
```

- 2025-07-07 PASS 37 seconds
- 2025-07-08 PASS 46 seconds
- 2025-07-09 PASS 46 seconds
- 2025-07-10
  - PASS 37 seconds
  - PASS 45 seconds
- 2025-07-11 PASS 41 seconds
- 2025-07-12 PASS 43 seconds
- 2025-07-13 PASS 36 seconds
- 2025-07-14 PASS 51 seconds
- 2025-07-15 PASS 46 seconds
- 2025-07-16 PASS 47 seconds
- 2025-07-17 PASS 44 seconds
- 2025-07-18 PASS 43 seconds
- 2025-07-19 PASS 43 seconds
- 2025-07-20

### Error 2025-07-20T00:35:10+00:00
```
2025-07-20T00:35:10.2458551Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-07-20T00:35:10.2461961Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-07-20T00:35:10.2493444Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-07-20T00:35:10.2494025Z     resource_custom_db_role_test.go:176: Step 1/2 error: Error running apply: exit status 1
2025-07-20T00:35:10.2494423Z         
2025-07-20T00:35:10.2494791Z         Error: error when getting project properties after create
2025-07-20T00:35:10.2495111Z         
2025-07-20T00:35:10.2495399Z           with mongodbatlas_project.test,
2025-07-20T00:35:10.2495974Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-07-20T00:35:10.2496507Z           13: 		resource "mongodbatlas_project" "test" {
2025-07-20T00:35:10.2496789Z         
2025-07-20T00:35:10.2497220Z         error getting project (687c393b823af9166ef9135a): error getting project's
2025-07-20T00:35:10.2497662Z         limits (687c393b823af9166ef9135a):
2025-07-20T00:35:10.2498335Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393b823af9166ef9135a/limits
2025-07-20T00:35:10.2498999Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:35:10.2499556Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:35:10.2499937Z         BadRequestDetail: 
2025-07-20T00:35:10.2500288Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (33.72s)
```

- 2025-07-21 PASS 53 seconds
- 2025-07-22 PASS 47 seconds
- 2025-07-23
  - PASS 39 seconds
  - PASS 37 seconds
  - PASS 48 seconds
- 2025-07-24 PASS 40 seconds