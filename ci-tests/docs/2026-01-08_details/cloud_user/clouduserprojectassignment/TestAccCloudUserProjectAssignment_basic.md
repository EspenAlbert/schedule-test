# cloud_user/clouduserprojectassignment/TestAccCloudUserProjectAssignment_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-07 00:31](#error-2026-01-07t0031240000) | GROUP_ALREADY_EXISTS /api/atlas/v2/groups | dev | 2.01s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 13 seconds
  - PASS 16 seconds
- 2025-12-11 PASS 16 seconds
- 2025-12-12 PASS 10 seconds
- 2025-12-13 PASS 16 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 8 seconds
- 2025-12-16 PASS 16 seconds
- 2025-12-17 PASS 9 seconds
- 2025-12-18 PASS 16 seconds
- 2025-12-19 PASS 10 seconds
- 2025-12-20 PASS 15 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 11 seconds
- 2025-12-23 PASS 16 seconds
- 2025-12-24 PASS 13 seconds
- 2025-12-25 PASS 16 seconds
- 2025-12-26 PASS 11 seconds
- 2025-12-27 PASS 16 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 17 seconds
- 2025-12-31 PASS 9 seconds
- 2026-01-01 PASS 17 seconds
- 2026-01-02 PASS 10 seconds
- 2026-01-03 PASS 16 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 14 seconds
- 2026-01-06 PASS 19 seconds
- 2026-01-07

### Error 2026-01-07T00:31:24+00:00
```
2026-01-07T00:31:24.5132228Z === RUN   TestAccCloudUserProjectAssignment_basic
2026-01-07T00:31:24.5151314Z    test_working_directory=/tmp/plugintest3941133796 test_name=TestAccCloudUserProjectAssignment_basic test_step_number=1
2026-01-07T00:31:24.5152626Z     resource_test.go:22: Step 1/6 error: Error running apply: exit status 1
2026-01-07T00:31:24.5153241Z         
2026-01-07T00:31:24.5153916Z         Error: error creating project: 695da937af4f6cc389e837d5
2026-01-07T00:31:24.5154640Z         
2026-01-07T00:31:24.5155135Z           with mongodbatlas_project.test,
2026-01-07T00:31:24.5156177Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-07T00:31:24.5157123Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:31:24.5157631Z         
2026-01-07T00:31:24.5158420Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 409 Conflict
2026-01-07T00:31:24.5159447Z         (Error code: "GROUP_ALREADY_EXISTS") Detail: A group with name
2026-01-07T00:31:24.5160441Z         "695da937af4f6cc389e837d5" already exists. Reason: Conflict. Params:
2026-01-07T00:31:24.5161302Z         [695da937af4f6cc389e837d5], BadRequestDetail: 
2026-01-07T00:31:24.5161935Z --- FAIL: TestAccCloudUserProjectAssignment_basic (2.09s)
```

- 2026-01-08 PASS 20 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 11 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 10 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 12 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 13 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 8 seconds
