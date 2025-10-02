# config/customdbrole/TestAccConfigRSCustomDBRoles_WithInheritedRoles Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 3)
Success rate: 93.02%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:31](#error-2025-09-07t0031520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1c9df5af52d2d4d4b9b/limits | qa | flaky_500 | 33.07s
[2025-09-14 00:31](#error-2025-09-14t0031200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c3e1411d835e95b2d30/limits | qa | flaky_500 | 36.04s
[2025-09-15 06:23](#error-2025-09-15t0623280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b047d444485797b5e023/limits | qa | flaky_500 | 33.08s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 39 seconds
- 2025-09-04 PASS 41 seconds
- 2025-09-05 PASS 39 seconds
- 2025-09-06 PASS 45 seconds
- 2025-09-07

### Error 2025-09-07T00:31:52+00:00
```
2025-09-07T00:31:52.3632676Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-09-07T00:31:52.3634997Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-09-07T00:31:52.3650682Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-09-07T00:31:52.3651241Z     resource_custom_db_role_test.go:176: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:31:52.3651649Z         
2025-09-07T00:31:52.3652023Z         Error: error when getting project properties after create
2025-09-07T00:31:52.3652345Z         
2025-09-07T00:31:52.3652635Z           with mongodbatlas_project.test,
2025-09-07T00:31:52.3653213Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-09-07T00:31:52.3653743Z           13: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:31:52.3654021Z         
2025-09-07T00:31:52.3654458Z         error getting project (68bcd1c9df5af52d2d4d4b9b): error getting project's
2025-09-07T00:31:52.3654913Z         limits (68bcd1c9df5af52d2d4d4b9b):
2025-09-07T00:31:52.3655479Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1c9df5af52d2d4d4b9b/limits
2025-09-07T00:31:52.3656127Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:31:52.3656687Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:31:52.3657078Z         BadRequestDetail: 
2025-09-07T00:31:52.3657420Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (33.66s)
```

- 2025-09-08
  - PASS 49 seconds
  - PASS a minute
  - PASS 43 seconds
- 2025-09-09 PASS 47 seconds
- 2025-09-10 PASS 40 seconds
- 2025-09-11 PASS 42 seconds
- 2025-09-12 PASS 39 seconds
- 2025-09-13 PASS 47 seconds
- 2025-09-14

### Error 2025-09-14T00:31:20+00:00
```
2025-09-14T00:31:20.4454528Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-09-14T00:31:20.4458049Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-09-14T00:31:20.4513497Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-09-14T00:31:20.4514005Z     resource_test.go:214: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:31:20.4514362Z         
2025-09-14T00:31:20.4514730Z         Error: error when getting project properties after create
2025-09-14T00:31:20.4515045Z         
2025-09-14T00:31:20.4515329Z           with mongodbatlas_project.test,
2025-09-14T00:31:20.4516050Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-09-14T00:31:20.4516587Z           13: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:31:20.4516867Z         
2025-09-14T00:31:20.4517290Z         error getting project (68c60c3e1411d835e95b2d30): error getting project's
2025-09-14T00:31:20.4517956Z         limits (68c60c3e1411d835e95b2d30):
2025-09-14T00:31:20.4518510Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c3e1411d835e95b2d30/limits
2025-09-14T00:31:20.4519154Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:31:20.4519719Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:31:20.4520103Z         BadRequestDetail: 
2025-09-14T00:31:20.4520444Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (36.43s)
```

- 2025-09-15
  - PASS 37 seconds
  - FAIL 33 seconds

### Error 2025-09-15T06:23:28+00:00
```
2025-09-15T06:23:28.1972120Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-09-15T06:23:28.1976923Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-09-15T06:23:28.2064859Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-09-15T06:23:28.2065389Z     resource_test.go:214: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:23:28.2065762Z         
2025-09-15T06:23:28.2066154Z         Error: error when getting project properties after create
2025-09-15T06:23:28.2066482Z         
2025-09-15T06:23:28.2066778Z           with mongodbatlas_project.test,
2025-09-15T06:23:28.2067539Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-09-15T06:23:28.2068092Z           13: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:23:28.2068380Z         
2025-09-15T06:23:28.2068817Z         error getting project (68c7b047d444485797b5e023): error getting project's
2025-09-15T06:23:28.2069378Z         limits (68c7b047d444485797b5e023):
2025-09-15T06:23:28.2069945Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b047d444485797b5e023/limits
2025-09-15T06:23:28.2070608Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:23:28.2071189Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:23:28.2071581Z         BadRequestDetail: 
2025-09-15T06:23:28.2071928Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (33.81s)
```

- 2025-09-16 PASS 39 seconds
- 2025-09-17 PASS 54 seconds
- 2025-09-18 PASS 47 seconds
- 2025-09-19 PASS 42 seconds
- 2025-09-20 PASS 47 seconds
- 2025-09-21 PASS 47 seconds
- 2025-09-22 PASS 37 seconds
- 2025-09-23 PASS 36 seconds
- 2025-09-24 PASS 40 seconds
- 2025-09-25 PASS 48 seconds
- 2025-09-26 PASS 43 seconds
- 2025-09-27 PASS 48 seconds
- 2025-09-28 PASS 36 seconds
- 2025-09-29 PASS 36 seconds
- 2025-09-30
  - PASS 45 seconds
  - PASS 45 seconds
  - PASS 37 seconds
- 2025-10-01
  - PASS 38 seconds
  - PASS 36 seconds
  - PASS 40 seconds
  - PASS 37 seconds
  - PASS 39 seconds
  - PASS 40 seconds
  - PASS 39 seconds
  - PASS 39 seconds
  - PASS 36 seconds
- 2025-10-02 PASS 48 seconds