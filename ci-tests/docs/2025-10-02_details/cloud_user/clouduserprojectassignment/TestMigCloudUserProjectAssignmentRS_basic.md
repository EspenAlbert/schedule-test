# cloud_user/clouduserprojectassignment/TestMigCloudUserProjectAssignmentRS_basic Test Details
# Found 34 TestRuns in dev, qa from 2025-09-10 to 2025-10-02 from master branch: 1 unique tests, PASS(x 25) SKIP(x 8) FAIL
Success rate: 96.15%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-16 00:26](#error-2025-09-16t0026320000) | GROUP_ALREADY_EXISTS /api/atlas/v2/groups | dev | 5.06s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03: MISSING
- 2025-09-04: MISSING
- 2025-09-05: MISSING
- 2025-09-06: MISSING
- 2025-09-07: MISSING
- 2025-09-08: MISSING
- 2025-09-09: MISSING
- 2025-09-10 SKIP unknown
- 2025-09-11 SKIP unknown
- 2025-09-12
  - SKIP unknown
  - SKIP unknown
- 2025-09-13 SKIP unknown
- 2025-09-14 SKIP unknown
- 2025-09-15
  - SKIP unknown
  - SKIP unknown
- 2025-09-16

### Error 2025-09-16T00:26:32+00:00
```
2025-09-16T00:26:32.6041853Z === RUN   TestMigCloudUserProjectAssignmentRS_basic
2025-09-16T00:26:32.6043532Z     resource_migration_test.go:23: Creating execution project: test-acc-tf-p-2605700116751535640
2025-09-16T00:26:32.6050902Z === CONT  TestMigCloudUserProjectAssignmentRS_basic
2025-09-16T00:26:32.6080651Z === NAME  TestMigCloudUserProjectAssignmentRS_basic
2025-09-16T00:26:32.6081634Z     resource_migration_test.go:23: Step 1/2 error: Error running apply: exit status 1
2025-09-16T00:26:32.6082317Z         
2025-09-16T00:26:32.6082955Z         Error: error creating project: 68c8aea64a4d0e4cbd71887f
2025-09-16T00:26:32.6083525Z         
2025-09-16T00:26:32.6084030Z           with mongodbatlas_project.test,
2025-09-16T00:26:32.6085067Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-16T00:26:32.6086015Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-16T00:26:32.6086681Z         
2025-09-16T00:26:32.6087484Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 409 Conflict
2025-09-16T00:26:32.6088501Z         (Error code: "GROUP_ALREADY_EXISTS") Detail: A group with name
2025-09-16T00:26:32.6089494Z         "68c8aea64a4d0e4cbd71887f" already exists. Reason: Conflict. Params:
2025-09-16T00:26:32.6090330Z         [68c8aea64a4d0e4cbd71887f], BadRequestDetail: 
2025-09-16T00:26:32.6090838Z         
2025-09-16T00:26:32.6091573Z         Error: error assigning user to ProjectID(68c8aea64a4d0e4cbd71887f):
2025-09-16T00:26:32.6092185Z         
2025-09-16T00:26:32.6092910Z           with mongodbatlas_cloud_user_project_assignment.test_active,
2025-09-16T00:26:32.6094332Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_cloud_user_project_assignment" "test_active":
2025-09-16T00:26:32.6095737Z           25: 		resource "mongodbatlas_cloud_user_project_assignment" "test_active" {
2025-09-16T00:26:32.6096572Z         
2025-09-16T00:26:32.6097452Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68c8aea64a4d0e4cbd71887f/users
2025-09-16T00:26:32.6098624Z         POST: HTTP 400 Bad Request (Error code: "USER_ALREADY_IN_GROUP") Detail: User
2025-09-16T00:26:32.6099729Z         agustin.bettati@mongodb.com is already in group 68c8aea64a4d0e4cbd71887f.
2025-09-16T00:26:32.6100717Z         Reason: Bad Request. Params: [agustin.bettati@mongodb.com
2025-09-16T00:26:32.6101507Z         68c8aea64a4d0e4cbd71887f], BadRequestDetail: 
2025-09-16T00:26:32.6102179Z --- FAIL: TestMigCloudUserProjectAssignmentRS_basic (5.56s)
```

- 2025-09-17 PASS 18 seconds
- 2025-09-18 PASS 16 seconds
- 2025-09-19 PASS 17 seconds
- 2025-09-20 PASS 18 seconds
- 2025-09-21 PASS 12 seconds
- 2025-09-22 PASS 12 seconds
- 2025-09-23 PASS 14 seconds
- 2025-09-24 PASS 13 seconds
- 2025-09-25 PASS 17 seconds
- 2025-09-26 PASS 17 seconds
- 2025-09-27 PASS 18 seconds
- 2025-09-28 PASS 13 seconds
- 2025-09-29 PASS 15 seconds
- 2025-09-30
  - PASS 18 seconds
  - PASS 11 seconds
  - PASS 14 seconds
- 2025-10-01
  - PASS 16 seconds
  - PASS 16 seconds
  - PASS 16 seconds
  - PASS 11 seconds
  - PASS 16 seconds
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 14 seconds
- 2025-10-02 PASS 11 seconds