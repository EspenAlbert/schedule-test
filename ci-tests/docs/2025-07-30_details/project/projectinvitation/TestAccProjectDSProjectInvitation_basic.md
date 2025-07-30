# project/projectinvitation/TestAccProjectDSProjectInvitation_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:37](#error-2025-07-06t0037510000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40a7267b5775b683200/limits | qa | flaky_500 | 32.03s
[2025-07-10 13:15](#error-2025-07-10t1315100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb07006d8d55bb9e6a8b/limits | qa | flaky_500 | 37.05s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 9 seconds
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-07-02 PASS 7 seconds
- 2025-07-03 PASS 7 seconds
- 2025-07-04 PASS 5 seconds
- 2025-07-05 PASS 4 seconds
- 2025-07-06

### Error 2025-07-06T00:37:51+00:00
```
2025-07-06T00:37:51.5583866Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-07-06T00:37:51.5596096Z   
2025-07-06T00:37:51.5596568Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2025-07-06T00:37:51.5597002Z         
2025-07-06T00:37:51.5597376Z         Error: error when getting project properties after create
2025-07-06T00:37:51.5597695Z         
2025-07-06T00:37:51.5597983Z           with mongodbatlas_project.test,
2025-07-06T00:37:51.5598564Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-07-06T00:37:51.5599108Z           13: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:37:51.5599395Z         
2025-07-06T00:37:51.5599823Z         error getting project (6869c40a7267b5775b683200): error getting project's
2025-07-06T00:37:51.5600259Z         limits (6869c40a7267b5775b683200):
2025-07-06T00:37:51.5600819Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40a7267b5775b683200/limits
2025-07-06T00:37:51.5601466Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:37:51.5602024Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:37:51.5602540Z         BadRequestDetail: 
2025-07-06T00:37:51.5602858Z --- FAIL: TestAccProjectDSProjectInvitation_basic (32.29s)
```

- 2025-07-07 PASS 6 seconds
- 2025-07-08 PASS 5 seconds
- 2025-07-09 PASS 6 seconds
- 2025-07-10
  - PASS 8 seconds
  - FAIL 37 seconds

### Error 2025-07-10T13:15:10+00:00
```
2025-07-10T13:15:10.8819890Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-07-10T13:15:10.8832762Z   
2025-07-10T13:15:10.8833342Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-07-10T13:15:10.8833825Z         
2025-07-10T13:15:10.8834186Z         Error: error when getting project properties after create
2025-07-10T13:15:10.8834503Z         
2025-07-10T13:15:10.8834783Z           with mongodbatlas_project.test,
2025-07-10T13:15:10.8835463Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-07-10T13:15:10.8836105Z           13: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:15:10.8836384Z         
2025-07-10T13:15:10.8837013Z         error getting project (686fbb07006d8d55bb9e6a8b): error getting project's
2025-07-10T13:15:10.8837492Z         limits (686fbb07006d8d55bb9e6a8b):
2025-07-10T13:15:10.8838070Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb07006d8d55bb9e6a8b/limits
2025-07-10T13:15:10.8838734Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:15:10.8839295Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:15:10.8839672Z         BadRequestDetail: 
2025-07-10T13:15:10.8839979Z --- FAIL: TestAccProjectDSProjectInvitation_basic (37.52s)
```

- 2025-07-11 PASS 8 seconds
- 2025-07-12 PASS 11 seconds
- 2025-07-13 PASS 7 seconds
- 2025-07-14 PASS 8 seconds
- 2025-07-15 PASS 5 seconds
- 2025-07-16 PASS 7 seconds
- 2025-07-17 PASS 9 seconds
- 2025-07-18 PASS 8 seconds
- 2025-07-19 PASS 6 seconds
- 2025-07-20 PASS 29 seconds
- 2025-07-21 PASS 9 seconds
- 2025-07-22 PASS 6 seconds
- 2025-07-23
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 8 seconds
- 2025-07-24 PASS 8 seconds
- 2025-07-25 PASS 7 seconds
- 2025-07-26 PASS 6 seconds
- 2025-07-27 PASS 25 seconds
- 2025-07-28 PASS 9 seconds
- 2025-07-29 PASS 7 seconds
- 2025-07-30 PASS 7 seconds