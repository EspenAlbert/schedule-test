# config/customdbrole/TestAccConfigRSCustomDBRoles_WithInheritedRoles Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL(x 3)
Success rate: 97.39%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029470000) |  | qa |  | 1.04s
[2025-06-05 00:30](#error-2025-06-05t0030450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 2.06s
[2025-07-06 00:33](#error-2025-07-06t0033170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4027267b5775b682a24/limits | qa | flaky_500 | 63.08s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 44 seconds
- 2025-04-13 PASS 45 seconds
- 2025-04-14 PASS 46 seconds
- 2025-04-15 PASS 46 seconds
- 2025-04-16
  - PASS 43 seconds
  - PASS 41 seconds
- 2025-04-17 PASS 44 seconds
- 2025-04-18 PASS 48 seconds
- 2025-04-19 PASS 47 seconds
- 2025-04-20 PASS 45 seconds
- 2025-04-21 PASS 51 seconds
- 2025-04-22 PASS 43 seconds
- 2025-04-23 PASS 43 seconds
- 2025-04-24 PASS 49 seconds
- 2025-04-25 PASS 36 seconds
- 2025-04-26 PASS 43 seconds
- 2025-04-27 PASS 46 seconds
- 2025-04-28 PASS 45 seconds
- 2025-04-29 PASS 37 seconds
- 2025-04-30
  - PASS 38 seconds
  - PASS 39 seconds
- 2025-05-01
  - PASS 39 seconds
  - PASS 44 seconds
  - PASS 37 seconds
  - PASS 38 seconds
  - PASS 38 seconds
  - PASS 46 seconds
  - PASS 38 seconds
- 2025-05-02 PASS 43 seconds
- 2025-05-03 PASS 38 seconds
- 2025-05-04 PASS 39 seconds
- 2025-05-05 PASS 45 seconds
- 2025-05-06 PASS 38 seconds
- 2025-05-07 PASS 36 seconds
- 2025-05-08 PASS 37 seconds
- 2025-05-09 PASS 47 seconds
- 2025-05-10 PASS 38 seconds
- 2025-05-11

### Error 2025-05-11T00:29:47+00:00
```
2025-05-11T00:29:47.3844537Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-05-11T00:29:47.3849085Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-05-11T00:29:47.3904085Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-05-11T00:29:47.3905260Z     resource_custom_db_role_test.go:176: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:47.3906021Z         
2025-05-11T00:29:47.3906783Z         Error: error creating project: test-acc-tf-p-4526988955107932952
2025-05-11T00:29:47.3907417Z         
2025-05-11T00:29:47.3907958Z           with mongodbatlas_project.test,
2025-05-11T00:29:47.3909065Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:47.3910062Z           13: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:47.3910591Z         
2025-05-11T00:29:47.3911443Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:47.3912365Z         type
2025-05-11T00:29:47.3927582Z   
2025-05-11T00:29:47.3936880Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (1.37s)
```

- 2025-05-12 PASS 37 seconds
- 2025-05-13
  - PASS 44 seconds
  - PASS 37 seconds
- 2025-05-14 PASS 37 seconds
- 2025-05-15 PASS 41 seconds
- 2025-05-16 PASS 43 seconds
- 2025-05-17 PASS 37 seconds
- 2025-05-18 PASS 43 seconds
- 2025-05-19 PASS 40 seconds
- 2025-05-20 PASS 39 seconds
- 2025-05-21 PASS 38 seconds
- 2025-05-22 PASS 37 seconds
- 2025-05-23 PASS 37 seconds
- 2025-05-24 PASS 39 seconds
- 2025-05-25 PASS 40 seconds
- 2025-05-26 PASS 39 seconds
- 2025-05-27 PASS 40 seconds
- 2025-05-28
  - PASS 46 seconds
  - PASS 40 seconds
  - PASS 37 seconds
- 2025-05-29 PASS 40 seconds
- 2025-05-30 PASS 42 seconds
- 2025-05-31 PASS 43 seconds
- 2025-06-01
  - PASS 37 seconds
  - PASS 38 seconds
  - PASS 38 seconds
  - PASS 41 seconds
  - PASS 41 seconds
  - PASS 40 seconds
- 2025-06-02
  - PASS 40 seconds
  - PASS 38 seconds
  - PASS 45 seconds
- 2025-06-03 PASS 41 seconds
- 2025-06-04 PASS 40 seconds
- 2025-06-05

### Error 2025-06-05T00:30:45+00:00
```
2025-06-05T00:30:45.1168248Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-06-05T00:30:45.1172074Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-06-05T00:30:45.1183533Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-06-05T00:30:45.1184222Z     resource_custom_db_role_test.go:176: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:30:45.1184818Z         
2025-06-05T00:30:45.1185246Z         Error: error creating project: test-acc-tf-p-4063380549337006737
2025-06-05T00:30:45.1185610Z         
2025-06-05T00:30:45.1185922Z           with mongodbatlas_project.test,
2025-06-05T00:30:45.1186529Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-06-05T00:30:45.1187076Z           13: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:30:45.1187378Z         
2025-06-05T00:30:45.1187843Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:30:45.1188477Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:30:45.1189058Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:30:45.1199456Z    test_working_directory=/tmp/plugintest362095398 test_step_number=1 test_name=TestAccConfigRSCustomDBRoles_UpdatedInheritRoles test_terraform_path=/home/runner/work/_temp/a3583a3e-ac12-49da-93db-02902423a465/terraform
2025-06-05T00:30:45.1206338Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (2.55s)
```

- 2025-06-06 PASS 38 seconds
- 2025-06-07 PASS 46 seconds
- 2025-06-08 PASS 37 seconds
- 2025-06-09 PASS 36 seconds
- 2025-06-10 PASS 46 seconds
- 2025-06-11
  - PASS 48 seconds
  - PASS 36 seconds
- 2025-06-12 PASS 36 seconds
- 2025-06-13 PASS 38 seconds
- 2025-06-14 PASS 39 seconds
- 2025-06-15 PASS 37 seconds
- 2025-06-16 PASS 46 seconds
- 2025-06-17 PASS 45 seconds
- 2025-06-18
  - PASS 38 seconds
  - PASS 37 seconds
- 2025-06-19 PASS 38 seconds
- 2025-06-20 PASS 48 seconds
- 2025-06-21 PASS 38 seconds
- 2025-06-22 PASS 36 seconds
- 2025-06-23 PASS 48 seconds
- 2025-06-24 PASS 40 seconds
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
- 2025-07-10 PASS 37 seconds