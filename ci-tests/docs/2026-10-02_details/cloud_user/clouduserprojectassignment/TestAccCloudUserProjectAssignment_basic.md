# cloud_user/clouduserprojectassignment/TestAccCloudUserProjectAssignment_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-17 00:41](#error-2026-09-17t0041370000) | MAX_USERS_PER_ORG_EXCEEDED /api/atlas/v2/groups/6aab373cbeed1dea3b81df80/users | dev | flaky_500 | 4.01s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 5 seconds
- 2026-09-03 PASS 8 seconds
- 2026-09-04 PASS 5 seconds
- 2026-09-05 PASS 7 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 5 seconds
- 2026-09-08 PASS 8 seconds
- 2026-09-09 PASS 8 seconds
- 2026-09-10 PASS 7 seconds
- 2026-09-11
  - PASS 10 seconds
  - PASS 5 seconds
- 2026-09-12 PASS 8 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 9 seconds
- 2026-09-15 PASS 9 seconds
- 2026-09-16 PASS 5 seconds
- 2026-09-17

### Error 2026-09-17T00:41:37+00:00
```
2026-09-17T00:41:37.5654551Z === RUN   TestAccCloudUserProjectAssignment_basic
2026-09-17T00:41:37.5655243Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-6417228092410534338
2026-09-17T00:41:37.5667130Z    test_terraform_path=/home/runner/work/_temp/21f302d8-46d6-4c87-adaa-e9234bd016f1/terraform test_working_directory=/tmp/plugintest1977187633 test_name=TestAccCloudUserProjectAssignment_basic test_step_number=1
2026-09-17T00:41:37.5668256Z     resource_test.go:22: Step 1/6 error: Error running apply: exit status 1
2026-09-17T00:41:37.5668602Z         
2026-09-17T00:41:37.5669148Z         Error: error assigning user to ProjectID(6aab373cbeed1dea3b81df80):
2026-09-17T00:41:37.5669487Z         
2026-09-17T00:41:37.5669895Z           with mongodbatlas_cloud_user_project_assignment.test_pending,
2026-09-17T00:41:37.5670655Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_user_project_assignment" "test_pending":
2026-09-17T00:41:37.5671390Z           12: 		resource "mongodbatlas_cloud_user_project_assignment" "test_pending" {
2026-09-17T00:41:37.5671750Z         
2026-09-17T00:41:37.5672209Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aab373cbeed1dea3b81df80/users
2026-09-17T00:41:37.5672828Z         POST: HTTP 400 Bad Request (Error code: "MAX_USERS_PER_ORG_EXCEEDED") Detail:
2026-09-17T00:41:37.5673409Z         Maximum number of users per org (500) in 64808d5f33a0c71e882ef19c exceeded
2026-09-17T00:41:37.5673937Z         while trying to add users. Reason: Bad Request. Params: [500
2026-09-17T00:41:37.5674370Z         64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-09-17T00:41:37.5674731Z --- FAIL: TestAccCloudUserProjectAssignment_basic (4.13s)
```

- 2026-09-18 PASS 5 seconds
- 2026-09-19 PASS 11 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 7 seconds
- 2026-09-22 PASS 10 seconds
- 2026-09-23 PASS 6 seconds
- 2026-09-24 PASS 7 seconds
- 2026-09-25 PASS 8 seconds
- 2026-09-26 PASS 9 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 7 seconds
- 2026-09-29 PASS 8 seconds
- 2026-09-30 PASS 6 seconds
- 2026-10-01 PASS 7 seconds
- 2026-10-02 PASS 5 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 7 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 5 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 7 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 5 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 8 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 7 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
