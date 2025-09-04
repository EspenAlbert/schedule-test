# project/project/TestAccProject_withUpdatedRole Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-31 00:45](#error-2025-08-31t0045030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b398117e07f9709daf0fa0/limits | qa | flaky_500 | 40.02s
[2025-09-01 00:34](#error-2025-09-01t0034530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 16 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 9 seconds
- 2025-08-09 PASS 10 seconds
- 2025-08-10 PASS 40 seconds
- 2025-08-11 PASS 14 seconds
- 2025-08-12
  - PASS 16 seconds
  - PASS 10 seconds
- 2025-08-13 PASS 10 seconds
- 2025-08-14 PASS 10 seconds
- 2025-08-15 PASS 11 seconds
- 2025-08-16 PASS 8 seconds
- 2025-08-17 PASS 10 seconds
- 2025-08-18 PASS 9 seconds
- 2025-08-19 PASS 14 seconds
- 2025-08-20
  - PASS 8 seconds
  - PASS 16 seconds
- 2025-08-21 PASS 12 seconds
- 2025-08-22 PASS 10 seconds
- 2025-08-23 PASS 10 seconds
- 2025-08-24 PASS 12 seconds
- 2025-08-25 PASS 11 seconds
- 2025-08-26 PASS 15 seconds
- 2025-08-27 PASS 11 seconds
- 2025-08-28 PASS 13 seconds
- 2025-08-29 PASS 10 seconds
- 2025-08-30 PASS 9 seconds
- 2025-08-31

### Error 2025-08-31T00:45:03+00:00
```
2025-08-31T00:45:03.7527782Z === RUN   TestAccProject_withUpdatedRole
2025-08-31T00:45:03.7535022Z === CONT  TestAccProject_withUpdatedRole
2025-08-31T00:45:03.7612104Z === NAME  TestAccProject_withUpdatedRole
2025-08-31T00:45:03.7612706Z     resource_project_test.go:738: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-08-31T00:45:03.7613141Z         
2025-08-31T00:45:03.7613511Z         Error: error when getting project properties after create
2025-08-31T00:45:03.7613832Z         
2025-08-31T00:45:03.7614129Z           with mongodbatlas_project.test,
2025-08-31T00:45:03.7614710Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-31T00:45:03.7615243Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-31T00:45:03.7615525Z         
2025-08-31T00:45:03.7615968Z         error getting project (68b398117e07f9709daf0fa0): error getting project's
2025-08-31T00:45:03.7616421Z         limits (68b398117e07f9709daf0fa0):
2025-08-31T00:45:03.7616983Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b398117e07f9709daf0fa0/limits
2025-08-31T00:45:03.7617781Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T00:45:03.7618352Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T00:45:03.7618734Z         BadRequestDetail: 
2025-08-31T00:45:03.7631062Z   
2025-08-31T00:45:03.7639146Z --- FAIL: TestAccProject_withUpdatedRole (40.24s)
```

- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:34:53+00:00
```
2025-09-01T00:34:53.2455287Z === RUN   TestAccProject_withUpdatedRole
2025-09-01T00:34:53.2461823Z === CONT  TestAccProject_withUpdatedRole
2025-09-01T00:34:53.2662156Z === NAME  TestAccProject_withUpdatedRole
2025-09-01T00:34:53.2662681Z     resource_project_test.go:738: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:34:53.2663213Z         
2025-09-01T00:34:53.2663701Z         Error: error creating project: test-acc-tf-p-2226637219501534223
2025-09-01T00:34:53.2664089Z         
2025-09-01T00:34:53.2664413Z           with mongodbatlas_project.test,
2025-09-01T00:34:53.2665095Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:34:53.2665755Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:34:53.2666081Z         
2025-09-01T00:34:53.2666647Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:34:53.2667395Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:34:53.2668131Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:34:53.2668993Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:34:53.2669525Z         BadRequestDetail: 
2025-09-01T00:34:53.2677949Z   
2025-09-01T00:34:53.2713511Z --- FAIL: TestAccProject_withUpdatedRole (1.95s)
```

  - PASS 13 seconds
  - PASS 14 seconds
  - PASS 13 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 9 seconds
- 2025-09-02 PASS 15 seconds
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 11 seconds