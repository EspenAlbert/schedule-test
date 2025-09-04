# config/atlasuser/TestAccConfigDSAtlasUsers_ByProjectID Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:31](#error-2025-08-24t0031330000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d284192cd1cc589b693/limits | qa | flaky_500 | 34.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 7 seconds
- 2025-08-07 PASS 53 seconds
- 2025-08-08 PASS 7 seconds
- 2025-08-09 PASS 9 seconds
- 2025-08-10 PASS 5 seconds
- 2025-08-11 PASS 8 seconds
- 2025-08-12 PASS 6 seconds
- 2025-08-13 PASS 6 seconds
- 2025-08-14 PASS 9 seconds
- 2025-08-15 PASS 5 seconds
- 2025-08-16 PASS 5 seconds
- 2025-08-17 PASS 6 seconds
- 2025-08-18 PASS 6 seconds
- 2025-08-19 PASS 8 seconds
- 2025-08-20
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-08-21 PASS 6 seconds
- 2025-08-22 PASS 7 seconds
- 2025-08-23 PASS 7 seconds
- 2025-08-24

### Error 2025-08-24T00:31:33+00:00
```
2025-08-24T00:31:33.8468788Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2025-08-24T00:31:33.8544919Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2025-08-24T00:31:33.8565823Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2025-08-24T00:31:33.8566371Z     data_source_atlas_users_test.go:48: Step 1/1 error: Error running apply: exit status 1
2025-08-24T00:31:33.8566772Z         
2025-08-24T00:31:33.8567140Z         Error: error when getting project properties after create
2025-08-24T00:31:33.8567463Z         
2025-08-24T00:31:33.8567751Z           with mongodbatlas_project.test,
2025-08-24T00:31:33.8568357Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:31:33.8569077Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:31:33.8569516Z         
2025-08-24T00:31:33.8570118Z         error getting project (68aa5d284192cd1cc589b693): error getting project's
2025-08-24T00:31:33.8570663Z         limits (68aa5d284192cd1cc589b693):
2025-08-24T00:31:33.8571396Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d284192cd1cc589b693/limits
2025-08-24T00:31:33.8572213Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:31:33.8572892Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:31:33.8573588Z         BadRequestDetail: 
2025-08-24T00:31:33.8573898Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (34.86s)
```

- 2025-08-25 PASS 8 seconds
- 2025-08-26 PASS 6 seconds
- 2025-08-27 PASS 7 seconds
- 2025-08-28 PASS 5 seconds
- 2025-08-29 PASS 7 seconds
- 2025-08-30 PASS 7 seconds
- 2025-08-31 PASS 8 seconds
- 2025-09-01
  - PASS 10 seconds
  - PASS 7 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 5 seconds
  - PASS 7 seconds
- 2025-09-02 PASS 6 seconds
- 2025-09-03 PASS 5 seconds
- 2025-09-04 PASS 8 seconds