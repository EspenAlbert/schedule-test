# project/project/TestAccProject_slowOperationReadOnly Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-20 00:38](#error-2025-07-20t0038280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3993823af9166ef92937/limits | qa | flaky_500 | 38.10s
[2025-07-27 00:37](#error-2025-07-27t0037030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68857424ef1f7377717a9d90/limits | qa | flaky_500 | 38.08s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 17 seconds
  - PASS 12 seconds
  - PASS 13 seconds
  - PASS 10 seconds
- 2025-07-02 PASS 14 seconds
- 2025-07-03 PASS 11 seconds
- 2025-07-04 PASS 11 seconds
- 2025-07-05 PASS 10 seconds
- 2025-07-06 PASS 11 seconds
- 2025-07-07 PASS 11 seconds
- 2025-07-08 PASS 10 seconds
- 2025-07-09 PASS 11 seconds
- 2025-07-10
  - PASS 17 seconds
  - PASS 16 seconds
- 2025-07-11 PASS 17 seconds
- 2025-07-12 PASS 18 seconds
- 2025-07-13 PASS 25 seconds
- 2025-07-14 PASS 17 seconds
- 2025-07-15 PASS 12 seconds
- 2025-07-16 PASS 15 seconds
- 2025-07-17 PASS 19 seconds
- 2025-07-18 PASS 17 seconds
- 2025-07-19 PASS 13 seconds
- 2025-07-20

### Error 2025-07-20T00:38:28+00:00
```
2025-07-20T00:38:28.9963934Z === RUN   TestAccProject_slowOperationReadOnly
2025-07-20T00:38:28.9965926Z === CONT  TestAccProject_slowOperationReadOnly
2025-07-20T00:38:29.0056264Z === NAME  TestAccProject_slowOperationReadOnly
2025-07-20T00:38:29.0056808Z     resource_project_test.go:1075: Step 4/4 error: Error running pre-apply plan: exit status 1
2025-07-20T00:38:29.0057211Z         
2025-07-20T00:38:29.0057576Z         Error: error when getting project properties after create
2025-07-20T00:38:29.0057895Z         
2025-07-20T00:38:29.0058181Z           with mongodbatlas_project.test,
2025-07-20T00:38:29.0058866Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-20T00:38:29.0059415Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-20T00:38:29.0059696Z         
2025-07-20T00:38:29.0060218Z         error getting project (687c3993823af9166ef92937): error getting project's
2025-07-20T00:38:29.0060664Z         limits (687c3993823af9166ef92937):
2025-07-20T00:38:29.0061213Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3993823af9166ef92937/limits
2025-07-20T00:38:29.0061852Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:38:29.0062406Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:38:29.0062786Z         BadRequestDetail: 
2025-07-20T00:38:29.0063754Z --- FAIL: TestAccProject_slowOperationReadOnly (38.98s)
```

- 2025-07-21 PASS 17 seconds
- 2025-07-22 PASS 15 seconds
- 2025-07-23
  - PASS 12 seconds
  - PASS 9 seconds
  - PASS 51 seconds
- 2025-07-24 PASS 18 seconds
- 2025-07-25 PASS 18 seconds
- 2025-07-26 PASS 13 seconds
- 2025-07-27

### Error 2025-07-27T00:37:03+00:00
```
2025-07-27T00:37:03.6057491Z === RUN   TestAccProject_slowOperationReadOnly
2025-07-27T00:37:03.6059390Z === CONT  TestAccProject_slowOperationReadOnly
2025-07-27T00:37:03.6222598Z === NAME  TestAccProject_slowOperationReadOnly
2025-07-27T00:37:03.6223322Z     resource_project_test.go:1075: Step 3/4, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-07-27T00:37:03.6223967Z         
2025-07-27T00:37:03.6224350Z         Error: error when getting project properties after create
2025-07-27T00:37:03.6224678Z         
2025-07-27T00:37:03.6224970Z           with mongodbatlas_project.test,
2025-07-27T00:37:03.6225780Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2025-07-27T00:37:03.6226315Z           18: 		resource "mongodbatlas_project" "test" {
2025-07-27T00:37:03.6226601Z         
2025-07-27T00:37:03.6227033Z         error getting project (68857424ef1f7377717a9d90): error getting project's
2025-07-27T00:37:03.6227483Z         limits (68857424ef1f7377717a9d90):
2025-07-27T00:37:03.6228040Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68857424ef1f7377717a9d90/limits
2025-07-27T00:37:03.6228689Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:37:03.6229257Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:37:03.6229646Z         BadRequestDetail: 
2025-07-27T00:37:03.6240396Z === NAME  TestAccProject_slowOperationReadOnly
2025-07-27T00:37:03.6240970Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-27T00:37:03.6241397Z         
2025-07-27T00:37:03.6241682Z         Error: error when destroying resource
2025-07-27T00:37:03.6241951Z         
2025-07-27T00:37:03.6242281Z         error deleting project (68857424ef1f7377717a9d90):
2025-07-27T00:37:03.6242835Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68857424ef1f7377717a9d90
2025-07-27T00:37:03.6243441Z         DELETE: HTTP 401 Unauthorized (Error code: "USER_UNAUTHORIZED") Detail:
2025-07-27T00:37:03.6244063Z         Current user is not authorized to perform this action. Reason: Unauthorized.
2025-07-27T00:37:03.6244520Z         Params: [], BadRequestDetail: 
2025-07-27T00:37:03.6244859Z --- FAIL: TestAccProject_slowOperationReadOnly (38.84s)
```

- 2025-07-28 PASS 16 seconds
- 2025-07-29 PASS 16 seconds
- 2025-07-30 PASS 13 seconds