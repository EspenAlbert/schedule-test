# cloud_user/clouduserprojectassignment/TestAccCloudUserProjectAssignment_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-13 00:32](#error-2026-08-13t0032430000) | MAX_USERS_PER_ORG_EXCEEDED /api/atlas/v2/groups/6a7d10a7b3b1b577a756c841/users | dev | flaky_500 | 3.08s
[2026-08-14 00:33](#error-2026-08-14t0033410000) | MAX_USERS_PER_ORG_EXCEEDED /api/atlas/v2/groups/6a7e6244ca4d3d34f8294682/users | dev | flaky_500 | 1.02s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 7 seconds
- 2026-08-07 PASS 6 seconds
- 2026-08-08 PASS 9 seconds
- 2026-08-09: MISSING
- 2026-08-10 PASS 7 seconds
- 2026-08-11 PASS 8 seconds
- 2026-08-12 PASS 5 seconds
- 2026-08-13

### Error 2026-08-13T00:32:43+00:00
```
2026-08-13T00:32:43.9257372Z === RUN   TestAccCloudUserProjectAssignment_basic
2026-08-13T00:32:43.9258960Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-6729026971247391785
2026-08-13T00:32:43.9277086Z   
2026-08-13T00:32:43.9277522Z     resource_test.go:22: Step 1/6 error: Error running apply: exit status 1
2026-08-13T00:32:43.9278187Z         
2026-08-13T00:32:43.9278667Z         Error: error assigning user to ProjectID(6a7d10a7b3b1b577a756c841):
2026-08-13T00:32:43.9279064Z         
2026-08-13T00:32:43.9279712Z           with mongodbatlas_cloud_user_project_assignment.test_pending,
2026-08-13T00:32:43.9280621Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_user_project_assignment" "test_pending":
2026-08-13T00:32:43.9281479Z           12: 		resource "mongodbatlas_cloud_user_project_assignment" "test_pending" {
2026-08-13T00:32:43.9281911Z         
2026-08-13T00:32:43.9282449Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a7d10a7b3b1b577a756c841/users
2026-08-13T00:32:43.9283207Z         POST: HTTP 400 Bad Request (Error code: "MAX_USERS_PER_ORG_EXCEEDED") Detail:
2026-08-13T00:32:43.9283913Z         Maximum number of users per org (500) in 64808d5f33a0c71e882ef19c exceeded
2026-08-13T00:32:43.9284523Z         while trying to add users. Reason: Bad Request. Params: [500
2026-08-13T00:32:43.9285046Z         64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-08-13T00:32:43.9285467Z --- FAIL: TestAccCloudUserProjectAssignment_basic (3.75s)
```

- 2026-08-14

### Error 2026-08-14T00:33:41+00:00
```
2026-08-14T00:33:41.4230940Z === RUN   TestAccCloudUserProjectAssignment_basic
2026-08-14T00:33:41.4248361Z    test_name=TestAccCloudUserProjectAssignment_basic test_terraform_path=/home/runner/work/_temp/4bbe8dc2-186f-440d-9bc2-e5146367809e/terraform test_step_number=1 test_working_directory=/tmp/plugintest3125583423
2026-08-14T00:33:41.4249455Z     resource_test.go:22: Step 1/6 error: Error running apply: exit status 1
2026-08-14T00:33:41.4249856Z         
2026-08-14T00:33:41.4250309Z         Error: error assigning user to ProjectID(6a7e6244ca4d3d34f8294682):
2026-08-14T00:33:41.4250691Z         
2026-08-14T00:33:41.4251152Z           with mongodbatlas_cloud_user_project_assignment.test_pending,
2026-08-14T00:33:41.4252213Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_user_project_assignment" "test_pending":
2026-08-14T00:33:41.4253049Z           12: 		resource "mongodbatlas_cloud_user_project_assignment" "test_pending" {
2026-08-14T00:33:41.4253463Z         
2026-08-14T00:33:41.4253979Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a7e6244ca4d3d34f8294682/users
2026-08-14T00:33:41.4254679Z         POST: HTTP 400 Bad Request (Error code: "MAX_USERS_PER_ORG_EXCEEDED") Detail:
2026-08-14T00:33:41.4255330Z         Maximum number of users per org (500) in 64808d5f33a0c71e882ef19c exceeded
2026-08-14T00:33:41.4256088Z         while trying to add users. Reason: Bad Request. Params: [500
2026-08-14T00:33:41.4256594Z         64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-08-14T00:33:41.4256994Z --- FAIL: TestAccCloudUserProjectAssignment_basic (1.17s)
```

- 2026-08-15 PASS 7 seconds
- 2026-08-16: MISSING
- 2026-08-17 PASS 5 seconds
- 2026-08-18 PASS 7 seconds
- 2026-08-19 PASS 7 seconds
- 2026-08-20 PASS 8 seconds
- 2026-08-21 PASS 8 seconds
- 2026-08-22 PASS 9 seconds
- 2026-08-23: MISSING
- 2026-08-24 PASS 4 seconds
- 2026-08-25 PASS 8 seconds
- 2026-08-26 PASS 4 seconds
- 2026-08-27 PASS 9 seconds
- 2026-08-28 PASS 5 seconds
- 2026-08-29 PASS 7 seconds
- 2026-08-30: MISSING
- 2026-08-31 PASS 5 seconds
- 2026-09-01 PASS 8 seconds
- 2026-09-02 PASS 5 seconds
- 2026-09-03 PASS 8 seconds
- 2026-09-04 PASS 5 seconds

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 5 seconds
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 7 seconds
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 7 seconds
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 7 seconds
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 6 seconds
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 5 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
